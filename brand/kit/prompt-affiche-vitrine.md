# Prompt affiche vitrine Edukisto (A4 / A3)

## ⚠️ Avant de générer : 2 règles d'or

1. **Le QR code** : les IA génèrent des QR codes *fictifs* non scannables. Génère l'affiche SANS QR code (ou avec un emplacement vide), puis incruste `brand/kit/qr-code-print.png` par-dessus (Canva, Photoshop, GIMP…).
2. **Le texte** : les IA déforment souvent le texte long. Deux stratégies :
   - **Ideogram** ou **Flux** : gèrent bien le texte court, tu peux tout mettre dans le prompt.
   - Autres IA : génère seulement le fond/l'ambiance, ajoute les textes ensuite dans Canva.

---

## Prompt (français — pour Ideogram, Flux, DALL-E 3)

> Affiche publicitaire verticale A4 élégante et professionnelle pour un informaticien indépendant. Fond anthracite foncé #333333. En haut au centre : étoile à 8 branches stylisée en bleu cyan #38bdf8 avec symbole infini au centre. En dessous, en très grandes lettres blanches modernes et arrondies : "Edukisto". Juste en dessous, en bleu cyan #38bdf8 : "Votre informaticien de proximité". Au milieu, quatre pictogrammes plats minimalistes bleus sur cartes anthracite légèrement plus claires : ordinateur (dépannage), écran avec engrenage (cours d'informatique), bouclier (sécurité numérique), globe web (sites internet). En bas : emplacement rectangulaire blanc arrondi au centre pour un QR code. Tout en bas, en petites lettres blanches : "Seneffe & 20 km alentour — 1er contact gratuit" et "WhatsApp : 0486 20 60 81 — facebook.com/Edukisto". Style épuré, moderne, flat design, high-tech, éclairage doux bleu, dégradés subtils cyan sur les bords, équilibre parfait, sans photo, sans foule. Palette stricte : anthracite #333333, bleu cyan #38bdf8, blanc pur.

## Prompt (anglais — pour Midjourney, version plus fiable)

> Vertical A4 advertising poster for an independent IT technician, dark charcoal background #333333, flat design. Top center: stylized 8-point star logo in cyan blue #38bdf8 with infinity symbol in its center. Below: bold rounded white sans-serif wordmark "Edukisto". Tagline underneath in cyan: "Votre informaticien de proximité". Middle section: four minimalist flat cyan line icons on slightly lighter charcoal cards: laptop (computer repair), screen with gear (IT lessons), shield (digital security), globe (websites). Bottom center: empty rounded white square placeholder (space reserved for QR code). Footer in small white text: "Seneffe & 20 km — 1er contact gratuit". Strict color palette: charcoal #333333, cyan blue #38bdf8, pure white. Clean, modern, high-tech, subtle cyan glow on edges, balanced composition, no photos, no people --ar 210:297 --style raw

## Déclinaison A3

Même prompt, ajouter : `poster proportion 297x420mm portrait, high resolution 300 DPI, large format print`

## Textes à incruster en post-production (Canva/GIMP)

- Titre : **Edukisto** (DejaVu Sans Bold ou Montserrat ExtraBold, blanc)
- Accroche : **Votre informaticien de proximité** (#38bdf8)
- Services : Dépannage à domicile · Cours d'informatique · Sécurité numérique · Sites web pour pros
- Zone : Seneffe & 20 km alentour · 1er contact gratuit
- Contact : WhatsApp 0486 20 60 81 · facebook.com/Edukisto
- QR code : `brand/kit/qr-code-print.png` (noir/blanc, scannable, testé)
- Formats finaux : A4 = 2480×3508 px · A3 = 3508×4961 px (300 DPI)

## Astuces selon l'outil

- **Midjourney** : `--ar 210:297` donne le ratio A-series portrait exact ; ajoute `--no photo, crowd, watermark`
- **Ideogram/Flux** : le texte français passe bien, privilégie-les si tu veux tout générer d'un coup
- **Canva** : a des modèles "affiche vitrine" — tu peux y recopier ce prompt dans son générateur Magic Media puis finir à la main
- Vitrine : contraste élevé important (lecture à travers le verre) → fond sombre + textes blancs/bleus = parfait avec ta charte
