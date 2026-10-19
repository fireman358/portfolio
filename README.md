# David Demoulin — Vitrine & CV interactif

Site vitrine statique (HTML/CSS/JS, zéro dépendance) présentant :
- **4 applications en ligne** (Barakfix, Calendrier Familial, Keskônmange Lulu, Espace Manager Soft Love) avec session découverte d'1 h
- **CV dynamique** : compétences, certifications OpenClassrooms, parcours ( pompier, éducateur, IT ), atouts
- **Volet créatif** : autobiographie « De la chute au clan » et musique sous le pseudo D. RAW ARK

## Structure
- `index.html` — vitrine des applis + session découverte
- `about.html` — CV dynamique
- `js/data.js` — tout le contenu (applis, CV, créations) se modifie ici
- `js/session.js` — compte à rebours découverte (localStorage, 1 h, +15 min)
- `css/style.css` — thème sombre responsive

## Déploiement GitHub Pages
1. Créer un dépôt public `portfolio` sous le compte GitHub
2. Pousser ce dossier sur la branche `main`
3. Settings → Pages → Source : `main` / root → URL : `https://fireman358.github.io/portfolio/`

## Session découverte
- Stockée côté navigateur (localStorage) : aucune base de données, adapté à une vitrine.
- Les applications restant accessibles directement par leur URL, la limite est symbolique (incitation à l'exploration guidée), pas une barrière technique.
