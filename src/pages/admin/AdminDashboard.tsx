import { Link } from "react-router-dom";
import { useAdminProjects } from "@/hooks/use-admin-projects";
import { Button } from "@/components/ui/button";
import { FolderOpen, Eye, EyeOff, Plus, ArrowRight } from "lucide-react";

export default function AdminDashboard() {
  const { data: projects, isLoading } = useAdminProjects();

  const published = projects?.filter((p) => p.is_published).length ?? 0;
  const drafts = projects?.filter((p) => !p.is_published).length ?? 0;
  const total = projects?.length ?? 0;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tableau de bord</h1>
          <p className="text-muted-foreground">Vue d'ensemble de vos projets</p>
        </div>
        <Button asChild className="gradient-accent text-black font-semibold">
          <Link to="/admin/projects/new">
            <Plus className="h-4 w-4 mr-2" />
            Nouveau projet
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted/30 rounded-xl border border-border p-6">
          <div className="flex items-center gap-3 mb-2">
            <FolderOpen className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Total projets</span>
          </div>
          <p className="text-3xl font-bold">{isLoading ? "-" : total}</p>
        </div>
        <div className="bg-muted/30 rounded-xl border border-border p-6">
          <div className="flex items-center gap-3 mb-2">
            <Eye className="h-5 w-5 text-green-600" />
            <span className="text-sm text-muted-foreground">Publiés</span>
          </div>
          <p className="text-3xl font-bold text-green-600">{isLoading ? "-" : published}</p>
        </div>
        <div className="bg-muted/30 rounded-xl border border-border p-6">
          <div className="flex items-center gap-3 mb-2">
            <EyeOff className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Brouillons</span>
          </div>
          <p className="text-3xl font-bold">{isLoading ? "-" : drafts}</p>
        </div>
      </div>

      {/* Recent projects */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Derniers projets</h2>
          <Button asChild variant="ghost" size="sm">
            <Link to="/admin/projects">
              Tous les projets
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects?.slice(0, 6).map((project) => (
              <Link
                key={project.id}
                to={`/admin/projects/${project.id}/edit`}
                className="group border border-border rounded-xl overflow-hidden hover:border-secondary/50 transition-colors"
              >
                <img
                  src={project.cover_image}
                  alt={project.title}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium group-hover:text-secondary transition-colors">
                      {project.title}
                    </h3>
                    {!project.is_published && (
                      <span className="text-xs bg-muted px-2 py-0.5 rounded">Brouillon</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
