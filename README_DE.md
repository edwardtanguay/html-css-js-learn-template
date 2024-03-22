# "Rick and Morty"-API

# Beschreibung

Lass uns den Citadel-Server "hacken" und die geheimen Charakterdaten aus dem "Rick and Morty"-Universum abrufen!
Dazu müssen wir ein Programm schreiben, das die Datenbank von einer externen [Rick and Morty API](https://rickandmortyapi.com/documentation) herunterlädt und die Daten in unserem Browser anzeigt.

# Anleitung:

- Das Programm soll die Daten einer zufälligen Figur von der bereitgestellten API abrufen.
- Ein Bild des Charakters soll im Browser angezeigt werden, zusammen mit einem "Charakternamen".
- Lies die [Dokumentation](https://rickandmortyapi.com/documentation) sorgfältig durch.
- Um diese Aufgabe zu erledigen, verwende eine asynchrone Funktion.
- Ändere die Datei `index.html` nur mit DOM-Elementen!

## x Aufgabe 1:

- Erstelle eine `index.html` und eine `script.js` Datei. Verknüpfe sie.

## Aufgabe 2:

- Erstelle in der Datei `script.js` einen Ausdruck, der einen Link mit Informationen über den Charakter enthält. Eine Liste mit allen Charakteren im JSON-Format kannst Du hier herunterladen: [Rick and Morty Charaktere API](https://rickandmortyapi.com/api/character)

- x get JSON list of characters from URL (https://rickandmortyapi.com/api/character)
- x define a variable as a random character from that list
- x display name of character
- x display picture of character

- x add try/catch
  - x put IIFE in its own function
  - x create getCharacterData() and put in appModel.js
## Aufgabe 3:

- Erstelle eine asynchrone Funktion `rickAndMortyCharacters`.
- Benutze `fetch`, um die Daten der Liste der Charaktere zu laden und benutze die Methode `.json()` des Antwortobjekts, um das JSON in ein Objekt umzuwandeln.
- Analysiere das Objekt und finde heraus, wie Du die Anzahl der Zeichen ermitteln kannst

## Aufgabe 4:

- Erzeuge innerhalb der Funktion `rickAndMortyCharacters` eine Zufallszahl zwischen 1 und der Anzahl der Zeichen plus 200 (überprüfe die Anzahl der verfügbaren Zeichen in der Datenbank, indem Du die [Dokumentation](https://rickandmortyapi.com/documentation) liest)
- Hole die Daten eines Zeichens mit einer Zufallszahl aus der Liste der Zeichen im Objekt
- Analysiere das Zeichenobjekt und finde heraus, wie Du die URL für das Bild des Zeichens bekommst

## Aufgabe 5:

- Schreibe innerhalb der Funktion `rickAndMortyCharacters` eine Anweisung, die prüft, ob die Antwort vom Server anders als `ok` ist - wenn ja, solltest du eine Fehlermeldung erstellen: `Fehler: Die Datenbank wurde kompromittiert. Keine Daten unter dem Code [hier wird die generierte Zahl angezeigt] `.
- Wenn ein Fehler zurückgegeben wird, verwende DOM-Elemente, um eine Fehlermeldung im Browserfenster anzuzeigen.

## Aufgabe 6:

- Erstelle eine Funktion `renderCharacters` - wenn sie aufgerufen wird, soll sie die geholten Daten im Browser darstellen: Bild und Text.
- Ändere das HTML mit DOM, um das Bild und den Namen des Charakters auf der Seite anzuzeigen.

## Aufgabe 7:

- Rufe innerhalb der Funktion `rickMortyCharacters` die Funktion `renderCharacters` auf, die die abgerufenen Daten als Parameter erhält.

## Aufgabe 8:

- Rufe nun die Funktion `rickMortyCharacters` auf, um das Programm auszuführen!

- x add a button "Reload" "to fetch another character

## BONUS-Aufgabe:

- x Wenn Du die Aufgaben früher erledigt hast, kannst du noch ein paar zusätzliche Stilelemente hinzufügen und/oder mehr Daten anzeigen.

- .. add background color to config file: backgroundColor = '#ccc';

#### VIEL GLÜCK! 😉
