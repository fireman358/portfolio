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

## Captures d'écran des applis
Déposez vos captures dans `img/` avec ces noms exacts :
- `img/barakfix.png` — https://barakfix.pages.dev/
- `img/caldemandco.png` — https://caldemandco.fireman358.workers.dev/
- `img/keskonmagelulu.png` — https://keskonmagelulu.fireman358.workers.dev/
- `img/laetisoftlove.png` — https://laetisoftlove.fireman358.workers.dev/

Tant qu'une image est absente, la carte affiche l'icône en grand à la place.
Au survol de l'image : la description de l'appli apparaît en overlay.
