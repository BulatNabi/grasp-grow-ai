import DashboardSidebar from "@/components/DashboardSidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, FileText } from "lucide-react";

const sessions = [
  { title: "React Fundamentals", date: "Feb 8, 2026", duration: "25 min", score: 92, status: "completed" },
  { title: "System Design Basics", date: "Feb 5, 2026", duration: "32 min", score: 78, status: "completed" },
  { title: "TypeScript Advanced", date: "Feb 2, 2026", duration: "28 min", score: 88, status: "completed" },
  { title: "Node.js Patterns", date: "Jan 28, 2026", duration: "20 min", score: 95, status: "completed" },
  { title: "CSS Architecture", date: "Jan 25, 2026", duration: "18 min", score: 72, status: "completed" },
  { title: "REST API Design", date: "Jan 20, 2026", duration: "30 min", score: 85, status: "completed" },
];

const DashboardSessions = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-heading font-bold mb-1">Sessions</h1>
          <p className="text-sm text-muted-foreground mb-8">Review your past interview sessions</p>

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
