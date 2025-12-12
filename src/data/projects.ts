export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  coverImage: string;
  images: string[];
  lieu: string;
  surface: string;
  budget: string;
  annee: string;
  mission: string;
  excerpt: string;
  contexte: string;
  contraintes: string;
  solution: string;
  resultats: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Reine Almazal",
    slug: "reine-almazal",
    category: "Architecture Intérieure",
    coverImage: "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_ChambreBleue03.webp",
    images: [
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_ChambreBleue03.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_ChambreBleue01.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazaDressing.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_BancDetail02.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_Circulation_Cruschiform.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_Detail.webp"
    ],
    lieu: "Nîmes (30)",
    surface: "80 m²",
    budget: "Sur demande",
    annee: "2021",
    mission: "Architecture intérieure / Décoration / Suivi de chantier",
    excerpt: "Un souhait singulier : teinter la vie de notre cliente des nuances de la sérénité, par l'intermédiaire d'une chambre aux reflets azuréens.",
    contexte: "Pour le projet Reine Almazal, une carte blanche nous a été confiée. En effaçant les traces d'un passé chromatique insipide, nous avons créé notre toile de liberté, œuvrant dans l'ombre pour un émerveillement ultime.",
    contraintes: "Une liste succincte d'éléments à éviter, sans que notre cliente ne mette un seul pas dans l'antre du chantier, en anticipation d'une révélation finale.",
    solution: "La suite se révèle être le joyau de la couronne, incarnant les principes d'un appart-hôtel. Le palier se transforme en galerie intime évoquant l'atmosphère d'un musée. Les chambres forment un diptyque lié par un panorama mural.",
    resultats: "Un sanctuaire personnalisé, un reflet de l'essence de notre cliente. Reine Almazal est plus qu'un projet : c'est un recueil d'histoires, de détails, de rencontres."
  },
  {
    id: "2",
    title: "Le Sumérien",
    slug: "le-sumerien",
    category: "Architecture",
    coverImage: "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_exterieur_AP.webp",
    images: [
      "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_exterieur_AP.webp",
      "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_exterieur_AV.webp",
      "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_exterieur3.webp",
      "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_exterieur_entree_AP.webp",
      "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_cuisine_ilot.webp"
    ],
    lieu: "Anduze (30)",
    surface: "130 m²",
    budget: "Sur demande",
    annee: "2021",
    mission: "Rénovation et extension / Architecture",
    excerpt: "Quand tradition cévenole rencontre modernité – Un voyage architectural à Anduze où chaque pierre raconte une histoire.",
    contexte: "Imaginez un lieu où le temps s'arrête, où la tradition rencontre la modernité. Sumérien est un joyau architectural niché dans les hauteurs d'Anduze, une célébration de l'harmonie entre le passé et le présent.",
    contraintes: "Respect de l'authenticité cévenole tout en introduisant des éléments de design modernes, créant une conversation entre l'ancien et le nouveau, le rustique et le raffiné.",
    solution: "Transformation audacieuse du mas cévenol traditionnel avec terrasse semi-enterrée offrant des vues imprenables. Utilisation de pierres locales et chaque détail pensé pour une famille moderne.",
    resultats: "Plus qu'un projet, Sumérien est une source d'inspiration, un témoignage de la capacité de Planet Studio à créer des espaces qui transcendent les attentes, un lieu où les souvenirs se forment et durent éternellement."
  },
  {
    id: "3",
    title: "Beauséjour",
    slug: "beausejour",
    category: "Architecture Intérieure",
    coverImage: "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00111.webp",
    images: [
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00111.webp",
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00104.webp",
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00029.webp",
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00013.webp",
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00032.webp",
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00042.webp",
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00043.webp",
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00107.webp"
    ],
    lieu: "Nîmes (30)",
    surface: "260 m²",
    budget: "Sur demande",
    annee: "2023",
    mission: "Réhabilitation complète / Architecture intérieure",
    excerpt: "Cette villa perchée sur les hauteurs de Nîmes s'épanouit en un havre où s'entremêlent l'histoire et le renouveau.",
    contexte: "À seulement cinq minutes des antiques arènes romaines, cette demeure se niche dans un ancien lotissement où la nature parvenue à maturité a tissé son écrin de verdure. Conçue pour un couple ayant choisi Nîmes pour retraite.",
    contraintes: "La maison, témoin des années 70, s'élève parmi une végétation luxuriante dont les vues et le cadre sont prudemment préservés. Respecter l'âme du sud tout en modernisant.",
    solution: "Réorganisation des espaces avec salle de cinéma, bar, cuisine bivalente, suite principale en demi-niveau aux tons sombres et chaleureux. Piscine repensée avec plage immergée et débordement spectaculaire.",
    resultats: "Beauséjour est une ode à la vie, un cycle d'échanges et de partages. Notre cliente, devenue architecte d'intérieur au fil du projet, a contribué à façonner cette villa, témoignage d'une collaboration fructueuse."
  },
  {
    id: "4",
    title: "L'Olivier",
    slug: "olivier",
    category: "Architecture",
    coverImage: "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00045.webp",
    images: [
      "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00045.webp",
      "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00019.webp",
      "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00021.webp",
      "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00033.webp",
      "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00049.webp",
      "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00076.webp",
      "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00083.webp"
    ],
    lieu: "Languedoc (30)",
    surface: "160 m²",
    budget: "Sur demande",
    annee: "2017",
    mission: "Construction neuve / Architecture",
    excerpt: "Cette maison est neuve mais porte en elle l'âme des maisons de maîtres. Une invitation à la sérénité, un refuge lumineux au cœur de la nature languedocienne.",
    contexte: "Pensée pour un jeune couple et ses enfants, L'Olivier est une invitation à la sérénité. En franchissant le seuil, on est accueilli par une double hauteur qui dévoile une baie vitrée surdimensionnée, véritable prisme de lumière.",
    contraintes: "Créer une séparation subtile entre espaces familiaux et ceux réservés aux invités, tout en maintenant une interaction fluide. Intégration harmonieuse avec l'environnement cévenol.",
    solution: "Architecture jouant avec les volumes et perspectives. Escalier à crémaillère comme pièce maîtresse dissimulant un passage secret. Murs en pierre, revêtements béton brut rappelant les terrasses méditerranéennes.",
    resultats: "L'Olivier est une maison pensée pour vivre et ressentir pleinement chaque instant. Un espace où l'architecture, la décoration et la nature se répondent et se complètent, créant une harmonie parfaite."
  }
];
