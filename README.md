# Dagje in de Frituur

Statische website op Cloudflare Pages. Excursies en gidsen zijn data-driven.

## Structuur

- `data/excursions.js` — centrale databron voor excursies
- `data/guides.js` — centrale databron voor gidsen
- `assets/js/excursions-list.js` — excursiekaarten op de homepage
- `assets/js/excursion-page.js` — detailweergave van excursies
- `assets/js/guides-list.js` — overzicht van gidsen
- `assets/js/guide-page.js` — detailweergave van gidsen
- `assets/js/filters.js` — filters op de homepage
- `assets/js/data-validator.js` — controle op foutieve IDs, slugs en URLs
- `assets/css/` — gedeelde styling
- `excursies/` en `gidsen/` — dunne HTML-shells voor crawlbare URLs en metadata

## Nieuwe excursie toevoegen

1. Voeg één object toe aan `data/excursions.js`.
2. Gebruik bij `guideId` exact een bestaande ID uit `data/guides.js`.
3. Gebruik `href: "/excursies/<slug>.html"`.
4. Maak een dunne HTML-shell in `excursies/<slug>.html`.
5. Voeg de canonical URL toe aan `sitemap.xml`.

De homepage, filters, gidskoppeling en het blok “Alle excursies” worden automatisch uit de data opgebouwd.

## Nieuwe gids toevoegen

1. Voeg de gids één keer toe aan `data/guides.js`.
2. Maak `gidsen/<slug>.html` als dunne shell met `data-guide-slug="<slug>"`.
3. Voeg de URL toe aan `sitemap.xml`.

De gids verschijnt automatisch in het gidsenoverzicht en, zodra er een excursie aan gekoppeld is, in de gidsfilter.
