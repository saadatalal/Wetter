# Wetter App

Eine kleine Wetter-Webanwendung mit Vanilla JavaScript, HTML und CSS. Die App zeigt Informationen zu einer Stadt an, einschließlich aktueller Temperatur, Luftfeuchtigkeit, Windgeschwindigkeit und einer kurzen Wettervorhersage.

## Funktionen

- Stadt anhand des Namens suchen
- Aktuelle Wetterdaten anzeigen
- Luftfeuchtigkeit und Windgeschwindigkeit anzeigen
- 4-Tage-Vorhersage mit passenden Wettericons
- Responsive Oberfläche für Desktop und mobile Geräte

## Technologien

- HTML5
- CSS3
- JavaScript (ES6)
- OpenWeatherMap API

## Projektstruktur

- `index.html` – Grundgerüst der Anwendung
- `style.css` – Styling und Layout
- `script.js` – Logik für API-Anfragen und UI-Aktualisierung
- `assets/` – Icons und Grafiken

## Voraussetzungen

- Ein moderner Browser
- Internetzugang, da die Wetterdaten über die OpenWeatherMap-API geladen werden

## Lokale Ausführung

1. Repository klonen oder herunterladen
2. In das Projektverzeichnis wechseln
3. Eine lokale Webserver-Instanz starten, z. B.:

```bash
python -m http.server 8000
```

4. Im Browser öffnen:

```text
http://localhost:8000
```

## API-Konfiguration

Die Anwendung verwendet derzeit einen OpenWeatherMap-API-Key, der in `script.js` hinterlegt ist:

```javascript
const apikey = "5654698644bba51a4a48d028ead16130";
```

Wenn der Schlüssel nicht mehr gültig ist oder du deine eigene Konfiguration verwenden möchtest, ersetze ihn durch einen eigenen API-Key von OpenWeatherMap.

## Hinweis

Dieses Projekt ist ein Frontend-Projekt und dient als einfache Wetter-App-Demo. Für den produktiven Einsatz sollten zusätzlich Validierungen, Fehlerbehandlung, Caching und ein besseres Sicherheitskonzept für API-Keys ergänzt werden.
