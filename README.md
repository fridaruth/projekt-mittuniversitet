# Projektuppgift, Angular - Kurskatalog

Detta är en reaktiv Single Page Application (SPA) byggd med Angular 19 och TypeScript som projektuppgift i kursen Programmering i TypeScript. Applikationen hämtar ett stort kursutbud, tillåter realtidssökning och låter studenter sätta ihop ett skräddarsytt ramschema med automatisk poängräkning.

---
[Länk till publicerad sida](https://projektuniversitet.netlify.app)

---
## Funktioner

* **Angular Signals & Computed:** Hanterar tillstånd och klientsidesfiltrering i realtid.
* **Live-sökning och filtrering:** Sök omedelbart på kurskod eller kursnamn, eller filtrera efter ämnesområde.
* **Neo-brutalistiskt inspirerad design:** Gränssnitt inspirerat av Monopol-kort med hög kontrast, tydliga linjer och hårda skuggor.
* **Split-Screen:** Lägg till och ta bort kurser i ett tvådelat gränssnitt, split-screen.
* **Färgkodning:** Över 40 olika ämnesområden har automatiserats och färgkodats via en SCSS-map och '@each'-loop.
* **Automatisk poängräkning och minne:** Den totala poängsumman räknas ut i realtid och ramschemat sparas automatiskt i localStorage via en reaktiv effect().

## Tekniska verktyg 

* **Ramverk:** Angular 19 (Standalone-komponenter)
* **Språk:** TypeScript & Javascript
* **Styling:** SCSS (Sass-maps & @each-loopar)
