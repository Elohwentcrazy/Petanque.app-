from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Any
import pymysql
import json
import uuid
import time

app = FastAPI(title="PetanquePRO API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_CONFIG = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "",
    "database": "petanque_db"
}

def get_db_connection():
    return pymysql.connect(
        host=DB_CONFIG["host"],
        port=DB_CONFIG["port"],
        user=DB_CONFIG["user"],
        password=DB_CONFIG["password"],
        database=DB_CONFIG["database"],
        cursorclass=pymysql.cursors.DictCursor
    )

class TournamentSchema(BaseModel):
    id: str
    name: str
    date: str
    location: str
    organizer: str
    format: str
    system: str
    rounds: int
    maxTeams: int
    status: str
    is_open: Optional[bool] = False
    rank_multiplier: Optional[float] = 1.0
    silaStr: Optional[float] = 0.0
    teams: Optional[List[Any]] = []
    matches: Optional[List[Any]] = []
    byes: Optional[List[Any]] = []
    standings: Optional[List[Any]] = []

@app.get("/api/players")
def get_players():
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("""
            SELECT 
                first_name, 
                last_name, 
                license_number, 
                current_points,
                current_strength, 
                current_rank, 
                previous_rank,
                is_active,
                gender,
                category,
                club_id
            FROM players
            ORDER BY current_rank ASC;
        """)
        rows = cursor.fetchall()
        
        players = []
        for r in rows:
            players.append({
                "id": f"pp-{r['license_number']}",
                "firstName": r["first_name"],
                "lastName": r["last_name"],
                "license": r["license_number"],
                "clubId": r["club_id"],
                "gender": r["gender"],
                "category": r["category"],
                "points": r["current_points"],
                "strength": r["current_strength"],
                "currentRank": r["current_rank"],
                "previousRank": r["previous_rank"],
                "isActive": r["is_active"]
            })
        return players
    except Exception as e:
        print(f"Błąd bazy danych (players): {e}")
        raise HTTPException(status_code=500, detail=f"Błąd bazy danych: {e}")
    finally:
        if conn:
            conn.close()

@app.get("/api/tournaments")
def get_tournaments():
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT id, name, date, location, organizer, format, system, rounds, max_teams, status, is_open, rank_multiplier, sila_str, teams, matches, byes, standings FROM tournaments;")
        rows = cursor.fetchall()
        
        tournaments = []
        for r in rows:
            tournaments.append({
                "id": r["id"],
                "name": r["name"],
                "date": str(r["date"]),
                "location": r["location"],
                "organizer": r["organizer"],
                "format": r["format"],
                "system": r["system"],
                "rounds": r["rounds"],
                "maxTeams": r["max_teams"],
                "status": r["status"],
                "isOpen": bool(r["is_open"]),
                "rank_multiplier": r["rank_multiplier"],
                "silaStr": r["sila_str"],
                "teams": json.loads(r["teams"]) if r["teams"] else [],
                "matches": json.loads(r["matches"]) if r["matches"] else [],
                "byes": json.loads(r["byes"]) if r["byes"] else [],
                "standings": json.loads(r["standings"]) if r["standings"] else []
            })
        return tournaments
    except Exception as e:
        print(f"Błąd bazy danych (get tournaments): {e}")
        raise HTTPException(status_code=500, detail=f"Błąd bazy danych: {e}")
    finally:
        if conn:
            conn.close()

@app.get("/api/tournaments/{id}")
def get_tournament(id: str):
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT id, name, date, location, organizer, format, system, rounds, max_teams, status, is_open, rank_multiplier, sila_str, teams, matches, byes, standings FROM tournaments WHERE id = %s;", (id,))
        r = cursor.fetchone()
        if not r:
            raise HTTPException(status_code=404, detail="Nie znaleziono turnieju")
            
        return {
            "id": r["id"],
            "name": r["name"],
            "date": str(r["date"]),
            "location": r["location"],
            "organizer": r["organizer"],
            "format": r["format"],
            "system": r["system"],
            "rounds": r["rounds"],
            "maxTeams": r["max_teams"],
            "status": r["status"],
            "isOpen": bool(r["is_open"]),
            "rank_multiplier": r["rank_multiplier"],
            "silaStr": r["sila_str"],
            "teams": json.loads(r["teams"]) if r["teams"] else [],
            "matches": json.loads(r["matches"]) if r["matches"] else [],
            "byes": json.loads(r["byes"]) if r["byes"] else [],
            "standings": json.loads(r["standings"]) if r["standings"] else []
        }
    except HTTPException:
        raise
    except Exception as e:
        print(f"Błąd bazy danych (get tournament): {e}")
        raise HTTPException(status_code=500, detail=f"Błąd bazy danych: {e}")
    finally:
        if conn:
            conn.close()

@app.post("/api/tournaments")
def create_tournament(t: TournamentSchema):
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO tournaments (id, name, date, location, organizer, format, system, rounds, max_teams, status, is_open, rank_multiplier, sila_str, teams, matches, byes, standings)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (
            t.id, t.name, t.date, t.location, t.organizer, t.format, t.system, t.rounds, t.maxTeams, t.status,
            t.is_open, t.rank_multiplier, t.silaStr, json.dumps(t.teams), json.dumps(t.matches), json.dumps(t.byes), json.dumps(t.standings)
        ))
        conn.commit()
        return {"status": "success", "tournament": t}
    except Exception as e:
        print(f"Błąd bazy danych (create tournament): {e}")
        raise HTTPException(status_code=500, detail=f"Błąd bazy danych: {e}")
    finally:
        if conn:
            conn.close()

