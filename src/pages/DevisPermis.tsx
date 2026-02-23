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
  Send,
  Loader2,
  Home,
  PlusSquare,
  Store,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Star, Quote, Award, Zap, Target, BadgeCheck, HelpCircle } from "lucide-react";
import { testimonials } from "@/data/testimonials";

// ─── Types ───────────────────────────────────────────────────────

type TypeProjet = "maison-neuve" | "extension" | "erp";

interface FormData {
  typeProjet: TypeProjet | "";
  surface: string;
  options: string[];
  commune: string;
  departement: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
}

// ─── Grille tarifaire réelle (PDF Planet Studio 2025) ────────────

const SURFACE_OPTIONS: Record<TypeProjet, { value: string; label: string; sublabel: string; price: number | null }[]> = {
  "maison-neuve": [
    { value: "80-130", label: "80 – 130 m²", sublabel: "Dossier PCMI complet", price: 1900 },
    { value: "130-180", label: "130 – 180 m²", sublabel: "Projet complexe, volumétrie renforcée", price: 2700 },
    { value: "180+", label: "+ de 180 m²", sublabel: "Surface ou exigences hors standard", price: null },
  ],
  extension: [
    { value: "0-30", label: "Jusqu'à 30 m²", sublabel: "Double plans (existant + projeté)", price: 1600 },
    { value: "30-60", label: "30 – 60 m²", sublabel: "Extension intermédiaire", price: 2100 },
    { value: "60-90", label: "60 – 90 m²", sublabel: "Complexité technique / insertion accrue", price: 2700 },
    { value: "90+", label: "+ de 90 m²", sublabel: "Cas proche de projet neuf", price: null },
  ],
  erp: [
    { value: "0-130", label: "Jusqu'à 130 m²", sublabel: "Projet ERP type MAM, maison médicale, etc.", price: 1900 },
    { value: "130-180", label: "130 – 180 m²", sublabel: "Dossier PCMI ERP complet", price: 2700 },
    { value: "180+", label: "+ de 180 m²", sublabel: "Configuration spécifique", price: null },
  ],
};

const COMPLEMENTARY_OPTIONS = [
  {
    id: "notices-erp",
    label: "Notices réglementaires (PC39 + PC40)",
    description: "Obligatoire pour tout ERP : PMR + Sécurité Incendie",
    price: 720,
  },
  {
    id: "correction-pmr",
    label: "Correction de plans – normes PMR",
    description: "Si plans fournis non conformes par un tiers",
    price: 360,
  },
  {
    id: "attestation-sismique",
    label: "Attestation sismique (PCMI13)",
    description: "Obligatoire en zone sismique (via BET partenaire)",
    price: 180,
  },
  {
    id: "depot-en-ligne",
    label: "Dépôt en ligne de la demande",
    description: "Réalisé par Planet Studio sur plateforme officielle",
    price: 100,
  },
];

// ─── Calcul du devis ─────────────────────────────────────────────

const calculateDevis = (formData: FormData): { total: number | null; base: number | null; optionsTotal: number } => {
  let base: number | null = null;

  if (formData.typeProjet && formData.surface) {
    const surfaceOptions = SURFACE_OPTIONS[formData.typeProjet as TypeProjet];
    const selected = surfaceOptions?.find((s) => s.value === formData.surface);
    base = selected?.price ?? null;
  }

  const optionsTotal = formData.options.reduce((sum, optId) => {
    const opt = COMPLEMENTARY_OPTIONS.find((o) => o.id === optId);
    return sum + (opt?.price ?? 0);
  }, 0);

  const total = base !== null ? base + optionsTotal : null;

  return { total, base, optionsTotal };
};

// ─── Composant OptionCard ────────────────────────────────────────

