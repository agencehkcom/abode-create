import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  // Display only first 4 projects
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Nos services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              De la conception à la réalisation, l'architecture est notre cœur de métier
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Nouveaux projets
              </h2>
              <p className="text-xl text-muted-foreground">
                Découvrez nos réalisations récentes
              </p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex hover:border-secondary hover:text-secondary transition-smooth">
              <Link to="/projets">
                Tous les projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
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
            <div className="animate-fade-in">
              <img
                src={projects[1].coverImage}
                alt={projects[1].title}
                className="w-full rounded-2xl shadow-large"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium text-sm mb-6">
                Étude de cas vedette
              </div>
              <h2 className="text-4xl font-bold mb-6">
                {projects[1].title}
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                {projects[1].excerpt}
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
                    <strong className="text-foreground">Budget :</strong> {projects[1].budget}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Mission :</strong> {projects[1].mission}
                  </span>
                </li>
              </ul>
              <Button asChild size="lg" className="gradient-accent hover:opacity-90 transition-smooth">
                <Link to={`/projets/${projects[1].slug}`}>
                  Découvrir le projet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Quick Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Parlons de votre projet
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Réponse sous 24-48h • Premier échange gratuit
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
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

            {/* Quick Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Envoyez-nous un message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
