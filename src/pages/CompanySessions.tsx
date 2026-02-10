import CompanySidebar from "@/components/CompanySidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, FileText } from "lucide-react";

const sessions = [
  { candidate: "John Doe", vacancy: "Senior React Developer", date: "Feb 8, 2026", duration: "28 min", score: 92, recommendation: "hire" },
  { candidate: "Jane Smith", vacancy: "Senior React Developer", date: "Feb 7, 2026", duration: "32 min", score: 78, recommendation: "consider" },
  { candidate: "Maria Garcia", vacancy: "Backend Engineer", date: "Feb 6, 2026", duration: "25 min", score: 94, recommendation: "hire" },
  { candidate: "Sam Wilson", vacancy: "Senior React Developer", date: "Feb 5, 2026", duration: "30 min", score: 85, recommendation: "hire" },
  { candidate: "Tom Lee", vacancy: "Full Stack Developer", date: "Feb 4, 2026", duration: "35 min", score: 62, recommendation: "reject" },
];

const recColor: Record<string, string> = {
  hire: "border-success/30 text-success",
  consider: "border-warning/30 text-warning",
  reject: "border-destructive/30 text-destructive",
};

const CompanySessions = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <CompanySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-heading font-bold mb-1">Sessions</h1>
          <p className="text-sm text-muted-foreground mb-8">Review completed interview sessions</p>

          <div className="space-y-3">
            {sessions.map((s, i) => (
              <div key={i} className="glass-card-hover p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{s.candidate}</h3>
                  <p className="text-xs text-muted-foreground">{s.vacancy}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                    <span>{s.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{s.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`stat-mono text-sm font-semibold ${s.score >= 85 ? "text-success" : s.score >= 70 ? "text-warning" : "text-destructive"}`}>
                    {s.score}%
                  </span>
                  <Badge variant="outline" className={`text-xs capitalize ${recColor[s.recommendation]}`}>
                    {s.recommendation}
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

export default CompanySessions;
