import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  CheckCircle,
  Shield,
  ArrowRight,
  ArrowLeft,
  Building,
  MapPin,
  Clock,
  AlertTriangle,
  User,
  Mail,
  Phone,
  Lock,
  Calendar,
  Send,
  Calculator,
  Loader2,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, Quote, Award, Zap, Target, BadgeCheck, HelpCircle } from "lucide-react";

// Types pour le formulaire
interface FormData {
  // Étape 1
  typeProjet: string;
  // Étape 2
  natureProjet: string;
  // Étape 3
  surface: string;
  // Étape 4
  commune: string;
  departement: string;
  // Étape 5
  contraintes: string[];
  // Étape 6
  delai: string;
  // Coordonnées
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
}

// Configuration de la grille tarifaire
const PRICING = {
  base: 2800, // Base permis >150m²
  typeProjet: {
    sci: 500,
    particulier: 0,
    investisseur: 350,
  },
  natureProjet: {
    maison: 0,
    immeuble: 800,
    extension: 200,
  },
  surface: {
    "150-200": 0,
    "200-300": 400,
    "300+": 900,
  },
  contraintes: {
    abf: 600,
    plu: 400,
    pente: 300,
    division: 500,
    aucun: 0,
  },
  delai: {
    urgent: 800,
    standard: 0,
    flexible: -200,
  },
};

// Calculer le devis
const calculateDevis = (formData: FormData): { min: number; max: number } => {
  let total = PRICING.base;

  // Type de projet
  if (formData.typeProjet && PRICING.typeProjet[formData.typeProjet as keyof typeof PRICING.typeProjet] !== undefined) {
    total += PRICING.typeProjet[formData.typeProjet as keyof typeof PRICING.typeProjet];
  }

  // Nature du projet
  if (formData.natureProjet && PRICING.natureProjet[formData.natureProjet as keyof typeof PRICING.natureProjet] !== undefined) {
    total += PRICING.natureProjet[formData.natureProjet as keyof typeof PRICING.natureProjet];
  }

  // Surface
  if (formData.surface && PRICING.surface[formData.surface as keyof typeof PRICING.surface] !== undefined) {
    total += PRICING.surface[formData.surface as keyof typeof PRICING.surface];
  }

  // Contraintes
  formData.contraintes.forEach((contrainte) => {
    if (PRICING.contraintes[contrainte as keyof typeof PRICING.contraintes] !== undefined) {
      total += PRICING.contraintes[contrainte as keyof typeof PRICING.contraintes];
    }
  });

  // Délai
  if (formData.delai && PRICING.delai[formData.delai as keyof typeof PRICING.delai] !== undefined) {
    total += PRICING.delai[formData.delai as keyof typeof PRICING.delai];
  }

  // Fourchette de prix (-10% / +15%)
  return {
    min: Math.round(total * 0.9),
    max: Math.round(total * 1.15),
  };
};

