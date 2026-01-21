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
  Palette,
  FileText,
  Lightbulb,
  Heart,
  Waves,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const teamOuest = [
  {
    name: "Matthieu",
    role: "Responsable Agence Ouest",
    description: "Celui qui a posé la première pierre de notre aventure dans l'Ouest, avec sa lecture aiguisée des PLU et son œil toujours en éveil sur les solutions créatives.",
    icon: Lightbulb,
    color: "bg-secondary",
  },
  {
    name: "Expert 2",
    role: "Architecte",
    description: "En binôme avec l'équipe du sud pour vous accompagner dans tous vos projets en Pays de la Loire, Vendée et Bretagne.",
    icon: Building,
    color: "bg-blue-500",
  },
];

const AgenceOuest = () => {
  const stats = [
    { value: "50+", label: "Projets réalisés" },
    { value: "100%", label: "Permis acceptés" },
    { value: "2", label: "Experts dédiés" },
    { value: "8+", label: "Équipe complète" },
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
                <span className="text-sm font-medium">Challans (85) • Pays de la Loire • Vendée • Bretagne</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Planet Studio Ouest
              <span className="block text-secondary">L'antenne atlantique</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Votre architecte en Vendée, à Challans. 2 experts en binôme avec l'équipe du sud pour vos projets en Pays de la Loire, Vendée et Bretagne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gradient-accent text-black font-semibold">
                <a href="tel:+33744716875">
                  <Phone className="mr-2 h-5 w-5" />
                  07 44 71 68 75
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
                Architecte pour vos projets sur le littoral atlantique
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Pays de la Loire",
                  cities: ["Nantes", "La Roche-sur-Yon", "Cholet"],
                },
                {
                  title: "Vendée & Littoral",
                  cities: ["Noirmoutier", "Pornic", "Les Sables", "La Baule"],
                },
                {
                  title: "Bretagne",
                  cities: ["Rennes", "Et au-delà..."],
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
                    <Waves className="h-5 w-5 text-secondary" />
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
          <div className="max-w-4xl mx-auto">
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
                Vos interlocuteurs en Vendée
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                2 experts locaux, en binôme avec l'équipe Planet Studio Sud
              </p>
            </motion.div>

            <div className="max-w-xl mx-auto">
              {teamOuest.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl border border-border p-8 hover:border-secondary/50 hover:shadow-soft transition-all"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 ${member.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <member.icon className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                    <p className="text-secondary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-secondary/10 rounded-2xl border border-secondary/20"
              >
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-2">Une équipe connectée</p>
                    <p className="text-sm text-muted-foreground">
                      Nos 2 experts travaillent en étroite collaboration avec l'équipe de l'agence Sud. Grâce à nos outils collaboratifs, vous bénéficiez de l'expertise de 8 professionnels, comme si nous partagions le même bureau.
                    </p>
                  </div>
                </div>
              </motion.div>
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
              Nos services en Vendée
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Une offre complète adaptée aux spécificités du littoral atlantique
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Building,
                title: "Architecture",
                items: ["Maisons de vacances", "Résidences principales", "Surélévation littorale"],
              },
              {
                icon: Palette,
                title: "Architecture intérieure",
                items: ["Optimisation espaces", "Vues mer", "Lumière naturelle"],
              },
              {
                icon: FileText,
                title: "Permis de construire",
                items: ["Zones littorales", "Loi littoral", "Sites classés"],
              },
              {
                icon: Hammer,
                title: "Suivi de chantier",
                items: ["Coordination", "Artisans locaux", "Livraison"],
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
              <Link to="/devis-permis">
                Estimer mon permis de construire
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
              Ils nous ont fait confiance en Vendée
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                text: "Matthieu a su comprendre nos attentes pour notre maison en bord de mer à Noirmoutier. Sa connaissance de la loi littoral et du PLU local nous a évité bien des tracas.",
                author: "Philippe D.",
                location: "Construction à Noirmoutier",
              },
              {
                text: "Projet d'extension pour notre résidence secondaire aux Sables-d'Olonne. Un suivi impeccable malgré la distance, grâce à leur organisation. Très satisfaits du résultat.",
                author: "Isabelle et Marc T.",
                location: "Extension aux Sables-d'Olonne",
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
                  question: "Intervenez-vous sur toute la Vendée ?",
                  answer: "Oui, nous intervenons sur l'ensemble de la Vendée : Challans, Les Sables-d'Olonne, La Roche-sur-Yon, Saint-Jean-de-Monts, et toutes les communes du littoral. Nous nous déplaçons également en Loire-Atlantique (Nantes, Pornic, La Baule).",
                },
                {
                  question: "Connaissez-vous les contraintes de la loi littoral ?",
                  answer: "Absolument. La loi littoral impose des règles strictes sur les constructions en bord de mer. Nous maîtrisons ces contraintes et savons comment concevoir des projets conformes tout en optimisant votre vue et votre accès à la plage.",
                },
                {
                  question: "Travaillez-vous sur les îles (Noirmoutier, Yeu) ?",
                  answer: "Oui, nous intervenons régulièrement sur l'île de Noirmoutier et l'île d'Yeu. Nous connaissons les spécificités réglementaires de ces territoires insulaires et les contraintes logistiques liées aux chantiers sur les îles.",
                },
                {
                  question: "Comment se passe la collaboration avec l'équipe du Sud ?",
                  answer: "Matthieu est votre interlocuteur principal en Vendée, mais il travaille en étroite collaboration avec toute l'équipe de l'agence Sud. Pour les projets complexes, vous bénéficiez de l'expertise collective de nos 8 professionnels.",
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
              Parlons de votre projet en Vendée
            </h2>
            <p className="text-black/70 text-lg mb-8">
              Contactez notre agence de Challans pour une première consultation gratuite
            </p>

            <div className="bg-black/10 rounded-2xl p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center md:text-left">
                  <p className="font-semibold text-black text-lg mb-1">Planet Studio Ouest</p>
                  <p className="text-black/70">Challans (85) • Vendée</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+33744716875"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-black/90 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    07 44 71 68 75
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
            Vous êtes plutôt dans le Sud de la France ?
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/agence-sud">
              Découvrir Planet Studio Sud (Gard)
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgenceOuest;
