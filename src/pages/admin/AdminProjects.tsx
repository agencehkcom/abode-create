import { Link } from "react-router-dom";
import { useAdminProjects, useDeleteProject, useUpdateProject } from "@/hooks/use-admin-projects";
import { ProjectsTable } from "@/components/admin/ProjectsTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { toast } from "sonner";

export default function AdminProjects() {
  const { data: projects, isLoading } = useAdminProjects();
  const deleteProject = useDeleteProject();
  const updateProject = useUpdateProject();

  const handleDelete = async (id: string) => {
    try {
      await deleteProject.mutateAsync(id);
      toast.success("Projet supprimé");
    } catch {
      toast.error("Erreur lors de la suppression");
    }
  };

  const handleTogglePublish = async (id: string, published: boolean) => {
    try {
      await updateProject.mutateAsync({ id, is_published: published });
      toast.success(published ? "Projet publié" : "Projet dépublié");
    } catch {
      toast.error("Erreur lors de la mise à jour");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Projets</h1>
          <p className="text-muted-foreground">{projects?.length ?? 0} projets au total</p>
        </div>
        <Button asChild className="gradient-accent text-black font-semibold">
          <Link to="/admin/projects/new">
            <Plus className="h-4 w-4 mr-2" />
            Nouveau projet
          </Link>
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary" />
        </div>
      ) : projects && projects.length > 0 ? (
        <div className="border border-border rounded-xl overflow-hidden">
          <ProjectsTable
            projects={projects}
            onDelete={handleDelete}
            onTogglePublish={handleTogglePublish}
            deleting={deleteProject.isPending}
          />
        </div>
      ) : (
        <div className="text-center py-12 bg-muted/30 rounded-xl border border-border">
          <p className="text-muted-foreground mb-4">Aucun projet pour le moment</p>
          <Button asChild className="gradient-accent text-black font-semibold">
            <Link to="/admin/projects/new">
              <Plus className="h-4 w-4 mr-2" />
              Créer votre premier projet
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
