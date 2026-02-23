import { z } from "zod";

export const projectFormSchema = z.object({
  title: z.string().min(1, "Le titre est requis"),
  slug: z.string().min(1, "Le slug est requis").regex(/^[a-z0-9-]+$/, "Le slug ne doit contenir que des lettres minuscules, chiffres et tirets"),
  category: z.string().min(1, "La catégorie est requise"),
  cover_image: z.string().min(1, "L'image de couverture est requise"),
  images: z.array(z.string()).default([]),
  lieu: z.string().min(1, "Le lieu est requis"),
  surface: z.string().min(1, "La surface est requise"),
  budget: z.string().min(1, "Le budget est requis"),
  annee: z.string().min(1, "L'année est requise"),
  mission: z.string().min(1, "La mission est requise"),
  excerpt: z.string().min(1, "L'extrait est requis"),
  contexte: z.string().min(1, "Le contexte est requis"),
  contraintes: z.string().min(1, "Les contraintes sont requises"),
  solution: z.string().min(1, "La solution est requise"),
  resultats: z.string().min(1, "Les résultats sont requis"),
  display_order: z.number().int().default(0),
  is_published: z.boolean().default(false),
});

export type ProjectFormValues = z.infer<typeof projectFormSchema>;

export const beforeAfterFormSchema = z.object({
  before_image: z.string().min(1, "L'image avant est requise"),
  after_image: z.string().min(1, "L'image après est requise"),
  label: z.string().optional(),
  display_order: z.number().int().default(0),
});

export type BeforeAfterFormValues = z.infer<typeof beforeAfterFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
