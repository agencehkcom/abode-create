import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/hooks/use-projects";
import type { Project } from "@/data/projects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { data: dbProjects, isLoading } = useProjects();

  // Adapter les données Supabase au format Project existant
  const projects: Project[] = (dbProjects ?? []).map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    category: p.category,
    coverImage: p.cover_image,
    images: p.images,
    beforeAfter: p.before_after.map((ba) => ({
      before: ba.before_image,
      after: ba.after_image,
      label: ba.label ?? undefined,
    })),
    lieu: p.lieu,
    surface: p.surface,
    budget: p.budget,
    annee: p.annee,
    mission: p.mission,
    excerpt: p.excerpt,
    contexte: p.contexte,
    contraintes: p.contraintes,
    solution: p.solution,
    resultats: p.resultats,
  }));

  const categories = [
    "all",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Nos projets
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Découvrez nos réalisations en architecture et architecture intérieure
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      {!isLoading && (
        <section className="py-8 bg-muted/30 sticky top-20 z-40 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "gradient-accent text-black font-semibold"
                      : "hover:border-secondary hover:text-secondary transition-smooth"
                  }
                >
                  {category === "all" ? "Tous les projets" : category}
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary" />
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Aucun projet trouvé dans cette catégorie.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
