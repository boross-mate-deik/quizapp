# Rendszerterv
### A rendszer célja
A rendszer célja, hogy az adott felhasználók kvízeken keresztül tudják tesztelni a saját tudásukat. Versenyezenek egymással az eredményekkel. Létrehozzanak saját kvízeket ha szeretnének.

### Projektterv
__Projektmunkássok és felelőségek__
	* Frontend: Boross Károly
	* Backend: Boross Máté, Gergely Szabolcs Róbert
	* Ütemterv:
|Funció/Story|Feladat/Task|Prioritás|Becslés|Aktuális becslés|Eltelt idő|Hátralévő idő|
|-------------|-----------|---------|-------|----------------|----------|-------------|
|Követelmény specifikáció||0|12|12|12|0|
|Funkcionális specifikáció||0|12|12|12|0|
|Rendszerterv||0|16|16|8|8|
|Adattárolás|Adatmodell megtervezése|0|4|4|0|4|
||Adatbázis megvalósítása a backenden|1|1|1|0|1|
|Frontend|Kvíz hozzáadás|1|3|3|0|3|
||Bejelentkezési oldal|1|3|3|0|3|
|Backend| Kvíz felvétele|1|4|4|0|4|
||Bejelentkezés megvalósitása|1|4|4|0|4|

### Követlemények
* Funkcionális követelmények
	* Felhasználó adatainak tárolása
	* Kvíz kérdések tárolása
	* Kvíz létrehozása
	* Felhasználó létrehozása
	* Felhasználó adatok módosítása
	* Felhasználói adatok törlése
	* Eredmény meghatározása
	* Eredmény mutatása
	* Eredmény eltárolása
	
* Nem funkcionális követelmények
	* A felhasználók nem juthatnak hozzá más felhasználók személyes adataihoz a
nevükön és azonosítóikon kívül.
	* A más felhasználó által készített kvízeket nem módosíthatják
	* A felhasználó jelszavak biztonságosan vannak eltárolva
	* A fel

* Törvényi előírások, szabványok:
	* GDPR-nak való megfelelés

### Funkcionális terv
* Rendszerszereplők
  * Admin
  * Felhasználó
  * Vendég felhasználó
* Rendszereléretőség
	* Admin
      * Teljes hozzáférése van a rendszerhez.
      * Kvíz készítése
      * Kvíz törlése 
      * Kvíz módositása
      * Kvíz kitöltése, ellenőrzése
    * Vendég felhasználó
      * Kvíz kitöltése
      * Eredmény megnézése
    * Bejelentkezett felhasználó
      * Kvíz kitöltése
      * Kvíz hozzáadása
      * Eredmények mentése

* Menü-hierarchiák:
	* BEJELENTKEZÉS:
		*Bejelentkezés
		*Regisztráció
		*Segítség
	* FŐ MENÜ:
		* Kvíz
		* Kvíz létrehozás
		* Saját kvízek
		* Személyes adatok szerkesztése
		* Kijelentkezés
		* Eredmények

### Fizikai környezet
* Az alkalmazás web platformra készül
* Fejlesztői eszközök
	* Visual Studio Code
	* Pycharm
	* React
	* Django
	* SQLlite
		
### Architektuális terv
* Frontend:
	* A frontend React keresztrendszer segítségével Javascriptben lesz elkészítve.
* Backend:
	* A backend Django web keretrendszer segítségével, Pythonban készül

### Tesztterv
* A tesztek célja a rendszer és komponensei funkcionalitásának teljes vizsgálata, ellenőrzése, a rendszer által megvalósított szolgáltatások ellenőrzése és biztosítása.
* Tesztelési módok
	* Unit tesztelés: A metódusok megfelelő működésének biztosításának érdekében Unit tesztet kell írni hozzájuk. A metódus kész ha a teszt hiba nélkül lefut.
	* Alfa tesztelés: A teszt célja a funkciók tesztelése különböző böngészőkben(Chrome, Edge, Firefox). A tesztelést fejlesztők végzik. Akkor sikeres, ha minden tesztelt böngészőn az adott funkciók, UI elemek megfelelően működnek.
* Tesztelendő funkciók
	* Frontend
		* A felület reszponzív kell legyen.
		* A UI elemek, ellátják a funkcióikat.
		* Különböző méreteken a felület mindig próbál alkalmazkodni.
		* Olvashatónak kell lennie az UI elemeknek.
		* A felhasználó visszajelzést kap mindenre.
		* Az eredménynek elérhetőnek kell lennie felhasználónak.
	* Backend
		* Képesnek kell lennie elérni az adatbázist
		* Képesnek kell lennie módositani az adatbázist.
		* Képesnek kell lennie több felhasználó kiszolgálására.
		* Képesnek kell lennie minden funkció elvégzésére.

### Telepítési terv
* Webes alkalmazás
	* A szoftver webes felületéhez csak egy böngésző telepítése szükséges. Külön szoftver nem kell hozzá.

### Karbantartási terv
* Karbantartás
	* Corrective Maintance: A felhasználók által felfedezett és "user reportban" elküldött hibák jelentése
	* Adaptive Maintance: A program naprakészen tartása és finomhangolása
	* Perfective Maintance: A szoftver hosszútávú használata érdekében végzett módosítások, új funkciók, a szoftver teljesitésmények és működési megbízhatóságának javítása.
	* Preventive Maintance: Olyan problémák elhárítása, amelyek még nem tűnnek fontosnak, de később komoly problémákhoz vezetnek.