// PFP Pétanque App - Real Data from PetanquePRO (rozgrywki.petanque.pl)
// Data scraped on 2026-07-02 from the official PFP PetanquePRO system
// Rankings as of 2026-06-30

const DEFAULT_CLUBS = [
  {
    "id": "club-1",
    "name": "Żorska Liga Petanque",
    "city": "Żory",
    "region": "",
    "ppId": 1
  },
  {
    "id": "club-2",
    "name": "Żywiecki Klub Boules",
    "city": "Żywiec",
    "region": "",
    "ppId": 2
  },
  {
    "id": "club-3",
    "name": "Śląski Klub Sportowy Petanque „Carbon”",
    "city": "Świętochłowice",
    "region": "",
    "ppId": 3
  },
  {
    "id": "club-4",
    "name": "Śremski Klub Pétanque",
    "city": "Śrem",
    "region": "",
    "ppId": 4
  },
  {
    "id": "club-5",
    "name": "Śremski Klub Przyjaciół Pétanque „Buler”",
    "city": "Śrem",
    "region": "",
    "ppId": 5
  },
  {
    "id": "club-6",
    "name": "Białostocki Klub Petanque",
    "city": "Białystok",
    "region": "",
    "ppId": 6
  },
  {
    "id": "club-7",
    "name": "Bydgoski Klub Petanque",
    "city": "Bydgoszcz",
    "region": "",
    "ppId": 7
  },
  {
    "id": "club-8",
    "name": "Chojnickie Towarzystwo Polsko-Francuskie",
    "city": "Chojnice",
    "region": "",
    "ppId": 8
  },
  {
    "id": "club-9",
    "name": "Dębickie Bractwo Kulkowe",
    "city": "Dębica",
    "region": "",
    "ppId": 9
  },
  {
    "id": "club-10",
    "name": "Dragon Sports",
    "city": "Tarnów",
    "region": "",
    "ppId": 10
  },
  {
    "id": "club-11",
    "name": "Gdańskie Stowarzyszenie Pétanque „Gdańskie Boule”",
    "city": "Gdańsk",
    "region": "",
    "ppId": 11
  },
  {
    "id": "club-12",
    "name": "Jeleniogórski Klub Pétanque",
    "city": "Jelenia Góra",
    "region": "",
    "ppId": 12
  },
  {
    "id": "club-13",
    "name": "Kieleckie Stowarzyszenie Sportów Precyzyjnych",
    "city": "Kielce",
    "region": "",
    "ppId": 13
  },
  {
    "id": "club-14",
    "name": "Klub Graczy Bulowych Łódź",
    "city": "Łódź",
    "region": "",
    "ppId": 14
  },
  {
    "id": "club-15",
    "name": "Klub Pétanque „Leszczynko”",
    "city": "Leszno",
    "region": "",
    "ppId": 15
  },
  {
    "id": "club-16",
    "name": "Klub Petanki „Ciechan\" Ciechanów",
    "city": "Ciechanów",
    "region": "",
    "ppId": 16
  },
  {
    "id": "club-17",
    "name": "Klub Petanque Lajkonik Kraków",
    "city": "Kraków",
    "region": "",
    "ppId": 17
  },
  {
    "id": "club-18",
    "name": "Klub Petanque Wieprz Lubartów",
    "city": "Lubartów",
    "region": "",
    "ppId": 18
  },
  {
    "id": "club-19",
    "name": "Klub Sportów i Turystyki „Flota Wiślana\"",
    "city": "Warszawa",
    "region": "",
    "ppId": 19
  },
  {
    "id": "club-20",
    "name": "Klub Sportowy „Petanka” Wrocław",
    "city": "Wrocław",
    "region": "",
    "ppId": 20
  },
  {
    "id": "club-21",
    "name": "Klub Sportowy „Petanque Słowianka”",
    "city": "Gorzów Wielkopolski",
    "region": "",
    "ppId": 21
  },
  {
    "id": "club-22",
    "name": "Klub Sportowy BORBUL - Borne Sulinowo",
    "city": "Borne Sulinowo",
    "region": "",
    "ppId": 22
  },
  {
    "id": "club-23",
    "name": "Klub Sportowy Pétanque „Broen-Karo”",
    "city": "Dzierżoniów",
    "region": "",
    "ppId": 23
  },
  {
    "id": "club-24",
    "name": "Klub Sportowy Pétanque „Jedlina”",
    "city": "Jedlina-Zdrój",
    "region": "",
    "ppId": 24
  },
  {
    "id": "club-25",
    "name": "Klub Sportowy Petanque Kaliska",
    "city": "Kaliska",
    "region": "",
    "ppId": 25
  },
  {
    "id": "club-26",
    "name": "Klub Sportowy Petanque Oława",
    "city": "Oława",
    "region": "",
    "ppId": 26
  },
  {
    "id": "club-27",
    "name": "Klub Sportowy Petanque Szczecin",
    "city": "Szczecin",
    "region": "",
    "ppId": 27
  },
  {
    "id": "club-28",
    "name": "Klub Sportowy Petanque Zakrzewo",
    "city": "Zakrzewo",
    "region": "",
    "ppId": 28
  },
  {
    "id": "club-29",
    "name": "Klub Sportowy Puenta Góra",
    "city": "Góra",
    "region": "",
    "ppId": 29
  },
  {
    "id": "club-30",
    "name": "Klub Sportowy PUENTA SZCZECIN",
    "city": "Szczecin",
    "region": "",
    "ppId": 30
  },
  {
    "id": "club-31",
    "name": "Klub Sportowy Red Boule Petanque Brzeg",
    "city": "Brzeg",
    "region": "",
    "ppId": 31
  },
  {
    "id": "club-32",
    "name": "Klub Sportowy Unia Bieruń Stary",
    "city": "Bieruń Stary",
    "region": "",
    "ppId": 32
  },
  {
    "id": "club-33",
    "name": "Krakowski Klub Petanque \"Bule Armatnie\"",
    "city": "Kraków",
    "region": "",
    "ppId": 33
  },
  {
    "id": "club-34",
    "name": "Lądecki Klub Petanki",
    "city": "Lądek Zdrój",
    "region": "",
    "ppId": 34
  },
  {
    "id": "club-35",
    "name": "LKS Orzeł Łękawica",
    "city": "Łękawica",
    "region": "",
    "ppId": 35
  },
  {
    "id": "club-36",
    "name": "Lubońska Petanka",
    "city": "Luboń",
    "region": "",
    "ppId": 36
  },
  {
    "id": "club-37",
    "name": "Mieczewski Hufiec Miotający przy Stowarzyszeniu Grupa Inicjatywna Baranówko",
    "city": "Mosina",
    "region": "",
    "ppId": 37
  },
  {
    "id": "club-38",
    "name": "Myślenicki Klub Pétanque",
    "city": "Myślenice",
    "region": "",
    "ppId": 38
  },
  {
    "id": "club-39",
    "name": "Osiedlowy Klub Sportowy „Sokół” Wrocław",
    "city": "Wrocław",
    "region": "",
    "ppId": 39
  },
  {
    "id": "club-40",
    "name": "Sekcja Pétanque przy Stowarzyszeniu Domu Miasta Saint-Etienne w Katowicach",
    "city": "Katowice",
    "region": "",
    "ppId": 40
  },
  {
    "id": "club-41",
    "name": "Serce dla Sportu",
    "city": "Gdańsk",
    "region": "",
    "ppId": 41
  },
  {
    "id": "club-42",
    "name": "Sport Łódź",
    "city": "Łódź",
    "region": "",
    "ppId": 42
  },
  {
    "id": "club-43",
    "name": "Stowarzyszenie Kamionkowi Bulożercy",
    "city": "Kamionki",
    "region": "",
    "ppId": 43
  },
  {
    "id": "club-44",
    "name": "Stowarzyszenie Kultury Fizycznej „Sudety Pétanque Boguszów-Gorce”",
    "city": "Boguszów-Gorce",
    "region": "",
    "ppId": 44
  },
  {
    "id": "club-45",
    "name": "Stowarzyszenie Rekreacyjno-Sportowe Dęby Wałbrzych",
    "city": "Wałbrzych",
    "region": "",
    "ppId": 45
  },
  {
    "id": "club-46",
    "name": "Szczecinecki Klub Sportowy Petanque \"Synergy\"",
    "city": "Szczecinek",
    "region": "",
    "ppId": 46
  },
  {
    "id": "club-47",
    "name": "Towarzystwo Sportowe „Liskowiak”",
    "city": "Lisków",
    "region": "",
    "ppId": 47
  },
  {
    "id": "club-48",
    "name": "Uczniowski Klub Sportowy Petanque Subkowy",
    "city": "Subkowy",
    "region": "",
    "ppId": 48
  },
  {
    "id": "club-49",
    "name": "Uczniowski Parafialny Klub Sportowy „Bula” Kalonka Łódź",
    "city": "Kalonka",
    "region": "",
    "ppId": 49
  }
];