// Composant Option Card
const OptionCard = ({
  selected,
  onClick,
  icon: Icon,
  title,
  description,
}: {
  selected: boolean;
  onClick: () => void;
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full p-5 rounded-xl border-2 text-left transition-all duration-200 ${
      selected
        ? "border-secondary bg-secondary/10 shadow-md"
        : "border-border bg-card hover:border-secondary/50 hover:bg-muted/50"
    }`}
  >
    <div className="flex items-start gap-4">
      {Icon && (
        <div
          className={`p-2 rounded-lg ${
            selected ? "bg-secondary text-black" : "bg-muted"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
      )}
      <div className="flex-1">
        <p className={`font-semibold ${selected ? "text-secondary" : ""}`}>
          {title}
        </p>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          selected ? "border-secondary bg-secondary" : "border-muted-foreground"
        }`}
      >
        {selected && <CheckCircle className="h-3 w-3 text-black" />}
      </div>
    </div>
  </button>
);

const DevisPermis = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    typeProjet: "",
    natureProjet: "",
    surface: "",
    commune: "",
    departement: "",
    contraintes: [],
    delai: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });

  const totalSteps = 7; // 6 étapes + coordonnées
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const stepTitles = [
    "Type de projet",
    "Nature du projet",
    "Surface totale",
    "Localisation",
    "Contraintes spécifiques",
    "Délai souhaité",
    "Vos coordonnées",
  ];

  const stepSubtitles = [
    "Sélectionnez le cadre juridique de votre projet",
    "Précisez la nature de votre construction",
    "Indiquez la surface de plancher envisagée",
    "Où se situe votre terrain ?",
    "Identifiez les éventuelles contraintes",
    "Quand souhaitez-vous déposer votre permis ?",
    "Pour recevoir votre estimation personnalisée",
  ];

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.typeProjet !== "";
      case 1:
        return formData.natureProjet !== "";
      case 2:
        return formData.surface !== "";
      case 3:
        return formData.commune.trim() !== "" && formData.departement.trim() !== "";
      case 4:
        return formData.contraintes.length > 0;
      case 5:
        return formData.delai !== "";
      case 6:
        return (
          formData.nom.trim() !== "" &&
          formData.prenom.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.telephone.trim() !== ""
        );
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simuler l'envoi de l'email
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowResult(true);

    toast({
      title: "Estimation envoyée !",
      description: "Vous recevrez votre devis par email dans quelques instants.",
    });
  };

  const toggleContrainte = (contrainte: string) => {
    setFormData((prev) => {
      // Si on sélectionne "aucun", désélectionner tout le reste
      if (contrainte === "aucun") {
        return { ...prev, contraintes: ["aucun"] };
      }
      // Si on sélectionne autre chose, retirer "aucun"
      const newContraintes = prev.contraintes.filter((c) => c !== "aucun");
      if (newContraintes.includes(contrainte)) {
        return {
          ...prev,
          contraintes: newContraintes.filter((c) => c !== contrainte),
        };
      }
      return { ...prev, contraintes: [...newContraintes, contrainte] };
    });
  };

  const devis = calculateDevis(formData);

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      sci: "SCI",
      particulier: "Particulier",
      investisseur: "Investisseur / Marchand de biens",
    };
    return labels[type] || type;
  };

  const getNatureLabel = (nature: string) => {
    const labels: Record<string, string> = {
      maison: "Maison individuelle",
      immeuble: "Immeuble / Logement collectif",
      extension: "Extension >150 m²",
    };
    return labels[nature] || nature;
  };

  const getSurfaceLabel = (surface: string) => {
    const labels: Record<string, string> = {
      "150-200": "150 – 200 m²",
      "200-300": "200 – 300 m²",
      "300+": "+ de 300 m²",
    };
    return labels[surface] || surface;
  };

  const getDelaiLabel = (delai: string) => {
    const labels: Record<string, string> = {
      urgent: "Urgent (moins de 3 mois)",
      standard: "Standard (3-6 mois)",
      flexible: "Flexible (6+ mois)",
    };
    return labels[delai] || delai;
  };

  const getContraintesLabels = (contraintes: string[]) => {
    const labels: Record<string, string> = {
      abf: "Zone ABF",
      plu: "PLU complexe",
      pente: "Terrain en pente",
      division: "Division parcellaire",
      aucun: "Aucune contrainte identifiée",
    };
    return contraintes.map((c) => labels[c] || c).join(", ");
  };

  // Rendu de chaque étape
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <OptionCard
              selected={formData.typeProjet === "sci"}
              onClick={() => setFormData({ ...formData, typeProjet: "sci" })}
              icon={Building}
              title="SCI"
              description="Société Civile Immobilière – Gestion patrimoniale"
            />
            <OptionCard
              selected={formData.typeProjet === "particulier"}
              onClick={() => setFormData({ ...formData, typeProjet: "particulier" })}
              icon={User}
              title="Particulier"
              description="Projet personnel de construction ou rénovation"
            />
            <OptionCard
              selected={formData.typeProjet === "investisseur"}
              onClick={() => setFormData({ ...formData, typeProjet: "investisseur" })}
              icon={Calculator}
              title="Investisseur / Marchand de biens"
              description="Projet d'investissement locatif ou revente"
            />
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <OptionCard
              selected={formData.natureProjet === "maison"}
              onClick={() => setFormData({ ...formData, natureProjet: "maison" })}
              icon={Building}
              title="Maison individuelle"
              description="Construction neuve ou reconstruction totale"
            />
            <OptionCard
              selected={formData.natureProjet === "immeuble"}
              onClick={() => setFormData({ ...formData, natureProjet: "immeuble" })}
              icon={Building}
              title="Immeuble / Logement collectif"
              description="Plusieurs logements, résidence, copropriété"
            />
            <OptionCard
              selected={formData.natureProjet === "extension"}
              onClick={() => setFormData({ ...formData, natureProjet: "extension" })}
              icon={Building}
              title="Extension >150 m²"
              description="Agrandissement nécessitant un permis de construire"
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <OptionCard
              selected={formData.surface === "150-200"}
              onClick={() => setFormData({ ...formData, surface: "150-200" })}
              title="150 – 200 m²"
              description="Surface de plancher entre 150 et 200 m²"
            />
            <OptionCard
              selected={formData.surface === "200-300"}
              onClick={() => setFormData({ ...formData, surface: "200-300" })}
              title="200 – 300 m²"
              description="Surface de plancher entre 200 et 300 m²"
            />
            <OptionCard
              selected={formData.surface === "300+"}
              onClick={() => setFormData({ ...formData, surface: "300+" })}
              title="+ de 300 m²"
              description="Surface de plancher supérieure à 300 m²"
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="commune" className="text-base font-medium">
                Commune
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="commune"
                  placeholder="Ex : Nîmes, Anduze, Challans..."
                  value={formData.commune}
                  onChange={(e) =>
                    setFormData({ ...formData, commune: e.target.value })
                  }
                  className="pl-10 h-12 text-base"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="departement" className="text-base font-medium">
                Département
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="departement"
                  placeholder="Ex : 30, 85, Gard, Vendée..."
                  value={formData.departement}
                  onChange={(e) =>
                    setFormData({ ...formData, departement: e.target.value })
                  }
                  className="pl-10 h-12 text-base"
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground mb-4">
              Sélectionnez toutes les contraintes applicables à votre projet
            </p>
            {[
              {
                id: "abf",
                label: "Zone ABF",
                desc: "Périmètre des Architectes des Bâtiments de France",
              },
              {
                id: "plu",
                label: "PLU complexe",
                desc: "Règlement d'urbanisme avec nombreuses restrictions",
              },
              {
                id: "pente",
                label: "Terrain en pente",
                desc: "Déclivité significative nécessitant des études spécifiques",
              },
              {
                id: "division",
                label: "Division parcellaire",
                desc: "Projet impliquant une division de terrain",
              },
              {
                id: "aucun",
                label: "Aucune contrainte / Je ne sais pas",
                desc: "Pas de contrainte identifiée à ce stade",
              },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleContrainte(item.id)}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                  formData.contraintes.includes(item.id)
                    ? "border-secondary bg-secondary/10"
                    : "border-border bg-card hover:border-secondary/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <Checkbox
                    checked={formData.contraintes.includes(item.id)}
                    className="h-5 w-5"
                  />
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <OptionCard
              selected={formData.delai === "urgent"}
              onClick={() => setFormData({ ...formData, delai: "urgent" })}
              icon={Clock}
              title="Urgent (moins de 3 mois)"
              description="Dépôt prioritaire avec traitement accéléré"
            />
            <OptionCard
              selected={formData.delai === "standard"}
              onClick={() => setFormData({ ...formData, delai: "standard" })}
              icon={Calendar}
              title="Standard (3-6 mois)"
              description="Délai classique pour un projet bien préparé"
            />
            <OptionCard
              selected={formData.delai === "flexible"}
              onClick={() => setFormData({ ...formData, delai: "flexible" })}
              icon={Clock}
              title="Flexible (6+ mois)"
              description="Pas d'urgence, projet en phase de réflexion"
            />
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="p-4 bg-secondary/10 rounded-xl border border-secondary/20 mb-6">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Vos données sont protégées</p>
                  <p className="text-sm text-muted-foreground">
                    Pas de spam, données confidentielles. Contact uniquement lié à votre projet.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="prenom" className="text-base font-medium">
                  Prénom *
                </Label>
                <Input
                  id="prenom"
                  placeholder="Votre prénom"
                  value={formData.prenom}
                  onChange={(e) =>
                    setFormData({ ...formData, prenom: e.target.value })
                  }
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nom" className="text-base font-medium">
                  Nom *
                </Label>
                <Input
                  id="nom"
                  placeholder="Votre nom"
                  value={formData.nom}
                  onChange={(e) =>
                    setFormData({ ...formData, nom: e.target.value })
                  }
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium">
                Email *
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="pl-10 h-12"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Votre estimation sera envoyée à cette adresse
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="telephone" className="text-base font-medium">
                Téléphone *
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="telephone"
                  type="tel"
                  placeholder="06 XX XX XX XX"
                  value={formData.telephone}
                  onChange={(e) =>
                    setFormData({ ...formData, telephone: e.target.value })
                  }
                  className="pl-10 h-12"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Page de résultat
  if (showResult) {
    return (
      <div className="min-h-screen bg-background">
        <Header />

        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              {/* Succès */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Votre estimation personnalisée
                </h1>
                <p className="text-muted-foreground text-lg">
                  Merci {formData.prenom}, voici le détail de votre projet
                </p>
              </div>

              {/* Estimation */}
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl p-8 mb-8 border border-secondary/30">
                <div className="text-center">
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    Estimation tarifaire
                  </p>
                  <p className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                    {devis.min.toLocaleString("fr-FR")} € – {devis.max.toLocaleString("fr-FR")} €
                  </p>
                  <p className="text-sm text-muted-foreground">
                    HT – Estimation indicative, non contractuelle
                  </p>
                </div>
              </div>

              {/* Récapitulatif */}
              <div className="bg-card rounded-2xl border border-border p-6 mb-8">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-secondary" />
                  Récapitulatif de votre projet
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Type de projet</span>
                    <span className="font-medium">{getTypeLabel(formData.typeProjet)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Nature</span>
                    <span className="font-medium">{getNatureLabel(formData.natureProjet)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Surface</span>
                    <span className="font-medium">{getSurfaceLabel(formData.surface)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Localisation</span>
                    <span className="font-medium">
                      {formData.commune}, {formData.departement}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Contraintes</span>
                    <span className="font-medium text-right max-w-[200px]">
                      {getContraintesLabels(formData.contraintes)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Délai</span>
                    <span className="font-medium">{getDelaiLabel(formData.delai)}</span>
                  </div>
                </div>
              </div>

              {/* Ce qui est inclus */}
              <div className="bg-muted/30 rounded-2xl p-6 mb-8">
                <h3 className="font-semibold mb-4">Ce qui est inclus dans notre prestation :</h3>
                <ul className="space-y-3">
                  {[
                    "Étude de faisabilité et analyse du PLU",
                    "Conception des plans (masse, coupes, façades)",
                    "Constitution du dossier complet (PCMI 1 à 8)",
                    "Rédaction de la notice descriptive",
                    "Insertion paysagère et photomontages",
                    "Attestations RT2012/RE2020 et PMR",
                    "Dépôt en mairie et suivi d'instruction",
                    "Gestion des demandes de pièces complémentaires",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 mb-8">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                    Estimation indicative
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Ce devis est une estimation basée sur les informations fournies. Le tarif définitif sera établi après analyse détaillée de votre projet lors d'un échange avec notre équipe.
                  </p>
                </div>
              </div>

              {/* Email envoyé */}
              <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-800 mb-8">
                <Mail className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    Email envoyé !
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Une copie de cette estimation a été envoyée à {formData.email}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button
                  size="lg"
                  className="gradient-accent text-black font-semibold w-full sm:w-auto"
                  onClick={() => window.open("https://calendly.com", "_blank")}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Planifier un échange de validation
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Échange de 20 min pour valider votre projet • Sans engagement
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-secondary mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">
                Dossier conforme garanti
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Obtenez votre permis de construire{" "}
              <span className="text-secondary">sans stress</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Évitez les refus et les retards administratifs. Recevez une estimation immédiate et un dossier conforme dès le premier dépôt.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>Architecte DPLG</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>+150 permis obtenus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>98% de taux de réussite</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formulaire multi-étapes */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">
                  Étape {currentStep + 1} sur {totalSteps}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}% complété
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Formulaire */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-soft">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Titre de l'étape */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">
                      {stepTitles[currentStep]}
                    </h2>
                    <p className="text-muted-foreground">
                      {stepSubtitles[currentStep]}
                    </p>
                  </div>

                  {/* Contenu de l'étape */}
                  {renderStep()}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Précédent
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!canProceed() || isSubmitting}
                  className="gradient-accent text-black font-semibold gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : currentStep === totalSteps - 1 ? (
                    <>
                      <Send className="h-4 w-4" />
                      Obtenir mon estimation
                    </>
                  ) : (
                    <>
                      Suivant
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Réassurance */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <Lock className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">
                  Données sécurisées
                </p>
              </div>
              <div className="p-4">
                <Clock className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">
                  Réponse immédiate
                </p>
              </div>
              <div className="p-4">
                <Shield className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">
                  Sans engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section de réassurance */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-12">
              Pourquoi nous confier votre permis de construire ?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <FileText className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2">Dossier complet</h4>
                <p className="text-sm text-muted-foreground">
                  Toutes les pièces obligatoires (PCMI 1-8), attestations et documents conformes dès le premier dépôt
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2">Expertise réglementaire</h4>
                <p className="text-sm text-muted-foreground">
                  Maîtrise du PLU, zones ABF, RE2020 et toutes les contraintes urbanistiques de votre commune
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2">Gain de temps</h4>
                <p className="text-sm text-muted-foreground">
                  Évitez les allers-retours avec l'administration. Délai moyen d'obtention réduit de 30%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages / Avis clients */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary mb-4">
              <Star className="h-4 w-4 fill-secondary" />
              <span className="text-sm font-medium">4.9/5 sur 127 avis</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ils nous ont fait confiance
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez les retours de nos clients sur leurs projets de permis de construire
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Laurent M.",
                role: "SCI Patrimoine",
                avatar: "LM",
                rating: 5,
                text: "Dossier accepté du premier coup pour notre immeuble de 6 logements. L'équipe a su anticiper les demandes de la mairie et gérer les contraintes ABF avec professionnalisme.",
                project: "Immeuble collectif – 420 m²",
              },
              {
                name: "Sophie D.",
                role: "Particulier",
                avatar: "SD",
                rating: 5,
                text: "Après un premier refus avec un autre prestataire, Planet Studio a repris mon dossier et obtenu le permis en 2 mois. Leur connaissance du PLU local a fait toute la différence.",
                project: "Maison individuelle – 185 m²",
              },
              {
                name: "Thomas R.",
                role: "Marchand de biens",
                avatar: "TR",
                rating: 5,
                text: "Troisième projet avec eux, toujours la même qualité. Réactifs, précis et transparents sur les délais. Le calcul du devis en ligne était très proche du tarif final.",
                project: "Division + extension – 280 m²",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 relative"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-secondary/20" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-secondary">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 px-3 py-1.5 bg-muted rounded-lg inline-block">
                  <p className="text-xs text-muted-foreground">{testimonial.project}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6" />
              <span className="text-sm font-medium">Architecte DPLG</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-6 w-6" />
              <span className="text-sm font-medium">Ordre des Architectes</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span className="text-sm font-medium">Assurance RC Pro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Processus détaillé */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre processus en 5 étapes
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Un accompagnement méthodique pour garantir l'obtention de votre permis
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Analyse & Faisabilité",
                description: "Étude de votre projet, analyse du PLU, des servitudes et contraintes réglementaires.",
                duration: "2-3 jours",
              },
              {
                number: "02",
                title: "Conception architecturale",
                description: "Élaboration des plans (masse, situation, coupes, façades) conformes aux règles d'urbanisme.",
                duration: "2-3 semaines",
              },
              {
                number: "03",
                title: "Constitution du dossier",
                description: "Rédaction de la notice, insertion paysagère et toutes les pièces obligatoires (PCMI 1 à 8).",
                duration: "1-2 semaines",
              },
              {
                number: "04",
                title: "Dépôt & Suivi",
                description: "Dépôt en mairie, suivi d'instruction et gestion des demandes de pièces complémentaires.",
                duration: "2-3 mois",
              },
              {
                number: "05",
                title: "Obtention & Livraison",
                description: "Réception de l'arrêté, conseils pour l'affichage et transmission du dossier complet.",
                duration: "Immédiat",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-secondary text-black rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold">{step.number}</span>
                </div>
                <div className="flex-1 pb-8 border-b border-white/10 last:border-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-white/70">{step.description}</p>
                    </div>
                    <span className="flex-shrink-0 px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Garanties */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos engagements
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Des garanties concrètes pour sécuriser votre projet
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Dossier conforme",
                description: "Si votre dossier est refusé pour non-conformité, nous le reprenons gratuitement",
              },
              {
                icon: Zap,
                title: "Réactivité garantie",
                description: "Réponse sous 48h à toutes vos demandes pendant l'instruction",
              },
              {
                icon: Lock,
                title: "Prix fixe",
                description: "Devis détaillé sans surprise. Aucun coût caché ni supplément non prévu",
              },
              {
                icon: BadgeCheck,
                title: "Suivi complet",
                description: "Accompagnement jusqu'à l'obtention effective de votre permis",
              },
            ].map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl border border-border p-6 text-center hover:border-secondary/50 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <guarantee.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">{guarantee.title}</h3>
                <p className="text-sm text-muted-foreground">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary mb-4">
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm font-medium">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions fréquentes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur le permis de construire
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Quand un permis de construire est-il obligatoire ?",
                  answer: "Le permis de construire est obligatoire pour toute construction nouvelle de plus de 20 m² (ou 40 m² en zone urbaine avec PLU), pour les extensions créant plus de 40 m² en zone U, ou lorsque la surface totale après travaux dépasse 150 m². Il est également requis pour tout changement de destination avec modification de structure ou de façade.",
                },
                {
                  question: "Pourquoi faire appel à un architecte pour mon permis ?",
                  answer: "Au-delà de l'obligation légale (surface > 150 m²), un architecte vous garantit un dossier conforme dès le premier dépôt, évitant les demandes de pièces complémentaires qui allongent les délais. Notre expertise réglementaire et notre relation avec les services d'urbanisme optimisent vos chances d'obtention.",
                },
                {
                  question: "Quel est le délai d'instruction d'un permis de construire ?",
                  answer: "Le délai légal est de 2 mois pour une maison individuelle et 3 mois pour les autres constructions. Ce délai peut être prolongé en cas de consultation de services extérieurs (ABF en zone protégée) ou si des pièces complémentaires sont demandées. Avec un dossier bien préparé, nous réduisons ces risques de prolongation.",
                },
                {
                  question: "L'estimation en ligne est-elle fiable ?",
                  answer: "Notre calculateur se base sur notre grille tarifaire réelle et les paramètres clés de votre projet. L'estimation est généralement proche du devis final (±15%). Le tarif définitif sera confirmé après analyse détaillée lors de notre premier échange.",
                },
                {
                  question: "Que se passe-t-il si mon permis est refusé ?",
                  answer: "En cas de refus, nous analysons les motifs et vous accompagnons dans la modification du projet pour un nouveau dépôt. Si le refus est dû à une non-conformité de notre dossier, nous reprenons le travail gratuitement. Nous pouvons également vous assister dans un recours gracieux si le refus semble injustifié.",
                },
                {
                  question: "Intervenez-vous partout en France ?",
                  answer: "Nous intervenons principalement dans le Gard (30), la Vendée (85) et les départements limitrophes. Pour les autres zones, contactez-nous : nous étudions chaque demande au cas par cas et pouvons intervenir sur des projets spécifiques partout en France.",
                },
                {
                  question: "Quelle est la validité d'un permis de construire ?",
                  answer: "Un permis de construire est valable 3 ans à compter de sa délivrance. Ce délai peut être prolongé deux fois d'un an sur demande. Les travaux doivent avoir commencé dans ce délai et ne pas être interrompus plus d'un an.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-secondary/50"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
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
              Obtenez votre estimation personnalisée en 2 minutes et recevez-la immédiatement par email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-black/90"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Obtenir mon estimation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black/10"
              >
                <a href="tel:+33665674735">
                  <Phone className="mr-2 h-5 w-5" />
                  06 65 67 47 35
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

export default DevisPermis;
