import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Users,
  Compass,
  Star,
  CheckCircle,
  Clock,
  Award,
  MessageCircle,
  Waves,
  Eye,
} from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

const Agences = () => {
  const featuredProjects = projects.slice(0, 4);

  const stats = [
    { value: "150+", label: "Projets réalisés" },
    { value: "98%", label: "Clients satisfaits" },
    { value: "8", label: "Experts passionnés" },
    { value: "2", label: "Agences en France" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Architecture moderne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        </div>

        <div className="container mx-auto px-4 z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-secondary mb-6">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">2 agences • 8 experts</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-secondary">/</span>architecture{" "}
              <span className="text-secondary">/</span>intérieurs{" "}
              <span className="text-secondary">/</span>design global
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
              Nous concevons et réalisons des lieux de vie et de loisirs hyper-personnalisés.
            </p>
            <p className="text-lg mb-12 text-white/80 max-w-xl">
              De la Vendée aux Cévennes, nos équipes partagent la même passion : créer des espaces qui vous ressemblent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="gradient-accent hover:opacity-90 transition-smooth text-lg px-8 text-black font-semibold"
              >
                <Link to="/devis-permis">
                  Estimer mon permis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8"
              >
                <Link to="/projets">
                  <Eye className="mr-2 h-5 w-5" />
                  Voir nos projets
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
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

      {/* Choix des agences */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Deux agences, une vision
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sélectionnez l'agence la plus proche de votre projet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Agence Sud */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl border border-border p-8 hover:border-secondary/50 hover:shadow-large transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Compass className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors">
                    Planet Studio Sud
                  </h3>
                  <p className="text-sm text-muted-foreground">Le QG historique</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span>Anduze (30) • Gard • Cévennes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <a href="tel:+33665674735" className="hover:text-secondary transition-colors">
                    06 65 67 47 35
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-secondary" />
                  <span>7 experts passionnés</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-3">Zone d'intervention :</p>
                <div className="flex flex-wrap gap-2">
                  {["Nîmes", "Alès", "Uzès", "Montpellier", "Cévennes"].map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 bg-muted rounded-full text-xs"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <Button asChild size="lg" className="w-full gradient-accent text-black font-semibold">
                <Link to="/agence-sud">
                  Découvrir l'agence Sud
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Agence Ouest */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl border border-border p-8 hover:border-secondary/50 hover:shadow-large transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Waves className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors">
                    Planet Studio Ouest
                  </h3>
                  <p className="text-sm text-muted-foreground">L'antenne atlantique</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span>Challans (85) • Vendée • Littoral</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <a href="tel:+33744716875" className="hover:text-secondary transition-colors">
                    07 44 71 68 75
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-secondary" />
                  <span>1 expert + équipe complète</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-3">Zone d'intervention :</p>
                <div className="flex flex-wrap gap-2">
                  {["Noirmoutier", "Les Sables", "La Roche-sur-Yon", "Nantes", "Pornic"].map((city) => (
                    <span
                      key={city}
                      className="px-3 py-1 bg-muted rounded-full text-xs"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <Button asChild size="lg" className="w-full gradient-accent text-black font-semibold">
                <Link to="/agence-ouest">
                  Découvrir l'agence Ouest
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Nos services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              De la conception à la réalisation, l'architecture est notre cœur de métier
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Nos réalisations
              </h2>
              <p className="text-xl text-muted-foreground">
                Découvrez nos projets récents
              </p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex hover:border-secondary hover:text-secondary transition-smooth">
              <Link to="/projets">
                Tous les projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12 md:hidden">
            <Button asChild variant="outline" className="hover:border-secondary hover:text-secondary transition-smooth">
              <Link to="/projets">
                Tous les projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={projects[1]?.coverImage}
                alt={projects[1]?.title}
                className="w-full rounded-2xl shadow-large"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-6">
                Étude de cas vedette
              </div>
              <h2 className="text-4xl font-bold mb-6">
                {projects[1]?.title}
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                {projects[1]?.excerpt}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Gain de luminosité :</strong> +40%
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Budget :</strong> {projects[1]?.budget}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Mission :</strong> {projects[1]?.mission}
                  </span>
                </li>
              </ul>
              <Button asChild size="lg" className="gradient-accent hover:opacity-90 transition-smooth text-black font-semibold">
                <Link to={`/projets/${projects[1]?.slug}`}>
                  Découvrir le projet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir Planet Studio ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Star,
                title: "Expertise locale",
                description: "Connaissance approfondie des PLU et réglementations de chaque territoire",
              },
              {
                icon: Users,
                title: "Équipe soudée",
                description: "8 professionnels complémentaires travaillant ensemble sur vos projets",
              },
              {
                icon: CheckCircle,
                title: "Suivi personnalisé",
                description: "Un interlocuteur dédié vous accompagne de A à Z",
              },
              {
                icon: Award,
                title: "Qualité garantie",
                description: "98% de clients satisfaits et permis acceptés du premier coup",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Parlons de votre projet
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Réponse sous 24-48h • Premier échange gratuit
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-secondary" />
                  Agence Sud
                </h3>
                <div className="space-y-4">
                  <p className="text-primary-foreground/90">
                    Anduze (30)<br />
                    <span className="text-sm text-primary-foreground/70">
                      Gard • Cévennes • Nîmes
                    </span>
                  </p>
                  <a
                    href="tel:+33665674735"
                    className="flex items-center gap-3 text-lg hover:text-secondary transition-smooth"
                  >
                    <Phone className="h-5 w-5 text-secondary" />
                    06 65 67 47 35
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-secondary" />
                  Agence Ouest
                </h3>
                <div className="space-y-4">
                  <p className="text-primary-foreground/90">
                    Challans (85)<br />
                    <span className="text-sm text-primary-foreground/70">
                      Vendée • Littoral
                    </span>
                  </p>
                  <a
                    href="tel:+33744716875"
                    className="flex items-center gap-3 text-lg hover:text-secondary transition-smooth"
                  >
                    <Phone className="h-5 w-5 text-secondary" />
                    07 44 71 68 75
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <a
                  href="mailto:contact@planet-studio.fr"
                  className="flex items-center gap-3 text-lg hover:text-secondary transition-smooth"
                >
                  <Mail className="h-5 w-5 text-secondary" />
                  contact@planet-studio.fr
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Envoyez-nous un message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
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
              Besoin d'un permis de construire ?
            </h2>
            <p className="text-black/70 text-lg mb-8">
              Obtenez une estimation personnalisée en 2 minutes
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-black text-white hover:bg-black/90">
                <Link to="/devis-permis">
                  Estimer mon permis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-black/70">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Réponse immédiate</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>Devis gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>Sans engagement</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agences;
