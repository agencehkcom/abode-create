import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Planet Studio</h3>
            <p className="text-primary-foreground/80 mb-4">
              Architecture / Intérieurs / Design global
            </p>
            <p className="text-sm text-primary-foreground/70">
              Depuis 10 ans, nous concevons et réalisons des lieux de vie et de loisirs hyper-personnalisés.
            </p>
          </div>

          {/* Agence Sud */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Agence Sud</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                <div>
                  <p>Anduze (30)</p>
                  <p className="text-primary-foreground/70">Gard - Cévennes - Nîmes</p>
                </div>
              </div>
              <a
                href="tel:+33665674735"
                className="flex items-center gap-2 text-primary-foreground hover:text-secondary transition-smooth"
              >
                <Phone className="h-4 w-4 text-secondary" />
                06 65 67 47 35
              </a>
            </div>
          </div>

          {/* Agence Ouest */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Agence Ouest</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                <div>
                  <p>Challans (85)</p>
                  <p className="text-primary-foreground/70">Vendée - Littoral</p>
                </div>
              </div>
              <a
                href="tel:+33744716875"
                className="flex items-center gap-2 text-primary-foreground hover:text-secondary transition-smooth"
              >
                <Phone className="h-4 w-4 text-secondary" />
                07 44 71 68 75
              </a>
            </div>
          </div>

          {/* Contact & Liens */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact & Liens</h4>
            <div className="space-y-3 text-sm mb-6">
              <a
                href="mailto:contact@planet-studio.fr"
                className="flex items-center gap-2 text-primary-foreground hover:text-secondary transition-smooth"
              >
                <Mail className="h-4 w-4 text-secondary" />
                contact@planet-studio.fr
              </a>
            </div>
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-primary-foreground hover:text-secondary transition-smooth" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground hover:text-secondary transition-smooth" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground hover:text-secondary transition-smooth" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="text-xs text-primary-foreground/70">
              <Link to="/legal/mentions-legales" className="hover:text-secondary transition-smooth">
                Mentions légales
              </Link>
              {" · "}
              <Link to="/legal/confidentialite" className="hover:text-secondary transition-smooth">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>
            © {new Date().getFullYear()} Planet Studio. Tous droits réservés. •{" "}
            <span className="text-primary-foreground/80">
              Membre du Collectif des Créateurs d'Intérieur
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
