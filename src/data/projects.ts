export interface BeforeAfter {
  before: string;
  after: string;
  label?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  coverImage: string;
  images: string[];
  beforeAfter?: BeforeAfter[];
  lieu: string;
  surface: string;
  budget: string;
  annee: string;
  mission: string;
  excerpt: string;
  contexte: string;
  contraintes: string;
  solution: string;
  resultats: string;
}
