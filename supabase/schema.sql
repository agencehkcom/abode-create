-- ============================================
-- Planet Studio — Schéma Supabase
-- À exécuter via le SQL Editor du Studio Supabase
-- ============================================

-- 1. Table projects
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  images TEXT[] DEFAULT '{}',
  lieu TEXT NOT NULL,
  surface TEXT NOT NULL,
  budget TEXT NOT NULL DEFAULT 'Sur demande',
  annee TEXT NOT NULL,
  mission TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  contexte TEXT NOT NULL,
  contraintes TEXT NOT NULL,
  solution TEXT NOT NULL,
  resultats TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Table before_after
CREATE TABLE IF NOT EXISTS public.before_after (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  before_image TEXT NOT NULL,
  after_image TEXT NOT NULL,
  label TEXT,
  display_order INTEGER NOT NULL DEFAULT 0
);

-- 3. Index pour les performances
CREATE INDEX IF NOT EXISTS idx_projects_slug ON public.projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_published ON public.projects(is_published);
CREATE INDEX IF NOT EXISTS idx_projects_display_order ON public.projects(display_order);
CREATE INDEX IF NOT EXISTS idx_before_after_project_id ON public.before_after(project_id);

-- 4. Trigger updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_updated_at ON public.projects;
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 5. RLS (Row Level Security)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.before_after ENABLE ROW LEVEL SECURITY;

-- Lecture publique : uniquement les projets publiés
CREATE POLICY "Public can read published projects"
  ON public.projects FOR SELECT
  USING (is_published = true);

-- Lecture publique : before_after des projets publiés
CREATE POLICY "Public can read before_after of published projects"
  ON public.before_after FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.projects
      WHERE projects.id = before_after.project_id
      AND projects.is_published = true
    )
  );

-- Admin : CRUD complet sur projects
CREATE POLICY "Authenticated users can do everything on projects"
  ON public.projects FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Admin : CRUD complet sur before_after
CREATE POLICY "Authenticated users can do everything on before_after"
  ON public.before_after FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- 6. Storage bucket
-- Exécuter ceci dans le SQL Editor :
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-images', 'project-images', true)
ON CONFLICT (id) DO NOTHING;

-- Policy storage : lecture publique
CREATE POLICY "Public read access on project-images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'project-images');

-- Policy storage : upload admin
CREATE POLICY "Authenticated upload on project-images"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'project-images');

-- Policy storage : delete admin
CREATE POLICY "Authenticated delete on project-images"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'project-images');

-- Policy storage : update admin
CREATE POLICY "Authenticated update on project-images"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'project-images')
  WITH CHECK (bucket_id = 'project-images');
