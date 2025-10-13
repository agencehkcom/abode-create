import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les 24-48h.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nom">Nom *</Label>
          <Input
            id="nom"
            name="nom"
            required
            placeholder="Votre nom"
            className="transition-smooth focus:border-secondary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="votre@email.fr"
            className="transition-smooth focus:border-secondary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="telephone">Téléphone *</Label>
          <Input
            id="telephone"
            name="telephone"
            type="tel"
            required
            placeholder="06 12 34 56 78"
            className="transition-smooth focus:border-secondary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ville">Ville</Label>
          <Input
            id="ville"
            name="ville"
            placeholder="Votre ville"
            className="transition-smooth focus:border-secondary"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service souhaité</Label>
        <Select name="service">
          <SelectTrigger className="transition-smooth focus:border-secondary">
            <SelectValue placeholder="Sélectionnez un service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="visite-conseil">Visite conseil</SelectItem>
            <SelectItem value="etude-faisabilite">Étude de faisabilité</SelectItem>
            <SelectItem value="architecture">Projet d'architecture</SelectItem>
            <SelectItem value="architecture-interieure">Architecture intérieure</SelectItem>
            <SelectItem value="maitrise-oeuvre">Maîtrise d'œuvre</SelectItem>
            <SelectItem value="attestations-pmr">Attestations PMR</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="agence">Agence préférée</Label>
        <Select name="agence">
          <SelectTrigger className="transition-smooth focus:border-secondary">
            <SelectValue placeholder="Sélectionnez une agence" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sud">Agence Sud (Anduze - 30)</SelectItem>
            <SelectItem value="ouest">Agence Ouest (Challans - 85)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Votre projet *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Décrivez-nous votre projet en quelques lignes..."
          rows={6}
          className="transition-smooth focus:border-secondary resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full gradient-accent hover:opacity-90 transition-smooth"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Envoi en cours..."
        ) : (
          <>
            Envoyer le message
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        * Champs obligatoires • Réponse sous 24-48h
      </p>
    </form>
  );
};
