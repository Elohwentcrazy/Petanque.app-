import pypdf
import os
import re
import pymysql
import sys

DB_CONFIG = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "",
    "database": "petanque_db"
}

PDF_DIR = os.path.join(os.path.dirname(__file__), "Zawodnicy wstep do bazy danych")

def recover_name(raw_name_spaced):
    # Remove soft hyphens and clean special chars
    raw_name_spaced = raw_name_spaced.replace('\xad', '-').replace('\u00ad', '-')
    
    # Remove spacing around hyphens (e.g. " - " -> "-")
    raw_name_spaced = re.sub(r'\s*-\s*', '-', raw_name_spaced)
    
    # Remove all spaces to get compressed string
    compressed = re.sub(r'\s+', '', raw_name_spaced)
    
    # Split before every uppercase letter (including Polish letters)
    parts = re.split(r'(?=[A-ZŚŹĆŻÓŁĘĄŃ])', compressed)
    parts = [p for p in parts if p]
    
    # Join parts that have a hyphen at the end of the previous part
    joined_parts = []
    i = 0
    while i < len(parts):
        part = parts[i]
        while part.endswith('-') and i + 1 < len(parts):
            i += 1
            part += parts[i]
        joined_parts.append(part)
        i += 1
        
    return " ".join(joined_parts)

def parse_pdfs():
    players_data = []
    
    for i in range(1, 10):
        suffix = f"_{i}" if i > 1 else ""
        filename = f"PetanquePRO, zawodnicy - PetanquePRO{suffix}.pdf"
        path = os.path.join(PDF_DIR, filename)
        
        if not os.path.exists(path):
            print(f"Brak pliku PDF: {filename}, pomijam.")
            continue
            
        print(f"Przetwarzanie pliku: {filename}...")
        reader = pypdf.PdfReader(path)
        
        for page_idx, page in enumerate(reader.pages):
            text = page.extract_text() or ""
            lines = text.split('\n')
            for line in lines:
                line = line.strip()
                
                # Split line by whitespace to scan tokens
                tokens = line.split()
                gender_idx = -1
                for idx, t in enumerate(tokens):
                    # Check if token is M/K and previous token is digit (representing license)
                    if t in ('M', 'K') and idx > 0 and tokens[idx-1].isdigit():
                        gender_idx = idx
                        break
                        
                if gender_idx != -1:
                    license_no = tokens[gender_idx - 1]
                    gender = tokens[gender_idx]
                    
                    # Name tokens are everything before license_no
                    raw_name = " ".join(tokens[:gender_idx - 1])
                    
                    # Exclude header/footer
                    if "Lista zawodników" in raw_name or "Nazwisko" in raw_name or "http" in raw_name or "PetanquePRO" in raw_name:
                        continue
                        
                    # Remaining tokens after gender
                    rem = tokens[gender_idx + 1:]
                    if not rem:
                        continue
                        
                    # Last token is strength
                    strength_str = rem[-1]
                    try:
                        strength = float(strength_str.replace(',', '.'))
                    except ValueError:
                        strength = 0.0
                        
                    # Remaining for category and points
                    cat_points_tokens = rem[:-1]
                    joined_rem = " ".join(cat_points_tokens).strip()
                    
                    category = "Senior" # default
                    points_str = ""
                    
                    # Match category (handling ligature encoding issues like 'm  .')
                    cat_match = re.match(r'^(sen\.|wet\.|m\s*[ł\s]*\.|mł\.|jun\.|kad\.|młodz\.)\s*(.*)', joined_rem, re.IGNORECASE)
                    if cat_match:
                        cat_raw = cat_match.group(1).lower().replace(" ", "").replace("\xa0", "")
                        points_str = cat_match.group(2).strip()
                        
                        if 'sen' in cat_raw:
                            category = "Senior"
                        elif 'wet' in cat_raw:
                            category = "Veteran"
                        elif 'jun' in cat_raw:
                            category = "Junior"
                        elif 'kad' in cat_raw:
                            category = "Kadet"
                        elif 'młodz' in cat_raw:
                            category = "Młodzik"
                        elif 'm' in cat_raw:
                            category = "Młodzieżowiec"
                    else:
                        points_str = joined_rem
                        
                    try:
                        points = float(points_str.replace('\xa0', '').replace(' ', '').replace(',', '.'))
                    except ValueError:
                        points = 0.0
                        
                    recovered_name = recover_name(raw_name)
                    name_parts = recovered_name.split(' ', 1)
                    last_name = name_parts[0] if len(name_parts) > 0 else ""
                    first_name = name_parts[1] if len(name_parts) > 1 else ""
                    
                    players_data.append({
                        "first_name": first_name,
                        "last_name": last_name,
                        "license_number": license_no,
                        "gender": gender,
                        "category": category,
                        "points": points,
                        "strength": strength
                    })
                    
    return players_data

def import_to_mysql(players):
    if not players:
        print("Brak danych zawodników do importu.")
        return
        
    conn = None
    try:
        conn = pymysql.connect(**DB_CONFIG)
        cursor = conn.cursor()
        
        # Disable autocommit to batch insert
        conn.autocommit = False
        
        upsert_query = """
            INSERT INTO players (first_name, last_name, license_number, gender, category, current_points, current_strength, is_active)
            VALUES (%s, %s, %s, %s, %s, %s, %s, TRUE)
            ON DUPLICATE KEY UPDATE
                first_name = VALUES(first_name),
                last_name = VALUES(last_name),
                gender = VALUES(gender),
                category = VALUES(category),
                current_points = VALUES(current_points),
                current_strength = VALUES(current_strength);
        """
        
        print(f"Importowanie/Aktualizowanie {len(players)} zawodników w MySQL...")
        for p in players:
            cursor.execute(upsert_query, (
                p['first_name'],
                p['last_name'],
                p['license_number'],
                p['gender'],
                p['category'],
                p['points'],
                p['strength']
            ))
            
        print("Obliczanie pozycji w rankingu...")
        # Fetch all active players sorted by strength to compute ranking
        cursor.execute("SELECT license_number, current_rank, current_strength FROM players WHERE is_active = TRUE ORDER BY current_strength DESC;")
        ranked_rows = cursor.fetchall()
        
        for idx, row in enumerate(ranked_rows):
            lic = row[0]
            curr_rank = row[1]
            new_rank = idx + 1
            
            # Update rank: copy current_rank to previous_rank, and set new_rank as current_rank
            cursor.execute("""
                UPDATE players 
                SET previous_rank = %s, current_rank = %s 
                WHERE license_number = %s;
            """, (curr_rank, new_rank, lic))
            
        conn.commit()
        print("Import i przeliczenie rankingu zakończone sukcesem!")
        
    except pymysql.MySQLError as e:
        if conn:
            conn.rollback()
        print(f"Błąd bazy danych podczas importu: {e}")
        sys.exit(1)
    finally:
        if conn:
            conn.close()

if __name__ == "__main__":
    players = parse_pdfs()
    print(f"Pomyślnie sparsowano {len(players)} zawodników z plików PDF.")
    import_to_mysql(players)
