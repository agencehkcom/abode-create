import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Architecture moderne"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-balance">
            <span className="text-secondary">/</span>architecture{" "}
            <span className="text-secondary">/</span>intérieurs{" "}
            <span className="text-secondary">/</span>design global
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up max-w-2xl" style={{ animationDelay: "0.1s" }}>
            Nous concevons et réalisons des lieux de vie et de loisirs hyper-personnalisés.
          </p>
          <p className="text-lg mb-12 text-white/80 animate-fade-in-up max-w-xl" style={{ animationDelay: "0.2s" }}>
            Chez Planet Studio, nous devinons vos besoins et imaginons un projet seyant et sensible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              asChild 
              size="lg" 
              className="gradient-accent hover:opacity-90 transition-smooth text-lg px-8"
            >
              <Link to="/contact">
                Demander une visite conseil
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
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};
