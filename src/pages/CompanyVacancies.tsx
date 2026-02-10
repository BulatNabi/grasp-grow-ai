import CompanySidebar from "@/components/CompanySidebar";
import { Plus, Copy, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const vacancies = [
  { title: "Senior React Developer", candidates: 12, passing: 80, status: "active", topics: ["React", "TypeScript", "System Design"], created: "Feb 5, 2026" },
  { title: "Backend Engineer (Node.js)", candidates: 8, passing: 75, status: "active", topics: ["Node.js", "PostgreSQL", "REST APIs"], created: "Feb 1, 2026" },
  { title: "Full Stack Developer", candidates: 15, passing: 70, status: "active", topics: ["React", "Node.js", "DevOps"], created: "Jan 28, 2026" },
  { title: "DevOps Engineer", candidates: 5, passing: 85, status: "paused", topics: ["AWS", "Docker", "CI/CD"], created: "Jan 20, 2026" },
];

const CompanyVacancies = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <CompanySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-heading font-bold mb-1">Vacancies</h1>
              <p className="text-sm text-muted-foreground">Manage your open positions</p>
            </div>
            <Button variant="gradient" size="sm"><Plus className="w-3 h-3 mr-1" />Create Vacancy</Button>
          </div>

          <div className="space-y-4">
            {vacancies.map((vacancy) => (
              <div key={vacancy.title} className="glass-card-hover p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{vacancy.title}</h3>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          vacancy.status === "active"
                            ? "border-success/30 text-success"
                            : "border-muted-foreground/30 text-muted-foreground"
                        }`}
                      >
                        {vacancy.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Created {vacancy.created} · Passing threshold: {vacancy.passing}%</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm"><Copy className="w-3 h-3 mr-1" />Copy Link</Button>
                    <Button variant="hero-outline" size="sm"><ExternalLink className="w-3 h-3 mr-1" />View</Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {vacancy.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">{topic}</Badge>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="w-3 h-3" />
                  <span>{vacancy.candidates} candidates</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyVacancies;
