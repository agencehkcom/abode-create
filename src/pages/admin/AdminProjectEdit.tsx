import { useParams, useNavigate } from "react-router-dom";
import { useAdminProject, useCreateProject, useUpdateProject, useUpsertBeforeAfter } from "@/hooks/use-admin-projects";
import { ProjectForm } from "@/components/admin/ProjectForm";
import type { ProjectFormValues } from "@/lib/validators";
import type { BeforeAfterPair } from "@/components/admin/BeforeAfterManager";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function AdminProjectEdit() {
  const { id } = useParams<{ id: string }>();
  const isNew = !id;
  const navigate = useNavigate();

  const { data: project, isLoading } = useAdminProject(id ?? "");
  const createProject = useCreateProject();
  const updateProject = useUpdateProject();
  const upsertBeforeAfter = useUpsertBeforeAfter();

  const handleSubmit = async (data: ProjectFormValues, pairs: BeforeAfterPair[]) => {
    try {
      if (isNew) {
        const created = await createProject.mutateAsync(data);
        if (pairs.length > 0) {
          await upsertBeforeAfter.mutateAsync({
            projectId: created.id,
            items: pairs.map((p, i) => ({
              project_id: created.id,
              before_image: p.before_image,
              after_image: p.after_image,
              label: p.label || null,
              display_order: i,
            })),
          });
        }
        toast.success("Projet créé");
        navigate(`/admin/projects/${created.id}/edit`);
      } else {
        await updateProject.mutateAsync({ id: id!, ...data });
        await upsertBeforeAfter.mutateAsync({
          projectId: id!,
          items: pairs.map((p, i) => ({
            project_id: id!,
            before_image: p.before_image,
            after_image: p.after_image,
            label: p.label || null,
            display_order: i,
          })),
        });
        toast.success("Projet mis à jour");
      }
    } catch {
      toast.error("Erreur lors de l'enregistrement");
    }
  };

  if (!isNew && isLoading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary" />
      </div>
    );
  }

  const defaultValues = project
    ? {
        title: project.title,
        slug: project.slug,
        category: project.category,
        cover_image: project.cover_image,
        images: project.images,
        lieu: project.lieu,
        surface: project.surface,
        budget: project.budget,
        annee: project.annee,
        mission: project.mission,
        excerpt: project.excerpt,
        contexte: project.contexte,
        contraintes: project.contraintes,
        solution: project.solution,
        resultats: project.resultats,
        display_order: project.display_order,
        is_published: project.is_published,
      }
    : undefined;

  const existingPairs: BeforeAfterPair[] = project?.before_after?.map((ba) => ({
    before_image: ba.before_image,
    after_image: ba.after_image,
    label: ba.label ?? "",
  })) ?? [];

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link to="/admin/projects">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">
            {isNew ? "Nouveau projet" : `Éditer : ${project?.title}`}
          </h1>
          {!isNew && project?.slug && (
            <p className="text-sm text-muted-foreground">
              /projets/{project.slug}
            </p>
          )}
        </div>
      </div>

      <ProjectForm
        defaultValues={defaultValues}
        beforeAfterPairs={existingPairs}
        onSubmit={handleSubmit}
        loading={createProject.isPending || updateProject.isPending}
      />
    </div>
  );
}
