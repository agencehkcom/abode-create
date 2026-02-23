/**
 * Script de migration des données statiques vers Supabase
 *
 * Usage :
 *   npx tsx scripts/migrate-projects.ts
 *
 * Prérequis :
 *   - Supabase running sur le VPS
 *   - Variables d'environnement SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY
 *   - npm install @supabase/supabase-js tsx
 */

import { createClient } from "@supabase/supabase-js";

// --- Configuration ---
const SUPABASE_URL = process.env.SUPABASE_URL || "http://187.77.73.104:8000";
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "your-service-role-key-here";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// --- Données statiques (copie des 9 projets) ---
const projects = [
  {
    title: "Reine Almazal",
    slug: "reine-almazal",
    category: "Architecture Intérieure",
    cover_image: "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_ChambreBleue03.webp",
    images: [
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_ChambreBleue03.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_ChambreBleue01.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_ChambreBleue02.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_ChambreBleuPlafond.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_ChambreRose.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_ChambreRose_detail.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_Chambre_detail.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazaDressing.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_Banc.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_BancDetail.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_BancDetail02.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_Bureau.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_Circulation_Cruschiform.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_Circulation.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_Crsuschiform.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_Detail.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_SDE.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_SDE_detail.webp",
      "/projets/reinealmazal/Ludovic_Martial_Planet_Studio_Nimes_ReineAlmazal_WC.webp",
    ],
    lieu: "Nîmes (30)",
    surface: "80 m²",
    budget: "Sur demande",
    annee: "2021",
    mission: "Architecture intérieure / Décoration / Suivi de chantier",
    excerpt: "La chambre comme confidence. Elle ne voulait pas une chambre, elle voulait un refuge. Un endroit pour ralentir, respirer, retrouver les couleurs de ses voyages et la douceur de ses souvenirs.",
    contexte: "Carte blanche totale, sans une seule visite de chantier : une confiance rare, un luxe silencieux. Elle ne savait pas ce qu'elle voulait, seulement ce qu'elle ne voulait plus. Nous avons composé cette suite comme un carnet intérieur, intime et enveloppant.",
    contraintes: "Un étage aux espaces dispersés, des circulations sans continuité, des matériaux marqués par le temps, une salle de bain très typée d'une époque révolue, une chambre sans véritable ambiance et une lumière naturelle présente mais sous-exploitée.",
    solution: "Des teintes azuréennes, des matières mates et douces, des objets choisis pour leur présence plus que pour leur style. Chaque texture a été choisie pour créer une présence sensible : bois doux, tissus respirants, enduits légèrement granuleux. Une composition pensée comme un carnet de voyages où les objets racontent des destinations aimées et des souvenirs ramenés.",
    resultats: "Une chambre-refuge qui accueille des états d'âme : repos, repli, rêverie. Le projet ne porte pas un style, il porte une personne. Tout est conçu pour qu'elle se reconnaisse dans le lieu, et non pour qu'elle s'adapte à lui. La confiance est un matériau aussi décisif que la lumière ou la matière.",
    display_order: 1,
    is_published: true,
    before_after: [],
  },
  {
    title: "Sumérien",
    slug: "sumerien",
    category: "Architecture",
    cover_image: "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_exterieur_AP.webp",
    images: [
      "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_exterieur_AP.webp",
      "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_exterieur2.webp",
      "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_exterieur3.webp",
      "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_Extension_moderne.webp",
      "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_Extension_escalier.webp",
      "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_sejour.webp",
      "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_cuisine_ilot.webp",
      "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_cuisine_ilot_zoom.webp",
      "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_cuisine_moderne.webp",
      "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_cuisine_velux.webp",
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
    resultats: "Plus qu'un projet, Sumérien est une source d'inspiration, un témoignage de la capacité de Planet Studio à créer des espaces qui transcendent les attentes, un lieu où les souvenirs se forment et durent éternellement.",
    display_order: 2,
    is_published: true,
    before_after: [
      {
        before_image: "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_exterieur_AV.webp",
        after_image: "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_exterieur_AP.webp",
        label: "Façade extérieure",
      },
      {
        before_image: "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_exterieur_entree_AV.webp",
        after_image: "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_exterieur_entree_AP.webp",
        label: "Entrée extérieure",
      },
      {
        before_image: "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_cuisine_AV.webp",
        after_image: "/projets/sumerien/Ludovic_Martial_Planet_Studio_Anduze_Sumerien_cuisine_AP.webp",
        label: "Cuisine",
      },
    ],
  },
  {
    title: "Beauséjour",
    slug: "beausejour",
    category: "Rénovation / Extension",
    cover_image: "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00111.webp",
    images: [
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00111.webp",
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00104.webp",
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00029.webp",
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00013.webp",
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00032.webp",
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00042.webp",
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00043.webp",
      "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00107.webp",
    ],
    lieu: "Nîmes (30)",
    surface: "260 m²",
    budget: "Sur demande",
    annee: "2023",
    mission: "Réhabilitation complète / Architecture intérieure",
    excerpt: "La renaissance lumineuse d'une maison nîmoise. Beauséjour avait deux visages : depuis la rue, une façade grise et austère ; depuis le jardin, un écrin de lumière sous les pins, à cinq minutes du centre de Nîmes.",
    contexte: "Les clients ont perçu la promesse derrière les murs fatigués. Il fallait révéler les volumes, réorganiser les usages, redonner une cohérence à la maison et une douceur à la vie qu'elle allait accueillir. Pensée d'abord comme un nouveau départ, Beauséjour accompagne un changement de vie pour une famille en quête d'espace, de lumière et d'un vrai chez-soi.",
    contraintes: "Une façade sur rue austère et fermée qui ne laissait pas deviner le potentiel intérieur. Des volumes intérieurs cloisonnés et datés avec sols en carrelage ancien et menuiseries vieillissantes. Une circulation peu structurée, la maison composée par fragments sans colonne vertébrale. Une lumière naturelle sous-exploitée malgré de belles ouvertures côté jardin.",
    solution: "Transformation totale : matériaux repensés, circulations clarifiées, atmosphère apaisée. Réunifier une maison fragmentée en recomposant les espaces et en ouvrant les circulations. Tirer la lumière du jardin vers l'intérieur en adoucissant les matériaux et clarifiant les lignes. Rééquilibrer les ouvertures et clarifier les volumes pour rendre l'entrée lisible et accueillante.",
    resultats: "Beauséjour est devenu un lieu chaleureux et vivant, un nouvel ancrage fondé sur la confiance. Une heure après le premier rendez-vous, les clients ont annulé leurs autres consultations. Notre cliente a suivi une formation en architecture intérieure pendant le chantier pour avancer ensemble, vraiment. Une manière rare et belle de s'approprier le projet.",
    display_order: 3,
    is_published: true,
    before_after: [],
  },
  {
    title: "L'Olivier",
    slug: "olivier",
    category: "Architecture",
    cover_image: "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00045.webp",
    images: [
      "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00045.webp",
      "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00019.webp",
      "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00021.webp",
      "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00033.webp",
      "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00049.webp",
      "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00076.webp",
      "/projets/olivier/Ludovic_Martial_Planet_Studio_Anduze_LOlivier_00083.webp",
    ],
    lieu: "Languedoc (30)",
    surface: "160 m²",
    budget: "Sur demande",
    annee: "2017",
    mission: "Construction neuve / Architecture",
    excerpt: "La maison neuve qui porte une âme ancienne. Pensée pour un jeune couple et ses enfants, L'Olivier revendique l'essence des demeures de maîtres. Lumière, fluidité et verticalité composent un refuge contemporain ancré dans la nature cévenole.",
    contexte: "La double hauteur d'entrée installe le rythme et révèle une grande baie vitrée qui inonde l'espace de chaleur dorée. L'architecture joue avec les volumes, relie les usages, ménage l'intimité. L'Olivier n'imite pas les maisons de maîtres : elle réinterprète leurs proportions, leur manière de prendre la lumière et leur ancrage au terrain, avec l'écriture d'aujourd'hui.",
    contraintes: "Créer une séparation subtile entre espaces familiaux et ceux réservés aux invités, tout en maintenant une interaction fluide. Les limites sont douces, les transitions fluides : chacun trouve sa place, sa lumière, son intimité, sans jamais se couper du cœur de la maison.",
    solution: "L'escalier à crémaillère, à la fois sculpture et passage secret, ajoute un geste poétique. Un dialogue permanent entre bois, béton brut et nature : le bois ancre la maison dans les forêts cévenoles, le béton brut évoque les terrasses méditerranéennes. La grande baie vitrée n'est pas un geste spectaculaire, c'est un prisme qui capte la lumière dorée, la filtre et la diffuse.",
    resultats: "Sept ans plus tard, l'usage s'est imposé de lui-même, sans forcer, sans contredire le projet initial. Une porte vitrée est venue se poser naturellement là où nous avions recommandé de cloisonner. La preuve que l'architecture accompagne les vies et qu'elle continue de se préciser bien après la première intention.",
    display_order: 4,
    is_published: true,
    before_after: [],
  },
  {
    title: "La Rodé",
    slug: "la-rode",
    category: "Rénovation / Extension",
    cover_image: "/projets/beausejour/Ludovic_Martial_Planet_Studio_Anduze_Beausejour-00111.webp",
    images: [],
    lieu: "Cévennes (30)",
    surface: "Sur demande",
    budget: "Sur demande",
    annee: "2024",
    mission: "Rénovation complète / Extension / Architecture intérieure",
    excerpt: "La maison inachevée qui a pris vie. Brute, incomplète, presque figée dans son abandon, La Rodé attendait un regard capable de voir au-delà. Pensée d'abord comme résidence secondaire, elle est devenue un refuge essentiel.",
    contexte: "La Rodé est une maison dont le chantier ne s'était jamais achevé. Nos clients l'ont découverte séduits par la région, le panorama et cette lumière cévenole qui transforme tout. D'abord résidence secondaire, elle est devenue peu à peu un refuge essentiel : un entre-deux entre Paris et les Cévennes, un lieu pour se reposer, télétravailler, recevoir les amis sans compter les jours.",
    contraintes: "Une maison figée en plein chantier : murs bruts, façades incomplètes, parpaings encore visibles. Des volumes impressionnants mais sans cohérence, une charpente apparente et des hauteurs généreuses sans distribution claire. Une enveloppe extérieure sans identité, entre pierres partielles, enduits non finis et béton brut. Un intérieur laissé à l'état de squelette, sans finition ni isolation.",
    solution: "Tout a été repensé, restructuré, réécrit. Recomposer l'âme du bâti cévenol en rééquilibrant les masses, affirmant les ouvertures et choisissant les matières justes. Le grand volume central est pensé pour accueillir : une table immense, des repas à rallonge, des conversations qui durent. L'îlot minéral, la hotte sculpturale, les voûtes du plafond organisent la convivialité sans sacrifier la sophistication.",
    resultats: "La Rodé n'est plus une maison inachevée, c'est une maison retrouvée. Elle semble aujourd'hui issue du paysage, et non posée dessus. Au fil du chantier, les clients ont basculé : moins Paris, plus de ciel, de silence, de respiration. De secondaire, la maison est devenue essentielle. Les matériaux, les détails, les choix techniques ont été pensés pour le long terme, pour une maison qui s'installe, qui mûrit, qui s'ancre.",
    display_order: 5,
    is_published: true,
    before_after: [],
  },
  {
    title: "MeTall",
    slug: "metall",
    category: "Architecture",
    cover_image: "/projets/metall/Ludovic_Martial_Planet_Studio_Anduze_MeTall-00014.webp",
    images: [
      "/projets/metall/Ludovic_Martial_Planet_Studio_Anduze_MeTall-00014.webp",
      "/projets/metall/Ludovic_Martial_Planet_Studio_Anduze_MeTall-00008.webp",
      "/projets/metall/Ludovic_Martial_Planet_Studio_Anduze_MeTall-00001.webp",
      "/projets/metall/Ludovic_Martial_Planet_Studio_Anduze_MeTall-00010.webp",
      "/projets/metall/Ludovic_Martial_Planet_Studio_Anduze_MeTall-00013.webp",
      "/projets/metall/Ludovic_Martial_Planet_Studio_Anduze_MeTall-00011.webp",
      "/projets/metall/Ludovic_Martial_Planet_Studio_Anduze_MeTall-00006.webp",
      "/projets/metall/Ludovic_Martial_Planet_Studio_Anduze_MeTall-00004.webp",
      "/projets/metall/Ludovic_Martial_Planet_Studio_Anduze_MeTall-00005.webp",
      "/projets/metall/Ludovic_Martial_Planet_Studio_Anduze_MeTall-00007.webp",
      "/projets/metall/Ludovic_Martial_Planet_Studio_Anduze_MeTall-00002.webp",
      "/projets/metall/Ludovic_Martial_Planet_Studio_Anduze_MeTall-00003.webp",
      "/projets/metall/Ludovic_Martial_Planet_Studio_Anduze_MeTall-00009.webp",
      "/projets/metall/Ludovic_Martial_Planet_Studio_Anduze_MeTall-00012.webp",
    ],
    lieu: "Anduze (30)",
    surface: "Sur demande",
    budget: "Sur demande",
    annee: "2018",
    mission: "Construction neuve / Architecture",
    excerpt: "Le métal comme matière première d'un lieu de vie. MeTall est une affirmation architecturale : une maison entièrement construite en structure acier, posée dans la végétation cévenole comme un signal discret mais assumé.",
    contexte: "Construire en métal, c'est un choix radical. Pas celui du compromis, mais celui de la cohérence absolue entre structure, enveloppe et identité. MeTall est née de cette conviction : une ossature acier, un bardage métallique anthracite, des panneaux de polycarbonate translucide et des surfaces vitrées généreuses. Deux niveaux reliés par un escalier extérieur en caillebotis, une terrasse suspendue ouverte sur la canopée.",
    contraintes: "Construire une maison habitable en structure métallique intégrale, dans un environnement rural et végétal. Concilier l'esthétique industrielle avec le confort thermique et acoustique d'une habitation. Intégrer un volume contemporain affirmé dans un paysage cévenol traditionnel. Gérer les contraintes techniques spécifiques à la construction métallique : ponts thermiques, condensation, dilatation.",
    solution: "La structure porteuse en acier est laissée visible, assumée comme élément architectural à part entière. Le bardage métallique ondulé enveloppe le volume d'une peau homogène et graphique. Les panneaux de polycarbonate filtrent la lumière naturelle tout en préservant l'intimité, créant des ambiances changeantes au fil de la journée. L'escalier extérieur en caillebotis et garde-corps en maille dessinent une circulation aérienne qui dialogue avec les arbres.",
    resultats: "La nuit venue, MeTall se révèle autrement : une lanterne contemporaine posée dans les arbres, dont la lumière intérieure filtre à travers le polycarbonate et les grandes baies vitrées. Le bâtiment respire, s'éclaire, devient signal. La preuve qu'on peut habiter l'acier avec la même douceur que la pierre, à condition de penser chaque détail comme un geste juste.",
    display_order: 6,
    is_published: true,
    before_after: [],
  },
  {
    title: "Soie",
    slug: "soie",
    category: "Architecture Intérieure",
    cover_image: "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_AP1.webp",
    images: [
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_AP1.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_AP2.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_AP3.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Chambre_bleue1.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Chambre_bleue2.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_chambre_bleue3.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Chambre_jaune1.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Chambre_jaune2.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Chambre_terrasse1.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Chambre_terrasse2.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Chambre_verte1.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Chambre_verte2.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Chambre_verte3.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_chambre_verte4.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Details_maison_d_hote_1.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Details_maison_d_hote_2.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Details_maison_d_hote_3.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Details_maison_d_hote_4.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Details_maison_d_hote_5.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Details_maison_d_hote_6.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Details_maison_d_hote_7.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Details_maison_d_hote_8.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Details_maison_d_hote_9.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Details_maison_d_hote_10.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Details_maison_d_hote_11.webp",
      "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_Details_maison_d_hote_12.webp",
    ],
    lieu: "Crest (26)",
    surface: "Sur demande",
    budget: "Sur demande",
    annee: "Sur demande",
    mission: "Architecture intérieure / Décoration / Coffee-shop & Maison d'hôtes",
    excerpt: "Un air de résistance, un souffle de liberté. Les courants glissent du Vercors jusqu'à Crest, se laisser doucement envelopper d'un écrin de soie… Un lieu urbain et bohème, à la fois coffee-shop et maison d'hôtes.",
    contexte: "Un air de résistance, un souffle de liberté, les courants glissent du Vercors jusqu'à Crest. Se laisser doucement envelopper d'un écrin de soie… Telle est la promesse du Ver à soie, une fois la vieille porte en bois refermée derrière soi. Une invitation à la délectation, au plaisir simple de se sentir bien et surtout chez soi.",
    contraintes: "Capturer la lumière d'une fin de journée d'été, la blancheur des surfaces calcaires du Vercors, les bleus verts des forêts méditerranéennes. Un jeu de matière, de lumière, d'influence méditerranéenne et montagnarde au confluent de la rivière Drôme.",
    solution: "Concevoir ce coffee-shop comme un lieu de sérénité pour celle et celui qui souhaiterait laisser libre cours à ses pensées ; un lieu de convivialité pour toutes celles et ceux en quête d'un espace où il fait bon vivre… ensemble. Un lieu urbain et bohème, à la fois coffee-shop et maison d'hôtes, pour faire une pause qu'elle soit d'un quart d'heure ou d'un quart de mois.",
    resultats: "Il est devenu un lieu de gaieté portée par les rires et les pirouettes des enfants du quartier et ceux partis à la découverte du donjon. Une maison de partage et de convivialité où se croisent voisins et voyageurs…",
    display_order: 7,
    is_published: true,
    before_after: [
      {
        before_image: "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_AV1.webp",
        after_image: "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_AP1.webp",
        label: "Le comptoir",
      },
      {
        before_image: "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_AV2.webp",
        after_image: "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_AP2.webp",
        label: "La salle",
      },
      {
        before_image: "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_AV3.webp",
        after_image: "/projets/soie/Ludovic_Martial_Planet_Studio_Anduze_CoffeeShop_Soie_AP3.webp",
        label: "Le salon",
      },
    ],
  },
  {
    title: "Le Garage des Cévennes",
    slug: "le-garage",
    category: "Architecture",
    cover_image: "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00001.webp",
    images: [
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00001.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00004.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00006.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00008.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00011.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00013.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00014.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00017.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00018.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00019.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00022.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00025.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00031.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00033.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00035.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00038.webp",
      "/projets/garage/Ludovic_Martial_Planet_Studio_Anduze_Garage_des_cevennes_00039.webp",
    ],
    lieu: "Anduze (30)",
    surface: "Sur demande",
    budget: "Sur demande",
    annee: "Sur demande",
    mission: "Extension de restaurant / Architecture / Autoconstruction",
    excerpt: "Une extension élégante et pratique pour un restaurant d'Anduze. Au cœur du village pittoresque, une terrasse couverte au style industriel, un espace lumineux et accueillant qui incarne l'esprit rock et glamour de ses propriétaires.",
    contexte: "Au cœur du village pittoresque et touristique d'Anduze, une nouvelle curiosité architecturale émerge : Le Garage des Cévennes. Cette extension de restaurant, conçue comme une terrasse couverte, est un hommage au style industriel, offrant un espace lumineux et accueillant qui incarne l'esprit rock et glamour de ses propriétaires.",
    contraintes: "L'extension suit les lignes traditionnelles d'un design industriel, en harmonie parfaite avec le restaurant existant. Le choix des matériaux – le métal et le verre – souligne une préférence pour l'éclat et la durabilité, tout en reflétant la personnalité des propriétaires, experts en métallurgie avec une passion pour la moto. Le projet réalisé en autoconstruction témoigne d'un engagement personnel et d'un savoir-faire certain.",
    solution: "La structure, conçue pour être entièrement démontable, s'intègre avec respect dans le tissu économique, gastronomique et urbain d'Anduze. Les panneaux latéraux modulables de la terrasse permettent une transformation facile de l'espace en fonction des saisons et des besoins, passant d'une véranda close à une simple couverture vitrée. En configuration intérieure, une pièce polyvalente ; en configuration extérieure, une terrasse vitrée ouverte sur l'activité environnante.",
    resultats: "Le Garage des Cévennes est plus qu'une extension de restaurant ; c'est une vitrine innovante à l'image de la personnalité unique des propriétaires, offrant aux visiteurs un lieu à la fois élégant et accueillant. Il ajoute un élément architectural atypique et fascinant au village d'Anduze.",
    display_order: 8,
    is_published: true,
    before_after: [],
  },
  {
    title: "Invato",
    slug: "invato",
    category: "Architecture",
    cover_image: "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Exterieur_bassin.webp",
    images: [
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Exterieur_bassin.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Exterieur_bassin2.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_exterieur_coursive.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Exterieur_portrait.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_exterieur_patio.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_exterieur_neigedeloin.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_exterieur_neigedeloin2.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_exterieur_neigedeloin3.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Skyview.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_loin.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_loin_2.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_vue_ete.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_vue_hiver.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_vue_printemps.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_vue_sunset.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_vue_neige.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_cuisine_panorama.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_vue_cuisine.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_cuisine_nuit.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_cuisine_portrait.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_cuisine_repas.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_cuisine_detail.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_cuisine_Detail2.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Interieur_Cuisine_detail.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_cuisine_vie.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_cuisine_vie2.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_cuisine_vie3.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Sejour_angle.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Sejour_Vintage_day.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Sejour_Vintage_Night.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_sejour_detail.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Interieur_Sejour_vie.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Interieur_Sejour_Vie2.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Interieur_Sam_Vie.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Sam.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_interieur_detail.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Detail_photos.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Chambre.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Chambre_detail.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Chambre_enfant.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_Chambre_detail_enfant.webp",
      "/projets/invato/Ludovic_Martial_Planet_Studio_Anduze_Invato_SDB_detail.webp",
    ],
    lieu: "Anduze (30)",
    surface: "Sur demande",
    budget: "Sur demande",
    annee: "Sur demande",
    mission: "Construction neuve / Architecture / Architecture intérieure",
    excerpt: "Une maison contemporaine ancrée dans le paysage cévenol. Façade terracotta, lignes épurées et grandes ouvertures composent un refuge moderne où chaque saison révèle un nouveau visage du lieu.",
    contexte: "Invato naît d'un désir de contemporanéité assumée dans un écrin naturel cévenol. Posée sur les hauteurs d'Anduze, la maison dialogue avec le paysage à travers ses grandes baies vitrées et sa façade aux teintes terracotta qui rappellent les terres du Sud. Une architecture franche, ouverte, qui embrasse les saisons et capte la lumière du matin au crépuscule.",
    contraintes: "Intégrer une écriture architecturale résolument contemporaine dans un environnement naturel et vallonné. Composer avec les variations climatiques cévenoles – de la chaleur estivale aux épisodes neigeux – tout en maintenant un confort optimal. Créer des espaces de vie généreux ouverts sur l'extérieur sans sacrifier l'intimité familiale.",
    solution: "Une volumétrie simple et affirmée, coiffée d'un toit plat, habillée d'un enduit terracotta qui ancre la maison dans la palette chromatique du paysage. La cuisine, cœur battant de la maison, marie carreaux de ciment graphiques, îlot central en teinte sombre et façades en bois clair. Le séjour cultive une atmosphère vintage chaleureuse avec mobilier chiné, cuir patiné et bois noble. Un bassin en pierre et un patio prolongent l'espace de vie vers l'extérieur.",
    resultats: "Invato est une maison qui vit au rythme des saisons : éclatante sous le soleil d'été, enveloppée de neige en hiver, dorée au coucher du soleil. Un lieu où l'architecture contemporaine et la nature cévenole ne s'opposent pas mais se magnifient mutuellement, offrant à ses habitants un cadre de vie à la fois moderne et profondément ancré.",
    display_order: 9,
    is_published: true,
    before_after: [],
  },
];

// --- Migration ---
async function migrate() {
  console.log("Début de la migration...\n");

  for (const project of projects) {
    const { before_after, ...projectData } = project;

    // Insert project
    const { data, error } = await supabase
      .from("projects")
      .insert(projectData)
      .select()
      .single();

    if (error) {
      console.error(`ERREUR projet "${project.title}":`, error.message);
      continue;
    }

    console.log(`Projet "${data.title}" inséré (id: ${data.id})`);

    // Insert before/after pairs
    if (before_after.length > 0) {
      const pairs = before_after.map((ba, index) => ({
        project_id: data.id,
        before_image: ba.before_image,
        after_image: ba.after_image,
        label: ba.label,
        display_order: index,
      }));

      const { error: baError } = await supabase
        .from("before_after")
        .insert(pairs);

      if (baError) {
        console.error(`  ERREUR before/after pour "${project.title}":`, baError.message);
      } else {
        console.log(`  ${pairs.length} paire(s) avant/après insérée(s)`);
      }
    }
  }

  console.log("\nMigration terminée !");
}

migrate().catch(console.error);
