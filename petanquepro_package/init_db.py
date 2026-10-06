import pymysql
import sys

DB_CONFIG = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": ""
}

DB_NAME = "petanque_db"

def init_database():
    conn = None
    try:
        # Connect to MySQL Server without specifying DB first (to create it)
        print("Łączenie z serwerem MySQL...")
        conn = pymysql.connect(**DB_CONFIG)
        cursor = conn.cursor()
        
        # 1. Create Database if not exists
        print(f"Tworzenie bazy danych '{DB_NAME}' (jeśli nie istnieje)...")
        cursor.execute(f"CREATE DATABASE IF NOT EXISTS {DB_NAME} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;")
        cursor.execute(f"USE {DB_NAME};")
        
        # 2. Create Players table
        print("Tworzenie tabeli 'players'...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS players (
                id INT AUTO_INCREMENT PRIMARY KEY,
                first_name VARCHAR(255) NOT NULL,
                last_name VARCHAR(255) NOT NULL,
                license_number VARCHAR(50) UNIQUE NOT NULL,
                gender VARCHAR(10),
                category VARCHAR(50),
                current_points DOUBLE NOT NULL DEFAULT 0.0,
                current_strength DOUBLE NOT NULL DEFAULT 0.0,
                current_rank INT,
                previous_rank INT,
                is_active BOOLEAN DEFAULT TRUE
            ) ENGINE=InnoDB;
        """)
        
        # 3. Create Tournaments table
        print("Tworzenie tabeli 'tournaments'...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS tournaments (
                id VARCHAR(100) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                date DATE NOT NULL,
                location VARCHAR(255) NOT NULL,
                organizer VARCHAR(255) NOT NULL,
                format VARCHAR(50) NOT NULL,
                system VARCHAR(50) NOT NULL,
                rounds INT NOT NULL,
                max_teams INT NOT NULL,
                status VARCHAR(50) NOT NULL DEFAULT 'Upcoming',
                is_open BOOLEAN DEFAULT FALSE,
                rank_multiplier DOUBLE DEFAULT 1.0,
                sila_str DOUBLE,
                teams LONGTEXT,      -- JSON-serialized array of registered teams
                matches LONGTEXT,    -- JSON-serialized array of Swiss matches
                byes LONGTEXT,       -- JSON-serialized array of byes
                standings LONGTEXT   -- JSON-serialized array of standings
            ) ENGINE=InnoDB;
        """)
        
        # 4. Create Tournament Results table
        print("Tworzenie tabeli 'tournament_results'...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS tournament_results (
                id VARCHAR(100) PRIMARY KEY,
                tournament_id VARCHAR(100) NOT NULL,
                player_id VARCHAR(100) NOT NULL,
                final_position INT NOT NULL,
                strength_points_earned DOUBLE NOT NULL,
                FOREIGN KEY (tournament_id) REFERENCES tournaments(id) ON DELETE CASCADE
            ) ENGINE=InnoDB;
        """)
        
        conn.commit()
        print("Baza danych MySQL została pomyślnie zainicjalizowana!")
        
    except pymysql.MySQLError as e:
        print(f"Błąd bazy danych MySQL: {e}")
        print("\nWSKAZÓWKA: Upewnij się, że Twój serwer MySQL jest uruchomiony na porcie 3306 i dane logowania są poprawne.")
        sys.exit(1)
    finally:
        if conn:
            conn.close()

if __name__ == "__main__":
    init_database()
