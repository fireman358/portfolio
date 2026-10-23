const APPS = [
  {
    id: "barakfix",
    name: "Barakfix",
    description: "Demandes de réparation entre bailleur et locataire — simple et tracé. Un outil web pensé pour désamorcer les conflits locatifs en structurant les échanges.",
    tags: ["Web", "Cloudflare Pages", "Productivité"],
    icon: "🔧",
    url: "https://barakfix.edukisto.win/",
    screenshot: "img/barakfix.png",
  },
  {
    id: "caldemandco",
    name: "Calendrier Familial",
    description: "Le calendrier de toute la famille : anniversaires, événements, congés scolaires et rappels des prochaines dates à ne pas oublier, mois par mois. Essayez la démo interactive (famille fictive).",
    tags: ["Web", "Cloudflare Workers", "Famille", "Démo"],
    icon: "🎂",
    url: "https://caldemo.edukisto.win/",
    screenshot: "img/caldemandco.png",
  },
  {
    id: "keskonmagelulu",
    name: "Keskônmange Lulu ?",
    description: "Planifie les repas de la semaine en un clin d'œil : idées menus équilibrés par catégorie (végé, poulet, poisson…), avec assouplissement « crasses » et options à commander.",
    tags: ["Web", "Cloudflare Workers", "Quotidien"],
    icon: "🍽️",
    url: "https://repas.edukisto.win/",
    screenshot: "img/keskonmagelulu.png",
  },
  {
    id: "laetisoftlove",
    name: "Espace Manager — Lumen & Co (démo)",
    description: "Outil interne d'équipe protégé par mot de passe : manuel, objectifs, formations, FAQ modifiable par la manager et modèles de mails. Essayez la démo complète (marque fictive) — accès : demo.",
    tags: ["Web", "Cloudflare Workers", "Espace privé", "Démo"],
    icon: "👑",
    url: "https://manager.edukisto.win/",
    screenshot: "img/laetisoftlove.png",
  },
];

// Carte service affichée sur l'accueil après les applis
const SERVICES = [
  {
    id: "cours",
    name: "Cours d'informatique",
    description: "Systèmes & réseaux (ma spécialisation), sécurité numérique, initiation à l'IA, bases du code, bureautique. 25 ans de pédagogie à votre service — 1er cours offert.",
    tags: ["Enseignement", "IA générative", "Débutants bienvenus"],
    icon: "🎓",
    type: "service",
    link: "about.html#formation",
  },
];

