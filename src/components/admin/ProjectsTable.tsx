import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Eye, EyeOff } from "lucide-react";
import { DeleteDialog } from "./DeleteDialog";
import type { AdminProjectWithBeforeAfter } from "@/hooks/use-admin-projects";

interface ProjectsTableProps {
  projects: AdminProjectWithBeforeAfter[];
  onDelete: (id: string) => void;
  onTogglePublish: (id: string, published: boolean) => void;
  deleting?: boolean;
}

export function ProjectsTable({ projects, onDelete, onTogglePublish, deleting }: ProjectsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-16">Ordre</TableHead>
          <TableHead className="w-20">Image</TableHead>
          <TableHead>Titre</TableHead>
          <TableHead>Catégorie</TableHead>
          <TableHead>Lieu</TableHead>
          <TableHead>Statut</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell className="font-mono text-muted-foreground">{project.display_order}</TableCell>
            <TableCell>
              <img
                src={project.cover_image}
                alt={project.title}
                className="w-16 h-12 object-cover rounded"
              />
            </TableCell>
            <TableCell className="font-medium">{project.title}</TableCell>
            <TableCell>
              <Badge variant="outline">{project.category}</Badge>
            </TableCell>
            <TableCell className="text-muted-foreground">{project.lieu}</TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onTogglePublish(project.id, !project.is_published)}
                className={project.is_published ? "text-green-600" : "text-muted-foreground"}
              >
                {project.is_published ? (
                  <>
                    <Eye className="h-4 w-4 mr-1" />
                    Publié
                  </>
                ) : (
                  <>
                    <EyeOff className="h-4 w-4 mr-1" />
                    Brouillon
                  </>
                )}
              </Button>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link to={`/admin/projects/${project.id}/edit`}>
                    <Pencil className="h-4 w-4 mr-1" />
                    Éditer
                  </Link>
                </Button>
                <DeleteDialog
                  title={`Supprimer "${project.title}" ?`}
                  description="Cette action est irréversible. Le projet et toutes ses images associées seront supprimés."
                  onConfirm={() => onDelete(project.id)}
                  loading={deleting}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
