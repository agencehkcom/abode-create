import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Users,
  Building,
  Compass,
  Star,
  CheckCircle,
  MessageCircle,
  Clock,
  Award,
  Ruler,
  Eye,
  Hammer,
  Accessibility,
  Palette,
  BookOpen,
  FileText,
  Lightbulb,
  Heart,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const teamSud = [
  {
    name: "Ludovic",
    role: "Fondateur & Directeur",
    description: "Le fondateur, basé dans le Sud mais toujours à cheval sur tous les projets. Grâce à des outils bien pensés, il orchestre l'ensemble comme si tout le monde partageait le même bureau.",
    icon: Star,
    color: "bg-amber-500",
  },
  {
    name: "Naomi",
    role: "Suivi administratif & financier",
    description: "La porte d'accès et le guide dans le suivi administratif et financier, indispensable à chaque étape de vos projets.",
    icon: FileText,
    color: "bg-blue-500",
  },
  {
    name: "Marine",
    role: "Architecte conceptrice",
    description: "Elle fait vivre vos idées, de leur conception jusqu'aux détails les plus précis. Chaque projet prend forme sous son regard expert.",
    icon: Palette,
    color: "bg-pink-500",
  },
  {
    name: "Juliana",
    role: "Experte accessibilité",
    description: "Notre experte en accessibilité, qui jongle entre normes et solutions sur-mesure pour rendre chaque espace inclusif.",
    icon: Accessibility,
    color: "bg-green-500",
  },
  {
    name: "Jérémie",
    role: "Responsable chantiers",
    description: "Le maestro des chantiers, qui transforme la précision en livraison. Chaque détail compte pour une exécution parfaite.",
    icon: Hammer,
    color: "bg-orange-500",
  },
  {
    name: "Mathilde",
    role: "Architecte & Suivi de chantier",
    description: "À cheval entre l'architecture, l'architecture intérieure et le suivi de chantier. Une précieuse alliée avec une solide expérience des projets haut de gamme.",
    icon: Eye,
    color: "bg-purple-500",
  },
  {
    name: "Léa",
    role: "Apprentie architecture intérieure",
    description: "En apprentissage en architecture intérieure, toujours curieuse et impliquée dans chaque étape des projets.",
    icon: BookOpen,
    color: "bg-cyan-500",
  },
];