// Top 50 players from the official PFP ranking as of 2026-06-30
const DEFAULT_PLAYERS = [
    {
      "id": "pp-1268",
      "firstName": "Krystian",
      "lastName": "Tyrlik",
      "license": "1268",
      "clubId": "club-2",
      "gender": "M",
      "category": "Senior",
      "points": 16126.269,
      "strength": 126.982
    },
    {
      "id": "pp-78",
      "firstName": "Jędrzej",
      "lastName": "Śliż",
      "license": "78",
      "clubId": "club-2",
      "gender": "M",
      "category": "Senior",
      "points": 14341.272,
      "strength": 120.955
    },
    {
      "id": "pp-1512",
      "firstName": "Tomasz",
      "lastName": "Grzelak",
      "license": "1512",
      "clubId": "club-47",
      "gender": "M",
      "category": "Senior",
      "points": 13290.169,
      "strength": 112.214
    },
    {
      "id": "pp-484",
      "firstName": "Alicja",
      "lastName": "Święch",
      "license": "484",
      "clubId": null,
      "gender": "K",
      "category": "Senior",
      "points": 11704.534,
      "strength": 96.971
    },
    {
      "id": "pp-10001",
      "firstName": "Valen",
      "lastName": "Śliż",
      "license": "10001",
      "clubId": null,
      "gender": "K",
      "category": "Senior",
      "points": 11482.972,
      "strength": 91.641
    },
    {
      "id": "pp-1230",
      "firstName": "Rafał",
      "lastName": "Grzelczak",
      "license": "1230",
      "clubId": "club-39",
      "gender": "M",
      "category": "Senior",
      "points": 11284.959,
      "strength": 100.788
    },
    {
      "id": "pp-122",
      "firstName": "Tomasz",
      "lastName": "Lipczyński",
      "license": "122",
      "clubId": "club-39",
      "gender": "M",
      "category": "Senior",
      "points": 11014.804,
      "strength": 94.585
    },
    {
      "id": "pp-1456",
      "firstName": "Agata Marta",
      "lastName": "Kulikowicz",
      "license": "1456",
      "clubId": "club-11",
      "gender": "K",
      "category": "Senior",
      "points": 10921.319,
      "strength": 86.447
    },
    {
      "id": "pp-1187",
      "firstName": "Robert",
      "lastName": "Szczepański",
      "license": "1187",
      "clubId": "club-11",
      "gender": "M",
      "category": "Senior",
      "points": 10810.053,
      "strength": 98.826
    },
    {
      "id": "pp-1231",
      "firstName": "Kinga",
      "lastName": "Grzelczak",
      "license": "1231",
      "clubId": "club-39",
      "gender": "K",
      "category": "Senior",
      "points": 10514.452,
      "strength": 90.299
    },
    {
      "id": "pp-516",
      "firstName": "Mateusz",
      "lastName": "Wojna",
      "license": "516",
      "clubId": "club-39",
      "gender": "M",
      "category": "Senior",
      "points": 10416.884,
      "strength": 89.586
    },
    {
      "id": "pp-573",
      "firstName": "Grażyna",
      "lastName": "Wojciechowska",
      "license": "573",
      "clubId": "club-4",
      "gender": "K",
      "category": "Veteran",
      "points": 10209.914,
      "strength": 79.988
    },
    {
      "id": "pp-1628",
      "firstName": "Błażej",
      "lastName": "Twardowski",
      "license": "1628",
      "clubId": "club-2",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 9533.33,
      "strength": 84.868
    },
    {
      "id": "pp-1322",
      "firstName": "Dorota",
      "lastName": "Teufel",
      "license": "1322",
      "clubId": "club-38",
      "gender": "K",
      "category": "Senior",
      "points": 9391.057,
      "strength": 78.771
    },
    {
      "id": "pp-42",
      "firstName": "Wioletta",
      "lastName": "Śliż",
      "license": "42",
      "clubId": "club-2",
      "gender": "K",
      "category": "Veteran",
      "points": 9384.592,
      "strength": 73.662
    },
    {
      "id": "pp-1148",
      "firstName": "Sebastian",
      "lastName": "Domanus",
      "license": "1148",
      "clubId": "club-38",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 9365.267,
      "strength": 83.827
    },
    {
      "id": "pp-180",
      "firstName": "Marta",
      "lastName": "Wojtkowska",
      "license": "180",
      "clubId": "club-39",
      "gender": "K",
      "category": "Senior",
      "points": 9308.951,
      "strength": 70.64
    },
    {
      "id": "pp-1539",
      "firstName": "Franciszek Antoni",
      "lastName": "Giżycki",
      "license": "1539",
      "clubId": "club-38",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 9255.921,
      "strength": 82.646
    },
    {
      "id": "pp-292",
      "firstName": "Marcin",
      "lastName": "Rutkowski",
      "license": "292",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 9035.537,
      "strength": 81.943
    },
    {
      "id": "pp-1969",
      "firstName": "Maksymilian",
      "lastName": "Piętka",
      "license": "1969",
      "clubId": "club-38",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 8737.991,
      "strength": 79.629
    },
    {
      "id": "pp-1769",
      "firstName": "Dariusz",
      "lastName": "Przybylski",
      "license": "1769",
      "clubId": "club-26",
      "gender": "M",
      "category": "Senior",
      "points": 8500.628,
      "strength": 79.483
    },
    {
      "id": "pp-626",
      "firstName": "Przemysław",
      "lastName": "Broniek",
      "license": "626",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 8490.036,
      "strength": 85.398
    },
    {
      "id": "pp-1569",
      "firstName": "Kazimierz",
      "lastName": "Urbaniak",
      "license": "1569",
      "clubId": "club-24",
      "gender": "M",
      "category": "Veteran",
      "points": 8066.082,
      "strength": 78.781
    },
    {
      "id": "pp-665",
      "firstName": "Dawid",
      "lastName": "Matuszewski",
      "license": "665",
      "clubId": "club-44",
      "gender": "M",
      "category": "Senior",
      "points": 7849.627,
      "strength": 76.041
    },
    {
      "id": "pp-1842",
      "firstName": "Katarzyna",
      "lastName": "Mistrzak",
      "license": "1842",
      "clubId": "club-25",
      "gender": "K",
      "category": "Veteran",
      "points": 7811.012,
      "strength": 65.182
    },
    {
      "id": "pp-1184",
      "firstName": "Anna",
      "lastName": "Szubielska",
      "license": "1184",
      "clubId": "club-11",
      "gender": "K",
      "category": "Senior",
      "points": 7776.517,
      "strength": 58.596
    },
    {
      "id": "pp-91",
      "firstName": "Kamil",
      "lastName": "Ladaczek",
      "license": "91",
      "clubId": "club-39",
      "gender": "M",
      "category": "Senior",
      "points": 7480.576,
      "strength": 69.041
    },
    {
      "id": "pp-1116",
      "firstName": "Łukasz",
      "lastName": "Antczak",
      "license": "1116",
      "clubId": "club-2",
      "gender": "M",
      "category": "Senior",
      "points": 7466.109,
      "strength": 62.879
    },
    {
      "id": "pp-852",
      "firstName": "Dawid",
      "lastName": "Fabisiak",
      "license": "852",
      "clubId": "club-23",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 7447.124,
      "strength": 72.902
    },
    {
      "id": "pp-1888",
      "firstName": "Klaudia",
      "lastName": "Mizikowska",
      "license": "1888",
      "clubId": "club-3",
      "gender": "K",
      "category": "Senior",
      "points": 7409.554,
      "strength": 60.127
    },
    {
      "id": "pp-1844",
      "firstName": "Ewa",
      "lastName": "Boreczek",
      "license": "1844",
      "clubId": "club-30",
      "gender": "K",
      "category": "Veteran",
      "points": 7358.146,
      "strength": 65.388
    },
    {
      "id": "pp-472",
      "firstName": "Grzegorz",
      "lastName": "Kurowski",
      "license": "472",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 7286.522,
      "strength": 68.259
    },
    {
      "id": "pp-1821",
      "firstName": "Beata",
      "lastName": "Urbaniak",
      "license": "1821",
      "clubId": "club-24",
      "gender": "K",
      "category": "Veteran",
      "points": 7041.347,
      "strength": 73.887
    },
    {
      "id": "pp-1884",
      "firstName": "Piotr",
      "lastName": "Musiałowski",
      "license": "1884",
      "clubId": "club-39",
      "gender": "M",
      "category": "Senior",
      "points": 6998.023,
      "strength": 69.129
    },
    {
      "id": "pp-694",
      "firstName": "Marcin",
      "lastName": "Chmiel",
      "license": "694",
      "clubId": "club-9",
      "gender": "M",
      "category": "Senior",
      "points": 6909.166,
      "strength": 70.256
    },
    {
      "id": "pp-2027",
      "firstName": "Mariola",
      "lastName": "Łucka",
      "license": "2027",
      "clubId": "club-17",
      "gender": "K",
      "category": "Veteran",
      "points": 6810.237,
      "strength": 56.481
    },
    {
      "id": "pp-995",
      "firstName": "Maciej",
      "lastName": "Kiepsch",
      "license": "995",
      "clubId": "club-38",
      "gender": "M",
      "category": "Veteran",
      "points": 6625.02,
      "strength": 70.872
    },
    {
      "id": "pp-763",
      "firstName": "Łukasz",
      "lastName": "Święch",
      "license": "763",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 6597.675,
      "strength": 70.147
    },
    {
      "id": "pp-202",
      "firstName": "Hubert",
      "lastName": "Maciejewski",
      "license": "202",
      "clubId": "club-24",
      "gender": "M",
      "category": "Senior",
      "points": 6384.72,
      "strength": 68.027
    },
    {
      "id": "pp-951",
      "firstName": "Michał",
      "lastName": "Olejnik",
      "license": "951",
      "clubId": "club-9",
      "gender": "M",
      "category": "Senior",
      "points": 6311.72,
      "strength": 68.715
    },
    {
      "id": "pp-278",
      "firstName": "Katarzyna",
      "lastName": "Błasiak",
      "license": "278",
      "clubId": null,
      "gender": "K",
      "category": "Senior",
      "points": 6284.95,
      "strength": 45.8
    },
    {
      "id": "pp-1324",
      "firstName": "Emilia",
      "lastName": "Szulc",
      "license": "1324",
      "clubId": "club-3",
      "gender": "K",
      "category": "Senior",
      "points": 6251.204,
      "strength": 53.695
    },
    {
      "id": "pp-888",
      "firstName": "Leszek",
      "lastName": "Złotowski",
      "license": "888",
      "clubId": "club-24",
      "gender": "M",
      "category": "Veteran",
      "points": 6188.59,
      "strength": 66.038
    },
    {
      "id": "pp-599",
      "firstName": "Karol",
      "lastName": "Szulc",
      "license": "599",
      "clubId": "club-3",
      "gender": "M",
      "category": "Senior",
      "points": 6172.864,
      "strength": 61.11
    },
    {
      "id": "pp-117",
      "firstName": "Szymon",
      "lastName": "Kubiesa",
      "license": "117",
      "clubId": "club-2",
      "gender": "M",
      "category": "Senior",
      "points": 6140.028,
      "strength": 63.508
    },
    {
      "id": "pp-206",
      "firstName": "Mateusz",
      "lastName": "Markiewicz",
      "license": "206",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 6034.199,
      "strength": 55.822
    },
    {
      "id": "pp-2023",
      "firstName": "Karl N.",
      "lastName": "Tarachand",
      "license": "2023",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 5940.148,
      "strength": 62.406
    },
    {
      "id": "pp-1045",
      "firstName": "Michał",
      "lastName": "Wolak",
      "license": "1045",
      "clubId": "club-26",
      "gender": "M",
      "category": "Senior",
      "points": 5861.838,
      "strength": 58.518
    },
    {
      "id": "pp-2096",
      "firstName": "Małgorzata",
      "lastName": "Noras",
      "license": "2096",
      "clubId": "club-2",
      "gender": "K",
      "category": "Veteran",
      "points": 5840.445,
      "strength": 52.112
    },
    {
      "id": "pp-1879",
      "firstName": "Antoni",
      "lastName": "Kornacki",
      "license": "1879",
      "clubId": "club-38",
      "gender": "M",
      "category": "Junior",
      "points": 5830.024,
      "strength": 59.492
    },
    {
      "id": "pp-1690",
      "firstName": "Wiesława",
      "lastName": "Cieślawska",
      "license": "1690",
      "clubId": "club-15",
      "gender": "K",
      "category": "Veteran",
      "points": 5820.423,
      "strength": 51.567
    },
    {
      "id": "pp-2",
      "firstName": "Andrzej",
      "lastName": "Śliż",
      "license": "2",
      "clubId": "club-2",
      "gender": "M",
      "category": "Veteran",
      "points": 5771.232,
      "strength": 64.109
    },
    {
      "id": "pp-695",
      "firstName": "Daria",
      "lastName": "Chmiel",
      "license": "695",
      "clubId": "club-9",
      "gender": "K",
      "category": "Senior",
      "points": 5746.181,
      "strength": 58.454
    },
    {
      "id": "pp-725",
      "firstName": "Piotr",
      "lastName": "Sobolewski",
      "license": "725",
      "clubId": "club-4",
      "gender": "M",
      "category": "Veteran",
      "points": 5714.626,
      "strength": 59.913
    },
    {
      "id": "pp-963",
      "firstName": "Anna",
      "lastName": "Misiorna",
      "license": "963",
      "clubId": "club-4",
      "gender": "K",
      "category": "Veteran",
      "points": 5659.524,
      "strength": 47.336
    },
    {
      "id": "pp-1686",
      "firstName": "Karol",
      "lastName": "Maglewski",
      "license": "1686",
      "clubId": "club-43",
      "gender": "M",
      "category": "Senior",
      "points": 5532.68,
      "strength": 50.466
    },
    {
      "id": "pp-957",
      "firstName": "Mariusz",
      "lastName": "Kasperek",
      "license": "957",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 5503.048,
      "strength": 59.283
    },
    {
      "id": "pp-656",
      "firstName": "Marek",
      "lastName": "Rajs",
      "license": "656",
      "clubId": "club-3",
      "gender": "M",
      "category": "Senior",
      "points": 5456.571,
      "strength": 52.955
    },
    {
      "id": "pp-1813",
      "firstName": "Dariusz",
      "lastName": "Merchel",
      "license": "1813",
      "clubId": "club-24",
      "gender": "M",
      "category": "Senior",
      "points": 5447.941,
      "strength": 54.647
    },
    {
      "id": "pp-1371",
      "firstName": "Jerzy",
      "lastName": "Szwałek",
      "license": "1371",
      "clubId": "club-23",
      "gender": "M",
      "category": "Veteran",
      "points": 5390.379,
      "strength": 63.895
    },
    {
      "id": "pp-947",
      "firstName": "Karol",
      "lastName": "Drawc",
      "license": "947",
      "clubId": "club-11",
      "gender": "M",
      "category": "Senior",
      "points": 5373.54,
      "strength": 62.448
    },
    {
      "id": "pp-397",
      "firstName": "Marcin",
      "lastName": "Sternicki",
      "license": "397",
      "clubId": "club-35",
      "gender": "M",
      "category": "Senior",
      "points": 5293.112,
      "strength": 56.747
    },
    {
      "id": "pp-1684",
      "firstName": "Marek",
      "lastName": "Płocieniczak",
      "license": "1684",
      "clubId": "club-43",
      "gender": "M",
      "category": "Senior",
      "points": 5196.429,
      "strength": 53.572
    },
    {
      "id": "pp-2033",
      "firstName": "Urszula",
      "lastName": "Brzewska-Koniuszy",
      "license": "2033",
      "clubId": "club-24",
      "gender": "K",
      "category": "Veteran",
      "points": 5163.453,
      "strength": 50.601
    },
    {
      "id": "pp-1035",
      "firstName": "Jacek",
      "lastName": "Boinski",
      "license": "1035",
      "clubId": "club-4",
      "gender": "M",
      "category": "Veteran",
      "points": 5134.989,
      "strength": 52.976
    },
    {
      "id": "pp-1901",
      "firstName": "Zenon",
      "lastName": "Kopciowski",
      "license": "1901",
      "clubId": "club-25",
      "gender": "M",
      "category": "Veteran",
      "points": 5082.964,
      "strength": 60.81
    },
    {
      "id": "pp-2050",
      "firstName": "Przemysław",
      "lastName": "Banaszek",
      "license": "2050",
      "clubId": "club-26",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 5053.092,
      "strength": 59.447
    },
    {
      "id": "pp-2323",
      "firstName": "Małgorzata",
      "lastName": "Pląskowska",
      "license": "2323",
      "clubId": "club-29",
      "gender": "K",
      "category": "Senior",
      "points": 5041.229,
      "strength": 48.292
    },
    {
      "id": "pp-976",
      "firstName": "Georges",
      "lastName": "Burtin",
      "license": "976",
      "clubId": "club-26",
      "gender": "M",
      "category": "Veteran",
      "points": 4985.174,
      "strength": 52.927
    },
    {
      "id": "pp-1824",
      "firstName": "Małgorzata",
      "lastName": "Klugiewicz",
      "license": "1824",
      "clubId": "club-30",
      "gender": "K",
      "category": "Veteran",
      "points": 4896.945,
      "strength": 50.201
    },
    {
      "id": "pp-1676",
      "firstName": "Mariusz",
      "lastName": "Suska",
      "license": "1676",
      "clubId": "club-26",
      "gender": "M",
      "category": "Senior",
      "points": 4841.967,
      "strength": 52.583
    },
    {
      "id": "pp-678",
      "firstName": "Krystian",
      "lastName": "Maćkowiak",
      "license": "678",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 4839.654,
      "strength": 49.573
    },
    {
      "id": "pp-707",
      "firstName": "Maurycy",
      "lastName": "Klimaszewski",
      "license": "707",
      "clubId": "club-6",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 4738.157,
      "strength": 52.852
    },
    {
      "id": "pp-892",
      "firstName": "Łukasz",
      "lastName": "Pałczyński",
      "license": "892",
      "clubId": "club-25",
      "gender": "M",
      "category": "Senior",
      "points": 4721.525,
      "strength": 53.477
    },
    {
      "id": "pp-528",
      "firstName": "Arleta",
      "lastName": "Neumann",
      "license": "528",
      "clubId": "club-4",
      "gender": "K",
      "category": "Veteran",
      "points": 4672.282,
      "strength": 42.236
    },
    {
      "id": "pp-1873",
      "firstName": "Magdalena",
      "lastName": "Łozińska",
      "license": "1873",
      "clubId": "club-24",
      "gender": "K",
      "category": "Veteran",
      "points": 4668.419,
      "strength": 42.07
    },
    {
      "id": "pp-709",
      "firstName": "Łukasz",
      "lastName": "Onoszko",
      "license": "709",
      "clubId": "club-9",
      "gender": "M",
      "category": "Senior",
      "points": 4646.176,
      "strength": 60.347
    },
    {
      "id": "pp-650",
      "firstName": "Artur",
      "lastName": "Bobiński",
      "license": "650",
      "clubId": "club-16",
      "gender": "M",
      "category": "Veteran",
      "points": 4640.07,
      "strength": 51.184
    },
    {
      "id": "pp-2261",
      "firstName": "Julia",
      "lastName": "Rosa",
      "license": "2261",
      "clubId": "club-23",
      "gender": "K",
      "category": "Młodzieżowiec",
      "points": 4567.193,
      "strength": 46.356
    },
    {
      "id": "pp-1817",
      "firstName": "Mateusz",
      "lastName": "Gajdziński",
      "license": "1817",
      "clubId": "club-6",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 4536.809,
      "strength": 50.025
    },
    {
      "id": "pp-1923",
      "firstName": "Barbara",
      "lastName": "Świeczka",
      "license": "1923",
      "clubId": "club-32",
      "gender": "K",
      "category": "Veteran",
      "points": 4534.924,
      "strength": 43.489
    },
    {
      "id": "pp-514",
      "firstName": "Marek",
      "lastName": "Maćkowiak",
      "license": "514",
      "clubId": "club-4",
      "gender": "M",
      "category": "Veteran",
      "points": 4510.587,
      "strength": 48.1
    },
    {
      "id": "pp-2020",
      "firstName": "Jerzy",
      "lastName": "Różyk",
      "license": "2020",
      "clubId": "club-19",
      "gender": "M",
      "category": "Senior",
      "points": 4466.311,
      "strength": 48.731
    },
    {
      "id": "pp-1374",
      "firstName": "Piotr",
      "lastName": "Korus",
      "license": "1374",
      "clubId": "club-14",
      "gender": "M",
      "category": "Veteran",
      "points": 4457.938,
      "strength": 47.522
    },
    {
      "id": "pp-1509",
      "firstName": "Andrzej",
      "lastName": "Zielonka",
      "license": "1509",
      "clubId": "club-20",
      "gender": "M",
      "category": "Veteran",
      "points": 4398.408,
      "strength": 48.573
    },
    {
      "id": "pp-2022",
      "firstName": "Beata",
      "lastName": "Wątor",
      "license": "2022",
      "clubId": "club-17",
      "gender": "K",
      "category": "Veteran",
      "points": 4368.991,
      "strength": 43.396
    },
    {
      "id": "pp-1578",
      "firstName": "Maksymilian",
      "lastName": "Roskosz",
      "license": "1578",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 4355.122,
      "strength": 47.044
    },
    {
      "id": "pp-2037",
      "firstName": "Robert",
      "lastName": "Daniłowicz",
      "license": "2037",
      "clubId": "club-14",
      "gender": "M",
      "category": "Veteran",
      "points": 4320.131,
      "strength": 50.969
    },
    {
      "id": "pp-1267",
      "firstName": "Wojciech",
      "lastName": "Grzybowski",
      "license": "1267",
      "clubId": "club-2",
      "gender": "M",
      "category": "Senior",
      "points": 4164.155,
      "strength": 41.054
    },
    {
      "id": "pp-2289",
      "firstName": "Kajetan",
      "lastName": "Jagodziński",
      "license": "2289",
      "clubId": "club-49",
      "gender": "M",
      "category": "Junior",
      "points": 4160.343,
      "strength": 45.12
    },
    {
      "id": "pp-1766",
      "firstName": "Ewelina",
      "lastName": "Płocieniczak",
      "license": "1766",
      "clubId": "club-43",
      "gender": "K",
      "category": "Senior",
      "points": 4152.552,
      "strength": 42.493
    },
    {
      "id": "pp-1495",
      "firstName": "Wioleta",
      "lastName": "Lorenz-Kawczyńska",
      "license": "1495",
      "clubId": "club-44",
      "gender": "K",
      "category": "Senior",
      "points": 4144.214,
      "strength": 35.963
    },
    {
      "id": "pp-522",
      "firstName": "Piotr",
      "lastName": "Wojna",
      "license": "522",
      "clubId": "club-4",
      "gender": "M",
      "category": "Veteran",
      "points": 4123.57,
      "strength": 46.947
    },
    {
      "id": "pp-1680",
      "firstName": "Romana",
      "lastName": "Sulejewska",
      "license": "1680",
      "clubId": "club-43",
      "gender": "K",
      "category": "Veteran",
      "points": 4056.842,
      "strength": 38.199
    },
    {
      "id": "pp-1222",
      "firstName": "Tomasz",
      "lastName": "Korniłowicz",
      "license": "1222",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 4029.176,
      "strength": 40.029
    },
    {
      "id": "pp-1185",
      "firstName": "Marek",
      "lastName": "Drawc",
      "license": "1185",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 4025.042,
      "strength": 47.1
    },
    {
      "id": "pp-531",
      "firstName": "Paweł",
      "lastName": "Pieprzyk",
      "license": "531",
      "clubId": "club-39",
      "gender": "M",
      "category": "Senior",
      "points": 3978.279,
      "strength": 48.797
    },
    {
      "id": "pp-1291",
      "firstName": "Marek",
      "lastName": "Kurzynka",
      "license": "1291",
      "clubId": "club-16",
      "gender": "M",
      "category": "Veteran",
      "points": 3949.224,
      "strength": 42.491
    },
    {
      "id": "pp-2099",
      "firstName": "Marcin",
      "lastName": "Siewicki",
      "license": "2099",
      "clubId": "club-26",
      "gender": "M",
      "category": "Senior",
      "points": 3928.618,
      "strength": 41.333
    },
    {
      "id": "pp-86",
      "firstName": "Marek",
      "lastName": "Munikowski",
      "license": "86",
      "clubId": "club-44",
      "gender": "M",
      "category": "Senior",
      "points": 3906.782,
      "strength": 49.004
    },
    {
      "id": "pp-2025",
      "firstName": "Irena",
      "lastName": "Mosiejczuk",
      "license": "2025",
      "clubId": "club-17",
      "gender": "K",
      "category": "Veteran",
      "points": 3885.223,
      "strength": 36.744
    },
    {
      "id": "pp-1562",
      "firstName": "Sebastian",
      "lastName": "Banaszek",
      "license": "1562",
      "clubId": "club-26",
      "gender": "M",
      "category": "Senior",
      "points": 3855.263,
      "strength": 45.977
    },
    {
      "id": "pp-1284",
      "firstName": "Roman",
      "lastName": "Kempa",
      "license": "1284",
      "clubId": "club-48",
      "gender": "M",
      "category": "Senior",
      "points": 3721.475,
      "strength": 45.562
    },
    {
      "id": "pp-1414",
      "firstName": "Małgorzata",
      "lastName": "Wolak",
      "license": "1414",
      "clubId": "club-38",
      "gender": "K",
      "category": "Młodzieżowiec",
      "points": 3692.914,
      "strength": 40.613
    },
    {
      "id": "pp-312",
      "firstName": "Cezary",
      "lastName": "Zaniewski",
      "license": "312",
      "clubId": "club-47",
      "gender": "M",
      "category": "Veteran",
      "points": 3692.873,
      "strength": 41.107
    },
    {
      "id": "pp-964",
      "firstName": "Mirosław",
      "lastName": "Misiorny",
      "license": "964",
      "clubId": "club-4",
      "gender": "M",
      "category": "Veteran",
      "points": 3686.927,
      "strength": 43.522
    },
    {
      "id": "pp-1848",
      "firstName": "Adriana",
      "lastName": "Ostrowska",
      "license": "1848",
      "clubId": "club-27",
      "gender": "K",
      "category": "Senior",
      "points": 3679.248,
      "strength": 38.901
    },
    {
      "id": "pp-14",
      "firstName": "Bogusław",
      "lastName": "Biel",
      "license": "14",
      "clubId": "club-35",
      "gender": "M",
      "category": "Veteran",
      "points": 3674.673,
      "strength": 47.577
    },
    {
      "id": "pp-6",
      "firstName": "Jerzy",
      "lastName": "Siara",
      "license": "6",
      "clubId": "club-24",
      "gender": "M",
      "category": "Veteran",
      "points": 3652.406,
      "strength": 38.218
    },
    {
      "id": "pp-1655",
      "firstName": "Wiesław",
      "lastName": "Folęga",
      "license": "1655",
      "clubId": "club-35",
      "gender": "M",
      "category": "Veteran",
      "points": 3600.132,
      "strength": 46.793
    },
    {
      "id": "pp-575",
      "firstName": "Sergiusz",
      "lastName": "Gądek",
      "license": "575",
      "clubId": "club-24",
      "gender": "M",
      "category": "Senior",
      "points": 3583.503,
      "strength": 37.322
    },
    {
      "id": "pp-1853",
      "firstName": "Barbara",
      "lastName": "Folęga",
      "license": "1853",
      "clubId": "club-35",
      "gender": "K",
      "category": "Veteran",
      "points": 3534.573,
      "strength": 43.514
    },
    {
      "id": "pp-403",
      "firstName": "Rafał",
      "lastName": "Kaczmarek",
      "license": "403",
      "clubId": "club-47",
      "gender": "M",
      "category": "Senior",
      "points": 3520.862,
      "strength": 34.312
    },
    {
      "id": "pp-10002",
      "firstName": "Andrey",
      "lastName": "Voloshko",
      "license": "10002",
      "clubId": null,
      "gender": "M",
      "category": "Senior",
      "points": 3512.201,
      "strength": 35.441
    },
    {
      "id": "pp-268",
      "firstName": "Kamil",
      "lastName": "Orpel",
      "license": "268",
      "clubId": "club-24",
      "gender": "M",
      "category": "Senior",
      "points": 3502.057,
      "strength": 40.792
    },
    {
      "id": "pp-2259",
      "firstName": "Wojciech",
      "lastName": "Anderwald",
      "license": "2259",
      "clubId": "club-32",
      "gender": "M",
      "category": "Senior",
      "points": 3497.257,
      "strength": 43.059
    },
    {
      "id": "pp-731",
      "firstName": "Kazimierz",
      "lastName": "Jacak",
      "license": "731",
      "clubId": "club-45",
      "gender": "M",
      "category": "Veteran",
      "points": 3464.866,
      "strength": 42.997
    },
    {
      "id": "pp-2161",
      "firstName": "Adam",
      "lastName": "Wróblewski",
      "license": "2161",
      "clubId": "club-16",
      "gender": "M",
      "category": "Veteran",
      "points": 3451.729,
      "strength": 42.722
    },
    {
      "id": "pp-1105",
      "firstName": "Karolina",
      "lastName": "Fabiś",
      "license": "1105",
      "clubId": "club-36",
      "gender": "K",
      "category": "Senior",
      "points": 3435.32,
      "strength": 32.463
    },
    {
      "id": "pp-1503",
      "firstName": "Rafał",
      "lastName": "Jasiński",
      "license": "1503",
      "clubId": "club-26",
      "gender": "M",
      "category": "Senior",
      "points": 3414.987,
      "strength": 42.499
    },
    {
      "id": "pp-1681",
      "firstName": "Wojciech",
      "lastName": "Sulejewski",
      "license": "1681",
      "clubId": "club-43",
      "gender": "M",
      "category": "Veteran",
      "points": 3407.069,
      "strength": 35.842
    },
    {
      "id": "pp-945",
      "firstName": "Patrycja",
      "lastName": "Sternicka",
      "license": "945",
      "clubId": "club-35",
      "gender": "K",
      "category": "Senior",
      "points": 3381.252,
      "strength": 43.459
    },
    {
      "id": "pp-2264",
      "firstName": "Michał",
      "lastName": "Boberek",
      "license": "2264",
      "clubId": "club-32",
      "gender": "M",
      "category": "Senior",
      "points": 3363.96,
      "strength": 41.852
    },
    {
      "id": "pp-1489",
      "firstName": "Dawid",
      "lastName": "Balinka",
      "license": "1489",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 3348.939,
      "strength": 34.321
    },
    {
      "id": "pp-423",
      "firstName": "Marek",
      "lastName": "Broniecki",
      "license": "423",
      "clubId": "club-47",
      "gender": "M",
      "category": "Veteran",
      "points": 3344.188,
      "strength": 31.937
    },
    {
      "id": "pp-1515",
      "firstName": "Adam",
      "lastName": "Mąkowski",
      "license": "1515",
      "clubId": "club-47",
      "gender": "M",
      "category": "Senior",
      "points": 3334.808,
      "strength": 41.298
    },
    {
      "id": "pp-1885",
      "firstName": "Szymon",
      "lastName": "Kasperek",
      "license": "1885",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 3306.39,
      "strength": 40.917
    },
    {
      "id": "pp-96",
      "firstName": "Ryszard",
      "lastName": "Kowalski",
      "license": "96",
      "clubId": "club-23",
      "gender": "M",
      "category": "Veteran",
      "points": 3300.621,
      "strength": 41.285
    },
    {
      "id": "pp-891",
      "firstName": "Dariusz",
      "lastName": "Misterski",
      "license": "891",
      "clubId": "club-25",
      "gender": "M",
      "category": "Senior",
      "points": 3282.751,
      "strength": 48.248
    },
    {
      "id": "pp-2073",
      "firstName": "Grażyna",
      "lastName": "Gacał-Skołucka",
      "license": "2073",
      "clubId": "club-20",
      "gender": "K",
      "category": "Senior",
      "points": 3258.867,
      "strength": 37.369
    },
    {
      "id": "pp-348",
      "firstName": "Maciej",
      "lastName": "Żłobiński",
      "license": "348",
      "clubId": "club-40",
      "gender": "M",
      "category": "Veteran",
      "points": 3229.916,
      "strength": 43.749
    },
    {
      "id": "pp-1788",
      "firstName": "Robert",
      "lastName": "Kozioł",
      "license": "1788",
      "clubId": "club-26",
      "gender": "M",
      "category": "Senior",
      "points": 3186.524,
      "strength": 35.652
    },
    {
      "id": "pp-1592",
      "firstName": "Mirosław",
      "lastName": "Kaszubowski",
      "license": "1592",
      "clubId": "club-45",
      "gender": "M",
      "category": "Veteran",
      "points": 3129.185,
      "strength": 33.732
    },
    {
      "id": "pp-2121",
      "firstName": "Sławomir",
      "lastName": "Meksuła",
      "license": "2121",
      "clubId": "club-18",
      "gender": "M",
      "category": "Senior",
      "points": 3097.511,
      "strength": 45.963
    },
    {
      "id": "pp-2279",
      "firstName": "Michał",
      "lastName": "Sakra",
      "license": "2279",
      "clubId": "club-13",
      "gender": "M",
      "category": "Senior",
      "points": 3097.091,
      "strength": 42.412
    },
    {
      "id": "pp-1499",
      "firstName": "Ewa",
      "lastName": "Korus",
      "license": "1499",
      "clubId": "club-14",
      "gender": "K",
      "category": "Veteran",
      "points": 3082.805,
      "strength": 38.366
    },
    {
      "id": "pp-2215",
      "firstName": "Magdalena",
      "lastName": "Adamowicz-Gutwińska",
      "license": "2215",
      "clubId": "club-26",
      "gender": "K",
      "category": "Senior",
      "points": 3066.642,
      "strength": 30.202
    },
    {
      "id": "pp-1266",
      "firstName": "Jakub",
      "lastName": "Grzybowski",
      "license": "1266",
      "clubId": "club-2",
      "gender": "M",
      "category": "Senior",
      "points": 3061.708,
      "strength": 33.939
    },
    {
      "id": "pp-2113",
      "firstName": "Bożena",
      "lastName": "Wrzeszczyńska",
      "license": "2113",
      "clubId": "club-46",
      "gender": "K",
      "category": "Veteran",
      "points": 3050.589,
      "strength": 33.167
    },
    {
      "id": "pp-2200",
      "firstName": "Piotr",
      "lastName": "Przybylski",
      "license": "2200",
      "clubId": "club-26",
      "gender": "M",
      "category": "Senior",
      "points": 3048.279,
      "strength": 37.765
    },
    {
      "id": "pp-2388",
      "firstName": "Barbara",
      "lastName": "Gołuńska",
      "license": "2388",
      "clubId": "club-25",
      "gender": "K",
      "category": "Senior",
      "points": 3014.505,
      "strength": 47.711
    },
    {
      "id": "pp-2278",
      "firstName": "Aleksandra",
      "lastName": "Sakra",
      "license": "2278",
      "clubId": "club-13",
      "gender": "K",
      "category": "Senior",
      "points": 3006.085,
      "strength": 41.432
    },
    {
      "id": "pp-2295",
      "firstName": "Serhii",
      "lastName": "Rudchenko",
      "license": "2295",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 2993.46,
      "strength": 39.298
    },
    {
      "id": "pp-2100",
      "firstName": "Renata",
      "lastName": "Figiel",
      "license": "2100",
      "clubId": "club-32",
      "gender": "K",
      "category": "Veteran",
      "points": 2981.79,
      "strength": 31.516
    },
    {
      "id": "pp-2217",
      "firstName": "Alan",
      "lastName": "Gutwiński",
      "license": "2217",
      "clubId": "club-32",
      "gender": "M",
      "category": "Senior",
      "points": 2980.062,
      "strength": 35.872
    },
    {
      "id": "pp-850",
      "firstName": "Tadeusz",
      "lastName": "Tomczak",
      "license": "850",
      "clubId": "club-4",
      "gender": "M",
      "category": "Veteran",
      "points": 2979.076,
      "strength": 37.009
    },
    {
      "id": "pp-1960",
      "firstName": "Piotr",
      "lastName": "Adamczyk",
      "license": "1960",
      "clubId": "club-12",
      "gender": "M",
      "category": "Senior",
      "points": 2974.71,
      "strength": 43.458
    },
    {
      "id": "pp-2310",
      "firstName": "Danuta",
      "lastName": "Czewżyk",
      "license": "2310",
      "clubId": "club-39",
      "gender": "K",
      "category": "Veteran",
      "points": 2954.032,
      "strength": 27.436
    },
    {
      "id": "pp-2339",
      "firstName": "Wojciech",
      "lastName": "Ostanówka",
      "license": "2339",
      "clubId": "club-25",
      "gender": "M",
      "category": "Veteran",
      "points": 2941.336,
      "strength": 41.364
    },
    {
      "id": "pp-2062",
      "firstName": "Natalia",
      "lastName": "Wolińska",
      "license": "2062",
      "clubId": "club-36",
      "gender": "K",
      "category": "Senior",
      "points": 2939.245,
      "strength": 29.418
    },
    {
      "id": "pp-4",
      "firstName": "Jerzy",
      "lastName": "Krawczyk",
      "license": "4",
      "clubId": "club-23",
      "gender": "M",
      "category": "Veteran",
      "points": 2938.836,
      "strength": 45.802
    },
    {
      "id": "pp-2030",
      "firstName": "Jerzy",
      "lastName": "Grudzień",
      "license": "2030",
      "clubId": "club-17",
      "gender": "M",
      "category": "Veteran",
      "points": 2924.564,
      "strength": 36.112
    },
    {
      "id": "pp-2059",
      "firstName": "Roman",
      "lastName": "Matysek",
      "license": "2059",
      "clubId": "club-2",
      "gender": "M",
      "category": "Veteran",
      "points": 2881.367,
      "strength": 38.208
    },
    {
      "id": "pp-759",
      "firstName": "Maciej",
      "lastName": "Maćkowiak",
      "license": "759",
      "clubId": "club-4",
      "gender": "M",
      "category": "Veteran",
      "points": 2865.176,
      "strength": 34.32
    },
    {
      "id": "pp-412",
      "firstName": "Kamil",
      "lastName": "Bekalarek",
      "license": "412",
      "clubId": "club-47",
      "gender": "M",
      "category": "Senior",
      "points": 2864.079,
      "strength": 31.687
    },
    {
      "id": "pp-2324",
      "firstName": "Maciej",
      "lastName": "Pląskowski",
      "license": "2324",
      "clubId": "club-29",
      "gender": "M",
      "category": "Veteran",
      "points": 2846.696,
      "strength": 36.585
    },
    {
      "id": "pp-2129",
      "firstName": "Joanna",
      "lastName": "Starczewska",
      "license": "2129",
      "clubId": "club-17",
      "gender": "K",
      "category": "Senior",
      "points": 2846.106,
      "strength": 29.575
    },
    {
      "id": "pp-2299",
      "firstName": "Mirosław",
      "lastName": "Lindner",
      "license": "2299",
      "clubId": "club-1",
      "gender": "M",
      "category": "Veteran",
      "points": 2827.86,
      "strength": 40.217
    },
    {
      "id": "pp-1121",
      "firstName": "Elżbieta",
      "lastName": "Mazur-Pięciorek",
      "license": "1121",
      "clubId": "club-9",
      "gender": "K",
      "category": "Veteran",
      "points": 2826.404,
      "strength": 33.74
    },
    {
      "id": "pp-2093",
      "firstName": "Marek",
      "lastName": "Strachota",
      "license": "2093",
      "clubId": "club-16",
      "gender": "M",
      "category": "Senior",
      "points": 2808.965,
      "strength": 31.196
    },
    {
      "id": "pp-1636",
      "firstName": "Krzysztof",
      "lastName": "Adamek",
      "license": "1636",
      "clubId": "club-32",
      "gender": "M",
      "category": "Veteran",
      "points": 2790.283,
      "strength": 41.195
    },
    {
      "id": "pp-1223",
      "firstName": "Mateusz",
      "lastName": "Markiewicz",
      "license": "1223",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 2749.62,
      "strength": 24.439
    },
    {
      "id": "pp-2255",
      "firstName": "Mariusz",
      "lastName": "Nowak",
      "license": "2255",
      "clubId": "club-32",
      "gender": "M",
      "category": "Senior",
      "points": 2700.739,
      "strength": 39.854
    },
    {
      "id": "pp-2404",
      "firstName": "Anna",
      "lastName": "Lorenc",
      "license": "2404",
      "clubId": "club-15",
      "gender": "K",
      "category": "Senior",
      "points": 2698.778,
      "strength": 28.663
    },
    {
      "id": "pp-2024",
      "firstName": "Joshua",
      "lastName": "Tan",
      "license": "2024",
      "clubId": "club-13",
      "gender": "M",
      "category": "Senior",
      "points": 2693.829,
      "strength": 38.897
    },
    {
      "id": "pp-1523",
      "firstName": "Waldemar",
      "lastName": "Żmuda",
      "license": "1523",
      "clubId": "club-48",
      "gender": "M",
      "category": "Veteran",
      "points": 2666.541,
      "strength": 32.704
    },
    {
      "id": "pp-1937",
      "firstName": "Stanisław",
      "lastName": "Stachnik",
      "license": "1937",
      "clubId": "club-24",
      "gender": "M",
      "category": "Veteran",
      "points": 2624.021,
      "strength": 36.387
    },
    {
      "id": "pp-2053",
      "firstName": "Piotr",
      "lastName": "Tondera",
      "license": "2053",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 2623.438,
      "strength": 34.275
    },
    {
      "id": "pp-1845",
      "firstName": "Mariola Hanna",
      "lastName": "Tyksińska",
      "license": "1845",
      "clubId": "club-30",
      "gender": "K",
      "category": "Veteran",
      "points": 2608.622,
      "strength": 32.135
    },
    {
      "id": "pp-1048",
      "firstName": "Jacek",
      "lastName": "Wojteczko",
      "license": "1048",
      "clubId": "club-32",
      "gender": "M",
      "category": "Veteran",
      "points": 2585.281,
      "strength": 34.185
    },
    {
      "id": "pp-52",
      "firstName": "Grzegorz",
      "lastName": "Ladaczek",
      "license": "52",
      "clubId": "club-39",
      "gender": "M",
      "category": "Veteran",
      "points": 2579.758,
      "strength": 38.327
    },
    {
      "id": "pp-271",
      "firstName": "Edward",
      "lastName": "Serafin",
      "license": "271",
      "clubId": "club-24",
      "gender": "M",
      "category": "Veteran",
      "points": 2566.215,
      "strength": 34.789
    },
    {
      "id": "pp-46",
      "firstName": "Urszula",
      "lastName": "Parchanowicz",
      "license": "46",
      "clubId": "club-20",
      "gender": "K",
      "category": "Veteran",
      "points": 2553.842,
      "strength": 26.062
    },
    {
      "id": "pp-1522",
      "firstName": "Jędrzej",
      "lastName": "Wyczling",
      "license": "1522",
      "clubId": "club-48",
      "gender": "M",
      "category": "Veteran",
      "points": 2545.975,
      "strength": 37.018
    },
    {
      "id": "pp-2174",
      "firstName": "Agnieszka",
      "lastName": "Wróblewska",
      "license": "2174",
      "clubId": "club-16",
      "gender": "K",
      "category": "Senior",
      "points": 2540.371,
      "strength": 26.06
    },
    {
      "id": "pp-1362",
      "firstName": "Daniel",
      "lastName": "Daros",
      "license": "1362",
      "clubId": "club-23",
      "gender": "M",
      "category": "Veteran",
      "points": 2537.886,
      "strength": 38.739
    },
    {
      "id": "pp-1706",
      "firstName": "Zofia",
      "lastName": "Lis",
      "license": "1706",
      "clubId": "club-38",
      "gender": "K",
      "category": "Młodzieżowiec",
      "points": 2517.703,
      "strength": 19.254
    },
    {
      "id": "pp-2049",
      "firstName": "Dorota",
      "lastName": "Fornalik",
      "license": "2049",
      "clubId": "club-23",
      "gender": "K",
      "category": "Veteran",
      "points": 2513.46,
      "strength": 27.407
    },
    {
      "id": "pp-68",
      "firstName": "Bartosz",
      "lastName": "Cilindź",
      "license": "68",
      "clubId": "club-23",
      "gender": "M",
      "category": "Senior",
      "points": 2510.828,
      "strength": 37.871
    },
    {
      "id": "pp-460",
      "firstName": "Marian",
      "lastName": "Jarmondowicz",
      "license": "460",
      "clubId": "club-46",
      "gender": "M",
      "category": "Senior",
      "points": 2504.899,
      "strength": 33.069
    },
    {
      "id": "pp-547",
      "firstName": "Robert",
      "lastName": "Balcerek",
      "license": "547",
      "clubId": "club-12",
      "gender": "M",
      "category": "Veteran",
      "points": 2478.632,
      "strength": 37.653
    },
    {
      "id": "pp-318",
      "firstName": "Marek",
      "lastName": "Lach",
      "license": "318",
      "clubId": "club-2",
      "gender": "M",
      "category": "Senior",
      "points": 2470.78,
      "strength": 20.86
    },
    {
      "id": "pp-2057",
      "firstName": "Grzegorz",
      "lastName": "Mikłaszewicz",
      "license": "2057",
      "clubId": "club-32",
      "gender": "M",
      "category": "Veteran",
      "points": 2437.798,
      "strength": 34.864
    },
    {
      "id": "pp-706",
      "firstName": "Mariusz",
      "lastName": "Klimaszewski",
      "license": "706",
      "clubId": "club-6",
      "gender": "M",
      "category": "Veteran",
      "points": 2424.589,
      "strength": 37.922
    },
    {
      "id": "pp-2329",
      "firstName": "Bartosz",
      "lastName": "Napierała",
      "license": "2329",
      "clubId": "club-15",
      "gender": "M",
      "category": "Senior",
      "points": 2422.832,
      "strength": 31.177
    },
    {
      "id": "pp-2351",
      "firstName": "Krystian",
      "lastName": "Adamski",
      "license": "2351",
      "clubId": "club-18",
      "gender": "M",
      "category": "Senior",
      "points": 2415.639,
      "strength": 33.456
    },
    {
      "id": "pp-2246",
      "firstName": "Piotr",
      "lastName": "Pilecki",
      "license": "2246",
      "clubId": "club-6",
      "gender": "M",
      "category": "Veteran",
      "points": 2412.746,
      "strength": 39.966
    },
    {
      "id": "pp-1360",
      "firstName": "Katarzyna",
      "lastName": "Kajewska",
      "license": "1360",
      "clubId": "club-4",
      "gender": "K",
      "category": "Senior",
      "points": 2410.3,
      "strength": 27.826
    },
    {
      "id": "pp-1494",
      "firstName": "Grzegorz",
      "lastName": "Kawczyński",
      "license": "1494",
      "clubId": "club-44",
      "gender": "M",
      "category": "Senior",
      "points": 2387.15,
      "strength": 30.262
    },
    {
      "id": "pp-1613",
      "firstName": "Wiktor",
      "lastName": "Bąk",
      "license": "1613",
      "clubId": "club-1",
      "gender": "M",
      "category": "Veteran",
      "points": 2364.377,
      "strength": 34.387
    },
    {
      "id": "pp-1599",
      "firstName": "Krzysztof",
      "lastName": "Kasprowicz",
      "license": "1599",
      "clubId": "club-48",
      "gender": "M",
      "category": "Senior",
      "points": 2346.587,
      "strength": 37.23
    },
    {
      "id": "pp-2086",
      "firstName": "Barbara",
      "lastName": "Stachnik",
      "license": "2086",
      "clubId": "club-24",
      "gender": "K",
      "category": "Veteran",
      "points": 2345.901,
      "strength": 27.639
    },
    {
      "id": "pp-1696",
      "firstName": "Bogusław",
      "lastName": "Guzdek",
      "license": "1696",
      "clubId": "club-46",
      "gender": "M",
      "category": "Veteran",
      "points": 2339.008,
      "strength": 30.605
    },
    {
      "id": "pp-903",
      "firstName": "Marcin",
      "lastName": "Sasin",
      "license": "903",
      "clubId": "club-16",
      "gender": "M",
      "category": "Veteran",
      "points": 2306.571,
      "strength": 33.248
    },
    {
      "id": "pp-248",
      "firstName": "Piotr",
      "lastName": "Skołucki",
      "license": "248",
      "clubId": "club-20",
      "gender": "M",
      "category": "Veteran",
      "points": 2305.192,
      "strength": 36.556
    },
    {
      "id": "pp-1246",
      "firstName": "Adrian",
      "lastName": "Latkowski",
      "license": "1246",
      "clubId": "club-3",
      "gender": "M",
      "category": "Senior",
      "points": 2302.335,
      "strength": 29.269
    },
    {
      "id": "pp-424",
      "firstName": "Konrad",
      "lastName": "Broniecki",
      "license": "424",
      "clubId": "club-47",
      "gender": "M",
      "category": "Senior",
      "points": 2253.586,
      "strength": 20.795
    },
    {
      "id": "pp-1995",
      "firstName": "Kamil",
      "lastName": "Gustowicz",
      "license": "1995",
      "clubId": "club-36",
      "gender": "M",
      "category": "Senior",
      "points": 2251.319,
      "strength": 36.849
    },
    {
      "id": "pp-1586",
      "firstName": "Mariusz",
      "lastName": "Giżycki",
      "license": "1586",
      "clubId": "club-38",
      "gender": "M",
      "category": "Veteran",
      "points": 2246.306,
      "strength": 29.544
    },
    {
      "id": "pp-2089",
      "firstName": "Robert",
      "lastName": "Brychcy",
      "license": "2089",
      "clubId": "club-1",
      "gender": "M",
      "category": "Senior",
      "points": 2221.666,
      "strength": 30.392
    },
    {
      "id": "pp-2118",
      "firstName": "Jarosław",
      "lastName": "Krzyżanowski",
      "license": "2118",
      "clubId": "club-18",
      "gender": "M",
      "category": "Senior",
      "points": 2191.637,
      "strength": 33.33
    },
    {
      "id": "pp-625",
      "firstName": "Janusz",
      "lastName": "Stępniak",
      "license": "625",
      "clubId": "club-5",
      "gender": "M",
      "category": "Veteran",
      "points": 2182.757,
      "strength": 27.973
    },
    {
      "id": "pp-2348",
      "firstName": "Bartosz",
      "lastName": "Filipczuk",
      "license": "2348",
      "clubId": "club-18",
      "gender": "M",
      "category": "Senior",
      "points": 2166.862,
      "strength": 36.517
    },
    {
      "id": "pp-2078",
      "firstName": "Bogumiła",
      "lastName": "Korus",
      "license": "2078",
      "clubId": "club-45",
      "gender": "K",
      "category": "Veteran",
      "points": 2150.028,
      "strength": 26.047
    },
    {
      "id": "pp-586",
      "firstName": "Jan",
      "lastName": "Neugebauer",
      "license": "586",
      "clubId": "club-25",
      "gender": "M",
      "category": "Veteran",
      "points": 2139.579,
      "strength": 34.461
    },
    {
      "id": "pp-651",
      "firstName": "Celina",
      "lastName": "Lichnowska",
      "license": "651",
      "clubId": "club-6",
      "gender": "K",
      "category": "Veteran",
      "points": 2126.622,
      "strength": 14.177
    },
    {
      "id": "pp-1917",
      "firstName": "Roman",
      "lastName": "Walczak",
      "license": "1917",
      "clubId": "club-1",
      "gender": "M",
      "category": "Veteran",
      "points": 2123.657,
      "strength": 30.441
    },
    {
      "id": "pp-1620",
      "firstName": "Kacper",
      "lastName": "Teufel",
      "license": "1620",
      "clubId": "club-38",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 2103.013,
      "strength": 24.294
    },
    {
      "id": "pp-2190",
      "firstName": "Olha",
      "lastName": "Slonimska",
      "license": "2190",
      "clubId": "club-38",
      "gender": "K",
      "category": "Senior",
      "points": 2102.708,
      "strength": 31.341
    },
    {
      "id": "pp-1659",
      "firstName": "Zdzisław",
      "lastName": "Błaszczyk",
      "license": "1659",
      "clubId": "club-5",
      "gender": "M",
      "category": "Veteran",
      "points": 2077.003,
      "strength": 27.228
    },
    {
      "id": "pp-1751",
      "firstName": "Ewa",
      "lastName": "Domanus",
      "license": "1751",
      "clubId": "club-38",
      "gender": "K",
      "category": "Senior",
      "points": 2066.278,
      "strength": 15.641
    },
    {
      "id": "pp-649",
      "firstName": "Mariusz",
      "lastName": "Stawicki",
      "license": "649",
      "clubId": "club-16",
      "gender": "M",
      "category": "Veteran",
      "points": 2048.316,
      "strength": 23.889
    },
    {
      "id": "pp-2359",
      "firstName": "Izabela",
      "lastName": "Miler",
      "license": "2359",
      "clubId": "club-43",
      "gender": "K",
      "category": "Senior",
      "points": 2041.018,
      "strength": 18.346
    },
    {
      "id": "pp-829",
      "firstName": "Paweł",
      "lastName": "Ługowski",
      "license": "829",
      "clubId": "club-11",
      "gender": "M",
      "category": "Senior",
      "points": 2039.203,
      "strength": 20.344
    },
    {
      "id": "pp-1712",
      "firstName": "Jarosław",
      "lastName": "Potocki",
      "license": "1712",
      "clubId": "club-5",
      "gender": "M",
      "category": "Veteran",
      "points": 2026.584,
      "strength": 30.001
    },
    {
      "id": "pp-511",
      "firstName": "Stefan",
      "lastName": "Bartkowiak",
      "license": "511",
      "clubId": "club-5",
      "gender": "M",
      "category": "Veteran",
      "points": 2008.417,
      "strength": 25.248
    },
    {
      "id": "pp-1104",
      "firstName": "Mikołaj",
      "lastName": "Fabiś",
      "license": "1104",
      "clubId": "club-36",
      "gender": "M",
      "category": "Senior",
      "points": 1997.53,
      "strength": 27.137
    },
    {
      "id": "pp-1520",
      "firstName": "Stanisław",
      "lastName": "Cieślawski",
      "license": "1520",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 1995.5,
      "strength": 25.638
    },
    {
      "id": "pp-1120",
      "firstName": "Sławomir",
      "lastName": "Pięciorek",
      "license": "1120",
      "clubId": "club-9",
      "gender": "M",
      "category": "Veteran",
      "points": 1993.074,
      "strength": 30.597
    },
    {
      "id": "pp-1876",
      "firstName": "Walerian",
      "lastName": "Grzechacki",
      "license": "1876",
      "clubId": "club-38",
      "gender": "M",
      "category": "Veteran",
      "points": 1986.09,
      "strength": 29.205
    },
    {
      "id": "pp-2063",
      "firstName": "Krzysztof",
      "lastName": "Szymański",
      "license": "2063",
      "clubId": "club-36",
      "gender": "M",
      "category": "Senior",
      "points": 1982.027,
      "strength": 26.83
    },
    {
      "id": "pp-2407",
      "firstName": "Kazimierz",
      "lastName": "Szatkowski",
      "license": "2407",
      "clubId": "club-1",
      "gender": "M",
      "category": "Veteran",
      "points": 1978.263,
      "strength": 26.864
    },
    {
      "id": "pp-2127",
      "firstName": "Andrzej",
      "lastName": "Łucki",
      "license": "2127",
      "clubId": "club-17",
      "gender": "M",
      "category": "Veteran",
      "points": 1966.151,
      "strength": 26.802
    },
    {
      "id": "pp-968",
      "firstName": "Marek",
      "lastName": "Brakowiecki",
      "license": "968",
      "clubId": "club-16",
      "gender": "M",
      "category": "Senior",
      "points": 1949.17,
      "strength": 25.342
    },
    {
      "id": "pp-1396",
      "firstName": "Agnieszka",
      "lastName": "Kempa",
      "license": "1396",
      "clubId": "club-48",
      "gender": "K",
      "category": "Senior",
      "points": 1930.932,
      "strength": 20.811
    },
    {
      "id": "pp-2368",
      "firstName": "Lena",
      "lastName": "Górecka",
      "license": "2368",
      "clubId": "club-2",
      "gender": "K",
      "category": "Junior",
      "points": 1929.857,
      "strength": 14.887
    },
    {
      "id": "pp-1700",
      "firstName": "Beata",
      "lastName": "Żmuda",
      "license": "1700",
      "clubId": "club-48",
      "gender": "K",
      "category": "Senior",
      "points": 1922.526,
      "strength": 19.281
    },
    {
      "id": "pp-1017",
      "firstName": "Zuzanna",
      "lastName": "Szulc",
      "license": "1017",
      "clubId": "club-3",
      "gender": "K",
      "category": "Junior",
      "points": 1914.572,
      "strength": 18.824
    },
    {
      "id": "pp-2035",
      "firstName": "Tadeusz",
      "lastName": "Brożyna",
      "license": "2035",
      "clubId": "club-17",
      "gender": "M",
      "category": "Veteran",
      "points": 1910.89,
      "strength": 29.422
    },
    {
      "id": "pp-189",
      "firstName": "Anna",
      "lastName": "Ślusarska",
      "license": "189",
      "clubId": "club-20",
      "gender": "K",
      "category": "Veteran",
      "points": 1910.014,
      "strength": 16.918
    },
    {
      "id": "pp-2304",
      "firstName": "Zbigniew",
      "lastName": "Szulc",
      "license": "2304",
      "clubId": "club-45",
      "gender": "M",
      "category": "Veteran",
      "points": 1909.392,
      "strength": 25.444
    },
    {
      "id": "pp-141",
      "firstName": "Andrzej",
      "lastName": "Bochen",
      "license": "141",
      "clubId": "club-21",
      "gender": "M",
      "category": "Veteran",
      "points": 1885.58,
      "strength": 27.729
    },
    {
      "id": "pp-2219",
      "firstName": "Maciej",
      "lastName": "Szajerka",
      "license": "2219",
      "clubId": "club-29",
      "gender": "M",
      "category": "Veteran",
      "points": 1870.239,
      "strength": 24.249
    },
    {
      "id": "pp-1846",
      "firstName": "Elżbieta",
      "lastName": "Mędrek",
      "license": "1846",
      "clubId": "club-30",
      "gender": "K",
      "category": "Veteran",
      "points": 1866.816,
      "strength": 23.709
    },
    {
      "id": "pp-2124",
      "firstName": "Piotr",
      "lastName": "Wróblewski",
      "license": "2124",
      "clubId": "club-18",
      "gender": "M",
      "category": "Veteran",
      "points": 1859.165,
      "strength": 28.599
    },
    {
      "id": "pp-1752",
      "firstName": "Bogusław",
      "lastName": "Wawrzynek",
      "license": "1752",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 1856.675,
      "strength": 26.715
    },
    {
      "id": "pp-2195",
      "firstName": "Marzena",
      "lastName": "Mroczkowska-Orpel",
      "license": "2195",
      "clubId": "club-24",
      "gender": "K",
      "category": "Senior",
      "points": 1835.253,
      "strength": 18.065
    },
    {
      "id": "pp-2197",
      "firstName": "Marian",
      "lastName": "Michalski",
      "license": "2197",
      "clubId": "club-35",
      "gender": "M",
      "category": "Veteran",
      "points": 1834.949,
      "strength": 24.322
    },
    {
      "id": "pp-722",
      "firstName": "Karol",
      "lastName": "Jędrzejczak",
      "license": "722",
      "clubId": "club-5",
      "gender": "M",
      "category": "Veteran",
      "points": 1831.29,
      "strength": 24.826
    },
    {
      "id": "pp-2263",
      "firstName": "Dawid",
      "lastName": "Jędrzejczyk",
      "license": "2263",
      "clubId": "club-23",
      "gender": "M",
      "category": "Senior",
      "points": 1822.219,
      "strength": 29.107
    },
    {
      "id": "pp-20",
      "firstName": "Janusz",
      "lastName": "Mazurkiewicz",
      "license": "20",
      "clubId": "club-21",
      "gender": "M",
      "category": "Veteran",
      "points": 1821.3,
      "strength": 24.099
    },
    {
      "id": "pp-2290",
      "firstName": "Antoni",
      "lastName": "Bielecki",
      "license": "2290",
      "clubId": "club-49",
      "gender": "M",
      "category": "Junior",
      "points": 1818.34,
      "strength": 19.275
    },
    {
      "id": "pp-1697",
      "firstName": "Tadeusz",
      "lastName": "Datta",
      "license": "1697",
      "clubId": "club-22",
      "gender": "M",
      "category": "Veteran",
      "points": 1788.995,
      "strength": 42.227
    },
    {
      "id": "pp-2226",
      "firstName": "Zdzisław",
      "lastName": "Knasiak",
      "license": "2226",
      "clubId": "club-36",
      "gender": "M",
      "category": "Veteran",
      "points": 1787.823,
      "strength": 23.541
    },
    {
      "id": "pp-840",
      "firstName": "Andrzej",
      "lastName": "Czerski",
      "license": "840",
      "clubId": "club-23",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 1781.685,
      "strength": 25.197
    },
    {
      "id": "pp-2387",
      "firstName": "Zofia",
      "lastName": "Veitsch",
      "license": "2387",
      "clubId": "club-25",
      "gender": "K",
      "category": "Veteran",
      "points": 1775.924,
      "strength": 33.071
    },
    {
      "id": "pp-1575",
      "firstName": "Waldemar",
      "lastName": "Schulz",
      "license": "1575",
      "clubId": "club-22",
      "gender": "M",
      "category": "Veteran",
      "points": 1773.116,
      "strength": 42.067
    },
    {
      "id": "pp-1894",
      "firstName": "Piotr",
      "lastName": "Pejcha",
      "license": "1894",
      "clubId": "club-26",
      "gender": "M",
      "category": "Senior",
      "points": 1760.479,
      "strength": 23.653
    },
    {
      "id": "pp-2314",
      "firstName": "Bożena",
      "lastName": "Kowalewska",
      "license": "2314",
      "clubId": "club-25",
      "gender": "K",
      "category": "Veteran",
      "points": 1755.194,
      "strength": 25.803
    },
    {
      "id": "pp-2015",
      "firstName": "Beata",
      "lastName": "Ignatowicz",
      "license": "2015",
      "clubId": "club-27",
      "gender": "K",
      "category": "Veteran",
      "points": 1735.758,
      "strength": 25.633
    },
    {
      "id": "pp-2199",
      "firstName": "Paweł",
      "lastName": "Wójcik",
      "license": "2199",
      "clubId": "club-26",
      "gender": "M",
      "category": "Senior",
      "points": 1722.853,
      "strength": 21.306
    },
    {
      "id": "pp-1292",
      "firstName": "Piotr",
      "lastName": "Kurzynka",
      "license": "1292",
      "clubId": "club-16",
      "gender": "M",
      "category": "Senior",
      "points": 1720.69,
      "strength": 24.671
    },
    {
      "id": "pp-666",
      "firstName": "Artur",
      "lastName": "Kałużny",
      "license": "666",
      "clubId": "club-44",
      "gender": "M",
      "category": "Senior",
      "points": 1693.296,
      "strength": 18.429
    },
    {
      "id": "pp-2128",
      "firstName": "Michał Kazimierz",
      "lastName": "Sagan",
      "license": "2128",
      "clubId": "club-17",
      "gender": "M",
      "category": "Veteran",
      "points": 1671.573,
      "strength": 25.467
    },
    {
      "id": "pp-1588",
      "firstName": "Henryk",
      "lastName": "Ziomek",
      "license": "1588",
      "clubId": "club-45",
      "gender": "M",
      "category": "Veteran",
      "points": 1670.807,
      "strength": 22.635
    },
    {
      "id": "pp-2196",
      "firstName": "Adrian",
      "lastName": "Mrózek",
      "license": "2196",
      "clubId": "club-35",
      "gender": "M",
      "category": "Senior",
      "points": 1642.726,
      "strength": 24.401
    },
    {
      "id": "pp-2384",
      "firstName": "Agata",
      "lastName": "Wolniak",
      "license": "2384",
      "clubId": "club-16",
      "gender": "K",
      "category": "Junior",
      "points": 1641.067,
      "strength": 10.94
    },
    {
      "id": "pp-1651",
      "firstName": "Izabela",
      "lastName": "Wyczling",
      "license": "1651",
      "clubId": "club-48",
      "gender": "K",
      "category": "Senior",
      "points": 1638.153,
      "strength": 19.086
    },
    {
      "id": "pp-696",
      "firstName": "Krzysztof",
      "lastName": "Słota",
      "license": "696",
      "clubId": "club-9",
      "gender": "M",
      "category": "Senior",
      "points": 1636.883,
      "strength": 26.72
    },
    {
      "id": "pp-1091",
      "firstName": "Leszek",
      "lastName": "Klinowski",
      "license": "1091",
      "clubId": "club-5",
      "gender": "M",
      "category": "Veteran",
      "points": 1615.594,
      "strength": 24.043
    },
    {
      "id": "pp-2414",
      "firstName": "Michał",
      "lastName": "Marczak",
      "license": "2414",
      "clubId": "club-36",
      "gender": "M",
      "category": "Senior",
      "points": 1610.457,
      "strength": 26.359
    },
    {
      "id": "pp-1518",
      "firstName": "Kacper",
      "lastName": "Wiśniewski",
      "license": "1518",
      "clubId": "club-23",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 1601.569,
      "strength": 24.446
    },
    {
      "id": "pp-2021",
      "firstName": "Tadeusz",
      "lastName": "Zajdek",
      "license": "2021",
      "clubId": "club-17",
      "gender": "M",
      "category": "Veteran",
      "points": 1587.196,
      "strength": 25.139
    },
    {
      "id": "pp-2125",
      "firstName": "Dariusz",
      "lastName": "Wróblewski",
      "license": "2125",
      "clubId": "club-18",
      "gender": "M",
      "category": "Senior",
      "points": 1575.01,
      "strength": 25.665
    },
    {
      "id": "pp-1464",
      "firstName": "Andrzej",
      "lastName": "Grzywacz",
      "license": "1464",
      "clubId": "club-25",
      "gender": "M",
      "category": "Veteran",
      "points": 1546.457,
      "strength": 32.491
    },
    {
      "id": "pp-767",
      "firstName": "Lidia",
      "lastName": "Marcinkowska",
      "license": "767",
      "clubId": "club-5",
      "gender": "K",
      "category": "Veteran",
      "points": 1542.776,
      "strength": 12.177
    },
    {
      "id": "pp-1028",
      "firstName": "Piotr",
      "lastName": "Mycielski",
      "license": "1028",
      "clubId": "club-14",
      "gender": "M",
      "category": "Senior",
      "points": 1540.616,
      "strength": 17.199
    },
    {
      "id": "pp-2285",
      "firstName": "Urszula",
      "lastName": "Mikłaszewicz",
      "license": "2285",
      "clubId": "club-32",
      "gender": "K",
      "category": "Veteran",
      "points": 1538.079,
      "strength": 19.742
    },
    {
      "id": "pp-2144",
      "firstName": "Alojzy",
      "lastName": "Ciecholewski",
      "license": "2144",
      "clubId": "club-25",
      "gender": "M",
      "category": "Veteran",
      "points": 1532.804,
      "strength": 28.537
    },
    {
      "id": "pp-2433",
      "firstName": "Szymon",
      "lastName": "Skuza",
      "license": "2433",
      "clubId": "club-13",
      "gender": "M",
      "category": "Senior",
      "points": 1516.485,
      "strength": 22.019
    },
    {
      "id": "pp-2102",
      "firstName": "Marlena",
      "lastName": "Kiepura",
      "license": "2102",
      "clubId": "club-45",
      "gender": "K",
      "category": "Veteran",
      "points": 1516.028,
      "strength": 10.755
    },
    {
      "id": "pp-2038",
      "firstName": "Jolanta",
      "lastName": "Daniłowicz",
      "license": "2038",
      "clubId": "club-14",
      "gender": "K",
      "category": "Senior",
      "points": 1505.21,
      "strength": 16.73
    },
    {
      "id": "pp-2122",
      "firstName": "Andrzej",
      "lastName": "Rybak",
      "license": "2122",
      "clubId": "club-18",
      "gender": "M",
      "category": "Veteran",
      "points": 1503.05,
      "strength": 26.181
    },
    {
      "id": "pp-601",
      "firstName": "Renata",
      "lastName": "Staroniewicz",
      "license": "601",
      "clubId": "club-40",
      "gender": "K",
      "category": "Senior",
      "points": 1488.71,
      "strength": 25.964
    },
    {
      "id": "pp-7",
      "firstName": "Marek",
      "lastName": "Cieśla",
      "license": "7",
      "clubId": "club-39",
      "gender": "M",
      "category": "Veteran",
      "points": 1431.978,
      "strength": 19.389
    },
    {
      "id": "pp-1565",
      "firstName": "Bartłomiej",
      "lastName": "Skołucki",
      "license": "1565",
      "clubId": "club-20",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 1420.474,
      "strength": 18.531
    },
    {
      "id": "pp-2345",
      "firstName": "Marcel",
      "lastName": "Mil",
      "license": "2345",
      "clubId": "club-18",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 1412.888,
      "strength": 22.31
    },
    {
      "id": "pp-2202",
      "firstName": "Marcin",
      "lastName": "Dudek",
      "license": "2202",
      "clubId": "club-20",
      "gender": "M",
      "category": "Senior",
      "points": 1407.531,
      "strength": 16.942
    },
    {
      "id": "pp-1114",
      "firstName": "Tomasz",
      "lastName": "Gutkowski",
      "license": "1114",
      "clubId": "club-6",
      "gender": "M",
      "category": "Veteran",
      "points": 1405.177,
      "strength": 20.401
    },
    {
      "id": "pp-2349",
      "firstName": "Sebastian",
      "lastName": "Derecki",
      "license": "2349",
      "clubId": "club-18",
      "gender": "M",
      "category": "Senior",
      "points": 1395.603,
      "strength": 24.668
    },
    {
      "id": "pp-1547",
      "firstName": "Aleksandra",
      "lastName": "Obajtek",
      "license": "1547",
      "clubId": "club-38",
      "gender": "K",
      "category": "Senior",
      "points": 1392.97,
      "strength": 15.498
    },
    {
      "id": "pp-2159",
      "firstName": "Wiktoria",
      "lastName": "Poniewierska",
      "license": "2159",
      "clubId": "club-20",
      "gender": "K",
      "category": "Młodzieżowiec",
      "points": 1389.11,
      "strength": 13.559
    },
    {
      "id": "pp-849",
      "firstName": "Małgorzata",
      "lastName": "Winiarska",
      "license": "849",
      "clubId": "club-12",
      "gender": "K",
      "category": "Senior",
      "points": 1386.53,
      "strength": 21.392
    },
    {
      "id": "pp-543",
      "firstName": "Robert",
      "lastName": "Nazarko",
      "license": "543",
      "clubId": "club-12",
      "gender": "M",
      "category": "Veteran",
      "points": 1372.707,
      "strength": 22.571
    },
    {
      "id": "pp-958",
      "firstName": "Ryszard",
      "lastName": "Kucharski",
      "license": "958",
      "clubId": "club-39",
      "gender": "M",
      "category": "Veteran",
      "points": 1356.198,
      "strength": 25.865
    },
    {
      "id": "pp-448",
      "firstName": "Mirosław",
      "lastName": "Kurek",
      "license": "448",
      "clubId": "club-47",
      "gender": "M",
      "category": "Veteran",
      "points": 1354.099,
      "strength": 19.671
    },
    {
      "id": "pp-1015",
      "firstName": "Beata",
      "lastName": "Kielur-Słota",
      "license": "1015",
      "clubId": "club-9",
      "gender": "K",
      "category": "Veteran",
      "points": 1353.146,
      "strength": 16.302
    },
    {
      "id": "pp-2209",
      "firstName": "Tomasz",
      "lastName": "Mil",
      "license": "2209",
      "clubId": "club-18",
      "gender": "M",
      "category": "Veteran",
      "points": 1339.123,
      "strength": 21.359
    },
    {
      "id": "pp-137",
      "firstName": "Krzysztof",
      "lastName": "Gawrych",
      "license": "137",
      "clubId": "club-21",
      "gender": "M",
      "category": "Veteran",
      "points": 1337.312,
      "strength": 19.219
    },
    {
      "id": "pp-2271",
      "firstName": "Andrzej",
      "lastName": "Gostkowski",
      "license": "2271",
      "clubId": "club-16",
      "gender": "M",
      "category": "Senior",
      "points": 1331.763,
      "strength": 18.058
    },
    {
      "id": "pp-2095",
      "firstName": "Dariusz",
      "lastName": "Sajdok",
      "license": "2095",
      "clubId": "club-32",
      "gender": "M",
      "category": "Veteran",
      "points": 1316.413,
      "strength": 19.2
    },
    {
      "id": "pp-1698",
      "firstName": "Adam",
      "lastName": "Jacak",
      "license": "1698",
      "clubId": "club-45",
      "gender": "M",
      "category": "Senior",
      "points": 1314.426,
      "strength": 19.315
    },
    {
      "id": "pp-2416",
      "firstName": "Tomasz",
      "lastName": "Czerwiński",
      "license": "2416",
      "clubId": "club-1",
      "gender": "M",
      "category": "Senior",
      "points": 1310.708,
      "strength": 18.392
    },
    {
      "id": "pp-2026",
      "firstName": "Maria",
      "lastName": "Mazur",
      "license": "2026",
      "clubId": "club-17",
      "gender": "K",
      "category": "Veteran",
      "points": 1306.929,
      "strength": 19.277
    },
    {
      "id": "pp-2206",
      "firstName": "Andrzej",
      "lastName": "Dywelski",
      "license": "2206",
      "clubId": "club-48",
      "gender": "M",
      "category": "Veteran",
      "points": 1302.658,
      "strength": 33.845
    },
    {
      "id": "pp-2330",
      "firstName": "Małgorzata",
      "lastName": "Matuszczak",
      "license": "2330",
      "clubId": "club-25",
      "gender": "K",
      "category": "Veteran",
      "points": 1301.411,
      "strength": 14.283
    },
    {
      "id": "pp-548",
      "firstName": "Katarzyna",
      "lastName": "Nazarko",
      "license": "548",
      "clubId": "club-12",
      "gender": "K",
      "category": "Veteran",
      "points": 1289.775,
      "strength": 21.388
    },
    {
      "id": "pp-2342",
      "firstName": "Marek",
      "lastName": "Szymczak",
      "license": "2342",
      "clubId": "club-18",
      "gender": "M",
      "category": "Senior",
      "points": 1285.8,
      "strength": 21.232
    },
    {
      "id": "pp-2274",
      "firstName": "Bogdan",
      "lastName": "Pytel",
      "license": "2274",
      "clubId": "club-1",
      "gender": "M",
      "category": "Veteran",
      "points": 1274.306,
      "strength": 16.459
    },
    {
      "id": "pp-2439",
      "firstName": "Szymon",
      "lastName": "Sobkowiak",
      "license": "2439",
      "clubId": "club-36",
      "gender": "M",
      "category": "Veteran",
      "points": 1271.737,
      "strength": 18.809
    },
    {
      "id": "pp-2011",
      "firstName": "Paweł",
      "lastName": "Łogasz",
      "license": "2011",
      "clubId": "club-32",
      "gender": "M",
      "category": "Senior",
      "points": 1268.936,
      "strength": 20.076
    },
    {
      "id": "pp-518",
      "firstName": "Monika",
      "lastName": "Małaszczuk",
      "license": "518",
      "clubId": "club-5",
      "gender": "K",
      "category": "Senior",
      "points": 1266.874,
      "strength": 9.656
    },
    {
      "id": "pp-1913",
      "firstName": "Dominika",
      "lastName": "Urbaniak",
      "license": "1913",
      "clubId": "club-47",
      "gender": "K",
      "category": "Senior",
      "points": 1266.48,
      "strength": 11.612
    },
    {
      "id": "pp-2043",
      "firstName": "Mirosław",
      "lastName": "Jaroszyński",
      "license": "2043",
      "clubId": "club-43",
      "gender": "M",
      "category": "Senior",
      "points": 1261.271,
      "strength": 16.406
    },
    {
      "id": "pp-1476",
      "firstName": "Krzysztof",
      "lastName": "Mejna",
      "license": "1476",
      "clubId": "club-25",
      "gender": "M",
      "category": "Senior",
      "points": 1260.675,
      "strength": 30.137
    },
    {
      "id": "pp-395",
      "firstName": "Mateusz",
      "lastName": "Moc",
      "license": "395",
      "clubId": "club-35",
      "gender": "M",
      "category": "Senior",
      "points": 1233.267,
      "strength": 13.976
    },
    {
      "id": "pp-2313",
      "firstName": "Grzegorz",
      "lastName": "Czewżyk",
      "license": "2313",
      "clubId": "club-39",
      "gender": "M",
      "category": "Veteran",
      "points": 1197.777,
      "strength": 14.232
    },
    {
      "id": "pp-2110",
      "firstName": "Mariusz",
      "lastName": "Ciesielski",
      "license": "2110",
      "clubId": "club-44",
      "gender": "M",
      "category": "Senior",
      "points": 1194.685,
      "strength": 18.967
    },
    {
      "id": "pp-1018",
      "firstName": "Mirosław",
      "lastName": "Jastak",
      "license": "1018",
      "clubId": "club-21",
      "gender": "M",
      "category": "Veteran",
      "points": 1175.253,
      "strength": 17.183
    },
    {
      "id": "pp-705",
      "firstName": "Urszula",
      "lastName": "Klimaszewska",
      "license": "705",
      "clubId": "club-6",
      "gender": "K",
      "category": "Senior",
      "points": 1173.948,
      "strength": 13.917
    },
    {
      "id": "pp-1098",
      "firstName": "Dariusz",
      "lastName": "Surdyk",
      "license": "1098",
      "clubId": "club-36",
      "gender": "M",
      "category": "Veteran",
      "points": 1129.467,
      "strength": 14.513
    },
    {
      "id": "pp-2101",
      "firstName": "Jan",
      "lastName": "Mosio",
      "license": "2101",
      "clubId": "club-26",
      "gender": "M",
      "category": "Veteran",
      "points": 1124.028,
      "strength": 15.027
    },
    {
      "id": "pp-1918",
      "firstName": "Agnieszka",
      "lastName": "Suchoń",
      "license": "1918",
      "clubId": "club-1",
      "gender": "K",
      "category": "Veteran",
      "points": 1117.688,
      "strength": 15.814
    },
    {
      "id": "pp-1926",
      "firstName": "Zbigniew",
      "lastName": "Wilczyński",
      "license": "1926",
      "clubId": "club-1",
      "gender": "M",
      "category": "Veteran",
      "points": 1117.688,
      "strength": 15.814
    },
    {
      "id": "pp-701",
      "firstName": "Maciej",
      "lastName": "Grabowski",
      "license": "701",
      "clubId": "club-6",
      "gender": "M",
      "category": "Senior",
      "points": 1110.83,
      "strength": 21.654
    },
    {
      "id": "pp-2162",
      "firstName": "Daniel",
      "lastName": "Klimek",
      "license": "2162",
      "clubId": "club-16",
      "gender": "M",
      "category": "Senior",
      "points": 1101.638,
      "strength": 15.229
    },
    {
      "id": "pp-2165",
      "firstName": "Wojciech",
      "lastName": "Klimek",
      "license": "2165",
      "clubId": "club-44",
      "gender": "M",
      "category": "Senior",
      "points": 1100.761,
      "strength": 12.214
    },
    {
      "id": "pp-2409",
      "firstName": "Jakub",
      "lastName": "Stefaniak",
      "license": "2409",
      "clubId": "club-29",
      "gender": "M",
      "category": "Junior",
      "points": 1095.39,
      "strength": 16.132
    },
    {
      "id": "pp-2117",
      "firstName": "Dariusz",
      "lastName": "Kałdunek",
      "license": "2117",
      "clubId": "club-18",
      "gender": "M",
      "category": "Veteran",
      "points": 1092.386,
      "strength": 20.561
    },
    {
      "id": "pp-2325",
      "firstName": "Dawid",
      "lastName": "Ciesielski",
      "license": "2325",
      "clubId": "club-44",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 1075.032,
      "strength": 17.668
    },
    {
      "id": "pp-2166",
      "firstName": "Tomasz",
      "lastName": "Przybylski",
      "license": "2166",
      "clubId": "club-5",
      "gender": "M",
      "category": "Senior",
      "points": 1068.419,
      "strength": 11.655
    },
    {
      "id": "pp-535",
      "firstName": "Piotrjr",
      "lastName": "Milicki",
      "license": "535",
      "clubId": "club-5",
      "gender": "M",
      "category": "Senior",
      "points": 1068.419,
      "strength": 11.655
    },
    {
      "id": "pp-37",
      "firstName": "Tadeusz",
      "lastName": "Gałuszkiewicz",
      "license": "37",
      "clubId": "club-45",
      "gender": "M",
      "category": "Veteran",
      "points": 1051.529,
      "strength": 13.497
    },
    {
      "id": "pp-784",
      "firstName": "Marek",
      "lastName": "Pulut",
      "license": "784",
      "clubId": "club-29",
      "gender": "M",
      "category": "Veteran",
      "points": 1028.138,
      "strength": 15.184
    },
    {
      "id": "pp-866",
      "firstName": "Patryk",
      "lastName": "Cilindź",
      "license": "866",
      "clubId": "club-23",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 1015.337,
      "strength": 13.098
    },
    {
      "id": "pp-1036",
      "firstName": "Witold",
      "lastName": "Bartkowiak",
      "license": "1036",
      "clubId": "club-4",
      "gender": "M",
      "category": "Veteran",
      "points": 999.274,
      "strength": 13.864
    },
    {
      "id": "pp-1594",
      "firstName": "Arkadiusz",
      "lastName": "Gardat",
      "license": "1594",
      "clubId": "club-44",
      "gender": "M",
      "category": "Senior",
      "points": 994.6,
      "strength": 13.332
    },
    {
      "id": "pp-1595",
      "firstName": "Leszek",
      "lastName": "Krall",
      "license": "1595",
      "clubId": "club-7",
      "gender": "M",
      "category": "Senior",
      "points": 992.009,
      "strength": 19.531
    },
    {
      "id": "pp-1164",
      "firstName": "Maciej",
      "lastName": "Zybert",
      "license": "1164",
      "clubId": "club-38",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 976.33,
      "strength": 15.053
    },
    {
      "id": "pp-640",
      "firstName": "Piotr",
      "lastName": "Koland",
      "license": "640",
      "clubId": "club-24",
      "gender": "M",
      "category": "Senior",
      "points": 967.057,
      "strength": 9.718
    },
    {
      "id": "pp-2133",
      "firstName": "Kuba",
      "lastName": "Szydłowski",
      "license": "2133",
      "clubId": "club-36",
      "gender": "M",
      "category": "Junior",
      "points": 966.233,
      "strength": 13.64
    },
    {
      "id": "pp-2273",
      "firstName": "Anna",
      "lastName": "Pytel",
      "license": "2273",
      "clubId": "club-1",
      "gender": "K",
      "category": "Veteran",
      "points": 964.525,
      "strength": 13.981
    },
    {
      "id": "pp-2568",
      "firstName": "Herimitsinjo",
      "lastName": "Rajaoalison",
      "license": "2568",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 960.843,
      "strength": 14.044
    },
    {
      "id": "pp-2005",
      "firstName": "Tomasz",
      "lastName": "Gredes",
      "license": "2005",
      "clubId": "club-27",
      "gender": "M",
      "category": "Senior",
      "points": 948.625,
      "strength": 16.249
    },
    {
      "id": "pp-1011",
      "firstName": "Sławomir",
      "lastName": "Chojnacki",
      "license": "1011",
      "clubId": "club-16",
      "gender": "M",
      "category": "Veteran",
      "points": 940.578,
      "strength": 15.671
    },
    {
      "id": "pp-1875",
      "firstName": "Marcin",
      "lastName": "Adamczyk",
      "license": "1875",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 938.455,
      "strength": 14.036
    },
    {
      "id": "pp-2361",
      "firstName": "Andrzej",
      "lastName": "Korecki",
      "license": "2361",
      "clubId": "club-20",
      "gender": "M",
      "category": "Veteran",
      "points": 937.912,
      "strength": 15.32
    },
    {
      "id": "pp-53",
      "firstName": "Zdzisław",
      "lastName": "Cilindź",
      "license": "53",
      "clubId": "club-23",
      "gender": "M",
      "category": "Veteran",
      "points": 931.043,
      "strength": 15.755
    },
    {
      "id": "pp-1113",
      "firstName": "Alicja",
      "lastName": "Gutkowska",
      "license": "1113",
      "clubId": "club-6",
      "gender": "K",
      "category": "Veteran",
      "points": 915.076,
      "strength": 13.2
    },
    {
      "id": "pp-1608",
      "firstName": "Paweł",
      "lastName": "Wojtczak",
      "license": "1608",
      "clubId": "club-47",
      "gender": "M",
      "category": "Senior",
      "points": 912.585,
      "strength": 9.758
    },
    {
      "id": "pp-2438",
      "firstName": "Dorota",
      "lastName": "Pawłowska",
      "license": "2438",
      "clubId": "club-17",
      "gender": "K",
      "category": "Veteran",
      "points": 909.425,
      "strength": 13.305
    },
    {
      "id": "pp-5",
      "firstName": "Józef",
      "lastName": "Parchanowicz",
      "license": "5",
      "clubId": "club-20",
      "gender": "M",
      "category": "Veteran",
      "points": 906.778,
      "strength": 13.024
    },
    {
      "id": "pp-2374",
      "firstName": "Franciszek",
      "lastName": "Wadowiec",
      "license": "2374",
      "clubId": "club-49",
      "gender": "M",
      "category": "Junior",
      "points": 901.729,
      "strength": 15.725
    },
    {
      "id": "pp-721",
      "firstName": "Krzysztof",
      "lastName": "Borowiak",
      "license": "721",
      "clubId": "club-5",
      "gender": "M",
      "category": "Veteran",
      "points": 896.84,
      "strength": 12.966
    },
    {
      "id": "pp-337",
      "firstName": "Dorota",
      "lastName": "Wilk",
      "license": "337",
      "clubId": "club-11",
      "gender": "K",
      "category": "Senior",
      "points": 895.359,
      "strength": 10.347
    },
    {
      "id": "pp-2344",
      "firstName": "Ryszard",
      "lastName": "Sobolewski",
      "license": "2344",
      "clubId": "club-18",
      "gender": "M",
      "category": "Veteran",
      "points": 868.208,
      "strength": 15.942
    },
    {
      "id": "pp-2327",
      "firstName": "Marcin",
      "lastName": "Górnik",
      "license": "2327",
      "clubId": "club-21",
      "gender": "M",
      "category": "Senior",
      "points": 864.229,
      "strength": 14.273
    },
    {
      "id": "pp-2328",
      "firstName": "Tomasz",
      "lastName": "Jasiczak",
      "license": "2328",
      "clubId": "club-21",
      "gender": "M",
      "category": "Senior",
      "points": 864.229,
      "strength": 14.273
    },
    {
      "id": "pp-1994",
      "firstName": "Adam",
      "lastName": "Pawłowski",
      "license": "1994",
      "clubId": "club-40",
      "gender": "M",
      "category": "Senior",
      "points": 850.829,
      "strength": 12.525
    },
    {
      "id": "pp-2120",
      "firstName": "Grzegorz",
      "lastName": "Lisek",
      "license": "2120",
      "clubId": "club-18",
      "gender": "M",
      "category": "Senior",
      "points": 845.549,
      "strength": 13.704
    },
    {
      "id": "pp-2331",
      "firstName": "Marcin",
      "lastName": "Miniuk",
      "license": "2331",
      "clubId": "club-6",
      "gender": "M",
      "category": "Senior",
      "points": 842.463,
      "strength": 15.31
    },
    {
      "id": "pp-2378",
      "firstName": "Timothee",
      "lastName": "Antezak",
      "license": "2378",
      "clubId": "club-32",
      "gender": "M",
      "category": "Junior",
      "points": 839.709,
      "strength": 12.147
    },
    {
      "id": "pp-207",
      "firstName": "Radosław",
      "lastName": "Banaszkiewicz",
      "license": "207",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 837.223,
      "strength": 9.758
    },
    {
      "id": "pp-1401",
      "firstName": "Włodzimierz",
      "lastName": "Kałużny",
      "license": "1401",
      "clubId": "club-10",
      "gender": "M",
      "category": "Veteran",
      "points": 815.217,
      "strength": 12.634
    },
    {
      "id": "pp-2360",
      "firstName": "Antonius",
      "lastName": "Klomp",
      "license": "2360",
      "clubId": "club-46",
      "gender": "M",
      "category": "Veteran",
      "points": 811.461,
      "strength": 15.126
    },
    {
      "id": "pp-44",
      "firstName": "Danuta",
      "lastName": "Zając",
      "license": "44",
      "clubId": "club-20",
      "gender": "K",
      "category": "Veteran",
      "points": 808.309,
      "strength": 7.845
    },
    {
      "id": "pp-1753",
      "firstName": "Paweł",
      "lastName": "Domanus",
      "license": "1753",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 798.754,
      "strength": 6.739
    },
    {
      "id": "pp-458",
      "firstName": "Andrzej",
      "lastName": "Ślusarski",
      "license": "458",
      "clubId": "club-20",
      "gender": "M",
      "category": "Veteran",
      "points": 797.477,
      "strength": 12.468
    },
    {
      "id": "pp-2036",
      "firstName": "Henryk",
      "lastName": "Belski",
      "license": "2036",
      "clubId": "club-17",
      "gender": "M",
      "category": "Veteran",
      "points": 791.951,
      "strength": 12.582
    },
    {
      "id": "pp-526",
      "firstName": "Piotr",
      "lastName": "Milicki",
      "license": "526",
      "clubId": "club-5",
      "gender": "M",
      "category": "Veteran",
      "points": 791.858,
      "strength": 11.754
    },
    {
      "id": "pp-1510",
      "firstName": "Mieczysław",
      "lastName": "Chaszczewski",
      "license": "1510",
      "clubId": "club-39",
      "gender": "M",
      "category": "Veteran",
      "points": 771.359,
      "strength": 10.895
    },
    {
      "id": "pp-1581",
      "firstName": "Mirosław",
      "lastName": "Molenda",
      "license": "1581",
      "clubId": "club-29",
      "gender": "M",
      "category": "Veteran",
      "points": 763.137,
      "strength": 11.93
    },
    {
      "id": "pp-2042",
      "firstName": "Jakub",
      "lastName": "Wujec",
      "license": "2042",
      "clubId": "club-43",
      "gender": "M",
      "category": "Senior",
      "points": 761.452,
      "strength": 10.23
    },
    {
      "id": "pp-1548",
      "firstName": "Dominika",
      "lastName": "Sak",
      "license": "1548",
      "clubId": "club-38",
      "gender": "K",
      "category": "Senior",
      "points": 759.531,
      "strength": 10.818
    },
    {
      "id": "pp-520",
      "firstName": "Maciej",
      "lastName": "Milicki",
      "license": "520",
      "clubId": "club-5",
      "gender": "M",
      "category": "Veteran",
      "points": 749.547,
      "strength": 10.821
    },
    {
      "id": "pp-2068",
      "firstName": "Marcin",
      "lastName": "Stolarski",
      "license": "2068",
      "clubId": "club-14",
      "gender": "M",
      "category": "Senior",
      "points": 746.081,
      "strength": 12.691
    },
    {
      "id": "pp-88",
      "firstName": "Wojciech",
      "lastName": "Cilindź",
      "license": "88",
      "clubId": "club-23",
      "gender": "M",
      "category": "Senior",
      "points": 745.052,
      "strength": 11.55
    },
    {
      "id": "pp-2131",
      "firstName": "Maciej",
      "lastName": "Sobiecki",
      "license": "2131",
      "clubId": "club-26",
      "gender": "M",
      "category": "Senior",
      "points": 743.873,
      "strength": 9.94
    },
    {
      "id": "pp-2188",
      "firstName": "Mariusz",
      "lastName": "Kazibet",
      "license": "2188",
      "clubId": "club-22",
      "gender": "M",
      "category": "Veteran",
      "points": 737.242,
      "strength": 17.851
    },
    {
      "id": "pp-2064",
      "firstName": "Jakub",
      "lastName": "Kazibet",
      "license": "2064",
      "clubId": "club-22",
      "gender": "M",
      "category": "Senior",
      "points": 737.242,
      "strength": 17.851
    },
    {
      "id": "pp-1496",
      "firstName": "Zdzisława",
      "lastName": "Sokołowska",
      "license": "1496",
      "clubId": "club-26",
      "gender": "K",
      "category": "Veteran",
      "points": 733.513,
      "strength": 6.969
    },
    {
      "id": "pp-2040",
      "firstName": "Marek",
      "lastName": "Rożniata",
      "license": "2040",
      "clubId": "club-30",
      "gender": "M",
      "category": "Veteran",
      "points": 728.761,
      "strength": 17.109
    },
    {
      "id": "pp-1714",
      "firstName": "Jerzy",
      "lastName": "Żalikowski",
      "license": "1714",
      "clubId": "club-25",
      "gender": "M",
      "category": "Veteran",
      "points": 721.686,
      "strength": 12.604
    },
    {
      "id": "pp-602",
      "firstName": "Henryk",
      "lastName": "Tchórz",
      "license": "602",
      "clubId": "club-3",
      "gender": "M",
      "category": "Veteran",
      "points": 720.087,
      "strength": 11.256
    },
    {
      "id": "pp-2084",
      "firstName": "Bogusław Andrzej",
      "lastName": "Wójcik",
      "license": "2084",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 699.485,
      "strength": 10.156
    },
    {
      "id": "pp-1924",
      "firstName": "Karol",
      "lastName": "Morong",
      "license": "1924",
      "clubId": "club-1",
      "gender": "M",
      "category": "Veteran",
      "points": 693.547,
      "strength": 13.157
    },
    {
      "id": "pp-598",
      "firstName": "Andrzej",
      "lastName": "Antczak",
      "license": "598",
      "clubId": "club-32",
      "gender": "M",
      "category": "Veteran",
      "points": 689.384,
      "strength": 10.305
    },
    {
      "id": "pp-2369",
      "firstName": "Hanna",
      "lastName": "Skrobisz",
      "license": "2369",
      "clubId": "club-49",
      "gender": "K",
      "category": "Junior",
      "points": 688.966,
      "strength": 7.782
    },
    {
      "id": "pp-2254",
      "firstName": "Paweł",
      "lastName": "Michalski",
      "license": "2254",
      "clubId": "club-44",
      "gender": "M",
      "category": "Senior",
      "points": 684.55,
      "strength": 8.479
    },
    {
      "id": "pp-2437",
      "firstName": "Przemysław",
      "lastName": "Stanek",
      "license": "2437",
      "clubId": "club-13",
      "gender": "M",
      "category": "Senior",
      "points": 677.398,
      "strength": 9.742
    },
    {
      "id": "pp-811",
      "firstName": "Krystyna",
      "lastName": "Żyska",
      "license": "811",
      "clubId": "club-15",
      "gender": "K",
      "category": "Veteran",
      "points": 672.699,
      "strength": 7.742
    },
    {
      "id": "pp-1775",
      "firstName": "Jan",
      "lastName": "Wawrzyniak",
      "license": "1775",
      "clubId": "club-6",
      "gender": "M",
      "category": "Veteran",
      "points": 668.179,
      "strength": 11.043
    },
    {
      "id": "pp-2216",
      "firstName": "Piotr",
      "lastName": "Gancarz",
      "license": "2216",
      "clubId": "club-31",
      "gender": "M",
      "category": "Senior",
      "points": 665.44,
      "strength": 9.281
    },
    {
      "id": "pp-1999",
      "firstName": "Christophe",
      "lastName": "Antezak",
      "license": "1999",
      "clubId": "club-32",
      "gender": "M",
      "category": "Senior",
      "points": 661.062,
      "strength": 10.764
    },
    {
      "id": "pp-691",
      "firstName": "Ryszard",
      "lastName": "Żyski",
      "license": "691",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 657.547,
      "strength": 9.685
    },
    {
      "id": "pp-2041",
      "firstName": "Marcin",
      "lastName": "Morawski",
      "license": "2041",
      "clubId": "club-30",
      "gender": "M",
      "category": "Senior",
      "points": 655.541,
      "strength": 18.463
    },
    {
      "id": "pp-2220",
      "firstName": "Jerzy",
      "lastName": "Kołnierzak",
      "license": "2220",
      "clubId": "club-46",
      "gender": "M",
      "category": "Veteran",
      "points": 654.767,
      "strength": 12.325
    },
    {
      "id": "pp-1318",
      "firstName": "Adrian",
      "lastName": "Korniłowicz",
      "license": "1318",
      "clubId": "club-6",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 646.943,
      "strength": 12.89
    },
    {
      "id": "pp-2269",
      "firstName": "Ewa",
      "lastName": "Bonter",
      "license": "2269",
      "clubId": "club-20",
      "gender": "K",
      "category": "Veteran",
      "points": 633.502,
      "strength": 9.747
    },
    {
      "id": "pp-2341",
      "firstName": "Marcin",
      "lastName": "Woźny",
      "license": "2341",
      "clubId": "club-18",
      "gender": "M",
      "category": "Senior",
      "points": 626.25,
      "strength": 12.873
    },
    {
      "id": "pp-1465",
      "firstName": "Andrzej",
      "lastName": "Ostanówka",
      "license": "1465",
      "clubId": "club-25",
      "gender": "M",
      "category": "Veteran",
      "points": 624.359,
      "strength": 11.314
    },
    {
      "id": "pp-555",
      "firstName": "Cezary",
      "lastName": "Gut",
      "license": "555",
      "clubId": "club-9",
      "gender": "M",
      "category": "Veteran",
      "points": 620.68,
      "strength": 9.358
    },
    {
      "id": "pp-2343",
      "firstName": "Aneta",
      "lastName": "Spratek",
      "license": "2343",
      "clubId": "club-18",
      "gender": "K",
      "category": "Senior",
      "points": 620.069,
      "strength": 9.649
    },
    {
      "id": "pp-1346",
      "firstName": "Marcin",
      "lastName": "Matusiak",
      "license": "1346",
      "clubId": "club-27",
      "gender": "M",
      "category": "Senior",
      "points": 619.288,
      "strength": 15.477
    },
    {
      "id": "pp-2228",
      "firstName": "Antoni",
      "lastName": "Prokop",
      "license": "2228",
      "clubId": "club-27",
      "gender": "M",
      "category": "Junior",
      "points": 612.912,
      "strength": 13.687
    },
    {
      "id": "pp-2301",
      "firstName": "Tomasz",
      "lastName": "Tomaszewski",
      "license": "2301",
      "clubId": "club-6",
      "gender": "M",
      "category": "Senior",
      "points": 610.956,
      "strength": 10.844
    },
    {
      "id": "pp-1831",
      "firstName": "Klaudia",
      "lastName": "Cieślawska",
      "license": "1831",
      "clubId": "club-15",
      "gender": "K",
      "category": "Senior",
      "points": 604.692,
      "strength": 6.365
    },
    {
      "id": "pp-2207",
      "firstName": "Adam",
      "lastName": "Jarząbek",
      "license": "2207",
      "clubId": "club-18",
      "gender": "M",
      "category": "Veteran",
      "points": 602.642,
      "strength": 11.747
    },
    {
      "id": "pp-281",
      "firstName": "Piotr",
      "lastName": "Gierosz",
      "license": "281",
      "clubId": "club-47",
      "gender": "M",
      "category": "Senior",
      "points": 602.636,
      "strength": 7.389
    },
    {
      "id": "pp-539",
      "firstName": "Marcin",
      "lastName": "Wąchała",
      "license": "539",
      "clubId": "club-44",
      "gender": "M",
      "category": "Senior",
      "points": 600.659,
      "strength": 7.755
    },
    {
      "id": "pp-2034",
      "firstName": "Małgorzata",
      "lastName": "Bruch",
      "license": "2034",
      "clubId": "club-17",
      "gender": "K",
      "category": "Veteran",
      "points": 597.448,
      "strength": 10.206
    },
    {
      "id": "pp-1516",
      "firstName": "Sebastian",
      "lastName": "Byrski",
      "license": "1516",
      "clubId": "club-23",
      "gender": "M",
      "category": "Senior",
      "points": 594.383,
      "strength": 9.179
    },
    {
      "id": "pp-1584",
      "firstName": "Wąsowicz Piotr",
      "lastName": "Uss",
      "license": "1584",
      "clubId": "club-2",
      "gender": "M",
      "category": "Veteran",
      "points": 593.449,
      "strength": 7.487
    },
    {
      "id": "pp-616",
      "firstName": "Anna",
      "lastName": "Wołoszczak",
      "license": "616",
      "clubId": "club-26",
      "gender": "K",
      "category": "Veteran",
      "points": 591.451,
      "strength": 5.559
    },
    {
      "id": "pp-2291",
      "firstName": "Julia",
      "lastName": "Jagodzińska",
      "license": "2291",
      "clubId": "club-49",
      "gender": "K",
      "category": "Junior",
      "points": 590.868,
      "strength": 5.914
    },
    {
      "id": "pp-27",
      "firstName": "Daniel",
      "lastName": "Siara",
      "license": "27",
      "clubId": "club-24",
      "gender": "M",
      "category": "Senior",
      "points": 587.627,
      "strength": 7.724
    },
    {
      "id": "pp-664",
      "firstName": "Dawid",
      "lastName": "Żądło",
      "license": "664",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 581.297,
      "strength": 7.285
    },
    {
      "id": "pp-2088",
      "firstName": "Krzysztof",
      "lastName": "Banach",
      "license": "2088",
      "clubId": "club-22",
      "gender": "M",
      "category": "Veteran",
      "points": 580.928,
      "strength": 13.613
    },
    {
      "id": "pp-2069",
      "firstName": "Janusz",
      "lastName": "Szczepański",
      "license": "2069",
      "clubId": "club-14",
      "gender": "M",
      "category": "Veteran",
      "points": 577.571,
      "strength": 9.006
    },
    {
      "id": "pp-2355",
      "firstName": "Mateusz",
      "lastName": "Matusiak",
      "license": "2355",
      "clubId": "club-27",
      "gender": "M",
      "category": "Junior",
      "points": 574.29,
      "strength": 14.702
    },
    {
      "id": "pp-481",
      "firstName": "Arkadiusz",
      "lastName": "Możdżeń",
      "license": "481",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 571.017,
      "strength": 5.876
    },
    {
      "id": "pp-2116",
      "firstName": "Krzysztof",
      "lastName": "Karczmarz",
      "license": "2116",
      "clubId": "club-18",
      "gender": "M",
      "category": "Senior",
      "points": 567.802,
      "strength": 9.723
    },
    {
      "id": "pp-2425",
      "firstName": "Marcin",
      "lastName": "Stefaniak",
      "license": "2425",
      "clubId": "club-29",
      "gender": "M",
      "category": "Senior",
      "points": 567.673,
      "strength": 8.494
    },
    {
      "id": "pp-659",
      "firstName": "Adam",
      "lastName": "Kałużny",
      "license": "659",
      "clubId": "club-10",
      "gender": "M",
      "category": "Veteran",
      "points": 545.884,
      "strength": 9.341
    },
    {
      "id": "pp-727",
      "firstName": "Andrzej",
      "lastName": "Włodarczak",
      "license": "727",
      "clubId": null,
      "gender": "M",
      "category": "Veteran",
      "points": 540.484,
      "strength": 7.89
    },
    {
      "id": "pp-1446",
      "firstName": "Dawid",
      "lastName": "Dadura",
      "license": "1446",
      "clubId": "club-25",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 540.1,
      "strength": 10.431
    },
    {
      "id": "pp-1163",
      "firstName": "Henryk",
      "lastName": "Paszkowski",
      "license": "1163",
      "clubId": "club-39",
      "gender": "M",
      "category": "Veteran",
      "points": 538.131,
      "strength": 7.782
    },
    {
      "id": "pp-1855",
      "firstName": "Kazimierz",
      "lastName": "Ciapała",
      "license": "1855",
      "clubId": "club-35",
      "gender": "M",
      "category": "Veteran",
      "points": 534.278,
      "strength": 6.727
    },
    {
      "id": "pp-2192",
      "firstName": "Stanisław",
      "lastName": "Pietryga",
      "license": "2192",
      "clubId": "club-30",
      "gender": "M",
      "category": "Veteran",
      "points": 524.362,
      "strength": 13.469
    },
    {
      "id": "pp-865",
      "firstName": "Magdalena",
      "lastName": "Zaniewska",
      "license": "865",
      "clubId": "club-47",
      "gender": "K",
      "category": "Senior",
      "points": 509.434,
      "strength": 3.396
    },
    {
      "id": "pp-2382",
      "firstName": "Zuzanna",
      "lastName": "Strachota",
      "license": "2382",
      "clubId": "club-16",
      "gender": "K",
      "category": "Junior",
      "points": 509.434,
      "strength": 3.396
    },
    {
      "id": "pp-2248",
      "firstName": "Leon",
      "lastName": "Tomaszewski",
      "license": "2248",
      "clubId": "club-6",
      "gender": "M",
      "category": "Junior",
      "points": 505.859,
      "strength": 9.178
    },
    {
      "id": "pp-105",
      "firstName": "Dominik",
      "lastName": "Pilarski",
      "license": "105",
      "clubId": "club-27",
      "gender": "M",
      "category": "Senior",
      "points": 499.95,
      "strength": 10.524
    },
    {
      "id": "pp-2142",
      "firstName": "Stanisław",
      "lastName": "Grzywacz",
      "license": "2142",
      "clubId": "club-25",
      "gender": "M",
      "category": "Veteran",
      "points": 493.288,
      "strength": 11.395
    },
    {
      "id": "pp-15",
      "firstName": "Edward",
      "lastName": "Gajewski",
      "license": "15",
      "clubId": "club-20",
      "gender": "M",
      "category": "Veteran",
      "points": 487.817,
      "strength": 8.782
    },
    {
      "id": "pp-2236",
      "firstName": "Zbigniew",
      "lastName": "Dyba",
      "license": "2236",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 486.384,
      "strength": 6.096
    },
    {
      "id": "pp-2434",
      "firstName": "Klaudia",
      "lastName": "Wójcik",
      "license": "2434",
      "clubId": "club-13",
      "gender": "K",
      "category": "Senior",
      "points": 485.007,
      "strength": 7.419
    },
    {
      "id": "pp-2334",
      "firstName": "Paweł",
      "lastName": "Konończuk",
      "license": "2334",
      "clubId": "club-6",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 483.065,
      "strength": 7.97
    },
    {
      "id": "pp-2415",
      "firstName": "Anna",
      "lastName": "Szymczak",
      "license": "2415",
      "clubId": "club-18",
      "gender": "K",
      "category": "Senior",
      "points": 481.003,
      "strength": 8.325
    },
    {
      "id": "pp-1916",
      "firstName": "Jolanta",
      "lastName": "Rychel",
      "license": "1916",
      "clubId": "club-1",
      "gender": "K",
      "category": "Veteran",
      "points": 475.61,
      "strength": 4.702
    },
    {
      "id": "pp-538",
      "firstName": "Henryk",
      "lastName": "Linder",
      "license": "538",
      "clubId": "club-45",
      "gender": "M",
      "category": "Veteran",
      "points": 468.676,
      "strength": 7.101
    },
    {
      "id": "pp-2135",
      "firstName": "Agata",
      "lastName": "Augustynek-Ziobroń",
      "license": "2135",
      "clubId": "club-17",
      "gender": "K",
      "category": "Veteran",
      "points": 466.622,
      "strength": 7.101
    },
    {
      "id": "pp-898",
      "firstName": "Joanna",
      "lastName": "Bobińska",
      "license": "898",
      "clubId": "club-16",
      "gender": "K",
      "category": "Senior",
      "points": 466.076,
      "strength": 7.35
    },
    {
      "id": "pp-2338",
      "firstName": "Mirosław",
      "lastName": "Falkowski",
      "license": "2338",
      "clubId": "club-25",
      "gender": "M",
      "category": "Veteran",
      "points": 449.338,
      "strength": 9.261
    },
    {
      "id": "pp-2167",
      "firstName": "Marta",
      "lastName": "Skrobisz",
      "license": "2167",
      "clubId": "club-49",
      "gender": "K",
      "category": "Senior",
      "points": 449.001,
      "strength": 8.337
    },
    {
      "id": "pp-2418",
      "firstName": "Angelika",
      "lastName": "Jelińska",
      "license": "2418",
      "clubId": "club-7",
      "gender": "K",
      "category": "Senior",
      "points": 447.495,
      "strength": 7.255
    },
    {
      "id": "pp-2218",
      "firstName": "Andrzej",
      "lastName": "Mykicki",
      "license": "2218",
      "clubId": "club-31",
      "gender": "M",
      "category": "Senior",
      "points": 443.973,
      "strength": 6.309
    },
    {
      "id": "pp-2098",
      "firstName": "Anna",
      "lastName": "Łukaszek",
      "license": "2098",
      "clubId": "club-49",
      "gender": "K",
      "category": "Senior",
      "points": 440.07,
      "strength": 3.58
    },
    {
      "id": "pp-2258",
      "firstName": "Igor",
      "lastName": "Nowak",
      "license": "2258",
      "clubId": "club-32",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 438.823,
      "strength": 6.869
    },
    {
      "id": "pp-2044",
      "firstName": "Małgorzata",
      "lastName": "Morawska",
      "license": "2044",
      "clubId": "club-30",
      "gender": "K",
      "category": "Veteran",
      "points": 435.494,
      "strength": 8.528
    },
    {
      "id": "pp-822",
      "firstName": "Witold",
      "lastName": "Smoliński",
      "license": "822",
      "clubId": "club-16",
      "gender": "M",
      "category": "Veteran",
      "points": 432.185,
      "strength": 3.726
    },
    {
      "id": "pp-29",
      "firstName": "Renata",
      "lastName": "Gajewska",
      "license": "29",
      "clubId": "club-20",
      "gender": "K",
      "category": "Veteran",
      "points": 431.111,
      "strength": 8.082
    },
    {
      "id": "pp-2242",
      "firstName": "Jacek",
      "lastName": "Wąsowicz",
      "license": "2242",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 425.852,
      "strength": 6.139
    },
    {
      "id": "pp-789",
      "firstName": "Paweł",
      "lastName": "Neugebauer",
      "license": "789",
      "clubId": "club-25",
      "gender": "M",
      "category": "Senior",
      "points": 421.091,
      "strength": 8.847
    },
    {
      "id": "pp-1253",
      "firstName": "Iwona",
      "lastName": "Jeziorna",
      "license": "1253",
      "clubId": "club-43",
      "gender": "K",
      "category": "Senior",
      "points": 418.526,
      "strength": 6.173
    },
    {
      "id": "pp-1229",
      "firstName": "Jarosław",
      "lastName": "Fałek",
      "license": "1229",
      "clubId": "club-14",
      "gender": "M",
      "category": "Senior",
      "points": 413.685,
      "strength": 7.776
    },
    {
      "id": "pp-895",
      "firstName": "Andrzej",
      "lastName": "Żebrowski",
      "license": "895",
      "clubId": "club-23",
      "gender": "M",
      "category": "Veteran",
      "points": 412.73,
      "strength": 7.488
    },
    {
      "id": "pp-2201",
      "firstName": "Rafał",
      "lastName": "Danik",
      "license": "2201",
      "clubId": "club-26",
      "gender": "M",
      "category": "Senior",
      "points": 412.461,
      "strength": 4.638
    },
    {
      "id": "pp-2256",
      "firstName": "Anna",
      "lastName": "Długoń-Ryba",
      "license": "2256",
      "clubId": "club-32",
      "gender": "K",
      "category": "Veteran",
      "points": 411.94,
      "strength": 6.847
    },
    {
      "id": "pp-1685",
      "firstName": "Jakub",
      "lastName": "Milarski",
      "license": "1685",
      "clubId": "club-43",
      "gender": "M",
      "category": "Senior",
      "points": 397.595,
      "strength": 6.016
    },
    {
      "id": "pp-2574",
      "firstName": "Robert",
      "lastName": "Franciszkowski",
      "license": "2574",
      "clubId": "club-12",
      "gender": "M",
      "category": "Veteran",
      "points": 394.586,
      "strength": 5.994
    },
    {
      "id": "pp-1052",
      "firstName": "Aurelia",
      "lastName": "Libecka",
      "license": "1052",
      "clubId": "club-24",
      "gender": "K",
      "category": "Veteran",
      "points": 394.582,
      "strength": 5.249
    },
    {
      "id": "pp-1563",
      "firstName": "Grzegorz",
      "lastName": "Smoliński",
      "license": "1563",
      "clubId": "club-26",
      "gender": "M",
      "category": "Senior",
      "points": 393.246,
      "strength": 4.904
    },
    {
      "id": "pp-2311",
      "firstName": "Antoni",
      "lastName": "Repa",
      "license": "2311",
      "clubId": "club-39",
      "gender": "M",
      "category": "Veteran",
      "points": 388.587,
      "strength": 5.608
    },
    {
      "id": "pp-466",
      "firstName": "Przemysław",
      "lastName": "Rosiak",
      "license": "466",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 365.877,
      "strength": 4.15
    },
    {
      "id": "pp-1485",
      "firstName": "Anna",
      "lastName": "Grotthus",
      "license": "1485",
      "clubId": "club-20",
      "gender": "K",
      "category": "Veteran",
      "points": 362.0,
      "strength": 5.053
    },
    {
      "id": "pp-1501",
      "firstName": "Wiktor",
      "lastName": "Fałek",
      "license": "1501",
      "clubId": "club-14",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 361.717,
      "strength": 5.393
    },
    {
      "id": "pp-2006",
      "firstName": "Lena",
      "lastName": "Kozłowska",
      "license": "2006",
      "clubId": "club-25",
      "gender": "K",
      "category": "Młodzieżowiec",
      "points": 358.708,
      "strength": 3.538
    },
    {
      "id": "pp-549",
      "firstName": "Alicja",
      "lastName": "Kuncewicz-Kan",
      "license": "549",
      "clubId": "club-12",
      "gender": "K",
      "category": "Veteran",
      "points": 357.965,
      "strength": 5.566
    },
    {
      "id": "pp-540",
      "firstName": "Piotr",
      "lastName": "Wijas",
      "license": "540",
      "clubId": "club-44",
      "gender": "M",
      "category": "Senior",
      "points": 354.785,
      "strength": 4.498
    },
    {
      "id": "pp-723",
      "firstName": "Sławomir",
      "lastName": "Łuszczewski",
      "license": "723",
      "clubId": "club-5",
      "gender": "M",
      "category": "Veteran",
      "points": 353.305,
      "strength": 4.393
    },
    {
      "id": "pp-842",
      "firstName": "Daniel",
      "lastName": "Bagiński",
      "license": "842",
      "clubId": "club-23",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 351.004,
      "strength": 5.844
    },
    {
      "id": "pp-2032",
      "firstName": "Elżbieta",
      "lastName": "Dubiel",
      "license": "2032",
      "clubId": "club-17",
      "gender": "K",
      "category": "Veteran",
      "points": 350.749,
      "strength": 5.093
    },
    {
      "id": "pp-1572",
      "firstName": "Janusz",
      "lastName": "Korniowski",
      "license": "1572",
      "clubId": "club-22",
      "gender": "M",
      "category": "Veteran",
      "points": 348.423,
      "strength": 8.232
    },
    {
      "id": "pp-463",
      "firstName": "Artur",
      "lastName": "Skórzak",
      "license": "463",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 343.564,
      "strength": 4.728
    },
    {
      "id": "pp-1927",
      "firstName": "Jacek",
      "lastName": "Linder",
      "license": "1927",
      "clubId": "club-45",
      "gender": "M",
      "category": "Senior",
      "points": 343.013,
      "strength": 4.788
    },
    {
      "id": "pp-2432",
      "firstName": "Michał",
      "lastName": "Czyż",
      "license": "2432",
      "clubId": "club-13",
      "gender": "M",
      "category": "Senior",
      "points": 338.101,
      "strength": 4.552
    },
    {
      "id": "pp-2375",
      "firstName": "Eryk",
      "lastName": "Skórzak",
      "license": "2375",
      "clubId": "club-49",
      "gender": "M",
      "category": "Junior",
      "points": 335.648,
      "strength": 4.65
    },
    {
      "id": "pp-1801",
      "firstName": "Teresa",
      "lastName": "Mierzejewska",
      "license": "1801",
      "clubId": "club-22",
      "gender": "K",
      "category": "Veteran",
      "points": 333.639,
      "strength": 10.454
    },
    {
      "id": "pp-1800",
      "firstName": "Alojzy",
      "lastName": "Żynda",
      "license": "1800",
      "clubId": "club-22",
      "gender": "M",
      "category": "Veteran",
      "points": 333.639,
      "strength": 10.454
    },
    {
      "id": "pp-1409",
      "firstName": "Ryszard",
      "lastName": "Czarnecki",
      "license": "1409",
      "clubId": "club-43",
      "gender": "M",
      "category": "Veteran",
      "points": 328.21,
      "strength": 4.157
    },
    {
      "id": "pp-1843",
      "firstName": "Iwona",
      "lastName": "Łanowska",
      "license": "1843",
      "clubId": "club-25",
      "gender": "K",
      "category": "Veteran",
      "points": 325.998,
      "strength": 7.47
    },
    {
      "id": "pp-2224",
      "firstName": "Łukasz",
      "lastName": "Mrózek",
      "license": "2224",
      "clubId": "club-35",
      "gender": "M",
      "category": "Senior",
      "points": 324.608,
      "strength": 6.624
    },
    {
      "id": "pp-1675",
      "firstName": "Chameseddine",
      "lastName": "Gharbi",
      "license": "1675",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 321.688,
      "strength": 3.18
    },
    {
      "id": "pp-2427",
      "firstName": "Teresa",
      "lastName": "Kuźma",
      "license": "2427",
      "clubId": "club-17",
      "gender": "K",
      "category": "Veteran",
      "points": 321.011,
      "strength": 4.726
    },
    {
      "id": "pp-1529",
      "firstName": "Wiesław",
      "lastName": "Stasica",
      "license": "1529",
      "clubId": "club-2",
      "gender": "M",
      "category": "Veteran",
      "points": 314.615,
      "strength": 3.365
    },
    {
      "id": "pp-1815",
      "firstName": "Maciej",
      "lastName": "Pisarczyk",
      "license": "1815",
      "clubId": "club-45",
      "gender": "M",
      "category": "Senior",
      "points": 310.198,
      "strength": 5.578
    },
    {
      "id": "pp-1656",
      "firstName": "Barbara",
      "lastName": "Smolińska",
      "license": "1656",
      "clubId": "club-16",
      "gender": "K",
      "category": "Senior",
      "points": 305.66,
      "strength": 2.038
    },
    {
      "id": "pp-1",
      "firstName": "Bogusław",
      "lastName": "Zając",
      "license": "1",
      "clubId": "club-20",
      "gender": "M",
      "category": "Veteran",
      "points": 302.059,
      "strength": 4.47
    },
    {
      "id": "pp-832",
      "firstName": "Rafał",
      "lastName": "Kilian",
      "license": "832",
      "clubId": "club-16",
      "gender": "M",
      "category": "Veteran",
      "points": 296.334,
      "strength": 6.17
    },
    {
      "id": "pp-2424",
      "firstName": "Kacper",
      "lastName": "Pląskowski",
      "license": "2424",
      "clubId": "club-29",
      "gender": "M",
      "category": "Senior",
      "points": 290.224,
      "strength": 3.463
    },
    {
      "id": "pp-2443",
      "firstName": "Igor",
      "lastName": "Wezdecki",
      "license": "2443",
      "clubId": "club-19",
      "gender": "M",
      "category": "Senior",
      "points": 283.507,
      "strength": 4.528
    },
    {
      "id": "pp-1007",
      "firstName": "Małgorzata",
      "lastName": "Kołodziej",
      "license": "1007",
      "clubId": "club-39",
      "gender": "K",
      "category": "Senior",
      "points": 275.292,
      "strength": 2.421
    },
    {
      "id": "pp-2376",
      "firstName": "Robert",
      "lastName": "Pabis",
      "license": "2376",
      "clubId": "club-27",
      "gender": "M",
      "category": "Senior",
      "points": 271.376,
      "strength": 7.142
    },
    {
      "id": "pp-294",
      "firstName": "Bartłomiej",
      "lastName": "Zagdan",
      "license": "294",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 266.212,
      "strength": 3.171
    },
    {
      "id": "pp-2381",
      "firstName": "Maciej",
      "lastName": "Wróblewski",
      "license": "2381",
      "clubId": "club-16",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 265.368,
      "strength": 4.689
    },
    {
      "id": "pp-1252",
      "firstName": "Marcin",
      "lastName": "Jeziorny",
      "license": "1252",
      "clubId": "club-36",
      "gender": "M",
      "category": "Veteran",
      "points": 263.528,
      "strength": 3.564
    },
    {
      "id": "pp-1410",
      "firstName": "Eugeniusz",
      "lastName": "Wower",
      "license": "1410",
      "clubId": "club-43",
      "gender": "M",
      "category": "Veteran",
      "points": 262.65,
      "strength": 3.779
    },
    {
      "id": "pp-597",
      "firstName": "Rafał",
      "lastName": "Teufel",
      "license": "597",
      "clubId": "club-39",
      "gender": "M",
      "category": "Senior",
      "points": 257.665,
      "strength": 3.6
    },
    {
      "id": "pp-2031",
      "firstName": "Eugeniusz",
      "lastName": "Góralski",
      "license": "2031",
      "clubId": "club-18",
      "gender": "M",
      "category": "Veteran",
      "points": 256.854,
      "strength": 5.188
    },
    {
      "id": "pp-2332",
      "firstName": "Wojciech",
      "lastName": "Konończuk",
      "license": "2332",
      "clubId": "club-6",
      "gender": "M",
      "category": "Senior",
      "points": 251.966,
      "strength": 4.004
    },
    {
      "id": "pp-2321",
      "firstName": "Lucyna",
      "lastName": "Korczyc",
      "license": "2321",
      "clubId": "club-29",
      "gender": "K",
      "category": "Veteran",
      "points": 251.243,
      "strength": 3.652
    },
    {
      "id": "pp-606",
      "firstName": "Tadeusz",
      "lastName": "Obuchowski",
      "license": "606",
      "clubId": "club-24",
      "gender": "M",
      "category": "Veteran",
      "points": 250.377,
      "strength": 3.357
    },
    {
      "id": "pp-1687",
      "firstName": "Ryszard",
      "lastName": "Retta",
      "license": "1687",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 249.102,
      "strength": 4.163
    },
    {
      "id": "pp-719",
      "firstName": "Maria",
      "lastName": "Szulc-Hess",
      "license": "719",
      "clubId": "club-3",
      "gender": "K",
      "category": "Senior",
      "points": 249.017,
      "strength": 3.583
    },
    {
      "id": "pp-1408",
      "firstName": "Lidia",
      "lastName": "Czarnecka",
      "license": "1408",
      "clubId": "club-43",
      "gender": "K",
      "category": "Veteran",
      "points": 247.413,
      "strength": 3.157
    },
    {
      "id": "pp-1921",
      "firstName": "Rafał",
      "lastName": "Kalinowski",
      "license": "1921",
      "clubId": "club-32",
      "gender": "M",
      "category": "Veteran",
      "points": 244.742,
      "strength": 2.392
    },
    {
      "id": "pp-2221",
      "firstName": "Halina",
      "lastName": "Wrigley",
      "license": "2221",
      "clubId": "club-22",
      "gender": "K",
      "category": "Veteran",
      "points": 244.454,
      "strength": 9.936
    },
    {
      "id": "pp-2429",
      "firstName": "Marcin",
      "lastName": "Kanclerz",
      "license": "2429",
      "clubId": "club-27",
      "gender": "M",
      "category": "Senior",
      "points": 243.232,
      "strength": 3.916
    },
    {
      "id": "pp-501",
      "firstName": "Artur",
      "lastName": "Pacześniak",
      "license": "501",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 238.216,
      "strength": 4.46
    },
    {
      "id": "pp-2445",
      "firstName": "Jerzy",
      "lastName": "Granas",
      "license": "2445",
      "clubId": "club-27",
      "gender": "M",
      "category": "Senior",
      "points": 235.676,
      "strength": 4.138
    },
    {
      "id": "pp-2213",
      "firstName": "Thomas",
      "lastName": "Kuker",
      "license": "2213",
      "clubId": "club-31",
      "gender": "M",
      "category": "Veteran",
      "points": 234.738,
      "strength": 3.553
    },
    {
      "id": "pp-1869",
      "firstName": "Daniel",
      "lastName": "Chromik",
      "license": "1869",
      "clubId": "club-22",
      "gender": "M",
      "category": "Senior",
      "points": 234.513,
      "strength": 5.055
    },
    {
      "id": "pp-1868",
      "firstName": "Grzegorz",
      "lastName": "Chromik",
      "license": "1868",
      "clubId": "club-22",
      "gender": "M",
      "category": "Senior",
      "points": 234.513,
      "strength": 5.055
    },
    {
      "id": "pp-421",
      "firstName": "Urszula",
      "lastName": "Wilk",
      "license": "421",
      "clubId": "club-11",
      "gender": "K",
      "category": "Veteran",
      "points": 234.03,
      "strength": 3.774
    },
    {
      "id": "pp-2346",
      "firstName": "Mikołaj",
      "lastName": "Meksuła",
      "license": "2346",
      "clubId": "club-18",
      "gender": "M",
      "category": "Junior",
      "points": 233.122,
      "strength": 5.161
    },
    {
      "id": "pp-2307",
      "firstName": "Robert",
      "lastName": "Trzciński",
      "license": "2307",
      "clubId": "club-47",
      "gender": "M",
      "category": "Junior",
      "points": 231.76,
      "strength": 3.705
    },
    {
      "id": "pp-2222",
      "firstName": "Maria",
      "lastName": "Paczuska",
      "license": "2222",
      "clubId": "club-22",
      "gender": "K",
      "category": "Veteran",
      "points": 229.477,
      "strength": 6.497
    },
    {
      "id": "pp-588",
      "firstName": "Andrzej",
      "lastName": "Włodarczyk",
      "license": "588",
      "clubId": "club-25",
      "gender": "M",
      "category": "Veteran",
      "points": 227.751,
      "strength": 4.107
    },
    {
      "id": "pp-1161",
      "firstName": "Ernest",
      "lastName": "Schmidt",
      "license": "1161",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 226.338,
      "strength": 2.922
    },
    {
      "id": "pp-2187",
      "firstName": "Krystian",
      "lastName": "Piotrowicz",
      "license": "2187",
      "clubId": "club-46",
      "gender": "M",
      "category": "Senior",
      "points": 224.304,
      "strength": 5.215
    },
    {
      "id": "pp-1878",
      "firstName": "Gabriela",
      "lastName": "Adamczyk",
      "license": "1878",
      "clubId": "club-38",
      "gender": "K",
      "category": "Junior",
      "points": 220.326,
      "strength": 3.232
    },
    {
      "id": "pp-2430",
      "firstName": "Piotr",
      "lastName": "Rębisz",
      "license": "2430",
      "clubId": "club-1",
      "gender": "M",
      "category": "Veteran",
      "points": 218.401,
      "strength": 3.365
    },
    {
      "id": "pp-2319",
      "firstName": "Jolanta",
      "lastName": "Truszkowska",
      "license": "2319",
      "clubId": "club-25",
      "gender": "K",
      "category": "Veteran",
      "points": 213.002,
      "strength": 4.503
    },
    {
      "id": "pp-2058",
      "firstName": "Tadeusz",
      "lastName": "Wiśniewski",
      "license": "2058",
      "clubId": "club-32",
      "gender": "M",
      "category": "Veteran",
      "points": 211.088,
      "strength": 3.486
    },
    {
      "id": "pp-2154",
      "firstName": "Katarzyna",
      "lastName": "Klukowska",
      "license": "2154",
      "clubId": "club-14",
      "gender": "K",
      "category": "Senior",
      "points": 209.329,
      "strength": 3.275
    },
    {
      "id": "pp-1958",
      "firstName": "Tomasz",
      "lastName": "Cisak",
      "license": "1958",
      "clubId": "club-14",
      "gender": "M",
      "category": "Senior",
      "points": 207.158,
      "strength": 3.486
    },
    {
      "id": "pp-156",
      "firstName": "Krzysztof",
      "lastName": "Krot",
      "license": "156",
      "clubId": "club-3",
      "gender": "M",
      "category": "Senior",
      "points": 202.518,
      "strength": 2.444
    },
    {
      "id": "pp-2557",
      "firstName": "Łukasz",
      "lastName": "Basiński",
      "license": "2557",
      "clubId": "club-29",
      "gender": "M",
      "category": "Senior",
      "points": 202.012,
      "strength": 2.599
    },
    {
      "id": "pp-2191",
      "firstName": "Leszek",
      "lastName": "Banaś",
      "license": "2191",
      "clubId": "club-10",
      "gender": "M",
      "category": "Veteran",
      "points": 195.974,
      "strength": 2.76
    },
    {
      "id": "pp-1954",
      "firstName": "Marek",
      "lastName": "Felenberg",
      "license": "1954",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 195.184,
      "strength": 2.818
    },
    {
      "id": "pp-2211",
      "firstName": "Tomasz",
      "lastName": "Baranowski",
      "license": "2211",
      "clubId": "club-18",
      "gender": "M",
      "category": "Senior",
      "points": 195.09,
      "strength": 4.887
    },
    {
      "id": "pp-679",
      "firstName": "Jacek",
      "lastName": "Neczyński",
      "license": "679",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 189.295,
      "strength": 2.381
    },
    {
      "id": "pp-462",
      "firstName": "Paweł",
      "lastName": "Luty",
      "license": "462",
      "clubId": "club-19",
      "gender": "M",
      "category": "Senior",
      "points": 189.157,
      "strength": 3.183
    },
    {
      "id": "pp-1411",
      "firstName": "Jadwiga",
      "lastName": "Mikołajczak",
      "license": "1411",
      "clubId": "club-5",
      "gender": "K",
      "category": "Veteran",
      "points": 182.745,
      "strength": 2.431
    },
    {
      "id": "pp-2085",
      "firstName": "Grażyna",
      "lastName": "Złotowska",
      "license": "2085",
      "clubId": "club-24",
      "gender": "K",
      "category": "Veteran",
      "points": 175.409,
      "strength": 2.394
    },
    {
      "id": "pp-2440",
      "firstName": "Antoni",
      "lastName": "Wacławczyk",
      "license": "2440",
      "clubId": "club-22",
      "gender": "M",
      "category": "Senior",
      "points": 174.455,
      "strength": 5.332
    },
    {
      "id": "pp-2223",
      "firstName": "Piotr",
      "lastName": "Szelong",
      "license": "2223",
      "clubId": "club-22",
      "gender": "M",
      "category": "Veteran",
      "points": 172.644,
      "strength": 6.049
    },
    {
      "id": "pp-1407",
      "firstName": "Grzegorz",
      "lastName": "Koczur",
      "license": "1407",
      "clubId": "club-43",
      "gender": "M",
      "category": "Veteran",
      "points": 170.677,
      "strength": 2.172
    },
    {
      "id": "pp-2447",
      "firstName": "Michał",
      "lastName": "Rakowski",
      "license": "2447",
      "clubId": "club-3",
      "gender": "M",
      "category": "Senior",
      "points": 167.583,
      "strength": 2.023
    },
    {
      "id": "pp-2322",
      "firstName": "Wiesław Sławomir",
      "lastName": "Korczyc",
      "license": "2322",
      "clubId": "club-29",
      "gender": "M",
      "category": "Veteran",
      "points": 167.129,
      "strength": 2.525
    },
    {
      "id": "pp-1181",
      "firstName": "Sebastian",
      "lastName": "Pawlak",
      "license": "1181",
      "clubId": "club-44",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 161.89,
      "strength": 2.031
    },
    {
      "id": "pp-2270",
      "firstName": "Michał",
      "lastName": "Farjaszewski",
      "license": "2270",
      "clubId": "club-25",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 161.82,
      "strength": 3.222
    },
    {
      "id": "pp-512",
      "firstName": "Mateusz",
      "lastName": "Bartkowiak",
      "license": "512",
      "clubId": "club-5",
      "gender": "M",
      "category": "Senior",
      "points": 161.354,
      "strength": 2.287
    },
    {
      "id": "pp-534",
      "firstName": "Dawid",
      "lastName": "Wojciechowski",
      "license": "534",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 157.086,
      "strength": 2.538
    },
    {
      "id": "pp-69",
      "firstName": "Marek",
      "lastName": "Bąba",
      "license": "69",
      "clubId": "club-39",
      "gender": "M",
      "category": "Veteran",
      "points": 156.478,
      "strength": 2.747
    },
    {
      "id": "pp-2198",
      "firstName": "Talha",
      "lastName": "Haroon",
      "license": "2198",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 155.704,
      "strength": 2.194
    },
    {
      "id": "pp-1149",
      "firstName": "Szymon",
      "lastName": "Teufel",
      "license": "1149",
      "clubId": "club-38",
      "gender": "M",
      "category": "Junior",
      "points": 152.877,
      "strength": 2.116
    },
    {
      "id": "pp-2249",
      "firstName": "Lech",
      "lastName": "Charkiewicz",
      "license": "2249",
      "clubId": "club-6",
      "gender": "M",
      "category": "Veteran",
      "points": 149.62,
      "strength": 2.508
    },
    {
      "id": "pp-1524",
      "firstName": "Wiesław",
      "lastName": "Boguń",
      "license": "1524",
      "clubId": "club-48",
      "gender": "M",
      "category": "Veteran",
      "points": 148.674,
      "strength": 2.73
    },
    {
      "id": "pp-1865",
      "firstName": "Stanisław",
      "lastName": "Koczur",
      "license": "1865",
      "clubId": "club-43",
      "gender": "M",
      "category": "Junior",
      "points": 146.004,
      "strength": 1.957
    },
    {
      "id": "pp-2417",
      "firstName": "Wiktoria",
      "lastName": "Becella",
      "license": "2417",
      "clubId": "club-29",
      "gender": "K",
      "category": "Junior",
      "points": 146.004,
      "strength": 1.105
    },
    {
      "id": "pp-2300",
      "firstName": "Urszula",
      "lastName": "Banaś",
      "license": "2300",
      "clubId": "club-10",
      "gender": "K",
      "category": "Senior",
      "points": 144.103,
      "strength": 2.035
    },
    {
      "id": "pp-2347",
      "firstName": "Julia",
      "lastName": "Meksuła",
      "license": "2347",
      "clubId": "club-18",
      "gender": "K",
      "category": "Junior",
      "points": 141.239,
      "strength": 2.796
    },
    {
      "id": "pp-1729",
      "firstName": "Waldemar",
      "lastName": "Kałużny",
      "license": "1729",
      "clubId": "club-10",
      "gender": "M",
      "category": "Senior",
      "points": 135.473,
      "strength": 1.677
    },
    {
      "id": "pp-2441",
      "firstName": "Karol",
      "lastName": "Górski",
      "license": "2441",
      "clubId": "club-26",
      "gender": "M",
      "category": "Senior",
      "points": 130.285,
      "strength": 1.512
    },
    {
      "id": "pp-2403",
      "firstName": "Andrzej",
      "lastName": "Antkowiak",
      "license": "2403",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 129.853,
      "strength": 1.709
    },
    {
      "id": "pp-519",
      "firstName": "Janusz",
      "lastName": "Małaszczuk",
      "license": "519",
      "clubId": "club-5",
      "gender": "M",
      "category": "Veteran",
      "points": 124.999,
      "strength": 2.043
    },
    {
      "id": "pp-2225",
      "firstName": "Roman",
      "lastName": "Denisiuk",
      "license": "2225",
      "clubId": "club-18",
      "gender": "M",
      "category": "Senior",
      "points": 122.715,
      "strength": 2.02
    },
    {
      "id": "pp-1232",
      "firstName": "Dariusz",
      "lastName": "Mariampolski",
      "license": "1232",
      "clubId": "club-29",
      "gender": "M",
      "category": "Senior",
      "points": 119.688,
      "strength": 1.942
    },
    {
      "id": "pp-2239",
      "firstName": "Daniel",
      "lastName": "Wąsowicz",
      "license": "2239",
      "clubId": "club-15",
      "gender": "M",
      "category": "Senior",
      "points": 119.318,
      "strength": 1.656
    },
    {
      "id": "pp-2294",
      "firstName": "Leon",
      "lastName": "Markiewicz",
      "license": "2294",
      "clubId": "club-49",
      "gender": "M",
      "category": "Junior",
      "points": 114.543,
      "strength": 1.132
    },
    {
      "id": "pp-2186",
      "firstName": "Nikodem",
      "lastName": "Piotrowicz",
      "license": "2186",
      "clubId": "club-46",
      "gender": "M",
      "category": "Junior",
      "points": 109.963,
      "strength": 2.532
    },
    {
      "id": "pp-1286",
      "firstName": "Dawid",
      "lastName": "Olszewski",
      "license": "1286",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 109.09,
      "strength": 1.832
    },
    {
      "id": "pp-2240",
      "firstName": "Tomasz",
      "lastName": "Janowski",
      "license": "2240",
      "clubId": "club-15",
      "gender": "M",
      "category": "Senior",
      "points": 108.585,
      "strength": 1.687
    },
    {
      "id": "pp-2208",
      "firstName": "Anna",
      "lastName": "Wąsak",
      "license": "2208",
      "clubId": "club-18",
      "gender": "K",
      "category": "Veteran",
      "points": 108.22,
      "strength": 0.822
    },
    {
      "id": "pp-2189",
      "firstName": "Krystian",
      "lastName": "Kałużny",
      "license": "2189",
      "clubId": "club-10",
      "gender": "M",
      "category": "Senior",
      "points": 104.804,
      "strength": 1.263
    },
    {
      "id": "pp-2406",
      "firstName": "Hanna",
      "lastName": "Sobczyk",
      "license": "2406",
      "clubId": "club-1",
      "gender": "K",
      "category": "Młodzieżowiec",
      "points": 104.278,
      "strength": 1.865
    },
    {
      "id": "pp-1996",
      "firstName": "Alina",
      "lastName": "Kłak",
      "license": "1996",
      "clubId": "club-27",
      "gender": "K",
      "category": "Senior",
      "points": 103.536,
      "strength": 1.439
    },
    {
      "id": "pp-858",
      "firstName": "Robert",
      "lastName": "Wielebski",
      "license": "858",
      "clubId": "club-29",
      "gender": "M",
      "category": "Veteran",
      "points": 103.225,
      "strength": 2.05
    },
    {
      "id": "pp-2436",
      "firstName": "Bartłomiej",
      "lastName": "Ogrodnik",
      "license": "2436",
      "clubId": "club-13",
      "gender": "M",
      "category": "Senior",
      "points": 103.044,
      "strength": 1.39
    },
    {
      "id": "pp-2119",
      "firstName": "Renata",
      "lastName": "Kwiatkowska",
      "license": "2119",
      "clubId": "club-18",
      "gender": "K",
      "category": "Veteran",
      "points": 101.887,
      "strength": 0.679
    },
    {
      "id": "pp-1425",
      "firstName": "Agnieszka",
      "lastName": "Suwińska",
      "license": "1425",
      "clubId": "club-16",
      "gender": "K",
      "category": "Senior",
      "points": 101.887,
      "strength": 0.679
    },
    {
      "id": "pp-2444",
      "firstName": "Patryk",
      "lastName": "Bączkiewicz",
      "license": "2444",
      "clubId": "club-47",
      "gender": "M",
      "category": "Junior",
      "points": 100.951,
      "strength": 1.614
    },
    {
      "id": "pp-1707",
      "firstName": "Stanisław",
      "lastName": "Mokwa",
      "license": "1707",
      "clubId": "club-48",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 100.655,
      "strength": 1.812
    },
    {
      "id": "pp-1897",
      "firstName": "Marek",
      "lastName": "Kotulski",
      "license": "1897",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 98.93,
      "strength": 1.515
    },
    {
      "id": "pp-1214",
      "firstName": "Julita",
      "lastName": "Sasin",
      "license": "1214",
      "clubId": "club-16",
      "gender": "K",
      "category": "Veteran",
      "points": 98.787,
      "strength": 1.857
    },
    {
      "id": "pp-2448",
      "firstName": "Marcin",
      "lastName": "Ścierski",
      "license": "2448",
      "clubId": "club-3",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 98.772,
      "strength": 1.37
    },
    {
      "id": "pp-1975",
      "firstName": "Stanisław",
      "lastName": "Szlagor",
      "license": "1975",
      "clubId": "club-39",
      "gender": "M",
      "category": "Veteran",
      "points": 94.465,
      "strength": 2.168
    },
    {
      "id": "pp-1262",
      "firstName": "Marek",
      "lastName": "Mikołajczyk",
      "license": "1262",
      "clubId": "club-29",
      "gender": "M",
      "category": "Veteran",
      "points": 93.16,
      "strength": 1.248
    },
    {
      "id": "pp-2210",
      "firstName": "Tomasz",
      "lastName": "Sternik",
      "license": "2210",
      "clubId": "club-18",
      "gender": "M",
      "category": "Veteran",
      "points": 90.75,
      "strength": 2.197
    },
    {
      "id": "pp-208",
      "firstName": "Patrycja",
      "lastName": "Szczygielska",
      "license": "208",
      "clubId": "club-49",
      "gender": "K",
      "category": "Senior",
      "points": 90.37,
      "strength": 0.893
    },
    {
      "id": "pp-2435",
      "firstName": "Piotr",
      "lastName": "Muszyński",
      "license": "2435",
      "clubId": "club-13",
      "gender": "M",
      "category": "Senior",
      "points": 89.511,
      "strength": 1.131
    },
    {
      "id": "pp-2065",
      "firstName": "Vsevolod",
      "lastName": "Milman",
      "license": "2065",
      "clubId": "club-9",
      "gender": "M",
      "category": "Senior",
      "points": 88.119,
      "strength": 1.685
    },
    {
      "id": "pp-1682",
      "firstName": "Maciej",
      "lastName": "Sikorski",
      "license": "1682",
      "clubId": "club-43",
      "gender": "M",
      "category": "Veteran",
      "points": 84.763,
      "strength": 1.232
    },
    {
      "id": "pp-1259",
      "firstName": "Szymon",
      "lastName": "Sławiński",
      "license": "1259",
      "clubId": "club-29",
      "gender": "M",
      "category": "Senior",
      "points": 84.201,
      "strength": 1.789
    },
    {
      "id": "pp-853",
      "firstName": "Oskar",
      "lastName": "Decc",
      "license": "853",
      "clubId": "club-23",
      "gender": "M",
      "category": "Senior",
      "points": 83.183,
      "strength": 1.358
    },
    {
      "id": "pp-214",
      "firstName": "Marek",
      "lastName": "Stopczyński",
      "license": "214",
      "clubId": "club-16",
      "gender": "M",
      "category": "Veteran",
      "points": 82.823,
      "strength": 1.33
    },
    {
      "id": "pp-1570",
      "firstName": "Barbara",
      "lastName": "Skowrońska",
      "license": "1570",
      "clubId": "club-22",
      "gender": "K",
      "category": "Veteran",
      "points": 82.797,
      "strength": 2.663
    },
    {
      "id": "pp-901",
      "firstName": "Hubert",
      "lastName": "Kilian",
      "license": "901",
      "clubId": "club-16",
      "gender": "M",
      "category": "Senior",
      "points": 81.477,
      "strength": 1.714
    },
    {
      "id": "pp-1886",
      "firstName": "Anna",
      "lastName": "Piwońska",
      "license": "1886",
      "clubId": "club-43",
      "gender": "K",
      "category": "Veteran",
      "points": 79.535,
      "strength": 1.009
    },
    {
      "id": "pp-1472",
      "firstName": "Krzysztof",
      "lastName": "Kawczyński",
      "license": "1472",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 77.599,
      "strength": 1.166
    },
    {
      "id": "pp-1467",
      "firstName": "Henryk",
      "lastName": "Łuczak",
      "license": "1467",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 74.292,
      "strength": 1.031
    },
    {
      "id": "pp-2312",
      "firstName": "Oleksandr",
      "lastName": "Slonimskyi",
      "license": "2312",
      "clubId": "club-38",
      "gender": "M",
      "category": "Junior",
      "points": 72.845,
      "strength": 1.238
    },
    {
      "id": "pp-1525",
      "firstName": "Adrian",
      "lastName": "Wyczling",
      "license": "1525",
      "clubId": "club-48",
      "gender": "M",
      "category": "Senior",
      "points": 70.038,
      "strength": 1.125
    },
    {
      "id": "pp-2302",
      "firstName": "Oliwia",
      "lastName": "Smolińska",
      "license": "2302",
      "clubId": "club-26",
      "gender": "K",
      "category": "Junior",
      "points": 68.793,
      "strength": 0.761
    },
    {
      "id": "pp-1258",
      "firstName": "Wojciech",
      "lastName": "Walczak",
      "license": "1258",
      "clubId": "club-29",
      "gender": "M",
      "category": "Veteran",
      "points": 66.585,
      "strength": 0.913
    },
    {
      "id": "pp-2582",
      "firstName": "Karol",
      "lastName": "Gastal",
      "license": "2582",
      "clubId": "club-20",
      "gender": "M",
      "category": "Junior",
      "points": 62.06,
      "strength": 1.246
    },
    {
      "id": "pp-2584",
      "firstName": "Guillaume",
      "lastName": "Gastal",
      "license": "2584",
      "clubId": "club-20",
      "gender": "M",
      "category": "Senior",
      "points": 62.06,
      "strength": 1.246
    },
    {
      "id": "pp-2419",
      "firstName": "Piotr",
      "lastName": "Jeliński",
      "license": "2419",
      "clubId": "club-7",
      "gender": "M",
      "category": "Senior",
      "points": 61.084,
      "strength": 0.774
    },
    {
      "id": "pp-1452",
      "firstName": "Hanna Sława",
      "lastName": "Malesińska",
      "license": "1452",
      "clubId": "club-43",
      "gender": "K",
      "category": "Veteran",
      "points": 60.545,
      "strength": 0.88
    },
    {
      "id": "pp-2350",
      "firstName": "Bożenna",
      "lastName": "Bielaszewska",
      "license": "2350",
      "clubId": "club-18",
      "gender": "K",
      "category": "Veteran",
      "points": 60.435,
      "strength": 1.436
    },
    {
      "id": "pp-1688",
      "firstName": "Maria",
      "lastName": "Skórzewska",
      "license": "1688",
      "clubId": "club-15",
      "gender": "K",
      "category": "Veteran",
      "points": 60.094,
      "strength": 1.017
    },
    {
      "id": "pp-1689",
      "firstName": "Henryk",
      "lastName": "Skórzewski",
      "license": "1689",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 60.094,
      "strength": 1.017
    },
    {
      "id": "pp-2410",
      "firstName": "Mikołaj",
      "lastName": "Szurman",
      "license": "2410",
      "clubId": "club-29",
      "gender": "M",
      "category": "Junior",
      "points": 60.071,
      "strength": 0.779
    },
    {
      "id": "pp-2431",
      "firstName": "Cezary",
      "lastName": "Bardzyński",
      "license": "2431",
      "clubId": "club-13",
      "gender": "M",
      "category": "Veteran",
      "points": 49.466,
      "strength": 0.608
    },
    {
      "id": "pp-1728",
      "firstName": "Adam",
      "lastName": "Kromka",
      "license": "1728",
      "clubId": "club-25",
      "gender": "M",
      "category": "Senior",
      "points": 48.272,
      "strength": 0.989
    },
    {
      "id": "pp-2371",
      "firstName": "Grzegorz",
      "lastName": "Kowalski",
      "license": "2371",
      "clubId": "club-49",
      "gender": "M",
      "category": "Junior",
      "points": 48.004,
      "strength": 0.808
    },
    {
      "id": "pp-2112",
      "firstName": "Krzysztof",
      "lastName": "Gacek",
      "license": "2112",
      "clubId": "club-22",
      "gender": "M",
      "category": "Veteran",
      "points": 47.476,
      "strength": 2.537
    },
    {
      "id": "pp-2583",
      "firstName": "Aleksandra",
      "lastName": "Grabowska",
      "license": "2583",
      "clubId": "club-20",
      "gender": "K",
      "category": "Senior",
      "points": 42.415,
      "strength": 0.851
    },
    {
      "id": "pp-1860",
      "firstName": "Krzysztof",
      "lastName": "Ptak",
      "license": "1860",
      "clubId": "club-22",
      "gender": "M",
      "category": "Senior",
      "points": 40.748,
      "strength": 1.355
    },
    {
      "id": "pp-779",
      "firstName": "Henryk",
      "lastName": "Kutny",
      "license": "779",
      "clubId": "club-29",
      "gender": "M",
      "category": "Veteran",
      "points": 38.884,
      "strength": 0.521
    },
    {
      "id": "pp-2134",
      "firstName": "Zygmunt",
      "lastName": "Michalewski",
      "license": "2134",
      "clubId": "club-29",
      "gender": "M",
      "category": "Veteran",
      "points": 38.884,
      "strength": 0.521
    },
    {
      "id": "pp-1919",
      "firstName": "Jadwiga",
      "lastName": "Walczak",
      "license": "1919",
      "clubId": "club-1",
      "gender": "K",
      "category": "Veteran",
      "points": 37.849,
      "strength": 0.72
    },
    {
      "id": "pp-2303",
      "firstName": "Alicja",
      "lastName": "Wójcik",
      "license": "2303",
      "clubId": "club-26",
      "gender": "K",
      "category": "Junior",
      "points": 36.378,
      "strength": 0.389
    },
    {
      "id": "pp-2391",
      "firstName": "Mateusz",
      "lastName": "Mazur",
      "license": "2391",
      "clubId": "club-19",
      "gender": "M",
      "category": "Senior",
      "points": 34.979,
      "strength": 0.714
    },
    {
      "id": "pp-2579",
      "firstName": "Kamil",
      "lastName": "Łogasz",
      "license": "2579",
      "clubId": "club-32",
      "gender": "M",
      "category": "Junior",
      "points": 33.771,
      "strength": 0.667
    },
    {
      "id": "pp-2272",
      "firstName": "Janina",
      "lastName": "Ryba",
      "license": "2272",
      "clubId": "club-20",
      "gender": "K",
      "category": "Veteran",
      "points": 32.741,
      "strength": 0.526
    },
    {
      "id": "pp-2326",
      "firstName": "Zbigniew",
      "lastName": "Kłaczek",
      "license": "2326",
      "clubId": "club-24",
      "gender": "M",
      "category": "Veteran",
      "points": 32.327,
      "strength": 0.333
    },
    {
      "id": "pp-2265",
      "firstName": "Jerzy",
      "lastName": "Juda",
      "license": "2265",
      "clubId": "club-32",
      "gender": "M",
      "category": "Veteran",
      "points": 26.177,
      "strength": 0.522
    },
    {
      "id": "pp-1239",
      "firstName": "Maria",
      "lastName": "Stachowiak",
      "license": "1239",
      "clubId": "club-36",
      "gender": "K",
      "category": "Veteran",
      "points": 21.093,
      "strength": 0.287
    },
    {
      "id": "pp-2442",
      "firstName": "Amelia",
      "lastName": "Derlatko",
      "license": "2442",
      "clubId": "club-29",
      "gender": "K",
      "category": "Junior",
      "points": 19.442,
      "strength": 0.261
    },
    {
      "id": "pp-2352",
      "firstName": "Katarzyna",
      "lastName": "Karczmarz",
      "license": "2352",
      "clubId": "club-18",
      "gender": "K",
      "category": "Junior",
      "points": 18.999,
      "strength": 0.429
    },
    {
      "id": "pp-2286",
      "firstName": "Piotr",
      "lastName": "Roni",
      "license": "2286",
      "clubId": "club-39",
      "gender": "M",
      "category": "Junior",
      "points": 15.521,
      "strength": 0.364
    },
    {
      "id": "pp-2451",
      "firstName": "Michał",
      "lastName": "Jarmondowicz",
      "license": "2451",
      "clubId": "club-46",
      "gender": "M",
      "category": "Senior",
      "points": 15.209,
      "strength": 0.261
    },
    {
      "id": "pp-2177",
      "firstName": "Zuzanna",
      "lastName": "Zięba",
      "license": "2177",
      "clubId": "club-38",
      "gender": "K",
      "category": "Junior",
      "points": 13.467,
      "strength": 0.143
    },
    {
      "id": "pp-1992",
      "firstName": "Wiktoria",
      "lastName": "Balinka",
      "license": "1992",
      "clubId": "club-38",
      "gender": "K",
      "category": "Junior",
      "points": 13.467,
      "strength": 0.143
    },
    {
      "id": "pp-2292",
      "firstName": "Bruno",
      "lastName": "Banaszkiewicz",
      "license": "2292",
      "clubId": "club-49",
      "gender": "M",
      "category": "Junior",
      "points": 11.504,
      "strength": 0.231
    },
    {
      "id": "pp-2237",
      "firstName": "Cezary",
      "lastName": "Suchanecki",
      "license": "2237",
      "clubId": "club-15",
      "gender": "M",
      "category": "Senior",
      "points": 9.789,
      "strength": 0.138
    },
    {
      "id": "pp-2241",
      "firstName": "Filip",
      "lastName": "Cieślak",
      "license": "2241",
      "clubId": "club-15",
      "gender": "M",
      "category": "Senior",
      "points": 9.789,
      "strength": 0.138
    },
    {
      "id": "pp-2576",
      "firstName": "Patryk",
      "lastName": "Cymerlik",
      "license": "2576",
      "clubId": "club-29",
      "gender": "M",
      "category": "Junior",
      "points": 9.273,
      "strength": 0.227
    },
    {
      "id": "pp-1237",
      "firstName": "Jarosław",
      "lastName": "Staszak",
      "license": "1237",
      "clubId": "club-36",
      "gender": "M",
      "category": "Veteran",
      "points": 8.984,
      "strength": 0.111
    },
    {
      "id": "pp-2585",
      "firstName": "Monika",
      "lastName": "Wleklik",
      "license": "2585",
      "clubId": "club-15",
      "gender": "K",
      "category": "Senior",
      "points": 8.531,
      "strength": 0.136
    },
    {
      "id": "pp-1720",
      "firstName": "Bartosz",
      "lastName": "Furgoł",
      "license": "1720",
      "clubId": "club-23",
      "gender": "M",
      "category": "Junior",
      "points": 7.535,
      "strength": 0.094
    },
    {
      "id": "pp-2567",
      "firstName": "Paweł",
      "lastName": "Kubas",
      "license": "2567",
      "clubId": "club-19",
      "gender": "M",
      "category": "Senior",
      "points": 6.996,
      "strength": 0.143
    },
    {
      "id": "pp-2411",
      "firstName": "Jakub",
      "lastName": "Stefański",
      "license": "2411",
      "clubId": "club-29",
      "gender": "M",
      "category": "Junior",
      "points": 6.481,
      "strength": 0.087
    },
    {
      "id": "pp-2172",
      "firstName": "Barbara",
      "lastName": "Mroczkowska",
      "license": "2172",
      "clubId": "club-34",
      "gender": "K",
      "category": "Veteran",
      "points": 5.816,
      "strength": 0.1
    },
    {
      "id": "pp-579",
      "firstName": "Ireneusz",
      "lastName": "Czaja",
      "license": "579",
      "clubId": "club-8",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1019",
      "firstName": "Teresa",
      "lastName": "Dura-Nowak",
      "license": "1019",
      "clubId": "club-24",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2380",
      "firstName": "Dmytro",
      "lastName": "Yaremchuk",
      "license": "2380",
      "clubId": "club-20",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2379",
      "firstName": "Przemysław",
      "lastName": "Konieczny",
      "license": "2379",
      "clubId": "club-20",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-585",
      "firstName": "Wiesław",
      "lastName": "Nawrot",
      "license": "585",
      "clubId": "club-8",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-394",
      "firstName": "Monika",
      "lastName": "Moc",
      "license": "394",
      "clubId": "club-35",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-582",
      "firstName": "Witold",
      "lastName": "Lipiński",
      "license": "582",
      "clubId": "club-8",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1117",
      "firstName": "Bożena",
      "lastName": "Obuchowska",
      "license": "1117",
      "clubId": "club-24",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-581",
      "firstName": "Ireneusz",
      "lastName": "Klunder",
      "license": "581",
      "clubId": "club-8",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-489",
      "firstName": "Czesław",
      "lastName": "Selke",
      "license": "489",
      "clubId": "club-8",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-517",
      "firstName": "Paweł",
      "lastName": "Milicki",
      "license": "517",
      "clubId": "club-5",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1111",
      "firstName": "Teresa",
      "lastName": "Hudyma",
      "license": "1111",
      "clubId": "club-39",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-692",
      "firstName": "Piotr",
      "lastName": "Longosz",
      "license": "692",
      "clubId": "club-9",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-56",
      "firstName": "Katarzyna",
      "lastName": "Sprycha",
      "license": "56",
      "clubId": "club-20",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-697",
      "firstName": "Paweł",
      "lastName": "Morawczyński",
      "license": "697",
      "clubId": "club-9",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2370",
      "firstName": "Wanda",
      "lastName": "Kowalska",
      "license": "2370",
      "clubId": "club-49",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2373",
      "firstName": "Danuta",
      "lastName": "Kowalska",
      "license": "2373",
      "clubId": "club-49",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-244",
      "firstName": "Andrzej",
      "lastName": "Munikowski",
      "license": "244",
      "clubId": "club-40",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2389",
      "firstName": "Grzegorz",
      "lastName": "Stanek",
      "license": "2389",
      "clubId": "club-33",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-537",
      "firstName": "Paweł",
      "lastName": "Janik",
      "license": "537",
      "clubId": "club-44",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2357",
      "firstName": "Miłosz",
      "lastName": "Pawlak",
      "license": "2357",
      "clubId": "club-44",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-621",
      "firstName": "Beata",
      "lastName": "Gołda",
      "license": "621",
      "clubId": "club-40",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-658",
      "firstName": "Patryk",
      "lastName": "Witkowski",
      "license": "658",
      "clubId": "club-44",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-107",
      "firstName": "Piotr",
      "lastName": "Siara",
      "license": "107",
      "clubId": "club-24",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2358",
      "firstName": "Klara",
      "lastName": "Kałużny",
      "license": "2358",
      "clubId": "club-44",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-908",
      "firstName": "Łukasz",
      "lastName": "Bugaj",
      "license": "908",
      "clubId": "club-3",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2385",
      "firstName": "Daniel",
      "lastName": "Iwaszko",
      "license": "2385",
      "clubId": "club-16",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-509",
      "firstName": "Robert",
      "lastName": "Hojnacki",
      "license": "509",
      "clubId": "club-46",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-488",
      "firstName": "Zbigniew",
      "lastName": "Szyszka",
      "license": "488",
      "clubId": "club-8",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-116",
      "firstName": "Radosław",
      "lastName": "Turkowski",
      "license": "116",
      "clubId": "club-20",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2390",
      "firstName": "Marek",
      "lastName": "Szulc",
      "license": "2390",
      "clubId": "club-19",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-907",
      "firstName": "Krzysztof",
      "lastName": "Bentkowski",
      "license": "907",
      "clubId": "club-3",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-98",
      "firstName": "Piotr",
      "lastName": "Błasiak",
      "license": "98",
      "clubId": "club-23",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-491",
      "firstName": "Włodzimierz",
      "lastName": "Szałek",
      "license": "491",
      "clubId": "club-8",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-793",
      "firstName": "Stanisław",
      "lastName": "Słomion",
      "license": "793",
      "clubId": "club-8",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-45",
      "firstName": "Janina",
      "lastName": "Brzeźna",
      "license": "45",
      "clubId": "club-44",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-162",
      "firstName": "Dorota",
      "lastName": "Urbańczyk-Krot",
      "license": "162",
      "clubId": "club-3",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-92",
      "firstName": "Rajmund",
      "lastName": "Czubak",
      "license": "92",
      "clubId": "club-44",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2372",
      "firstName": "Jakub",
      "lastName": "Gwiazda",
      "license": "2372",
      "clubId": "club-49",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2383",
      "firstName": "Wojciech",
      "lastName": "Kilian",
      "license": "2383",
      "clubId": "club-16",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1907",
      "firstName": "Dariusz",
      "lastName": "Jeż",
      "license": "1907",
      "clubId": "club-10",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2045",
      "firstName": "Filip",
      "lastName": "Stańczyk",
      "license": "2045",
      "clubId": "club-33",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2054",
      "firstName": "Rafał",
      "lastName": "Radoń",
      "license": "2054",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2061",
      "firstName": "Agnieszka",
      "lastName": "Wyderka-Dyjecińska",
      "license": "2061",
      "clubId": "club-32",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2060",
      "firstName": "Mariusz",
      "lastName": "Dyjeciński",
      "license": "2060",
      "clubId": "club-32",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2450",
      "firstName": "Monika",
      "lastName": "Sławińska",
      "license": "2450",
      "clubId": "club-46",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2449",
      "firstName": "Jarosław",
      "lastName": "Solski",
      "license": "2449",
      "clubId": "club-29",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2571",
      "firstName": "Maja",
      "lastName": "Molińska",
      "license": "2571",
      "clubId": "club-49",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1890",
      "firstName": "Kinga",
      "lastName": "Szczepanik",
      "license": "1890",
      "clubId": "club-10",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1320",
      "firstName": "Beata",
      "lastName": "Mazurkiewicz",
      "license": "1320",
      "clubId": "club-21",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2019",
      "firstName": "Tomasz",
      "lastName": "Matuszewski",
      "license": "2019",
      "clubId": "club-7",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2018",
      "firstName": "Grzegorz",
      "lastName": "Matuszewski",
      "license": "2018",
      "clubId": "club-7",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2446",
      "firstName": "Jarosław",
      "lastName": "Gawlik",
      "license": "2446",
      "clubId": "club-14",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2028",
      "firstName": "Włodzimierz",
      "lastName": "Kołtowski",
      "license": "2028",
      "clubId": "club-17",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2029",
      "firstName": "Marta",
      "lastName": "Kołtowska",
      "license": "2029",
      "clubId": "club-17",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2070",
      "firstName": "Grzegorz",
      "lastName": "Kozłowski",
      "license": "2070",
      "clubId": "club-25",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1000",
      "firstName": "Maksymilian",
      "lastName": "Jarmondowicz",
      "license": "1000",
      "clubId": "club-46",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2455",
      "firstName": "Kamil",
      "lastName": "Maciejewski",
      "license": "2455",
      "clubId": "club-46",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-3418",
      "firstName": "Tymoteusz",
      "lastName": "Szwałek",
      "license": "3418",
      "clubId": "club-23",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1764",
      "firstName": "Bolesław",
      "lastName": "Bomba",
      "license": "1764",
      "clubId": "club-34",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2559",
      "firstName": "Andrzej",
      "lastName": "Kujawski",
      "license": "2559",
      "clubId": "club-8",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1767",
      "firstName": "Wojciech",
      "lastName": "Paska",
      "license": "1767",
      "clubId": "club-45",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2558",
      "firstName": "Gabriela",
      "lastName": "Piesik",
      "license": "2558",
      "clubId": "club-8",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1772",
      "firstName": "Natalia",
      "lastName": "Zielińska",
      "license": "1772",
      "clubId": "club-48",
      "gender": "K",
      "category": "Młodzieżowiec",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2046",
      "firstName": "Piotr",
      "lastName": "Stanek",
      "license": "2046",
      "clubId": "club-33",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1847",
      "firstName": "Andrzej",
      "lastName": "Armiński",
      "license": "1847",
      "clubId": "club-30",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1984",
      "firstName": "Kinga",
      "lastName": "Orawiec",
      "license": "1984",
      "clubId": "club-38",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2454",
      "firstName": "Jan",
      "lastName": "Guzdek",
      "license": "2454",
      "clubId": "club-46",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2453",
      "firstName": "Antoni",
      "lastName": "Firlej",
      "license": "2453",
      "clubId": "club-46",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1928",
      "firstName": "Aleksander",
      "lastName": "Jasiński",
      "license": "1928",
      "clubId": "club-26",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1974",
      "firstName": "Maja",
      "lastName": "Dyjecińska",
      "license": "1974",
      "clubId": "club-32",
      "gender": "K",
      "category": "Młodzieżowiec",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1976",
      "firstName": "Łukasz",
      "lastName": "Frontczak",
      "license": "1976",
      "clubId": "club-47",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2452",
      "firstName": "Tomasz",
      "lastName": "Pałka",
      "license": "2452",
      "clubId": "club-46",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2143",
      "firstName": "Jan",
      "lastName": "Górnowicz",
      "license": "2143",
      "clubId": "club-25",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2556",
      "firstName": "Igor",
      "lastName": "Jarmondowicz",
      "license": "2556",
      "clubId": "club-46",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2205",
      "firstName": "Mieczysław",
      "lastName": "Słowik",
      "license": "2205",
      "clubId": "club-17",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2082",
      "firstName": "Artur",
      "lastName": "Sutkowski",
      "license": "2082",
      "clubId": "club-10",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2428",
      "firstName": "Jakub",
      "lastName": "Jeliński",
      "license": "2428",
      "clubId": "club-7",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2103",
      "firstName": "Jeremiasz",
      "lastName": "Czaja",
      "license": "2103",
      "clubId": "club-8",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2104",
      "firstName": "Marian",
      "lastName": "Sagan",
      "license": "2104",
      "clubId": "club-17",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2126",
      "firstName": "Urszula",
      "lastName": "Wierzchowiec",
      "license": "2126",
      "clubId": "club-27",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2115",
      "firstName": "Żaneta",
      "lastName": "Jakubas-Karczmarz",
      "license": "2115",
      "clubId": "club-18",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2412",
      "firstName": "Antoni",
      "lastName": "Rutkowski",
      "license": "2412",
      "clubId": "club-49",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2194",
      "firstName": "Grzegorz",
      "lastName": "Byszewski",
      "license": "2194",
      "clubId": "club-17",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2413",
      "firstName": "Michał",
      "lastName": "Górak",
      "license": "2413",
      "clubId": "club-49",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2243",
      "firstName": "Michał",
      "lastName": "Włodarczak",
      "license": "2243",
      "clubId": "club-15",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2257",
      "firstName": "Lucjan",
      "lastName": "Jędruszczak",
      "license": "2257",
      "clubId": "club-32",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2260",
      "firstName": "Łukasz",
      "lastName": "Kocurek",
      "license": "2260",
      "clubId": "club-32",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2262",
      "firstName": "Danuta",
      "lastName": "Chomyn",
      "license": "2262",
      "clubId": "club-34",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2267",
      "firstName": "Tadeusz",
      "lastName": "Styk",
      "license": "2267",
      "clubId": "club-34",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2268",
      "firstName": "Beata",
      "lastName": "Maruszewska",
      "license": "2268",
      "clubId": "club-20",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2316",
      "firstName": "Nikodem",
      "lastName": "Chojnacki",
      "license": "2316",
      "clubId": "club-7",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2175",
      "firstName": "Jerzy",
      "lastName": "Urlik",
      "license": "2175",
      "clubId": "club-45",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2281",
      "firstName": "Katarzyna",
      "lastName": "Wróbel",
      "license": "2281",
      "clubId": "club-8",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1731",
      "firstName": "Dawid",
      "lastName": "Kowal",
      "license": "1731",
      "clubId": "club-10",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2145",
      "firstName": "Krzysztof",
      "lastName": "Kaszubowski",
      "license": "2145",
      "clubId": "club-45",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2160",
      "firstName": "Agnieszka",
      "lastName": "Zapała",
      "license": "2160",
      "clubId": "club-33",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2168",
      "firstName": "Anna",
      "lastName": "Mikołajczak",
      "license": "2168",
      "clubId": "club-43",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2212",
      "firstName": "Bartłomiej",
      "lastName": "Hajduk",
      "license": "2212",
      "clubId": "club-18",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2235",
      "firstName": "Janusz",
      "lastName": "Brot",
      "license": "2235",
      "clubId": "club-42",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2426",
      "firstName": "Filip",
      "lastName": "Cieśla",
      "license": "2426",
      "clubId": "club-17",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2277",
      "firstName": "Karolina",
      "lastName": "Stanek",
      "license": "2277",
      "clubId": "club-33",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2083",
      "firstName": "Anna",
      "lastName": "Brodzik",
      "license": "2083",
      "clubId": "club-23",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2283",
      "firstName": "Oskar",
      "lastName": "Stasiak",
      "license": "2283",
      "clubId": "club-20",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2288",
      "firstName": "Blanka",
      "lastName": "Banaszkiewicz",
      "license": "2288",
      "clubId": "club-49",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2293",
      "firstName": "Liliana",
      "lastName": "Markiewicz",
      "license": "2293",
      "clubId": "club-49",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2309",
      "firstName": "Igor",
      "lastName": "Kruczkowski",
      "license": "2309",
      "clubId": "club-47",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2305",
      "firstName": "Mikołaj",
      "lastName": "Trzciński",
      "license": "2305",
      "clubId": "club-47",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2306",
      "firstName": "Piotr",
      "lastName": "Olek",
      "license": "2306",
      "clubId": "club-47",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2423",
      "firstName": "Martyna",
      "lastName": "Pląskowska",
      "license": "2423",
      "clubId": "club-29",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2238",
      "firstName": "Krzysztof",
      "lastName": "Głowacz",
      "license": "2238",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2588",
      "firstName": "Leokadia",
      "lastName": "Lasota",
      "license": "2588",
      "clubId": "club-25",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1430",
      "firstName": "Jadwiga",
      "lastName": "Świętochowska",
      "license": "1430",
      "clubId": "club-20",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2587",
      "firstName": "Piotr",
      "lastName": "Owczarek",
      "license": "2587",
      "clubId": "club-25",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1233",
      "firstName": "Izabela",
      "lastName": "Schmidt",
      "license": "1233",
      "clubId": "club-23",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1234",
      "firstName": "Krzysztof",
      "lastName": "Adamczak",
      "license": "1234",
      "clubId": "club-38",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2590",
      "firstName": "Teresa",
      "lastName": "Kowalska",
      "license": "2590",
      "clubId": "club-25",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1257",
      "firstName": "Małgorzata",
      "lastName": "Mariampolska",
      "license": "1257",
      "clubId": "club-29",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-157",
      "firstName": "Jacek",
      "lastName": "Wiatrak",
      "license": "157",
      "clubId": "club-20",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2589",
      "firstName": "Zbigniew",
      "lastName": "Ligęza",
      "license": "2589",
      "clubId": "club-25",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-857",
      "firstName": "Franciszek",
      "lastName": "Tomczak",
      "license": "857",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1400",
      "firstName": "Jerzy",
      "lastName": "Szczepanik",
      "license": "1400",
      "clubId": "club-10",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1433",
      "firstName": "Eryk",
      "lastName": "Brzozowski",
      "license": "1433",
      "clubId": "club-23",
      "gender": "M",
      "category": "Młodzieżowiec",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1453",
      "firstName": "Jerzy",
      "lastName": "Koczur",
      "license": "1453",
      "clubId": null,
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1454",
      "firstName": "Joanna",
      "lastName": "Koczur",
      "license": "1454",
      "clubId": null,
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2586",
      "firstName": "Piotr",
      "lastName": "Sępek",
      "license": "2586",
      "clubId": "club-10",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-485",
      "firstName": "Aleksandra",
      "lastName": "Stasińska",
      "license": "485",
      "clubId": "club-8",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1746",
      "firstName": "Gabriela",
      "lastName": "Szczepanik",
      "license": "1746",
      "clubId": "club-10",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1317",
      "firstName": "Artur",
      "lastName": "Korniłowicz",
      "license": "1317",
      "clubId": "club-6",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2354",
      "firstName": "Cezary",
      "lastName": "Krzyżanowski",
      "license": "2354",
      "clubId": "club-18",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2366",
      "firstName": "Michael",
      "lastName": "Bauer",
      "license": "2366",
      "clubId": "club-39",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-874",
      "firstName": "Julia",
      "lastName": "Radkiewicz-Bolonek",
      "license": "874",
      "clubId": "club-47",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2365",
      "firstName": "Andrzej",
      "lastName": "Rozwalka",
      "license": "2365",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2364",
      "firstName": "Jakub",
      "lastName": "Wieczorek",
      "license": "2364",
      "clubId": "club-14",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2362",
      "firstName": "Wawrzyniec",
      "lastName": "Kubeczak",
      "license": "2362",
      "clubId": "club-20",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-529",
      "firstName": "Zbigniew",
      "lastName": "Pieprzyk",
      "license": "529",
      "clubId": "club-4",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1189",
      "firstName": "Zbigniew",
      "lastName": "Piotrowski",
      "license": "1189",
      "clubId": "club-12",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2353",
      "firstName": "Emilia",
      "lastName": "Baranowska",
      "license": "2353",
      "clubId": "club-18",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1486",
      "firstName": "Andrzej",
      "lastName": "Scheuer",
      "license": "1486",
      "clubId": "club-20",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2340",
      "firstName": "Natalia",
      "lastName": "Woźny",
      "license": "2340",
      "clubId": "club-18",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-676",
      "firstName": "Henryk",
      "lastName": "Bystrzycki",
      "license": "676",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-680",
      "firstName": "Romuald",
      "lastName": "Ratajczak",
      "license": "680",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-687",
      "firstName": "Roch",
      "lastName": "Waszak",
      "license": "687",
      "clubId": "club-15",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-544",
      "firstName": "Grzegorz",
      "lastName": "Stergiadis",
      "license": "544",
      "clubId": "club-12",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1196",
      "firstName": "Sybilla",
      "lastName": "Bądkowska",
      "license": "1196",
      "clubId": null,
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1216",
      "firstName": "Jaromir",
      "lastName": "Niemyjski",
      "license": "1216",
      "clubId": "club-46",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2363",
      "firstName": "Wiesława",
      "lastName": "Sędłak",
      "license": "2363",
      "clubId": "club-20",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2564",
      "firstName": "Rovimar",
      "lastName": "Serrano",
      "license": "2564",
      "clubId": "club-31",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1478",
      "firstName": "Yehor",
      "lastName": "Foyevtsov",
      "license": "1478",
      "clubId": "club-40",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1784",
      "firstName": "Radosław",
      "lastName": "Mosakowski",
      "license": "1784",
      "clubId": "club-16",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2570",
      "firstName": "Nina",
      "lastName": "Pawlicka",
      "license": "2570",
      "clubId": "club-49",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2569",
      "firstName": "Pola",
      "lastName": "Pawlicka",
      "license": "2569",
      "clubId": "club-49",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-63",
      "firstName": "Edward",
      "lastName": "Adamczyk",
      "license": "63",
      "clubId": null,
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2566",
      "firstName": "Przemysław",
      "lastName": "Lechowski",
      "license": "2566",
      "clubId": "club-19",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1694",
      "firstName": "Aleksandra",
      "lastName": "Witt-Reiss",
      "license": "1694",
      "clubId": "club-22",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2565",
      "firstName": "Tomasz",
      "lastName": "Bogucki",
      "license": "2565",
      "clubId": "club-31",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2572",
      "firstName": "Pola",
      "lastName": "Baran",
      "license": "2572",
      "clubId": "club-49",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2563",
      "firstName": "Marta",
      "lastName": "Szwabowska",
      "license": "2563",
      "clubId": "club-17",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2562",
      "firstName": "Rafał",
      "lastName": "Kłoss",
      "license": "2562",
      "clubId": "club-46",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2561",
      "firstName": "Jadwiga",
      "lastName": "Bomba",
      "license": "2561",
      "clubId": "club-34",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2560",
      "firstName": "Konrad",
      "lastName": "Kizym",
      "license": "2560",
      "clubId": "club-23",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1727",
      "firstName": "Roland",
      "lastName": "Piłka",
      "license": "1727",
      "clubId": "club-1",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1730",
      "firstName": "Katarzyna",
      "lastName": "Szczepanik",
      "license": "1730",
      "clubId": "club-10",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2367",
      "firstName": "Anna",
      "lastName": "Bauer",
      "license": "2367",
      "clubId": "club-39",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1568",
      "firstName": "Ireneusz",
      "lastName": "Kędzierski",
      "license": "1568",
      "clubId": "club-45",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-452",
      "firstName": "Jacek",
      "lastName": "Woliński",
      "license": "452",
      "clubId": "club-49",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-38",
      "firstName": "Mariola",
      "lastName": "Wróbel",
      "license": "38",
      "clubId": "club-23",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2581",
      "firstName": "Monika",
      "lastName": "Mleczko",
      "license": "2581",
      "clubId": "club-10",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1370",
      "firstName": "Ludwik",
      "lastName": "Gułaj",
      "license": "1370",
      "clubId": "club-39",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2580",
      "firstName": "Krystyna",
      "lastName": "Bylicka",
      "license": "2580",
      "clubId": "club-46",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2578",
      "firstName": "Teresa",
      "lastName": "Duży",
      "license": "2578",
      "clubId": "club-32",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1415",
      "firstName": "Iwona",
      "lastName": "Sławińska",
      "license": "1415",
      "clubId": null,
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1695",
      "firstName": "Bogumiła",
      "lastName": "Śpiewanek",
      "license": "1695",
      "clubId": "club-22",
      "gender": "K",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1419",
      "firstName": "Piotr",
      "lastName": "Rypień",
      "license": "1419",
      "clubId": "club-35",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1739",
      "firstName": "Dariusz",
      "lastName": "Maziarz",
      "license": "1739",
      "clubId": "club-10",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2577",
      "firstName": "Marzena",
      "lastName": "Czub-Żmuda",
      "license": "2577",
      "clubId": "club-32",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1509",
      "firstName": "Maria",
      "lastName": "Turkowska",
      "license": "1509",
      "clubId": "club-20",
      "gender": "K",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2575",
      "firstName": "Aleksander",
      "lastName": "Michalik",
      "license": "2575",
      "clubId": "club-19",
      "gender": "M",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1587",
      "firstName": "Marta",
      "lastName": "Markowska",
      "license": "1587",
      "clubId": "club-38",
      "gender": "K",
      "category": "Senior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1603",
      "firstName": "Oliwia",
      "lastName": "Rutkowska",
      "license": "1603",
      "clubId": "club-6",
      "gender": "K",
      "category": "Młodzieżowiec",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1614",
      "firstName": "Jan",
      "lastName": "Sławiński",
      "license": "1614",
      "clubId": "club-8",
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-2573",
      "firstName": "Borys",
      "lastName": "Baran",
      "license": "2573",
      "clubId": "club-49",
      "gender": "M",
      "category": "Junior",
      "points": 0.0,
      "strength": 0.0
    },
    {
      "id": "pp-1416",
      "firstName": "Radosław",
      "lastName": "Sławiński",
      "license": "1416",
      "clubId": null,
      "gender": "M",
      "category": "Veteran",
      "points": 0.0,
      "strength": 0.0
    }
  ];

