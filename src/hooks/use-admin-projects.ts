import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import type { ProjectRow, ProjectInsert, ProjectUpdate, BeforeAfterRow, BeforeAfterInsert } from "@/types/supabase";

export interface AdminProjectWithBeforeAfter extends ProjectRow {
  before_after: BeforeAfterRow[];
}

async function fetchAllProjects(): Promise<AdminProjectWithBeforeAfter[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*, before_after(*)")
    .order("display_order", { ascending: true });

  if (error) throw error;
  return (data ?? []).map((p) => ({
    ...p,
    before_after: (p.before_after ?? []).sort(
      (a: BeforeAfterRow, b: BeforeAfterRow) => a.display_order - b.display_order
    ),
  }));
}

async function fetchProjectById(id: string): Promise<AdminProjectWithBeforeAfter | null> {
  const { data, error } = await supabase
    .from("projects")
    .select("*, before_after(*)")
    .eq("id", id)
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

async function createProject(project: ProjectInsert): Promise<ProjectRow> {
  const { data, error } = await supabase
    .from("projects")
    .insert(project)
    .select()
    .single();

  if (error) throw error;
  return data;
}

async function updateProject({ id, ...updates }: ProjectUpdate & { id: string }): Promise<ProjectRow> {
  const { data, error } = await supabase
    .from("projects")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

async function deleteProject(id: string): Promise<void> {
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) throw error;
}

// Before/After CRUD
async function upsertBeforeAfter(projectId: string, items: BeforeAfterInsert[]): Promise<void> {
  // Delete existing
  const { error: deleteError } = await supabase
    .from("before_after")
    .delete()
    .eq("project_id", projectId);
  if (deleteError) throw deleteError;

  // Insert new ones
  if (items.length > 0) {
    const { error: insertError } = await supabase
      .from("before_after")
      .insert(items.map((item, index) => ({
        ...item,
        project_id: projectId,
        display_order: index,
      })));
    if (insertError) throw insertError;
  }
}

export function useAdminProjects() {
  return useQuery({
    queryKey: ["admin", "projects"],
    queryFn: fetchAllProjects,
  });
}

export function useAdminProject(id: string) {
  return useQuery({
    queryKey: ["admin", "projects", id],
    queryFn: () => fetchProjectById(id),
    enabled: !!id,
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}

export function useUpdateProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}

export function useDeleteProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}

export function useUpsertBeforeAfter() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ projectId, items }: { projectId: string; items: BeforeAfterInsert[] }) =>
      upsertBeforeAfter(projectId, items),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "projects"] });
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}