@app.put("/api/tournaments/{id}")
def update_tournament(id: str, t: TournamentSchema):
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("""
            UPDATE tournaments
            SET name = %s, date = %s, location = %s, organizer = %s, format = %s, system = %s, rounds = %s, max_teams = %s, status = %s, is_open = %s, rank_multiplier = %s, sila_str = %s, teams = %s, matches = %s, byes = %s, standings = %s
            WHERE id = %s
        """, (
            t.name, t.date, t.location, t.organizer, t.format, t.system, t.rounds, t.maxTeams, t.status,
            t.is_open, t.rank_multiplier, t.silaStr, json.dumps(t.teams), json.dumps(t.matches), json.dumps(t.byes), json.dumps(t.standings),
            id
        ))
        conn.commit()
        return {"status": "success"}
    except Exception as e:
        print(f"Błąd bazy danych (update tournament): {e}")
        raise HTTPException(status_code=500, detail=f"Błąd bazy danych: {e}")
    finally:
        if conn:
            conn.close()

@app.post("/api/tournaments/{id}/finish")
def finish_tournament(id: str, t: TournamentSchema):
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        # 1. Check if tournament exists and is not finished
        cursor.execute("SELECT status FROM tournaments WHERE id = %s;", (id,))
        row = cursor.fetchone()
        if not row:
            raise HTTPException(status_code=404, detail="Nie znaleziono turnieju")
        if row["status"] == "FINISHED":
            raise HTTPException(status_code=400, detail="Turniej został już zakończony")
            
        rank_multiplier = t.rank_multiplier if t.rank_multiplier is not None else 1.0
        num_teams = len(t.standings) if t.standings else 0
        
        # 2. Iterate through standings and award points/strength
        if t.standings and num_teams > 0:
            for idx, team_obj in enumerate(t.standings):
                final_position = idx + 1
                strength_points_earned = (num_teams - final_position + 1) * rank_multiplier * 10
                
                # Players in the team
                team_players = team_obj.get("players", [])
                for p_id in team_players:
                    # Strip 'pp-' prefix to get the license number
                    license_no = p_id.replace("pp-", "")
                    
                    # Generate result ID
                    res_id = f"res-{int(time.time()*1000)}-{str(uuid.uuid4())[:8]}"
                    
                    # Insert record into tournament_results
                    cursor.execute("""
                        INSERT INTO tournament_results (id, tournament_id, player_id, final_position, strength_points_earned)
                        VALUES (%s, %s, %s, %s, %s);
                    """, (res_id, id, p_id, final_position, strength_points_earned))
                    
                    # Update player's current strength and points
                    cursor.execute("""
                        UPDATE players
                        SET current_points = current_points + %s, current_strength = current_strength + %s
                        WHERE license_number = %s;
                    """, (strength_points_earned, strength_points_earned, license_no))
        
        # 3. Recalculate rankings (copy current_rank to previous_rank and set new_rank)
        cursor.execute("SELECT license_number, current_rank FROM players WHERE is_active = TRUE ORDER BY current_strength DESC;")
        players_to_rank = cursor.fetchall()
        for new_idx, p_row in enumerate(players_to_rank):
            cursor.execute("""
                UPDATE players
                SET previous_rank = %s, current_rank = %s
                WHERE license_number = %s;
            """, (p_row["current_rank"], new_idx + 1, p_row["license_number"]))
            
        # 4. Set tournament status to FINISHED and save updated arrays
        t.status = "FINISHED"
        cursor.execute("""
            UPDATE tournaments
            SET status = 'FINISHED', standings = %s, matches = %s, byes = %s, teams = %s
            WHERE id = %s
        """, (json.dumps(t.standings), json.dumps(t.matches), json.dumps(t.byes), json.dumps(t.teams), id))
        
        conn.commit()
        return {"status": "success"}
        
    except HTTPException:
        if conn:
            conn.rollback()
        raise
    except Exception as e:
        if conn:
            conn.rollback()
        print(f"Błąd bazy danych (finish tournament): {e}")
        raise HTTPException(status_code=500, detail=f"Błąd bazy danych: {e}")
    finally:
        if conn:
            conn.close()

@app.get("/api/clubs")
def get_clubs():
    conn = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM clubs ORDER BY points DESC;")
        rows = cursor.fetchall()
        
        clubs = []
        for r in rows:
            clubs.append({
                "id": r["id"],
                "name": r["name"],
                "city": r["city"],
                "region": r["region"] if r["region"] else "",
                "ppId": r["pp_id"],
                "founded": r["founded"],
                "address": r["address"],
                "contactPerson": r["contact_person"],
                "phone": r["phone"],
                "email": r["email"],
                "website": r["website"],
                "points": r["points"]
            })
        return clubs
    except Exception as e:
        print(f"Błąd bazy danych (clubs): {e}")
        raise HTTPException(status_code=500, detail=f"Błąd bazy danych: {e}")
    finally:
        if conn:
            conn.close()

@app.get("/api/health")
def health_check():
    return {"status": "ok"}
