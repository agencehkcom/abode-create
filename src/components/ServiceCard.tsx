import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  FileSearch, 
  Building, 
  Sofa, 
  HardHat, 
  Shield,
  LucideIcon
} from "lucide-react";
import { Service } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Search,
  FileSearch,
  Building,
  Sofa,
  HardHat,
  Shield,
};

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = iconMap[service.icon] || Search;

  return (
    <Card className="group p-8 border-border shadow-soft hover:shadow-medium transition-smooth bg-card">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-smooth">
          <Icon className="h-6 w-6 text-secondary" />
        </div>
        <h3 className="text-xl font-semibold">{service.title}</h3>
      </div>
      <p className="text-muted-foreground mb-6 line-clamp-3">
        {service.description}
      </p>
      <Button asChild variant="outline" className="w-full group-hover:border-secondary group-hover:text-secondary transition-smooth">
        <Link to={`/services#${service.slug}`}>
          En savoir plus
        </Link>
      </Button>
    </Card>
  );
};