// Club rankings based on real player point sums
const CLUB_RANKINGS = [
  { clubId: "club-41", points: 122829.913 },
  { clubId: "club-76", points: 107826.011 },
  { clubId: "club-65", points: 90474.543 },
  { clubId: "club-87", points: 85418.711 },
  { clubId: "club-42", points: 77865.243 },
  { clubId: "club-71", points: 77329.460 },
  { clubId: "club-86", points: 72719.608 },
  { clubId: "club-52", points: 65019.219 },
  { clubId: "club-45", points: 45421.124 },
  { clubId: "club-66", points: 43961.697 },
  { clubId: "club-61", points: 40422.232 },
  { clubId: "club-108", points: 38899.221 },
  { clubId: "club-44", points: 38682.849 },
  { clubId: "club-109", points: 37085.321 }
];

// Real tournaments from PetanquePRO 2026 season
const DEFAULT_TOURNAMENTS = [
  {
    id: "tour-pp-2141",
    isOpen: true,
    name: "Turniej Polsko-Holenderski Klompen Cup (single)",
    date: "2026-07-03",
    location: "Szczecinek",
    organizer: 'Szczecinecki Klub Sportowy Petanque "Synergy"',
    format: "Singles",
    system: "Swiss",
    rounds: 5,
    status: "Upcoming",
    ppTurniejId: 2141,
    ranked: true,
    categoryPfp: "Open",
    silaStr: 41.326,
    teams: [], matches: [], byes: [], standings: []
  },
  {
    id: "tour-pp-2148",
    isOpen: false,
    name: "Puchar Ponidzia w petanque w Pińczowie",
    date: "2026-07-04",
    location: "Pińczów",
    organizer: "Kieleckie Stowarzyszenie Sportów Precyzyjnych",
    format: "Doublets",
    system: "Swiss",
    rounds: 5,
    status: "Upcoming",
    ppTurniejId: 2148,
    ranked: true,
    categoryPfp: "Open",
    silaStr: 43.995,
    teams: [], matches: [], byes: [], standings: []
  },
  {
    id: "tour-pp-2142",
    isOpen: true,
    name: "Turniej Polsko-Holenderski Klompen Cup (dublety)",
    date: "2026-07-04",
    location: "Szczecinek",
    organizer: 'Szczecinecki Klub Sportowy Petanque "Synergy"',
    format: "Doublets",
    system: "Swiss",
    rounds: 5,
    status: "Upcoming",
    ppTurniejId: 2142,
    ranked: true,
    categoryPfp: "Open",
    silaStr: 51.307,
    teams: [], matches: [], byes: [], standings: []
  },
  {
    id: "tour-pp-2054",
    isOpen: false,
    name: "Mistrzostwa Polski Tripletów Mężczyzn",
    date: "2026-07-11",
    location: "Myślenice",
    organizer: "Myślenicki Klub Pétanque",
    format: "Triplets",
    system: "Swiss",
    rounds: 6,
    status: "Upcoming",
    ppTurniejId: 2054,
    ranked: true,
    categoryPfp: "PFP",
    silaStr: 91.396,
    teams: [], matches: [], byes: [], standings: []
  },
  {
    id: "tour-pp-2055",
    isOpen: false,
    name: "Mistrzostwa Polski Tripletów Kobiet",
    date: "2026-07-11",
    location: "Myślenice",
    organizer: "Myślenicki Klub Pétanque",
    format: "Triplets",
    system: "Swiss",
    rounds: 6,
    status: "Upcoming",
    ppTurniejId: 2055,
    ranked: true,
    categoryPfp: "PFP",
    silaStr: 65.202,
    teams: [], matches: [], byes: [], standings: []
  },
  {
    id: "tour-pp-1957",
    isOpen: true,
    name: "VIII Puchar Żubra - Strzał Precyzyjny",
    date: "2026-07-17",
    location: "Białystok",
    organizer: "Białostocki Klub Petanque",
    format: "Singles",
    system: "Swiss",
    rounds: 5,
    status: "Upcoming",
    ppTurniejId: 1957,
    ranked: true,
    categoryPfp: "Open",
    silaStr: 29.251,
    teams: [], matches: [], byes: [], standings: []
  },
  {
    id: "tour-pp-1954",
    isOpen: true,
    name: "VIII Puchar Żubra - Single",
    date: "2026-07-17",
    location: "Białystok",
    organizer: "Białostocki Klub Petanque",
    format: "Singles",
    system: "Swiss",
    rounds: 5,
    status: "Upcoming",
    ppTurniejId: 1954,
    ranked: true,
    categoryPfp: "Open",
    silaStr: 37.665,
    teams: [], matches: [], byes: [], standings: []
  },
  {
    id: "tour-pp-1955",
    isOpen: true,
    name: "VIII Puchar Żubra - Triplety",
    date: "2026-07-18",
    location: "Białystok",
    organizer: "Białostocki Klub Petanque",
    format: "Triplets",
    system: "Swiss",
    rounds: 5,
    status: "Upcoming",
    ppTurniejId: 1955,
    ranked: true,
    categoryPfp: "Open",
    silaStr: 40.125,
    teams: [], matches: [], byes: [], standings: []
  },
  {
    id: "tour-pp-1956",
    isOpen: true,
    name: "VIII Puchar Żubra - Dublety",
    date: "2026-07-19",
    location: "Białystok",
    organizer: "Białostocki Klub Petanque",
    format: "Doublets",
    system: "Swiss",
    rounds: 5,
    status: "Upcoming",
    ppTurniejId: 1956,
    ranked: true,
    categoryPfp: "Open",
    silaStr: 35.500,
    teams: [], matches: [], byes: [], standings: []
  }
];

