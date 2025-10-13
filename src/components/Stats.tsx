import { Building, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "10 ans",
    label: "d'expérience",
  },
  {
    icon: Users,
    value: "500+",
    label: "clients accompagnés",
  },
  {
    icon: Building,
    value: "2",
    label: "agences (Gard & Vendée)",
  },
  {
    icon: Award,
    value: "100%",
    label: "de projets sur-mesure",
  },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/10 mb-4">
                <stat.icon className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
