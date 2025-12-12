import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { ArrowLeft, MapPin, Maximize, Calendar, Briefcase, Euro, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!project) {
    return <Navigate to="/projets" replace />;
  }

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => {
    if (selectedImage !== null && project.images) {
      setSelectedImage((selectedImage + 1) % project.images.length);
    }
  };
  const prevImage = () => {
    if (selectedImage !== null && project.images) {
      setSelectedImage((selectedImage - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && project.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white/70 hover:text-white p-2"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={project.images[selectedImage]}
              alt={`${project.title} - Image ${selectedImage + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white/70 hover:text-white p-2"
            >
              <ChevronRight className="h-12 w-12" />
            </button>
            <div className="absolute bottom-4 text-white/70 text-sm">
              {selectedImage + 1} / {project.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Image */}
      <section className="pt-32 pb-0">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-8 -ml-4 hover:text-secondary transition-smooth">
            <Link to="/projets">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux projets
            </Link>
          </Button>
          
          <div 
            className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-large mb-12 animate-fade-in cursor-pointer group"
            onClick={() => openLightbox(0)}
          >
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                Voir la galerie
              </span>
            </div>
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

              {/* Image Gallery */}
              {project.images && project.images.length > 1 && (
                <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <h2 className="text-3xl font-bold mb-6">Galerie</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                        onClick={() => openLightbox(index)}
                      >
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
