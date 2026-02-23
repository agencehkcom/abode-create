import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useProject, useProjects } from "@/hooks/use-projects";
import type { Project } from "@/data/projects";
import { ArrowLeft, MapPin, Calendar, ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: dbProject, isLoading } = useProject(slug ?? "");
  const { data: allDbProjects } = useProjects();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary" />
      </div>
    );
  }

  if (!dbProject) {
    return <Navigate to="/projets" replace />;
  }

  // Adapter au format Project
  const project: Project = {
    id: dbProject.id,
    title: dbProject.title,
    slug: dbProject.slug,
    category: dbProject.category,
    coverImage: dbProject.cover_image,
    images: dbProject.images,
    beforeAfter: dbProject.before_after.map((ba) => ({
      before: ba.before_image,
      after: ba.after_image,
      label: ba.label ?? undefined,
    })),
    lieu: dbProject.lieu,
    surface: dbProject.surface,
    budget: dbProject.budget,
    annee: dbProject.annee,
    mission: dbProject.mission,
    excerpt: dbProject.excerpt,
    contexte: dbProject.contexte,
    contraintes: dbProject.contraintes,
    solution: dbProject.solution,
    resultats: dbProject.resultats,
  };

  // Tous les projets pour la navigation
  const allProjects: Project[] = (allDbProjects ?? []).map((p) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    category: p.category,
    coverImage: p.cover_image,
    images: p.images,
    beforeAfter: [],
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

  const splitIntoPoints = (text: string) => {
    return text.split(". ").filter(s => s.trim().length > 0).map(s => s.endsWith(".") ? s : s + ".");
  };

  const solutionPoints = splitIntoPoints(project.solution);
  const contraintePoints = splitIntoPoints(project.contraintes);

  const currentIndex = allProjects.findIndex(p => p.slug === slug);
  const nextProject = allProjects.length > 0
    ? allProjects[(currentIndex + 1) % allProjects.length]
    : null;

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
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
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

      {/* 1. HERO IMMERSIF */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        <div className="absolute top-28 left-0 right-0 z-10">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 -ml-4">
              <Link to="/projets">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux projets
              </Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary text-sm font-medium mb-6">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-[0.95]">
              {project.title}
            </h1>
            <div className="flex items-center gap-6 text-white/60 text-sm mt-6">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {project.lieu}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {project.annee}
              </span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-0.5 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION NARRATIVE */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-foreground/90 text-center">
              {project.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. FICHE TECHNIQUE */}
      <section className="py-8 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Lieu</p>
              <p className="font-semibold">{project.lieu}</p>
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Surface</p>
              <p className="font-semibold">{project.surface}</p>
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Année</p>
              <p className="font-semibold">{project.annee}</p>
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Mission</p>
              <p className="font-semibold text-sm">{project.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTEXTE */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
              {project.contexte}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. GALERIE ÉDITORIALE — Première moitié */}
      {project.images && project.images.length > 1 && (
        <section className="pb-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 gap-4">
              {project.images.slice(0, 3).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`overflow-hidden rounded-2xl cursor-pointer group ${
                    index === 0 ? "col-span-12 md:col-span-8 aspect-[16/10]" :
                    "col-span-6 md:col-span-4 aspect-square"
                  }`}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image}
                    alt={`${project.title} - ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. L'ÉTAT DES LIEUX */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
                {project.title}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                L'état des lieux
              </h2>
            </motion.div>

            <div className="space-y-8">
              {contraintePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <span className="text-4xl md:text-5xl font-bold text-secondary/30 leading-none flex-shrink-0 w-12 text-right">
                    {index + 1}
                  </span>
                  <p className="text-lg text-white/80 leading-relaxed pt-1">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. AVANT / APRÈS */}
      {project.beforeAfter && project.beforeAfter.length > 0 && (
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
                  {project.title}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Avant / Après
                </h2>
              </motion.div>

              <div className="space-y-12">
                {project.beforeAfter.map((pair, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <BeforeAfterSlider
                      before={pair.before}
                      after={pair.after}
                      label={pair.label}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. GALERIE ÉDITORIALE — Deuxième moitié */}
      {project.images && project.images.length > 3 && (
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 gap-4">
              {project.images.slice(3).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`overflow-hidden rounded-2xl cursor-pointer group ${
                    index === 0 ? "col-span-6 md:col-span-4 aspect-square" :
                    index === 1 ? "col-span-6 md:col-span-8 aspect-[16/10]" :
                    "col-span-6 md:col-span-6 aspect-[4/3]"
                  }`}
                  onClick={() => openLightbox(index + 3)}
                >
                  <img
                    src={image}
                    alt={`${project.title} - ${index + 4}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. CE QUI COMPTE */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
                {project.title}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Ce qui compte
              </h2>
            </motion.div>

            <div className="space-y-10">
              {solutionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <span className="text-5xl md:text-6xl font-bold text-secondary/20 leading-none flex-shrink-0 w-14 text-right">
                    {index + 1}
                  </span>
                  <div className="pt-2">
                    <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
                      {point}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. L'ANECDOTE DU PROJET */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="md:grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-4 mb-8 md:mb-0">
                  <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-4">
                    {project.title}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    L'anecdote<br />du projet
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <div className="border-l-2 border-secondary/30 pl-8">
                    <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground italic">
                      {project.resultats}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. NAVIGATION — Projet suivant */}
      {nextProject && (
        <Link
          to={`/projets/${nextProject.slug}`}
          className="block group"
        >
          <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={nextProject.coverImage}
                alt={nextProject.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
            </div>
            <div className="relative z-10 text-center text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-4">
                Projet suivant
              </p>
              <h3 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-secondary transition-colors">
                {nextProject.title}
              </h3>
              <ArrowRight className="h-6 w-6 mx-auto text-white/60 group-hover:text-secondary group-hover:translate-x-2 transition-all" />
            </div>
          </section>
        </Link>
      )}

      {/* 12. CTA */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/graphique/fond-courbes.png')",
            backgroundSize: "500px",
            backgroundRepeat: "repeat",
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
              Un projet similaire en tête ?
            </h2>
            <p className="text-black/70 text-lg mb-8">
              Discutons de votre projet. Nous vous accompagnons de la conception à la réalisation.
            </p>
            <Button asChild size="lg" className="bg-black text-white hover:bg-black/90">
              <Link to="/devis-permis">
                Estimer mon projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