// Initialize localStorage DB
export function initDB() {
  try {
    if (!localStorage.getItem("pfp_clubs") || JSON.parse(localStorage.getItem("pfp_clubs") || "[]").length < 46) {
      localStorage.setItem("pfp_clubs", JSON.stringify(DEFAULT_CLUBS));
    }
    const localPlayers = JSON.parse(localStorage.getItem("pfp_players") || "[]");
    if (!localStorage.getItem("pfp_players") || localPlayers.length < 810 || (localPlayers[0] && localPlayers[0].lastName && localPlayers[0].lastName.includes("Kowalski")) || (localPlayers[0] && localPlayers[0].clubId === null) || !localPlayers.some(p => p.license === "1565" && p.clubId === "club-20")) {
      localStorage.setItem("pfp_players", JSON.stringify(DEFAULT_PLAYERS));
    }
  } catch (e) {
    console.error("Corrupted localStorage data, forcing reset.", e);
    localStorage.setItem("pfp_clubs", JSON.stringify(DEFAULT_CLUBS));
    localStorage.setItem("pfp_players", JSON.stringify(DEFAULT_PLAYERS));
  }
  if (!localStorage.getItem("pfp_tournaments")) {
    localStorage.setItem("pfp_tournaments", JSON.stringify(DEFAULT_TOURNAMENTS));
  }
  if (!localStorage.getItem("pfp_club_rankings")) {
    localStorage.setItem("pfp_club_rankings", JSON.stringify(CLUB_RANKINGS));
  }
  
  // Set default credentials if not existing
  if (!localStorage.getItem("pfp_session")) {
    localStorage.setItem("pfp_session", JSON.stringify(null));
  }
}

