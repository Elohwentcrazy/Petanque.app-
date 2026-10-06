# Instrukcja Wdrożenia — PetanquePRO

Ten folder zawiera wszystkie niezbędne komponenty potrzebne do uruchomienia i wdrożenia aplikacji **PetanquePRO** na serwerze docelowym.

---

## 📂 Struktura katalogów

```text
petanquepro_package/
│
├── backend/
│   └── main.py                     # Serwer API FastAPI (zintegrowany z MySQL)
│
├── frontend/                       # Pliki statyczne strony (do umieszczenia na serwerze WWW)
│   ├── index.html                  # Główna strona aplikacji
│   ├── index.css                   # Style interfejsu (premium dark-mode)
│   ├── app.js                      # Główne kontrolery widoków i logiki PWA
│   ├── data.js                     # Warstwa danych (integracja API z fallbackiem offline)
│   ├── swiss.js                    # Algorytmy kojarzenia rund w systemie szwajcarskim
│   ├── auth.js                     # Logika uwierzytelniania i sesji sędziowskich
│   ├── sw.js                       # Service Worker dla wsparcia PWA (działanie offline)
│   ├── manifest.json               # Konfiguracja instalacji jako aplikacja mobilna/desktopowa
│   └── icons/                      # Grafiki i ikony aplikacji
│       ├── icon-192.png
│       └── icon-512.png
│
├── Zawodnicy wstep do bazy danych/ # Folder z plikami PDF zawierającymi rankingi startowe
│   ├── PetanquePRO, zawodnicy - PetanquePRO.pdf
│   └── ...
│
├── init_db.py                      # Skrypt inicjalizacji bazy MySQL (tworzenie tabel)
├── import_players_from_pdf.py      # Skrypt parsujący PDF-y i importujący dane do bazy MySQL
├── import_clubs.py                 # Skrypt parsujący PDF-y klubów, importujący je i łączący z zawodnikami
├── requirements.txt                # Lista zależności bibliotek Pythona dla serwera backendu
├── clubs_scraped.json              # Lista polskich klubów petanque do bazy
└── Kluby/                          # Pliki PDF z informacjami o klubach i ich członkach
```

---

## 🛠️ Kroki wdrożeniowe (Deployment Steps)

### Krok 1: Konfiguracja Bazy Danych MySQL
1. Upewnij się, że serwer MySQL jest włączony.
2. Otwórz pliki `init_db.py`, `import_players_from_pdf.py` oraz `backend/main.py`.
3. Na górze każdego z tych plików znajdziesz słownik konfiguracyjny połączenia bazy danych:
   ```python
   DB_CONFIG = {
       "host": "localhost",
       "port": 3306,
       "user": "root",
       "password": "",
       "database": "petanque_db"
   }
   ```
   Dostosuj powyższe dane (host, port, user, hasło) do konfiguracji na swoim serwerze docelowym.

### Krok 2: Instalacja pakietów Python
W nowym środowisku wirtualnym (lub systemowym) zainstaluj biblioteki wymagane do uruchomienia backendu:
```bash
pip install -r requirements.txt
```

### Krok 3: Inicjalizacja bazy i import danych
Uruchom po kolei skrypt tworzenia tabel oraz skrypt wczytania i naprawy nazwisk z plików PDF:
1. **Stworzenie tabel w MySQL**:
   ```bash
   python init_db.py
   ```
2. **Zaimportowanie zawodników**:
   ```bash
   python import_players_from_pdf.py
   ```
   *Skrypt automatycznie zinterpretuje skomplikowane i zniekształcone nazwy ze wszystkich 9 plików PDF (np. usunie niechciane spacji typu `Ś li ż` -> `Śliż`), wyliczy początkowy ranking zawodników na podstawie ich siły i zapisze wyniki w bazie danych MySQL.*

3. **Zaimportowanie klubów i powiązanie ich z zawodnikami**:
   ```bash
   python import_clubs.py
   ```
   *Ten skrypt odczyta plik podsumowujący kluby oraz wszystkie 48 szczegółowych plików PDF z członkami klubów, doda profile klubów z danymi adresowymi i kontaktowymi do bazy MySQL, a następnie powiąże każdego zawodnika z jego klubem w bazie za pomocą numerów licencji.*

### Krok 4: Uruchomienie Serwera API (Backend)
Uruchom serwer FastAPI za pomocą serwera produkcyjnego Uvicorn:
```bash
uvicorn backend.main:app --host 0.0.0.0 --port 8000
```
*Backend będzie nasłuchiwał na porcie 8000 i obsługiwał zapytania o rankingi, tworzenie turniejów oraz automatyczne przeliczanie punktacji po zakończeniu rozgrywek.*

### Krok 5: Publikacja Strony (Frontend)
Umieść całą zawartość folderu `frontend/` na swoim serwerze WWW (np. Nginx, Apache, IIS, GitHub Pages, Firebase Hosting lub dowolny hosting cPanel).
*Strona główna automatycznie odpytuje backend API na adresie `http://localhost:8000/api/players`. Jeśli wdrażasz backend na innym adresie IP lub domenie, zmień adres URL w pliku `frontend/data.js` wewnątrz funkcji `fetchPlayersFromAPI` oraz `fetchTournamentsFromAPI`.*

---

## ⚡ Cechy rozwiązania
- **Automatyczny podział Imię/Nazwisko**: Poprawnie obsługuje jednoczłonowe i dwuczłonowe nazwiska (np. `Kulikowicz Agata Marta`).
- **Inteligentne usuwanie błędów PDF**: Naprawia problemy z kodowaniem polskich znaków i nieoczekiwanymi spacjami.
- **Relacyjna baza MySQL**: Wyniki turniejów i punkty siły zawodników są bezpośrednio połączone relacyjnie, umożliwiając śledzenie, na których zawodach gracz zdobył punkty do rankingu.
