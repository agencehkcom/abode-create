import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/projets/${project.slug}`}>
      <Card className="group overflow-hidden border-0 shadow-medium hover:shadow-large transition-smooth cursor-pointer bg-card">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-secondary text-secondary-foreground">
              {project.category}
            </Badge>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>{project.lieu}</span>
            <span>•</span>
            <span>{project.surface}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {project.excerpt}
          </p>
          <div className="flex items-center gap-2 text-secondary font-medium text-sm group-hover:gap-3 transition-smooth">
            Voir le projet
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
};
