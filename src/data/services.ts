export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
  longDescription: string;
  benefits: string[];
  process: { title: string; description: string }[];
  deliverables: string[];
  pricing?: string;
}

export const services: Service[] = [
  {
    id: "visite-conseil",
    title: "Visite conseil",
    slug: "visite-conseil",
    icon: "Search",
    description: "Évaluez le potentiel, les risques et les coûts de votre projet immobilier",
    longDescription: "La visite conseil est un diagnostic complet de votre bien immobilier. En 2 heures sur place, nous analysons les possibilités d'aménagement, identifions les contraintes techniques et réglementaires, et vous donnons une première estimation budgétaire.",
    benefits: [
      "Acheteurs : validation du potentiel avant achat",
      "Rénovateurs : identification des opportunités et risques",
      "Investisseurs : évaluation rapide de la faisabilité"
    ],
    process: [
      {
        title: "Prise de brief",
        description: "Échange téléphonique pour comprendre vos besoins et attentes"
      },
      {
        title: "Visite sur site",
        description: "Analyse détaillée du bien pendant 2 heures avec relevés et photos"
      },
      {
        title: "Compte-rendu",
        description: "Remise d'un rapport illustré avec recommandations et pistes créatives"
      }
    ],
    deliverables: [
      "Note de synthèse technique (PDF)",
      "Croquis et schémas de principe",
      "Estimation budgétaire indicative",
      "Liste des risques et points de vigilance",
      "Recommandations de délais"
    ],
    pricing: "Forfait 2h : 350€ TTC (déplacement inclus dans un rayon de 30km)"
  },
  {
    id: "etude-faisabilite",
    title: "Étude de faisabilité",
    slug: "etude-faisabilite",
    icon: "FileSearch",
    description: "Validation technique, réglementaire et financière de votre projet",
    longDescription: "L'étude de faisabilité pousse l'analyse plus loin : plans détaillés, vérification des règles d'urbanisme, chiffrage précis, calendrier prévisionnel. C'est l'étape indispensable avant de vous lancer.",
    benefits: [
      "Sécurisation de votre investissement",
      "Vision claire des contraintes et opportunités",
      "Budget et délais fiables",
      "Base solide pour décision d'achat ou de travaux"
    ],
    process: [
      {
        title: "Analyse du besoin",
        description: "Entretien approfondi et recueil du programme"
      },
      {
        title: "Études techniques",
        description: "Plans, consultation PLU/urbanisme, relevés si nécessaire"
      },
      {
        title: "Chiffrage",
        description: "Estimation détaillée poste par poste avec entreprises partenaires"
      },
      {
        title: "Présentation",
        description: "Remise du dossier complet et échange sur les options"
      }
    ],
    deliverables: [
      "Plans d'état existant et de projet (2D)",
      "Note de faisabilité réglementaire",
      "Chiffrage détaillé par lots",
      "Planning prévisionnel",
      "Synthèse des scénarios possibles"
    ],
    pricing: "À partir de 1 800€ selon la complexité"
  },
  {
    id: "architecture",
    title: "Projet d'architecture",
    slug: "projet-architecture",
    icon: "Building",
    description: "Conception complète de votre projet de construction ou extension",
    longDescription: "Du concept initial au permis de construire, nous concevons des projets architecturaux personnalisés qui allient esthétique, fonctionnalité et performance. Chaque projet est unique et reflète vos besoins et votre personnalité.",
    benefits: [
      "Architecture sur-mesure et singulière",
      "Optimisation des espaces et de la lumière",
      "Performance énergétique et confort",
      "Respect du budget et des délais"
    ],
    process: [
      {
        title: "ESQ - Esquisse",
        description: "Première proposition de volumétrie et d'implantation"
      },
      {
        title: "APS - Avant-Projet Sommaire",
        description: "Plans, façades, surfaces, estimation"
      },
      {
        title: "APD - Avant-Projet Définitif",
        description: "Plans détaillés, choix techniques et matériaux"
      },
      {
        title: "Permis de construire",
        description: "Constitution et dépôt du dossier en mairie"
      }
    ],
    deliverables: [
      "Plans d'architecture détaillés",
      "Vues 3D réalistes",
      "Descriptifs techniques",
      "Dossier de permis de construire complet",
      "Estimation financière"
    ],
    pricing: "6 à 10% du montant des travaux"
  },
  {
    id: "architecture-interieure",
    title: "Architecture intérieure",
    slug: "architecture-interieure",
    icon: "Sofa",
    description: "Réinventez vos espaces intérieurs pour plus de confort et d'esthétique",
    longDescription: "L'architecture intérieure transforme votre logement ou local commercial en optimisant chaque mètre carré. Distribution, lumière, matériaux, couleurs : tout est pensé pour créer des espaces qui vous ressemblent.",
    benefits: [
      "Redistribution intelligente des espaces",
      "Gain de luminosité et de fonctionnalité",
      "Harmonie des matériaux et couleurs",
      "Valorisation de votre bien"
    ],
    process: [
      {
        title: "Diagnostic",
        description: "Visite, analyse de l'existant et de vos besoins"
      },
      {
        title: "Concept",
        description: "Proposition d'aménagement avec planches d'ambiance"
      },
      {
        title: "Conception détaillée",
        description: "Plans techniques, élévations, spécifications"
      },
      {
        title: "Suivi",
        description: "Accompagnement travaux et choix déco finale"
      }
    ],
    deliverables: [
      "Plans d'aménagement 2D et 3D",
      "Planches d'ambiance et matériaux",
      "Plans techniques (électricité, plomberie)",
      "Descriptif des ouvrages",
      "Carnet d'adresses fournisseurs"
    ],
    pricing: "À partir de 3 000€ selon surface et complexité"
  },
  {
    id: "maitrise-oeuvre",
    title: "Maîtrise d'œuvre",
    slug: "maitrise-oeuvre",
    icon: "HardHat",
    description: "Pilotage complet de votre chantier de la conception à la réception",
    longDescription: "La maîtrise d'œuvre, c'est notre accompagnement de A à Z : conception, consultation des entreprises, suivi de chantier, contrôle qualité et réception. Vous êtes serein, nous gérons.",
    benefits: [
      "Tranquillité d'esprit totale",
      "Budget et délais maîtrisés",
      "Qualité garantie par un suivi pro",
      "Interlocuteur unique pour tout le projet"
    ],
    process: [
      {
        title: "Conception",
        description: "Esquisse, APS, APD, permis si nécessaire"
      },
      {
        title: "Consultation entreprises (DCE)",
        description: "Appel d'offres, analyse des devis, aide au choix"
      },
      {
        title: "Suivi de chantier",
        description: "Réunions régulières, contrôle qualité, gestion des aléas"
      },
      {
        title: "Réception",
        description: "Visite de réception, levée des réserves, garanties"
      }
    ],
    deliverables: [
      "Tous les plans d'exécution",
      "Contrats d'entreprises négociés",
      "Comptes-rendus de réunions de chantier",
      "Procès-verbal de réception",
      "Dossier des ouvrages exécutés (DOE)"
    ],
    pricing: "8 à 12% du montant des travaux"
  },
  {
    id: "attestations-pmr",
    title: "Attestations PMR",
    slug: "attestations-pmr",
    icon: "Shield",
    description: "Conformité accessibilité pour dépôt de permis de construire",
    longDescription: "Les attestations PMR (Personnes à Mobilité Réduite) sont obligatoires pour tout permis de construire. Nous vérifions que votre projet respecte les normes d'accessibilité et établissons les attestations réglementaires.",
    benefits: [
      "Conformité réglementaire garantie",
      "Éviter les refus de permis",
      "Conseils d'optimisation si nécessaire",
      "Traitement rapide (48-72h)"
    ],
    process: [
      {
        title: "Analyse des plans",
        description: "Vérification de la conformité aux normes accessibilité"
      },
      {
        title: "Corrections éventuelles",
        description: "Recommandations d'ajustements si besoin"
      },
      {
        title: "Établissement de l'attestation",
        description: "Rédaction et signature de l'attestation réglementaire"
      }
    ],
    deliverables: [
      "Attestation de conformité PMR signée",
      "Notice accessibilité si requise",
      "Rapport de vérification"
    ],
    pricing: "À partir de 450€"
  }
];
