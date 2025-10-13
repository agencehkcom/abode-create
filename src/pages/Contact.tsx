import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Contactez-nous
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Parlons de votre projet • Réponse sous 24-48h
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="animate-fade-in">
                <div className="bg-card shadow-medium rounded-2xl p-8">
                  <h2 className="text-3xl font-bold mb-6">
                    Envoyez-nous un message
                  </h2>
                  <ContactForm />
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {/* Reassurance */}
                <div className="bg-secondary/10 rounded-2xl p-6">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <Clock className="h-6 w-6 text-secondary" />
                    Engagement qualité
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Réponse sous 24-48h</li>
                    <li>✓ Premier échange gratuit de 15 minutes</li>
                    <li>✓ Devis détaillé et transparent</li>
                    <li>✓ Accompagnement personnalisé</li>
                  </ul>
                </div>

                {/* Agence Sud */}
                <div className="bg-card shadow-medium rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-secondary" />
                    Agence Sud
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-lg mb-1">Anduze (30)</p>
                      <p className="text-muted-foreground text-sm">
                        Gard • Cévennes • Nîmes • Alès
                      </p>
                    </div>
                    <a
                      href="tel:+33665674735"
                      className="flex items-center gap-3 text-lg hover:text-secondary transition-smooth"
                    >
                      <Phone className="h-5 w-5 text-secondary" />
                      06 65 67 47 35
                    </a>
                    <a
                      href="mailto:contact@planet-studio.fr"
                      className="flex items-center gap-3 hover:text-secondary transition-smooth"
                    >
                      <Mail className="h-5 w-5 text-secondary" />
                      contact@planet-studio.fr
                    </a>
                  </div>
                </div>

                {/* Agence Ouest */}
                <div className="bg-card shadow-medium rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-secondary" />
                    Agence Ouest
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-lg mb-1">Challans (85)</p>
                      <p className="text-muted-foreground text-sm">
                        Vendée • Littoral • Saint-Jean-de-Monts • Les Sables
                      </p>
                    </div>
                    <a
                      href="tel:+33744716875"
                      className="flex items-center gap-3 text-lg hover:text-secondary transition-smooth"
                    >
                      <Phone className="h-5 w-5 text-secondary" />
                      07 44 71 68 75
                    </a>
                    <a
                      href="mailto:contact@planet-studio.fr"
                      className="flex items-center gap-3 hover:text-secondary transition-smooth"
                    >
                      <Mail className="h-5 w-5 text-secondary" />
                      contact@planet-studio.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
