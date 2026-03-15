import DashboardSidebar from "@/components/DashboardSidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, FileText } from "lucide-react";

const sessions = [
  { title: "React Fundamentals", date: "8 фев 2026", duration: "25 мин", score: 92, status: "завершено" },
  { title: "System Design Basics", date: "5 фев 2026", duration: "32 мин", score: 78, status: "завершено" },
  { title: "TypeScript Advanced", date: "2 фев 2026", duration: "28 мин", score: 88, status: "завершено" },
  { title: "Node.js Patterns", date: "28 янв 2026", duration: "20 мин", score: 95, status: "завершено" },
  { title: "CSS Architecture", date: "25 янв 2026", duration: "18 мин", score: 72, status: "завершено" },
  { title: "REST API Design", date: "20 янв 2026", duration: "30 мин", score: 85, status: "завершено" },
];

const DashboardSessions = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-heading font-bold mb-1">Сессии</h1>
          <p className="text-sm text-muted-foreground mb-8">История ваших интервью-сессий</p>

          <div className="space-y-3">
            {sessions.map((session, i) => (
              <div key={i} className="glass-card-hover p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-medium mb-1">{session.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{session.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{session.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`stat-mono text-sm font-semibold ${session.score >= 85 ? "text-success" : "text-warning"}`}>
                    {session.score}%
                  </span>
                  <Badge variant="outline" className="border-success/30 text-success text-xs">
                    {session.status}
                  </Badge>
                  <Button variant="ghost" size="sm"><FileText className="w-4 h-4" /></Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardSessions;