const FLAT = (d, s = 28) => `<svg class="flat-icon" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICONS = {
  wrench: (s = 28) => FLAT('<path d="M14.7 6.3a5 5 0 0 0-7 7L3 18l3 3 4.7-4.7a5 5 0 0 0 7-7l-3 3-3-3 3-3z"/>', s),
  calendar: (s = 28) => FLAT('<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 9h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01"/>', s),
  utensils: (s = 28) => FLAT('<path d="M7 2v8a2 2 0 0 0 4 0V2M9 12v10M16 2c-1.5 2-2 4-2 6s.5 3 2 3v9"/>', s),
  shieldUser: (s = 28) => FLAT('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="9" r="2.5"/><path d="M9 14c.6-1.2 1.7-2 3-2s2.4.8 3 2"/>', s),
  target: (s = 28) => FLAT('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>', s),
  gradCap: (s = 28) => FLAT('<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>', s),
  book: (s = 28) => FLAT('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>', s),
  music: (s = 28) => FLAT('<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>', s),
  tools: (s = 28) => FLAT('<path d="M14.7 6.3a5 5 0 0 0-7 7L3 18l3 3 4.7-4.7a5 5 0 0 0 7-7l-3 3-3-3 3-3z"/><path d="M14 7l3-3 3 3-3 3"/>', s),
  ambulance: (s = 28) => FLAT('<path d="M3 17V8h11v9M14 11h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="2"/><circle cx="17" cy="17.5" r="2"/><path d="M6 8V5h4M8.5 9.5v4M6.5 11.5h4"/>', s),
  laptop: (s = 28) => FLAT('<rect x="4" y="5" width="16" height="10" rx="1"/><path d="M2 18h20"/>', s),
  rocket: (s = 28) => FLAT('<path d="M12 15c-2 0-5-1-5-1s1-7 5-11c4 4 5 11 5 11s-3 1-5 1z"/><path d="M9 14l-3 6 5-2M15 14l3 6-5-2"/><circle cx="12" cy="9" r="1.5"/>', s),
  mapPin: (s = 28) => FLAT('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>', s),
  sword: (s = 28) => FLAT('<path d="M14.5 17.5L3 6V3h3l11.5 11.5M13 19l6-6M16 16l4 4M19 21l2-2"/>', s),
  lock: (s = 28) => FLAT('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>', s),
  bot: (s = 28) => FLAT('<rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4M8 4h8M9 13v2M15 13v2M2 12v4M22 12v4"/>', s),
  briefcase: (s = 28) => FLAT('<rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4M8 4h8M9 13v2M15 13v2"/>', s),
};

const APPS = [
  {
    id: "barakfix",
    name: "Barakfix",
    description: "Demandes de réparation entre bailleur et locataire — simple et tracé. Un outil web pensé pour désamorcer les conflits locatifs en structurant les échanges.",
    tags: ["Web", "Cloudflare Pages", "Productivité"],
    icon: ICONS.wrench(),
    url: "https://barakfix.edukisto.win/",
    screenshot: "img/barakfix.png",
  },
  {
    id: "caldemandco",
    name: "Calendrier Familial",
    description: "Le calendrier de toute la famille : anniversaires, événements, congés scolaires et rappels des prochaines dates à ne pas oublier, mois par mois. Essayez la démo interactive (famille fictive).",
    tags: ["Web", "Cloudflare Workers", "Famille", "Démo"],
    icon: ICONS.calendar(),
    url: "https://caldemo.edukisto.win/",
    screenshot: "img/caldemandco.png",
  },
  {
    id: "keskonmagelulu",
    name: "Keskônmange Lulu ?",
    description: "Planifie les repas de la semaine en un clin d'œil : idées menus équilibrés par catégorie (végé, poulet, poisson…), avec assouplissement « crasses » et options à commander.",
    tags: ["Web", "Cloudflare Workers", "Quotidien"],
    icon: ICONS.utensils(),
    url: "https://repas.edukisto.win/",
    screenshot: "img/keskonmagelulu.png",
  },
  {
    id: "laetisoftlove",
    name: "Espace Manager — Lumen & Co (démo)",
    description: "Outil interne d'équipe protégé par mot de passe : manuel, objectifs, formations, FAQ modifiable par la manager et modèles de mails. Essayez la démo complète (marque fictive) — accès : demo.",
    tags: ["Web", "Cloudflare Workers", "Espace privé", "Démo"],
    icon: ICONS.shieldUser(),
    url: "https://manager.edukisto.win/",
    screenshot: "img/laetisoftlove.png",
  },
  {
    id: "tirdefense",
    name: "Tir & Défense Belgique",
    description: "Site d'actualité et de tests sur le tir sportif et l'équipement de défense : création, rédaction, SEO, gestion et animation quotidienne d'un média en ligne.",
    tags: ["WordPress", "SEO", "Rédaction", "Webmastering"],
    icon: ICONS.target(),
    url: "https://tir-defense-belgique.be/",
    screenshot: "img/tirdefense-capture.png",
  },
];

// Carte service affichée sur l'accueil après les applis
const SERVICES = [
  {
    id: "cours",
    name: "Cours d'informatique",
    description: "Systèmes & réseaux (ma spécialisation), sécurité numérique, initiation à l'IA, bases du code, bureautique. 25 ans de pédagogie à votre service — 1er cours offert.",
    tags: ["Enseignement", "IA générative", "Débutants bienvenus"],
    icon: ICONS.gradCap(),
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
    { icon: "tools", label: "25 ans de terrain" },
    { icon: "ambulance", label: "Gestion d'urgence" },
    { icon: "laptop", label: "Reconversion IT certifiée" },
    { icon: "rocket", label: "4 applications en ligne" },
  ],
  skills: [
    { name: "Relation client & communication", level: "Expert" },
    { name: "Support Helpdesk & diagnostic", level: "Expert" },
    { name: "Maintenance & réparation hardware", level: "Avancé" },
    { name: "Réseaux TCP/IP (LAN/WAN, VLAN)", level: "Confirmé" },
    { name: "Windows Server / Active Directory", level: "Confirmé" },
    { name: "GLPI (ITIL, gestion de parc)", level: "Confirmé" },
    { name: "Développement web (HTML/CSS/JS, Cloudflare)", level: "Confirmé" },
    { name: "Linux (Debian)", level: "Intermédiaire" },
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
        icon: "target",
        title: "Tir & Défense Belgique — webmaster",
        text: "Un site d'actualité et de tests sur le tir sportif et l'équipement de défense : création, rédaction, gestion et animation au quotidien.",
        link: "https://tir-defense-belgique.be/",
        linkLabel: "Visiter le site",
      },
      {
        icon: "book",
        title: "De la chute au clan : itinéraire d'un survivant",
        text: "Autobiographie de 107 pages : l'histoire d'une chute et d'une reconstruction, écrite pour témoigner.",
      },
      {
        icon: "music",
        title: "De la chute au clan — l'album (23 titres, 1h26)",
        text: "Mon premier album : l'histoire du livre mise en musique, 23 titres dont « Mon armure », « Marbais », « Flashover », « Le clan d'Arquennes » et « Le courage d'aimer ». Paroles et direction artistique : D. Raw Ark. Disponible sur Spotify.",
        link: "https://open.spotify.com/intl-fr/album/3RnW4B214LjbltaAB5kzhW",
        linkLabel: "Écouter sur Spotify",
      },
    ],
  },
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Correct (technique : lu et compris)" },
    { name: "Néerlandais", level: "Notions" },
    { name: "Espéranto", level: "Notions" },
  ],
  hobbies: "Montage PC, gaming et suivi de l'actualité techno · tir sportif (licencié, toutes catégories A-B-C-D) · moto · spéléo & canyoning · cinéphile · vie de famille",
  teaching: {
    title: "Cours d'informatique & accompagnement numérique",
    intro: "Vous souhaitez être à l'aise avec les technologies, comprendre le code ou utiliser l'intelligence artificielle sans vous perdre dans le jargon ? Mon objectif : rendre l'informatique accessible, stimulante et directement utile à vos projets.",
    proof: "Ma force : 25 ans d'expérience dans l'accompagnement éducatif associés à une spécialisation en administration systèmes & réseaux. J'adapte chaque séance à votre rythme, sans jugement, avec une vraie écoute — que vous partiez de zéro ou que vous visiez des compétences professionnelles.",
    modules: [
      {
        icon: "sword",
        title: "Systèmes & réseaux",
        spec: "ma spécialisation",
        text: "Administration Windows, découverte de Linux (Mint, Debian), compréhension de votre connexion Internet/Wi-Fi, TCP/IP, configuration et entretien de votre matériel.",
      },
      {
        icon: "lock",
        title: "Sécurité numérique",
        text: "Les bons réflexes face aux arnaques, mots de passe solides, sauvegardes, protection de vos données personnelles et professionnelles.",
      },
      {
        icon: "bot",
        title: "Initiation à l'IA & prompting",
        text: "Fonctionnement des IA (ChatGPT, Gemini…), formulation de requêtes claires et efficaces pour rédiger, organiser votre quotidien, synthétiser des documents ou booster vos projets.",
      },
      {
        icon: "laptop",
        title: "Bases de la programmation & logique",
        text: "Comprendre un programme, la logique algorithmique (variables, conditions, boucles), premiers pas concrets et ludiques dans le code.",
      },
      {
        icon: "briefcase",
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
