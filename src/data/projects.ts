export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  coverImage: string;
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
    title: "Maison contemporaine à Anduze",
    slug: "maison-contemporaine-anduze",
    category: "Architecture",
    coverImage: "/src/assets/project-4.jpg",
    lieu: "Anduze (30)",
    surface: "180 m²",
    budget: "350 000 - 400 000 €",
    annee: "2024",
    mission: "ESQ / APS / APD / DCE / MOE",
    excerpt: "Création d'une maison contemporaine intégrée dans le paysage cévenol",
    contexte: "Un couple souhaitait construire une maison contemporaine qui respecte l'environnement naturel des Cévennes tout en offrant des espaces de vie lumineux et ouverts.",
    contraintes: "Terrain en pente, réglementation stricte du PLU local, orientation nord-sud à optimiser, intégration paysagère.",
    solution: "Conception d'une architecture en terrasses suivant la pente naturelle, grandes baies vitrées orientées sud, utilisation de matériaux locaux (pierre, bois), toiture végétalisée.",
    resultats: "Une maison parfaitement intégrée qui offre 180m² de confort avec une consommation énergétique très basse (RE2020). Les propriétaires bénéficient d'une luminosité exceptionnelle et de vues sur la nature."
  },
  {
    id: "2",
    title: "Rénovation appartement à Nîmes",
    slug: "renovation-appartement-nimes",
    category: "Architecture Intérieure",
    coverImage: "/src/assets/project-1.jpg",
    lieu: "Nîmes (30)",
    surface: "95 m²",
    budget: "80 000 - 100 000 €",
    annee: "2023",
    mission: "Architecture intérieure / Décoration",
    excerpt: "Transformation complète d'un appartement haussmannien en espace moderne et lumineux",
    contexte: "Rénovation d'un appartement des années 1900 avec cachet à préserver mais distribution obsolète et manque de lumière.",
    contraintes: "Murs porteurs limitant les modifications, hauteur sous plafond importante à valoriser, budget maîtrisé.",
    solution: "Redistribution intelligente en conservant les éléments patrimoniaux (moulures, cheminées), création d'une cuisine ouverte, optimisation des rangements, choix de couleurs claires et matériaux nobles.",
    resultats: "Gain de luminosité de 40%, création d'un espace de vie convivial tout en préservant le charme de l'ancien. Les propriétaires ont gagné en fonctionnalité sans perdre l'âme du lieu."
  },
  {
    id: "3",
    title: "Restaurant gastronomique à Challans",
    slug: "restaurant-gastronomique-challans",
    category: "Architecture Intérieure",
    coverImage: "/src/assets/project-3.jpg",
    lieu: "Challans (85)",
    surface: "250 m²",
    budget: "180 000 - 220 000 €",
    annee: "2023",
    mission: "Architecture intérieure / MOE / Attestations PMR",
    excerpt: "Création d'un espace gastronomique élégant et fonctionnel",
    contexte: "Transformation d'un local commercial en restaurant gastronomique avec cuisine professionnelle et salle de 60 couverts.",
    contraintes: "Normes ERP strictes, accessibilité PMR, acoustique, extraction cuisine, délai serré (6 mois).",
    solution: "Conception d'espaces optimisés avec séparation claire cuisine/salle, traitement acoustique par plafonds et cloisons spécifiques, éclairage d'ambiance sur mesure, mobilier confortable et élégant.",
    resultats: "Ouverture dans les délais, conformité totale aux normes, ambiance chaleureuse saluée par la presse locale. Le restaurant affiche complet depuis son ouverture."
  },
  {
    id: "4",
    title: "Extension maison individuelle",
    slug: "extension-maison-vendee",
    category: "Architecture",
    coverImage: "/src/assets/project-2.jpg",
    lieu: "Saint-Jean-de-Monts (85)",
    surface: "45 m²",
    budget: "120 000 - 140 000 €",
    annee: "2024",
    mission: "Étude de faisabilité / Permis de construire / MOE",
    excerpt: "Extension contemporaine d'une maison des années 80",
    contexte: "Une famille souhaitait agrandir sa maison pour créer une suite parentale avec salle de bain et dressing.",
    contraintes: "Cohérence architecturale avec l'existant, budget limité, emprise au sol maximale à respecter.",
    solution: "Extension en ossature bois avec bardage harmonisé, grandes ouvertures vers le jardin, toiture plate végétalisée, isolation renforcée.",
    resultats: "45m² de surface supplémentaire parfaitement intégrés, budget maîtrisé, délais respectés (8 mois). La famille bénéficie d'un espace confortable et lumineux."
  }
];
