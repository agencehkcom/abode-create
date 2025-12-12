import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  Shield, 
  ArrowRight, 
  Phone,
  FileCheck,
  Building,
  Ruler,
  AlertTriangle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PermisConstruire = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Dossier conforme",
      description: "Constitution d'un dossier complet respectant toutes les exigences réglementaires"
    },
    {
      icon: Clock,
      title: "Gain de temps",
      description: "Évitez les allers-retours avec l'administration grâce à un dossier bien préparé"
    },
    {
      icon: CheckCircle,
      title: "Suivi personnalisé",
      description: "Accompagnement de A à Z jusqu'à l'obtention de votre autorisation"
    },
    {
      icon: FileCheck,
      title: "Expertise réglementaire",
      description: "Maîtrise du PLU, des règles d'urbanisme et des normes en vigueur"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Étude préliminaire",
      description: "Analyse de votre projet, du terrain et des contraintes réglementaires (PLU, servitudes, zones protégées)"
    },
    {
      number: "02",
      title: "Conception architecturale",
      description: "Élaboration des plans (masse, situation, coupes, façades) conformes aux exigences du permis"
    },
    {
      number: "03",
      title: "Constitution du dossier",
      description: "Rédaction de la notice descriptive, insertion paysagère, attestations obligatoires (RT2012/RE2020, PMR)"
    },
    {
      number: "04",
      title: "Dépôt en mairie",
      description: "Dépôt officiel du dossier complet et suivi de l'instruction avec les services d'urbanisme"
    },
    {
      number: "05",
      title: "Obtention & affichage",
      description: "Réception de l'arrêté, conseils pour l'affichage réglementaire et le démarrage des travaux"
    }
  ];

  const documents = [
    "Plan de situation du terrain (PCMI 1)",
    "Plan de masse des constructions (PCMI 2)",
    "Plan en coupe du terrain et de la construction (PCMI 3)",
    "Notice descriptive du projet (PCMI 4)",
    "Plans des façades et toitures (PCMI 5)",
    "Document graphique d'insertion paysagère (PCMI 6)",
    "Photographies de l'environnement proche et lointain (PCMI 7-8)",
    "Attestation RT2012 ou RE2020",
    "Attestation PMR si applicable"
  ];

  const faqs = [
    {
      question: "Quand faut-il un permis de construire ?",
      answer: "Le permis de construire est obligatoire pour toute construction nouvelle de plus de 20 m² (ou 40 m² en zone urbaine avec PLU), pour les extensions créant plus de 40 m² en zone U, ou lorsque la surface totale après travaux dépasse 150 m². Il est également requis pour tout changement de destination avec modification de structure ou de façade."
    },
    {
      question: "Quel est le délai d'instruction d'un permis de construire ?",
      answer: "Le délai d'instruction est généralement de 2 mois pour une maison individuelle et de 3 mois pour les autres constructions. Ce délai peut être prolongé en cas de consultation de services extérieurs (ABF en zone protégée, par exemple) ou si des pièces complémentaires sont demandées."
    },
    {
      question: "Pourquoi faire appel à un architecte pour mon permis ?",
      answer: "Au-delà de l'obligation légale (surface > 150 m²), un architecte vous garantit un dossier conforme dès le premier dépôt, évitant les demandes de pièces complémentaires qui allongent les délais. Notre expertise réglementaire et notre relation avec les services d'urbanisme optimisent vos chances d'obtention."
    },
    {
      question: "Que se passe-t-il si mon permis est refusé ?",
      answer: "En cas de refus, nous analysons les motifs et vous accompagnons dans la modification du projet pour un nouveau dépôt. Nous pouvons également vous assister dans un recours gracieux auprès du maire ou un recours contentieux devant le tribunal administratif si le refus nous semble injustifié."
    },
    {
      question: "Quelle est la validité d'un permis de construire ?",
      answer: "Un permis de construire est valable 3 ans à compter de sa délivrance. Ce délai peut être prolongé deux fois d'un an sur demande. Les travaux doivent avoir commencé dans ce délai et ne pas être interrompus plus d'un an."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-secondary" />
              <span className="text-secondary font-medium">Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Permis de construire
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl">
              De la conception à l'obtention, nous constituons et déposons votre dossier de permis de construire en conformité avec les règles d'urbanisme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gradient-accent text-black font-semibold">
                <Link to="/contact">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <a href="tel:+33665674735">
                  <Phone className="mr-2 h-5 w-5" />
                  06 65 67 47 35
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Votre projet mérite un dossier <span className="text-secondary">irréprochable</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Le permis de construire est une étape cruciale de votre projet. Un dossier incomplet ou non conforme peut entraîner des retards de plusieurs mois, voire un refus pur et simple.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Chez Planet Studio, nous maîtrisons parfaitement les règles d'urbanisme et les attentes des services instructeurs. Nous constituons des dossiers complets et conformes qui maximisent vos chances d'obtention dans les meilleurs délais.
              </p>
              <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                <AlertTriangle className="h-6 w-6 text-secondary flex-shrink-0" />
                <p className="text-sm">
                  <strong>Bon à savoir :</strong> L'intervention d'un architecte est obligatoire pour tout projet dont la surface de plancher dépasse 150 m².
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-smooth"
                >
                  <benefit.icon className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types de projets */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pour quels projets ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nous accompagnons tous types de projets nécessitant un permis de construire
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building, title: "Construction neuve", desc: "Maison individuelle, immeuble, local commercial" },
              { icon: Ruler, title: "Extension", desc: "Agrandissement de plus de 40 m² en zone urbaine" },
              { icon: FileText, title: "Réhabilitation lourde", desc: "Changement de destination, modification de structure" },
              { icon: Shield, title: "Zones protégées", desc: "Projets en périmètre ABF ou site classé" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-background rounded-2xl border border-border text-center hover:shadow-soft transition-smooth"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre processus
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un accompagnement méthodique pour garantir l'obtention de votre permis
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 p-6 bg-card rounded-2xl border border-border hover:border-secondary/50 transition-smooth"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-secondary text-black rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pièces du dossier
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Nous produisons l'ensemble des documents obligatoires pour votre demande de permis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
              >
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm">{doc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tarification transparente
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Nos honoraires sont calculés selon la complexité de votre projet
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 bg-card rounded-2xl border border-border">
                <h3 className="text-xl font-semibold mb-2">Permis seul</h3>
                <p className="text-3xl font-bold text-secondary mb-2">À partir de 2 500€</p>
                <p className="text-sm text-muted-foreground">
                  Constitution et dépôt du dossier de permis de construire
                </p>
              </div>
              <div className="p-8 bg-secondary/10 rounded-2xl border border-secondary/30">
                <h3 className="text-xl font-semibold mb-2">Mission complète</h3>
                <p className="text-3xl font-bold text-secondary mb-2">6 à 10%</p>
                <p className="text-sm text-muted-foreground">
                  Du montant des travaux – conception + permis + suivi de chantier
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Chaque projet est unique. Contactez-nous pour un devis personnalisé gratuit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions fréquentes
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-xl border border-border px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-black/70 text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une première analyse gratuite de votre projet et obtenez un devis personnalisé sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-black text-white hover:bg-black/90">
                <Link to="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-black/10">
                <a href="tel:+33665674735">
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler maintenant
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PermisConstruire;
