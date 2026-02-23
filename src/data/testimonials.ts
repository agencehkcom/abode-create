export interface Testimonial {
  id: string;
  name: string;
  text: string;
  project?: string;
  date: string;
  rating: 5;
  response?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Bonobo – Halles du Lez",
    text: "Un immense merci à Planet Studio Architecture pour leur travail remarquable. Ils ont réalisé les plans de Bonobo – Halles du Lez ainsi qu'une partie de la refonte du bar de Bonobo rue Saint-Guilhem, avec une vraie compréhension de notre univers.",
    project: "Plans & refonte bar – Montpellier",
    date: "2025",
    rating: 5,
    response: "Merci pour ces mots qui nous touchent sincèrement. Le projet Bonobo / Halles du Lez, puis la refonte du site rue Saint-Guilhem, sont avant tout le fruit d'une véritable collaboration, faite d'échanges francs et d'envies partagées."
  },
  {
    id: "2",
    name: "Roberta Napoleoni",
    text: "Le projet répondait exactement nos besoins, un rapport qualité/prix indiscutable !",
    project: "Rénovation complète",
    date: "2025",
    rating: 5,
    response: "Merci beaucoup pour votre commentaire positif, Roberta ! Je me souviens encore de notre rencontre et de votre décision de partir avec nous… 1h après notre rdv. Ça a été un plaisir de vous accompagner !"
  },
  {
    id: "3",
    name: "Pierre-Philippe Czermak",
    text: "Une agence très pro qui nous accompagne sur un projet de rénovation d'un campus universitaire, notamment la création d'une bibliothèque de recherche. De belles idées dans la conception, à l'écoute de son client, des réalités du terrain.",
    project: "Rénovation campus universitaire",
    date: "2025",
    rating: 5,
    response: "Merci Pierre-Philippe pour ce retour. Encore un grand merci également pour la confiance renouvelée tout au long de ce projet, sur lequel nous prenons énormément de plaisir à travailler."
  },
  {
    id: "4",
    name: "Gilles Combe",
    text: "J'ai confié à Planet Studio un projet de rénovation complète d'une vieille maison de famille située au centre du village de St Hippolyte du Fort (30). Ce projet immobilier n'était vraiment pas simple car la maison était vieille avec de nombreuses contraintes.",
    project: "Rénovation maison de famille – St Hippolyte du Fort",
    date: "2025",
    rating: 5,
    response: "Merci beaucoup pour vos retours détaillés et positifs, Gilles ! Nous sommes ravis d'avoir pu vous accompagner dans ce projet de rénovation complexe et de dépasser vos attentes."
  },
  {
    id: "5",
    name: "Romain Conscience",
    text: "Une approche profondément humaine et un professionnalisme sans faille. Ludovic Martial et son équipe de Planet Studio savent conjuguer écoute attentive, compréhension fine des enjeux et rigueur exemplaire à chaque étape du projet.",
    project: "Accompagnement architectural",
    date: "2024",
    rating: 5,
    response: "Nous vous remercions sincèrement pour vos retours élogieux. C'est un plaisir de savoir que notre approche humaine et notre professionnalisme ont su répondre à vos attentes."
  },
  {
    id: "6",
    name: "Alexandre Hervy",
    text: "Nous avons eu le plaisir de collaborer plusieurs fois avec Planet Studio et plus particulièrement avec Ludovic. Ludovic a toujours eu de bons conseils et une disponibilité remarquable.",
    project: "Collaboration récurrente",
    date: "2025",
    rating: 5,
    response: "Merci beaucoup pour votre commentaire positif, Alexandre ! Nous sommes ravis d'apprendre que votre expérience avec Ludovic et Planet Studio a été si satisfaisante."
  },
  {
    id: "7",
    name: "Samuel Palmarini",
    text: "Nous avons fait confiance à Ludovic pour notre agrandissement de plus de 60 m². Un projet compliqué et relativement technique ! Nous sommes ravis de l'avancée des travaux, des délais et du timing ! Merci pour le sérieux et la disponibilité !",
    project: "Extension 60 m²",
    date: "2025",
    rating: 5,
    response: "Merci Samuel, c'est un plaisir de voir ce projet se monter. Une jolie concrétisation d'un projet compliqué, techniquement et administrativement…"
  },
  {
    id: "8",
    name: "Valérie Duplat",
    text: "Planet Studio nous a accompagné dans l'élaboration et la réalisation de notre projet de salon de thé – coffee shop. Ludovic Martial et son équipe ont su être à l'écoute, comprendre nos attentes et les dépasser.",
    project: "Création salon de thé – coffee shop",
    date: "2025",
    rating: 5,
    response: "Merci beaucoup pour votre retour Valérie. Ça a été un plaisir de vous accompagner dans le démarrage de cette belle aventure."
  },
  {
    id: "9",
    name: "Denys Loiret",
    text: "Mes équipes et moi-même travaillons régulièrement avec Planet Studio. Nous sommes partenaires sur plusieurs projets et c'est un plaisir de collaborer avec eux.",
    project: "Partenariat multi-projets",
    date: "2025",
    rating: 5,
    response: "Merci beaucoup pour vos commentaires positifs, Denys ! Nous sommes ravis de travailler avec vous et votre équipe. Votre confiance et votre recommandation signifient beaucoup pour nous."
  },
  {
    id: "10",
    name: "Théo Fombon",
    text: "Merci à Ludovic et Marine pour leur accompagnement lors de la création de notre projet de construction ! Disponibles, réactifs, compétents, vous pouvez leur faire confiance les yeux fermés.",
    project: "Projet de construction",
    date: "2025",
    rating: 5,
    response: "Nous vous remercions pour votre retour chaleureux et sommes ravis d'avoir pu vous accompagner dans votre projet de construction. Votre confiance nous touche beaucoup."
  }
];