let apiPlayersCache = null;
let apiTournamentsCache = null;
let apiClubsCache = null;

export async function fetchClubsFromAPI() {
  try {
    const response = await fetch('http://localhost:8000/api/clubs');
    if (response.ok) {
      apiClubsCache = await response.json();
      console.log("Pomyślnie załadowano kluby z API MySQL!");
    } else {
      console.warn("Błąd API klubów, ładuję z localStorage");
    }
  } catch (error) {
    console.warn("Brak połączenia z API klubów, używam localStorage.", error);
  }
}

export async function fetchTournamentsFromAPI() {
  try {
    const response = await fetch('http://localhost:8000/api/tournaments');
    if (response.ok) {
      apiTournamentsCache = await response.json();
      console.log("Pomyślnie załadowano turnieje z API MySQL!");
    } else {
      console.warn("Błąd API turniejów, ładuję z localStorage");
    }
  } catch (error) {
    console.warn("Brak połączenia z API turniejów, używam localStorage.", error);
  }
}

export async function fetchPlayersFromAPI() {
  try {
    const response = await fetch('http://localhost:8000/api/players');
    if (response.ok) {
      apiPlayersCache = await response.json();
      console.log("Pomyślnie załadowano zawodników z API MySQL!");
    } else {
      console.warn("Błąd API zawodników, ładuję z localStorage");
    }
  } catch (error) {
    console.warn("Brak połączenia z API zawodników, używam localStorage.", error);
  }
  await fetchTournamentsFromAPI();
  await fetchClubsFromAPI();
}