const CV = {
  name: "David Demoulin",
  role: "Technicien IT & Réseaux — Développeur d'applications web",
  location: "Seneffe, Belgique",
  summary:
    "Technicien IT en reconversion certifiée, avec 25 ans d'expérience de terrain en gestion d'urgence, secours et accompagnement humain. Je conçois aujourd'hui des applications web utiles, simples et centrées sur les vrais besoins des gens — parce qu'avant le code, j'ai passé une carrière à écouter des personnes en difficulté.",
  badges: [
    "🛠️ 25 ans de terrain",
    "🚑 Gestion d'urgence",
    "💻 Reconversion IT certifiée",
    "🚀 4 applications en ligne",
  ],
  skills: [
    { name: "Support Helpdesk & diagnostic", level: 90 },
    { name: "Maintenance & réparation hardware", level: 85 },
    { name: "Réseaux TCP/IP (LAN/WAN, VLAN)", level: 75 },
    { name: "Windows Server / Active Directory", level: 70 },
    { name: "GLPI (ITIL, gestion de parc)", level: 75 },
    { name: "Développement web (HTML/CSS/JS, Cloudflare)", level: 70 },
    { name: "Linux (Debian)", level: 55 },
    { name: "Relation client & communication", level: 95 },
  ],
  certifications: [
    { title: "Technicien Informatique — Titre de Validation des Compétences", org: "Consortium de Validation (Bruxelles)", date: "2026" },
    { title: "Concevez votre réseau TCP/IP", org: "OpenClassrooms", date: "" },
    { title: "Prenez en main Windows Server", org: "OpenClassrooms", date: "" },
    { title: "Gérez votre parc informatique avec GLPI", org: "OpenClassrooms", date: "" },
    { title: "Gérez vos incidents avec ITIL sur GLPI", org: "OpenClassrooms", date: "" },
    { title: "Montez un PC", org: "OpenClassrooms", date: "" },
  ],
  timeline: [
    {
      year: "2025–2026",
      title: "Développeur d'applications web (indépendant)",
      text: "Conception et mise en ligne de 4 applications sur Cloudflare (Barakfix, Calendrier Familial, Keskônmange Lulu, Espace Manager Soft Love) + reconversion certifiée en Technicien IT.",
    },
    {
      year: "2008–2025",
      title: "Éducateur spécialisé",
      org: "Province du Brabant wallon",
      text: "Accompagnement psycho-éducatif et thérapeutique, EVRAS, gestion de situations de crise, communication adaptée à des publics variés. Également indépendant complémentaire en accompagnement social (EDUKISTO).",
    },
    {
      year: "2007–2010",
      title: "Consultant IT indépendant",
      org: "DAD Consulting",
      text: "Conseil, vente et montage de matériel informatique, création de sites internet, Windows/Linux.",
    },
    {
      year: "2000–2017",
      title: "Sapeur-pompier volontaire & ambulancier 112",
      org: "Ville de Nivelles",
      text: "Urgences, aide médicale urgente (AMU), défibrillation (DAE), lutte contre l'incendie.",
    },
    {
      year: "2006–2008",
      title: "Accueillant des étrangers",
      org: "Office des Étrangers",
      text: "Accueil et orientation des demandeurs d'asile, aide administrative.",
    },
    {
      year: "2002–2006",
      title: "Agent de sécurité / secouriste / pompier",
      org: "Group 4 Falck (G4S)",
      text: "Sécurité, prévention incendie, poste de soins.",
    },
  ],
  soft: [
    {
      title: "Communication",
      text: "Faire passer le bon message, adapté à chaque interlocuteur : urgences, publics fragiles, collègues techniques.",
    },
    {
      title: "Gestion du stress",
      text: "25 ans d'urgences réelles : anticiper, prioriser, garder le cap quand tout s'agite.",
    },
    {
      title: "Adaptabilité",
      text: "Santé, éducation, sécurité, IT : comprendre vite et bien, puis agir.",
    },
    {
      title: "Écoute client",
      text: "Performance = écouter d'abord, répondre ensuite. Un ticket mal compris est un ticket refait.",
    },
  ],
  creative: {
    intro:
      "L'informatique n'a pas le monopole de la création. Sous le pseudo D. RAW ARK, j'écris mes textes et dirige l'univers artistique de mes titres — la plume reste à moi. Et j'édite aussi un site passion sur le tir et la défense.",
    items: [
      {
        icon: "🎯",
        title: "Tir & Défense Belgique — webmaster",
        text: "Un site d'actualité et de tests sur le tir sportif et l'équipement de défense : création, rédaction, gestion et animation au quotidien.",
        link: "https://tir-defense-belgique.be/",
        linkLabel: "🎯 Visiter le site",
      },
      {
        icon: "📖",
        title: "De la chute au clan : itinéraire d'un survivant",
        text: "Autobiographie de 107 pages : l'histoire d'une chute et d'une reconstruction, écrite pour témoigner.",
      },
      {
        icon: "🎵",
        title: "De la chute au clan — l'album (23 titres, 1h26)",
        text: "Mon premier album : l'histoire du livre mise en musique, 23 titres dont « Mon armure », « Marbais », « Flashover », « Le clan d'Arquennes » et « Le courage d'aimer ». Paroles et direction artistique : D. Raw Ark. Disponible sur Spotify.",
        link: "https://open.spotify.com/intl-fr/album/3RnW4B214LjbltaAB5kzhW",
        linkLabel: "🎧 Écouter sur Spotify",
      },
    ],
  },
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Correct (technique : lu et compris)" },
    { name: "Néerlandais", level: "Notions" },
    { name: "Espéranto", level: "Notions" },
  ],
  hobbies: "Montage PC, gaming et veille techno · moto et balades · cinéphile · vie de famille",
  teaching: {
    title: "Cours d'informatique & accompagnement numérique",
    intro: "Vous souhaitez être à l'aise avec les technologies, comprendre le code ou utiliser l'intelligence artificielle sans vous perdre dans le jargon ? Mon objectif : rendre l'informatique accessible, stimulante et directement utile à vos projets.",
    proof: "Ma force : 25 ans d'expérience dans l'accompagnement éducatif associés à une spécialisation en administration systèmes & réseaux. J'adapte chaque séance à votre rythme, sans jugement, avec une vraie écoute — que vous partiez de zéro ou que vous visiez des compétences professionnelles.",
    modules: [
      {
        icon: "🛡️",
        title: "Systèmes & réseaux",
        spec: "ma spécialisation",
        text: "Administration Windows, découverte de Linux (Mint, Debian), compréhension de votre connexion Internet/Wi-Fi, TCP/IP, configuration et entretien de votre matériel.",
      },
      {
        icon: "🔒",
        title: "Sécurité numérique",
        text: "Les bons réflexes face aux arnaques, mots de passe solides, sauvegardes, protection de vos données personnelles et professionnelles.",
      },
      {
        icon: "🤖",
        title: "Initiation à l'IA & prompting",
        text: "Fonctionnement des IA (ChatGPT, Gemini…), formulation de requêtes claires et efficaces pour rédiger, organiser votre quotidien, synthétiser des documents ou booster vos projets.",
      },
      {
        icon: "💻",
        title: "Bases de la programmation & logique",
        text: "Comprendre un programme, la logique algorithmique (variables, conditions, boucles), premiers pas concrets et ludiques dans le code.",
      },
      {
        icon: "🗂️",
        title: "Bureautique & vie quotidienne",
        text: "Traitement de texte, tableurs, gestion sécurisée des fichiers, e-mails, démarches en ligne.",
      },
    ],
    practical: "Séances individuelles ou petits groupes · à domicile (Seneffe et alentours), en visio ou chez vous dans un rayon de 20 km.",
    superprof: {
      label: "Disponible aussi sur Superprof",
      link: "https://www.superprof.be/educateur-passionne-informatique-enseigne-bureautique-codage-base-outils-systemes.html",
      detail: "1er cours offert · avis vérifiés",
    },
  },
  featured: [
    { name: "Barakfix", link: "https://barakfix.edukisto.win/" },
    { name: "Calendrier Familial (démo)", link: "https://caldemo.edukisto.win/" },
    { name: "Keskônmange Lulu ?", link: "https://repas.edukisto.win/" },
    { name: "Espace Manager (démo)", link: "https://manager.edukisto.win/" },
  ],
};
