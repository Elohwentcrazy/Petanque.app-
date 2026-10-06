import pypdf
import os
import re
import json
import difflib
import pymysql
import sys

DB_CONFIG = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "",
    "database": "petanque_db"
}

PDF_DIR = os.path.join(os.path.dirname(__file__), "Kluby")
SCRAPED_PATH = os.path.join(os.path.dirname(__file__), "clubs_scraped.json")

def check_and_alter_db(cursor):
    # 1. Create clubs table
    print("Tworzenie tabeli 'clubs' (jeśli nie istnieje)...")
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS clubs (
            id VARCHAR(100) PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            city VARCHAR(255),
            region VARCHAR(255) DEFAULT '',
            pp_id INT,
            founded INT DEFAULT 2000,
            address VARCHAR(255),
            contact_person VARCHAR(255),
            phone VARCHAR(50),
            email VARCHAR(255),
            website VARCHAR(255),
            points DOUBLE DEFAULT 0.0
        ) ENGINE=InnoDB;
    """)
    
    # 2. Check if club_id column exists in players table
    cursor.execute("SHOW COLUMNS FROM players LIKE 'club_id';")
    col_exists = cursor.fetchone()
    if not col_exists:
        print("Dodawanie kolumny 'club_id' do tabeli 'players'...")
        cursor.execute("ALTER TABLE players ADD COLUMN club_id VARCHAR(100);")

def parse_club_file(path):
    reader = pypdf.PdfReader(path)
    
    # Extract contact info from page 1
    p1_text = reader.pages[0].extract_text() or ""
    lines = [l.strip() for l in p1_text.split('\n') if l.strip()]
    
    # Raw name is on line index 2
    raw_name = lines[2]
    
    # Clean spacing around hyphens and soft hyphens
    cleaned_name = raw_name.replace('\xad', '-').replace('\u00ad', '-')
    cleaned_name = re.sub(r'\s*-\s*', '-', cleaned_name)
    cleaned_name = re.sub(r'\s+', ' ', cleaned_name).strip()
    
    # Parse points
    points = 0.0
    for line in lines:
        if line.startswith("Punkty:"):
            pts_str = line.replace("Punkty:", "").strip().replace(" ", "").replace("\xa0", "").replace(",", ".")
            try:
                points = float(pts_str)
            except ValueError:
                pass
            break
            
    contact_person = None
    phone = None
    email = None
    website = None
    address = None
    
    for idx, line in enumerate(lines):
        if line.startswith("Osoba kontaktowa:"):
            contact_person = line.replace("Osoba kontaktowa:", "").strip()
            if idx + 1 < len(lines):
                address = lines[idx + 1]
        elif line.startswith("Telefon:"):
            phone = line.replace("Telefon:", "").strip()
        elif line.startswith("Mail:"):
            email = line.replace("Mail:", "").strip()
        elif line.startswith("www:"):
            website = line.replace("www:", "").strip()
            
    if not address:
        # Fallback to line after abbreviation (index 4) if no Osoba kontaktowa
        address = lines[4] if len(lines) > 4 else ""
        
    # Compile list of player licenses across all pages
    licenses = []
    for page_idx, page in enumerate(reader.pages):
        page_text = page.extract_text() or ""
        page_lines = [l.strip() for l in page_text.split('\n') if l.strip()]
        
        # If it's page 1, search for "Lista zawodników" marker
        if page_idx == 0:
            players_start_idx = -1
            for idx, line in enumerate(page_lines):
                if "Lista zawodnik" in line:
                    players_start_idx = idx
                    break
            if players_start_idx != -1:
                target_lines = page_lines[players_start_idx + 1:]
            else:
                target_lines = []
        else:
            target_lines = page_lines
            
        for line in target_lines:
            match = re.search(r'\s+(\d+)\s+([MK])\s+(sen\.|wet\.|m\s*[ł\s]*\.|mł\.|jun\.|kad\.|młodz\.)', line)
            if match:
                license_no = match.group(1)
                licenses.append(license_no)
                
    return {
        "raw_name": cleaned_name,
        "points": points,
        "contact_person": contact_person,
        "address": address,
        "phone": phone,
        "email": email,
        "website": website,
        "player_licenses": licenses
    }

def main():
    if not os.path.exists(SCRAPED_PATH):
        print(f"Brak pliku: {SCRAPED_PATH}")
        sys.exit(1)
        
    with open(SCRAPED_PATH, "r", encoding="utf-8") as f:
        scraped_clubs = json.load(f)
        scraped_names = [c["name"] for c in scraped_clubs]
        
    conn = None
    try:
        conn = pymysql.connect(**DB_CONFIG)
        cursor = conn.cursor()
        
        # 1. Update database tables/schema
        check_alter_db = check_and_alter_db(cursor)
        
        # 2. Get list of files to parse
        files = [f for f in os.listdir(PDF_DIR) if f.startswith("PetanquePRO, klub - ") and f.endswith(".pdf")]
        print(f"Rozpoczynam import {len(files)} klubów...")
        
        conn.autocommit = False
        
        for idx, filename in enumerate(files):
            path = os.path.join(PDF_DIR, filename)
            club_data = parse_club_file(path)
            
            # Map name to scraped club list to find correct ID & City
            match = difflib.get_close_matches(club_data["raw_name"], scraped_names, n=1, cutoff=0.7)
            
            if match:
                matched_name = match[0]
                match_idx = scraped_names.index(matched_name)
                club_id = f"club-{match_idx + 1}"
                city = scraped_clubs[match_idx].get("city", "")
                pp_id = match_idx + 1
            else:
                # Fallback if no close match
                club_id = f"club-{idx + 50}"
                city = ""
                pp_id = idx + 50
                matched_name = club_data["raw_name"]
                print(f"Ostrzeżenie: Brak dokładnego dopasowania dla '{club_data['raw_name']}', nadaję id {club_id}")
                
            # Insert or update club
            cursor.execute("""
                INSERT INTO clubs (id, name, city, pp_id, address, contact_person, phone, email, website, points)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                ON DUPLICATE KEY UPDATE
                    city = VALUES(city),
                    pp_id = VALUES(pp_id),
                    address = VALUES(address),
                    contact_person = VALUES(contact_person),
                    phone = VALUES(phone),
                    email = VALUES(email),
                    website = VALUES(website),
                    points = VALUES(points);
            """, (
                club_id, matched_name, city, pp_id, club_data["address"],
                club_data["contact_person"], club_data["phone"], club_data["email"],
                club_data["website"], club_data["points"]
            ))
            
            # Update players to connect them to this club
            player_licenses = club_data["player_licenses"]
            if player_licenses:
                # Update players table for these license numbers
                format_strings = ','.join(['%s'] * len(player_licenses))
                cursor.execute(f"""
                    UPDATE players 
                    SET club_id = %s 
                    WHERE license_number IN ({format_strings});
                """, (club_id, *player_licenses))
                
        conn.commit()
        print("Import klubów i połączenie zawodników zrealizowane pomyślnie!")
        
    except Exception as e:
        if conn:
            conn.rollback()
        print(f"Błąd podczas importu klubów: {e}")
        sys.exit(1)
    finally:
        if conn:
            conn.close()

if __name__ == "__main__":
    main()