const OptionCard = ({
  selected,
  onClick,
  icon: Icon,
  title,
  description,
  price,
}: {
  selected: boolean;
  onClick: () => void;
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
  price?: string;
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
        <div className="flex items-center justify-between gap-2">
          <p className={`font-semibold ${selected ? "text-secondary" : ""}`}>
            {title}
          </p>
          {price && (
            <span className={`text-sm font-bold flex-shrink-0 ${selected ? "text-secondary" : "text-muted-foreground"}`}>
              {price}
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
          selected ? "border-secondary bg-secondary" : "border-muted-foreground"
        }`}
      >
        {selected && <CheckCircle className="h-3 w-3 text-black" />}
      </div>
    </div>
  </button>
);

// ─── Composant principal ─────────────────────────────────────────

const DevisPermis = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    typeProjet: "",
    surface: "",
    options: [],
    commune: "",
    departement: "",
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });

  const totalSteps = 5;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const stepTitles = [
    "Type de projet",
    "Surface de plancher",
    "Options complémentaires",
    "Localisation",
    "Vos coordonnées",
  ];

  const stepSubtitles = [
    "Quel type de permis de construire avez-vous besoin ?",
    "Précisez la surface de plancher de votre projet",
    "Sélectionnez les prestations complémentaires si nécessaire",
    "Où se situe votre terrain ?",
    "Pour recevoir votre estimation personnalisée",
  ];

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.typeProjet !== "";
      case 1:
        return formData.surface !== "";
      case 2:
        return true; // Options sont facultatives
      case 3:
        return formData.commune.trim() !== "" && formData.departement.trim() !== "";
      case 4:
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
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowResult(true);
    toast({
      title: "Estimation envoyee !",
      description: "Vous recevrez votre devis par email dans quelques instants.",
    });
  };

  const toggleOption = (optionId: string) => {
    setFormData((prev) => {
      if (prev.options.includes(optionId)) {
        return { ...prev, options: prev.options.filter((o) => o !== optionId) };
      }
      return { ...prev, options: [...prev.options, optionId] };
    });
  };

  const devis = calculateDevis(formData);

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      "maison-neuve": "Maison neuve",
      extension: "Extension (accolee)",
      erp: "ERP - 5e categorie",
    };
    return labels[type] || type;
  };

  const getSurfaceLabel = () => {
    if (!formData.typeProjet || !formData.surface) return "";
    const options = SURFACE_OPTIONS[formData.typeProjet as TypeProjet];
    const selected = options?.find((s) => s.value === formData.surface);
    return selected?.label || formData.surface;
  };

  const getOptionsLabels = () => {
    return formData.options
      .map((optId) => COMPLEMENTARY_OPTIONS.find((o) => o.id === optId)?.label)
      .filter(Boolean)
      .join(", ");
  };

  // ─── Rendu de chaque etape ──────────────────────────────────────

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <OptionCard
              selected={formData.typeProjet === "maison-neuve"}
              onClick={() => setFormData({ ...formData, typeProjet: "maison-neuve", surface: "" })}
              icon={Home}
              title="Maison neuve"
              description="Construction neuve - dossier PCMI complet"
            />
            <OptionCard
              selected={formData.typeProjet === "extension"}
              onClick={() => setFormData({ ...formData, typeProjet: "extension", surface: "" })}
              icon={PlusSquare}
              title="Extension (accolee)"
              description="Agrandissement avec double plans (existant + projete)"
            />
            <OptionCard
              selected={formData.typeProjet === "erp"}
              onClick={() => setFormData({ ...formData, typeProjet: "erp", surface: "" })}
              icon={Store}
              title="ERP - 5e categorie"
              description="MAM, maison medicale, commerce... (hors notices)"
            />
          </div>
        );

      case 1:
        if (!formData.typeProjet) return null;
        const surfaceOptions = SURFACE_OPTIONS[formData.typeProjet as TypeProjet];
        return (
          <div className="space-y-4">
            {surfaceOptions.map((option) => (
              <OptionCard
                key={option.value}
                selected={formData.surface === option.value}
                onClick={() => setFormData({ ...formData, surface: option.value })}
                title={option.label}
                description={option.sublabel}
              />
            ))}
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground mb-2">
              Ces prestations sont facultatives et s'ajoutent a la prestation de base.
            </p>
            {COMPLEMENTARY_OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => toggleOption(option.id)}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                  formData.options.includes(option.id)
                    ? "border-secondary bg-secondary/10"
                    : "border-border bg-card hover:border-secondary/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <Checkbox
                    checked={formData.options.includes(option.id)}
                    className="h-5 w-5"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{option.label}</p>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                </div>
              </button>
            ))}
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
                  placeholder="Ex : Nimes, Anduze, Challans..."
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
                Departement
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="departement"
                  placeholder="Ex : 30, 85, Gard, Vendee..."
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
          <div className="space-y-6">
            <div className="p-4 bg-secondary/10 rounded-xl border border-secondary/20 mb-6">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Vos donnees sont protegees</p>
                  <p className="text-sm text-muted-foreground">
                    Pas de spam, donnees confidentielles. Contact uniquement lie a votre projet.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="prenom" className="text-base font-medium">
                  Prenom *
                </Label>
                <Input
                  id="prenom"
                  placeholder="Votre prenom"
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
                Votre estimation sera envoyee a cette adresse
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="telephone" className="text-base font-medium">
                Telephone *
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

  // ─── Page de resultat ───────────────────────────────────────────

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
              {/* Succes */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Votre estimation personnalisee
                </h1>
                <p className="text-muted-foreground text-lg">
                  Merci {formData.prenom}, voici le detail de votre projet
                </p>
              </div>

              {/* Confirmation */}
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl p-8 mb-8 border border-secondary/30">
                <div className="text-center">
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    Demande enregistree
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                    Nous revenons vers vous rapidement
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Notre equipe analysera votre projet et vous enverra un devis personnalise
                  </p>
                </div>
              </div>

              {/* Recapitulatif */}
              <div className="bg-card rounded-2xl border border-border p-6 mb-8">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-secondary" />
                  Recapitulatif de votre projet
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Type de projet</span>
                    <span className="font-medium">{getTypeLabel(formData.typeProjet)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Surface</span>
                    <span className="font-medium">{getSurfaceLabel()}</span>
                  </div>
                  {formData.options.length > 0 && (
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Options</span>
                      <span className="font-medium text-right max-w-[250px]">
                        {getOptionsLabels()}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Localisation</span>
                    <span className="font-medium">
                      {formData.commune}, {formData.departement}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ce qui est inclus */}
              <div className="bg-muted/30 rounded-2xl p-6 mb-8">
                <h3 className="font-semibold mb-4">Ce qui est inclus dans la prestation :</h3>
                <ul className="space-y-3">
                  {[
                    "Elaboration du projet architectural (L. 431-1 du Code de l'Urbanisme)",
                    "Plans de situation, de masse, coupes et facades",
                    "Notice descriptive et insertion paysagere",
                    "Vues proches et lointaines",
                    "Tous les elements du Cerfa necessaires au projet",
                    "Suivi avec les services instructeurs",
                    "Remise du dossier complet en PDF",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delai */}
              <div className="flex items-start gap-3 p-4 bg-secondary/10 rounded-xl border border-secondary/20 mb-8">
                <Clock className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Delai de realisation : 3 semaines</p>
                  <p className="text-sm text-muted-foreground">
                    A compter de la validation du devis et du reglement de l'acompte (50%).
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-800 mb-8">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                    Estimation indicative
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Ce devis est une estimation basee sur les informations fournies et la grille tarifaire Planet Studio 2025. Le tarif definitif sera confirme apres echange avec notre equipe. Devis valable 1 mois.
                  </p>
                </div>
              </div>

              {/* Email envoye */}
              <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/30 rounded-xl border border-green-200 dark:border-green-800 mb-8">
                <Mail className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    Demande envoyee !
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Notre equipe vous contactera sous 24-48h a l'adresse {formData.email}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="gradient-accent text-black font-semibold"
                >
                  <a href="tel:+33665674735">
                    <Phone className="mr-2 h-5 w-5" />
                    Appeler directement
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setShowResult(false);
                    setCurrentStep(0);
                    setFormData({
                      typeProjet: "",
                      surface: "",
                      options: [],
                      commune: "",
                      departement: "",
                      nom: "",
                      prenom: "",
                      email: "",
                      telephone: "",
                    });
                  }}
                >
                  Nouvelle estimation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // ─── Page formulaire ────────────────────────────────────────────

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
              Deposer un permis de construire{" "}
              <span className="text-secondary">avec Planet Studio</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Tarifs forfaitaires clairs, dossier complet en 3 semaines. Decrivez votre projet et nous vous recontactons.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>Architecte HMONP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>Tarifs forfaitaires</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>Delai 3 semaines</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formulaire multi-etapes */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">
                  Etape {currentStep + 1} sur {totalSteps}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}% complete
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
                  {/* Titre de l'etape */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">
                      {stepTitles[currentStep]}
                    </h2>
                    <p className="text-muted-foreground">
                      {stepSubtitles[currentStep]}
                    </p>
                  </div>

                  {/* Contenu de l'etape */}
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
                  Precedent
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

            {/* Reassurance */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <Lock className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">
                  Donnees securisees
                </p>
              </div>
              <div className="p-4">
                <Clock className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">
                  Reponse immediate
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

      {/* Section Temoignages */}
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
              <span className="text-sm font-medium">Avis Google</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ils nous ont fait confiance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 relative"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-secondary/20" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-secondary">
                      {testimonial.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6" />
              <span className="text-sm font-medium">Architecte HMONP</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-6 w-6" />
              <span className="text-sm font-medium">Ordre des Architectes</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span className="text-sm font-medium">Assurance SMA BTP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-black text-white">
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
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Un accompagnement clair et structure, du premier echange au depot en mairie
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Projet architectural",
                description: "Implantation, composition, volumes, materiaux et couleurs. Conception conforme a l'article L. 431-1 du Code de l'Urbanisme.",
              },
              {
                number: "02",
                title: "Production du dossier",
                description: "Plans de situation, de masse, coupes, facades, notice descriptive, insertion paysagere, vues proches et lointaines.",
              },
              {
                number: "03",
                title: "Suivi avec les services instructeurs",
                description: "Suivi rigoureux et regulier avec les services d'urbanisme. Vous etes informe des avancees a chaque etape.",
              },
              {
                number: "04",
                title: "Remise et depot",
                description: "Dossier final transmis en PDF. Planet Studio peut se charger du depot en ligne aupres des autorites competentes.",
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
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              Questions frequentes
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Les tarifs sont-ils TTC ?",
                  answer: "Oui, tous les tarifs affiches sont TTC (Toutes Taxes Comprises). Planet Studio est remuneree exclusivement sous forme d'honoraires forfaitaires.",
                },
                {
                  question: "Quel est le delai de realisation ?",
                  answer: "Planet Studio s'engage a realiser la mission confiee sous un delai de 3 semaines apres validation du devis et reglement de l'acompte. La semaine precedant le travail sur votre dossier, nous vous envoyons un recapitulatif des informations manquantes.",
                },
                {
                  question: "Comment se fait le reglement ?",
                  answer: "Le reglement se fait en 2 temps : un acompte de 50% au demarrage, puis le solde avant le depot du dossier. Reglement par virement bancaire ou cheque (pas de carte bleue).",
                },
                {
                  question: "Que comprend le tarif de base ?",
                  answer: "Le tarif inclut l'elaboration du projet architectural, la production de toutes les pieces graphiques et ecrites du dossier (plans, coupes, facades, notices, insertion paysagere), le suivi avec les services instructeurs, et la remise du dossier complet en PDF.",
                },
                {
                  question: "Que se passe-t-il pour les projets de grande surface ?",
                  answer: "Pour les maisons neuves > 180 m², les extensions > 90 m² et les ERP > 180 m², le tarif est etabli sur devis apres analyse detaillee de votre projet. Contactez-nous pour un echange personnalise.",
                },
                {
                  question: "L'attestation sismique est-elle obligatoire ?",
                  answer: "L'attestation sismique (PCMI13) est obligatoire si votre terrain est situe en zone sismique. Planet Studio la realise via un BET partenaire. Contactez-nous pour en savoir plus.",
                },
                {
                  question: "Intervenez-vous partout en France ?",
                  answer: "Nous intervenons principalement dans le Gard (30), la Vendee (85) et les departements limitrophes. Pour les autres zones, contactez-nous : nous etudions chaque demande au cas par cas.",
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
            backgroundSize: "500px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Pret a lancer votre projet ?
            </h2>
            <p className="text-black/70 text-lg mb-8 max-w-2xl mx-auto">
              Obtenez votre estimation en quelques clics ou appelez-nous directement.
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
