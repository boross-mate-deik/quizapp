# Szoftverfejlesztési módszertanok kis projekt követelményspecifikáció
## CSK6
### *Boross Károly, Boross Máté, Gergely Szabolcs Róbert*
---
### Áttekintés
Egy ismeretterjesztő kvízalkalmazás, legfőképp informatikai kérdésekkel, de további témákban lévő kérdések is megjelennek. Az alkalmazás python nyelvű asztali alkalmazás lesz.
### Vágyálom rendszer
Telefonos, számítógépes és webes változat mind elérhető legyen egységes funkcionalitással és felhasználói élménnyel. Felhasználói fiók létrehozása email címmel és bejelentkezés Google, Apple, Microsoft fiókokkal. 
Napi kihívások, pontozási rendszerek kialakítása, pontok beváltása alkalmazáson belüli ajándékokra, rangsorok, többjátékos verzió. Egyéni kvízek létrehozása, egyéni kvízek megosztása felhasználók között.
### Követelménylista
|Modul|ID|Név|Verzió|Kifejtés|
|-----|--|---|------|--------|
|Felület|K1|Kvízkitöltési felület|1.0|A kvíz kitöltéséhez használt alapvető felület létrehozása.|
|Jogosultság|K2|Regisztrációs felület|1.0|A felhasználó egy felhasználónévvel és egy jelszóval létrehozhat egy fiókot, amivel később be tud jelentkezni.|
|Felület|K3|Felhasználói profil felület|1.0|A felhasználó megnézheti a saját profilját.|
|Felület|K4|Kvíztörténet|1.0|A felhasználó a saját profiljának almenüjében megnézheti a korábban kitöltött kvízkérdéseinek eredményeit.|
|Módosítások|K5|Profil személyreszabás|1.0|A felhasználó beállíthat egy felhasználónevet, egy profilképet, illetve egy leírást.|
|Létrehozás|K6|Új kvíz létrehozása|1.0|A felhasználó új feladatsort hozhat létre, amit később megoszthat.|
|Módosítások|K7|Jelszócsere|1.0|A felhasználó lecserélheti a jelszavát a régi megadása után.|
|Felület|K8|Statisztika|1.0|A felhasználói profilban megtekinthető a felhasználó statisztikája, pl. helyes/hibás kérdések aránya, átlagos kérdéssebesség stb.|
|Felület|K9|Toplisták|1.0|A felhasználó összevetheti a pontszámát a többi felhasználóval.|
|Felület|K10|Kezdőlap|1.0|A kvíz nehézségének, a kérdések számának, illetve a kérdések kategóriájának kiválasztása után a kvízek elindítása. Fiók hiánya esetén a regisztrációs oldalra mutatás, vagy random kérdések megadása.|
|Felület|K11|Értékelés|1.0|A kvízek teljesítése után a felhasználó megtekintheti a válaszait, és az adott kvízre kapott pontszámát.|
### Riport
##### Csatlakozik-e a program az internetre?
- Nem, az alkalmazás lokális, a kérdéseket egy adatbázisból tölti be, a profilokat és a hozzájuk tartozó adatokat külön fájlokba menti le. Emellett van egy kölön adatbázis mely az egyéni felhasználói kérdéseket, és az egyes profilok eredményeit tartalmazza. 
##### Hogyan működik a hozzáférés az egyéni kérdésekhez, mások eredményeihez?
- A saját profilból való kilépés után a létrehozott kérdéseket, illetve eredményeket elmenti a rendszer, amelyeket mások belépés után rangsorokban megtekinthetnek, illetve játszhatnak az egyéni kvízekkel.
### Fogalomtár
- Kvízkérdés: Egy feleletválasztós kérdés, amelyhez összesen négy válaszlehetőség tartozik, melyből csak egy helyes.
- Kvíz: Kvízkérdések sorozata, amely kizárólag együtt tölthető ki, véletlen sorrendben.
