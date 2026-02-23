import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import type { ProjectRow, BeforeAfterRow } from "@/types/supabase";

export interface ProjectWithBeforeAfter extends ProjectRow {
  before_after: BeforeAfterRow[];
}

async function fetchPublishedProjects(): Promise<ProjectWithBeforeAfter[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*, before_after(*)")
    .eq("is_published", true)
    .order("display_order", { ascending: true });

  if (error) throw error;
  return (data ?? []).map((p) => ({
    ...p,
    before_after: (p.before_after ?? []).sort(
      (a: BeforeAfterRow, b: BeforeAfterRow) => a.display_order - b.display_order
    ),
  }));
}

async function fetchProjectBySlug(slug: string): Promise<ProjectWithBeforeAfter | null> {
  const { data, error } = await supabase
    .from("projects")
    .select("*, before_after(*)")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null;
    throw error;
  }
  return {
    ...data,
    before_after: (data.before_after ?? []).sort(
      (a: BeforeAfterRow, b: BeforeAfterRow) => a.display_order - b.display_order
    ),
  };
}

export function useProjects() {
  return useQuery({
    queryKey: ["projects", "published"],
    queryFn: fetchPublishedProjects,
  });
}

export function useProject(slug: string) {
  return useQuery({
    queryKey: ["projects", "published", slug],
    queryFn: () => fetchProjectBySlug(slug),
    enabled: !!slug,
  });
}
