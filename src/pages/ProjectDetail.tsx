import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { ArrowLeft, MapPin, Maximize, Calendar, Briefcase, Euro } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projets" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Image */}
      <section className="pt-32 pb-0">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-8 -ml-4 hover:text-secondary transition-smooth">
            <Link to="/projets">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux projets
            </Link>
          </Button>
          
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-large mb-12 animate-fade-in">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <Badge className="bg-secondary text-secondary-foreground mb-4">
                {project.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.excerpt}
              </p>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">Lieu</span>
                </div>
                <p className="font-semibold">{project.lieu}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Maximize className="h-4 w-4" />
                  <span className="text-sm font-medium">Surface</span>
                </div>
                <p className="font-semibold">{project.surface}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">Année</span>
                </div>
                <p className="font-semibold">{project.annee}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Briefcase className="h-4 w-4" />
                  <span className="text-sm font-medium">Mission</span>
                </div>
                <p className="font-semibold text-sm">{project.mission}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Euro className="h-4 w-4" />
                  <span className="text-sm font-medium">Budget</span>
                </div>
                <p className="font-semibold text-sm">{project.budget}</p>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-12">
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl font-bold mb-4">Contexte</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.contexte}
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-3xl font-bold mb-4">Contraintes</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.contraintes}
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h2 className="text-3xl font-bold mb-4">Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <h2 className="text-3xl font-bold mb-4">Résultats</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.resultats}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-muted/50 rounded-2xl text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <h3 className="text-2xl font-bold mb-4">
                Un projet similaire en tête ?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Discutons de votre projet. Nous vous accompagnons de la conception à la réalisation.
              </p>
              <Button asChild size="lg" className="gradient-accent hover:opacity-90 transition-smooth text-black font-semibold">
                <Link to="/contact">
                  Demander une visite conseil
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