export function getClubs() {
  if (apiClubsCache) return apiClubsCache;
  initDB();
  return JSON.parse(localStorage.getItem("pfp_clubs"));
}

export function getPlayers() {
  if (apiPlayersCache) return apiPlayersCache;
  initDB();
  return JSON.parse(localStorage.getItem("pfp_players"));
}

export function getTournaments() {
  if (apiTournamentsCache) return apiTournamentsCache;
  initDB();
  return JSON.parse(localStorage.getItem("pfp_tournaments"));
}

export function getTournament(id) {
  const tournaments = getTournaments();
  return tournaments.find(t => t.id === id);
}

export function getClubRankings() {
  initDB();
  return JSON.parse(localStorage.getItem("pfp_club_rankings"));
}

// Data Setters/Savers
export function saveClubs(clubs) {
  localStorage.setItem("pfp_clubs", JSON.stringify(clubs));
}

export function savePlayers(players) {
  localStorage.setItem("pfp_players", JSON.stringify(players));
  apiPlayersCache = players;
}

export function saveTournaments(tournaments) {
  localStorage.setItem("pfp_tournaments", JSON.stringify(tournaments));
  apiTournamentsCache = tournaments;
}

// Specific DB Updates
export function updateTournament(updatedTournament) {
  const tournaments = getTournaments();
  const index = tournaments.findIndex(t => t.id === updatedTournament.id);
  if (index !== -1) {
    tournaments[index] = updatedTournament;
    saveTournaments(tournaments);
    
    // Async API Call to MySQL
    fetch(`http://localhost:8000/api/tournaments/${updatedTournament.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTournament)
    }).then(res => {
      if (res.ok) console.log("Turniej zaktualizowany w MySQL");
    }).catch(err => console.warn("API offline, zapisano lokalnie", err));
    
    return true;
  }
  return false;
}

export function addTournament(tournament) {
  const tournaments = getTournaments();
  tournaments.push(tournament);
  saveTournaments(tournaments);
  
  // Async API Call to MySQL
  fetch('http://localhost:8000/api/tournaments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tournament)
  }).then(res => {
    if (res.ok) console.log("Turniej dodany w MySQL");
  }).catch(err => console.warn("API offline, zapisano lokalnie", err));
  
  return tournament;
}

export function addPlayer(player) {
  const players = getPlayers();
  // check if license exists (skip duplicate check for amateurs without license)
  if (player.license && player.license !== "brak" && !player.license.startsWith("AM-") && players.find(p => p.license === player.license)) {
    throw new Error("Zawodnik z tym numerem licencji już istnieje!");
  }
  players.push(player);
  savePlayers(players);
  return player;
}

// New Ranking Automation Module
export function simulateRankingsUpdate(tournamentId) {
  if (!tournamentId) {
    // If called on rankings tab (manual refresh), reload from API
    fetchPlayersFromAPI().then(() => {
      console.log("Rankingi odświeżone z API MySQL");
    });
    return true;
  }

  const tournaments = getTournaments();
  const tournament = tournaments.find(t => t.id === tournamentId);
  
  if (!tournament) throw new Error("Turniej nie istnieje");
  if (tournament.status === 'FINISHED') throw new Error("Turniej został już zakończony");
  
  const players = getPlayers();
  const results = getTournamentResults();
  
  const rankMultiplier = tournament.rank_multiplier || 1.0;
  const numTeams = tournament.standings ? tournament.standings.length : 0;
  
  // Ensure players have needed fields
  players.forEach(p => {
    if (p.current_strength === undefined) p.current_strength = p.points || 0;
    if (p.current_rank === undefined) p.current_rank = 0;
    if (p.previous_rank === undefined) p.previous_rank = null;
    if (p.is_active === undefined) p.is_active = true;
  });
  
  // Sort initial to establish base rank if not existing
  players.sort((a, b) => b.current_strength - a.current_strength);
  players.forEach((p, idx) => {
    if (p.current_rank === 0) p.current_rank = idx + 1;
    p.previous_rank = p.current_rank;
  });
  
  // Award points
  if (tournament.standings && numTeams > 0) {
    tournament.standings.forEach((teamObj, index) => {
      const finalPosition = index + 1;
      const strengthPointsEarned = (numTeams - finalPosition + 1) * rankMultiplier * 10;
      
      const teamPlayers = teamObj.players || [];
      teamPlayers.forEach(playerId => {
        results.push({
          id: 'res-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
          tournament_id: tournament.id,
          player_id: playerId,
          final_position: finalPosition,
          strength_points_earned: strengthPointsEarned
        });
        
        const player = players.find(p => p.id === playerId);
        if (player) {
          player.current_strength += strengthPointsEarned;
          player.points = (player.points || 0) + strengthPointsEarned;
        }
      });
    });
  }
  
  // Sort and set new ranks
  players.sort((a, b) => {
    if (b.current_strength === a.current_strength) {
      return (a.previous_rank || 9999) - (b.previous_rank || 9999);
    }
    return b.current_strength - a.current_strength;
  });
  
  players.forEach((p, idx) => {
    p.current_rank = idx + 1;
  });
  
  tournament.status = 'FINISHED';
  
  savePlayers(players);
  saveTournamentResults(results);
  
  const tIdx = tournaments.findIndex(t => t.id === tournamentId);
  tournaments[tIdx] = tournament;
  saveTournaments(tournaments);
  
  // Async API Call to finish tournament and sync MySQL DB
  fetch(`http://localhost:8000/api/tournaments/${tournamentId}/finish`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tournament)
  }).then(res => {
    if (res.ok) console.log("Turniej zakończony i zapisany w MySQL!");
  }).catch(err => console.warn("API offline, rankingi zaktualizowane lokalnie", err));
  
  return true;
}

export function getTournamentResults() {
  const res = localStorage.getItem("pfp_tournament_results");
  return res ? JSON.parse(res) : [];
}

export function saveTournamentResults(results) {
  localStorage.setItem("pfp_tournament_results", JSON.stringify(results));
}