const AgenceSud = () => {
  const stats = [
    { value: "100+", label: "Projets réalisés" },
    { value: "98%", label: "Clients satisfaits" },
    { value: "7", label: "Experts passionnés" },
    { value: "15+", label: "Années d'expérience" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-secondary">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-medium">Anduze (30) • Gard • Hérault • Littoral • Méditerranée</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Planet Studio Sud
              <span className="block text-secondary">Le QG historique</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Votre cabinet d'architecture à Anduze. Une équipe pluridisciplinaire passionnée pour tous vos projets dans le Gard, l'Hérault et sur le littoral méditerranéen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gradient-accent text-black font-semibold">
                <a href="tel:+33665674735">
                  <Phone className="mr-2 h-5 w-5" />
                  06 65 67 47 35
                </a>
              </Button>
              <Button asChild size="lg" className="border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link to="/contact">
                  Nous contacter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Notre zone d'intervention
              </h2>
              <p className="text-muted-foreground text-lg">
                Architecte DPLG pour vos projets dans le Sud de la France
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Gard (30)",
                  cities: ["Montpellier", "Nîmes", "Alès", "Uzès"],
                },
                {
                  title: "Hérault (34)",
                  cities: ["La Grande Motte", "Sète"],
                },
                {
                  title: "Littoral Méditerranée",
                  cities: ["Côte méditerranéenne", "Et au-delà..."],
                },
              ].map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-2xl border border-border p-6"
                >
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Compass className="h-5 w-5 text-secondary" />
                    {zone.title}
                  </h3>
                  <ul className="space-y-2">
                    {zone.cities.map((city, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary mb-4">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">L'équipe</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Une équipe pluridisciplinaire
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                7 experts passionnés pour vous accompagner de la conception à la livraison
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamSud.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-6 hover:border-secondary/50 hover:shadow-soft transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${member.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <member.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-secondary font-medium mb-2">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos services à Anduze et environs
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Une offre complète pour tous vos projets d'architecture dans le Gard
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Building,
                title: "Architecture",
                items: ["Maisons individuelles", "Rénovation mas cévenol", "Locaux professionnels"],
              },
              {
                icon: Palette,
                title: "Architecture intérieure",
                items: ["Aménagement", "Design", "Décoration"],
              },
              {
                icon: FileText,
                title: "Permis de construire",
                items: ["Constitution dossier", "Suivi instruction", "Conformité PLU"],
              },
              {
                icon: Hammer,
                title: "Suivi de chantier",
                items: ["Coordination", "Contrôle qualité", "Livraison"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-2xl border border-white/10 p-6 hover:border-secondary/50 transition-all"
              >
                <service.icon className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="gradient-accent text-black font-semibold">
              <Link to="/services">
                Découvrir tous nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary mb-4">
              <Star className="h-4 w-4 fill-secondary" />
              <span className="text-sm font-medium">Témoignages</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ils nous ont fait confiance dans le Gard
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                text: "L'équipe de Planet Studio a transformé notre vieille bâtisse cévenole en un lieu de vie moderne tout en préservant son âme. Leur connaissance du patrimoine local est un vrai atout.",
                author: "Marie-Claire L.",
                location: "Rénovation à Anduze",
              },
              {
                text: "Projet de construction d'une maison contemporaine à Uzès. Dossier de permis accepté du premier coup grâce à leur maîtrise du PLU local. Je recommande vivement.",
                author: "Jean-Pierre M.",
                location: "Construction à Uzès",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl border border-border p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ locale */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions fréquentes
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Intervenez-vous sur tout le département du Gard ?",
                  answer: "Oui, nous intervenons sur l'ensemble du Gard : Nîmes, Alès, Anduze, Uzès, Le Vigan, et toutes les communes. Nous nous déplaçons également dans l'Hérault, l'Ardèche et la Lozère pour des projets spécifiques.",
                },
                {
                  question: "Avez-vous l'expérience des mas cévenols et du patrimoine local ?",
                  answer: "Absolument. Notre implantation à Anduze depuis de nombreuses années nous a permis de développer une expertise pointue sur la rénovation de mas, de magnaneries et de constructions traditionnelles cévenoles, dans le respect du patrimoine.",
                },
                {
                  question: "Connaissez-vous les spécificités du PLU des communes gardoises ?",
                  answer: "Oui, nous travaillons régulièrement avec les services d'urbanisme des communes du Gard. Nous maîtrisons les contraintes liées aux zones protégées, aux Cévennes, et aux secteurs ABF autour des monuments historiques.",
                },
                {
                  question: "Proposez-vous des visites sur site ?",
                  answer: "Oui, nous proposons une visite conseil gratuite sur votre terrain ou dans votre propriété. C'est l'occasion de faire connaissance, de comprendre votre projet et de vous donner nos premières recommandations.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-secondary/50"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/graphique/fond-courbes.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Parlons de votre projet dans le Gard
            </h2>
            <p className="text-black/70 text-lg mb-8">
              Contactez notre agence d'Anduze pour une première consultation gratuite
            </p>

            <div className="bg-black/10 rounded-2xl p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center md:text-left">
                  <p className="font-semibold text-black text-lg mb-1">Planet Studio Sud</p>
                  <p className="text-black/70">Anduze (30) • Cévennes</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+33665674735"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-black/90 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    06 65 67 47 35
                  </a>
                  <a
                    href="mailto:contact@planet-studio.fr"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black text-black rounded-lg font-semibold hover:bg-black/10 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    Email
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-black/70">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Réponse sous 24-48h</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>Premier échange gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>Devis détaillé sans engagement</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lien vers l'autre agence */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            Vous êtes plutôt sur la côte atlantique ?
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/agence-ouest">
              Découvrir Planet Studio Ouest (Vendée)
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgenceSud;
