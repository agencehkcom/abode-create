import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { services } from "@/data/services";
import { Check, ArrowRight } from "lucide-react";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Nos services
            </h1>
            <p className="text-xl text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              De la conception à la réalisation, l'architecture est notre cœur de métier
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-32 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
                  {/* Header */}
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-xl text-muted-foreground">
                      {service.longDescription}
                    </p>
                    {service.pricing && (
                      <div className="mt-4 inline-block px-4 py-2 bg-secondary/10 rounded-full">
                        <span className="text-secondary font-semibold">
                          {service.pricing}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">
                      À qui ça s'adresse ?
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-6">
                      Notre processus
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="relative pl-12">
                          <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                            <span className="text-secondary font-bold text-lg">
                              {idx + 1}
                            </span>
                          </div>
                          <h4 className="font-semibold mb-2">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">
                      Ce que vous obtenez
                    </h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="deliverables">
                        <AccordionTrigger>
                          Voir les livrables ({service.deliverables.length})
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 pt-2">
                            {service.deliverables.map((deliverable, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-muted-foreground"
                              >
                                <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-border">
                    <Button asChild size="lg" className="gradient-accent hover:opacity-90 transition-smooth w-full md:w-auto text-black font-semibold">
                      <Link to="/contact">
                        Demander un devis
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
