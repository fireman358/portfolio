# Kit de marque Edukisto

## Logos
- `logo-star-1024.png` / `logo-star-2048.png` — étoile bleue (#38bdf8), fond sombre, PNG transparent
- `logo-star-teal-1024.png` — variante teal (#0e7490), fond clair
- `../edukisto-mark-dark.svg` / `../edukisto-mark.svg` — versions vectorielles (à privilégier pour l'impression : agrandissement sans perte)
- `logo-lockup-slogan.svg/.png` — logo horizontal + "Edukisto" + accroche "Votre informaticien de proximité", fond anthracite #333333

## QR codes (vers https://edukisto.win/)
- `qr-code-dark.png` — bleu sur anthracite #333333 (supports numériques)
- `qr-code-print.png` — noir sur blanc (impression : contraste maximal, scan garanti)
- Correction d'erreur niveau H : robuste même abîmé/froissé (t-shirt, tract plié)

## Affiche A3 avec une imprimante A4 : 2 pages à assembler

Si ton imprimante ne fait que l'A4 et que tu veux un affichage A3 (297x420 mm) :
1. Imprime `affiche-vitrine-a3-page1.png` (moitié haute : logo, marque, 4 services)
2. Imprime `affiche-vitrine-a3-page2.png` (moitié basse : QR code, contact, marque)
3. **Paramètres d'impression** : format A4 **paysage**, "Ajuster à la page" (100%), papier photo ou 160-200 g pour la vitrine
4. Assemble : aligne les deux feuilles bord à bord (la coupe tombe entre les sections, aucun contenu n'est coupé) et scotche au dos + petit morceau transparent sur la jointure devant (invisible sur fond anthracite)
5. Option "sans scotch visible" : fais découper et plastifier les deux A4 en une seule feuille A3 chez un magasin de impression (Copy Center, etc.) pour ~5-10 €

## Affiches prêtes à imprimer (300 DPI)
- `affiche-vitrine-a4.svg/.png` / `affiche-vitrine-a3.png` — affiche PUB vitrine : logo, marque, accroche, 4 services (dépannage, cours, sécurité, sites web), QR code scannable, contact WhatsApp/Facebook, zone Seneffe. A4 (2480x3508) et A3 (3508x4961)
- Le SVG est la source de vérité : les PNG A4/A3 sont régénérés automatiquement par GitHub Actions (`.github/workflows/render-affiche-vitrine.yml`) à chaque modification du SVG
- `poster-a4.svg/.png` — affiche A4 (210x297 mm) : logo centré, marque, accroche, QR intégré, CTA puis pied de page
- `flyer-a6.svg/.png` — flyer A6 (105x148 mm) : format tract/cartes de visite
- Le QR est embarqué en data URI dans les SVG : ils s'affichent et s'impriment tels quels, sans étape de compositing

## Couverture Facebook
- `facebook-cover.svg/.png` — couverture calibrée pour l'affichage desktop (820x312) et mobile (640x360) : tout le contenu tient dans la zone sûre commune (640x312 centrés), visible en entier sans cliquer sur la photo. Rendu PNG en 1640x720 pour la netteté retina.

## Conseils d'usage
- Impression (tracts, t-shirts) : fournir les SVG aux imprimeurs, ou les PNG 300 DPI
- T-shirts : sérigraphie OK ; pour impression numérique, `logo-star-2048.png` suffit
- Ne pas déformer le logo ; le fond anthracite est #333333, l'accent unique #38bdf8
- Toujours tester le scan du QR sur une impression réelle avant tirage complet
