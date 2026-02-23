import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LayoutDashboard, FolderOpen, Plus, ExternalLink } from "lucide-react";

const navItems = [
  { label: "Tableau de bord", href: "/admin", icon: LayoutDashboard },
  { label: "Projets", href: "/admin/projects", icon: FolderOpen },
  { label: "Nouveau projet", href: "/admin/projects/new", icon: Plus },
];

interface AdminSidebarProps {
  open: boolean;
}

export function AdminSidebar({ open }: AdminSidebarProps) {
  const location = useLocation();

  if (!open) return null;

  return (
    <aside className="w-64 border-r border-border bg-muted/30 flex flex-col min-h-0">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ExternalLink className="h-4 w-4" />
          Voir le site
        </Link>
      </div>
      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href ||
            (item.href !== "/admin" && location.pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-secondary text-black font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
