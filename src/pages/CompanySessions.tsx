import CompanySidebar from "@/components/CompanySidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, FileText } from "lucide-react";

const sessions = [
  { candidate: "Иван Петров", vacancy: "Senior React Developer", date: "8 фев 2026", duration: "28 мин", score: 92, recommendation: "нанять" },
  { candidate: "Анна Смирнова", vacancy: "Senior React Developer", date: "7 фев 2026", duration: "32 мин", score: 78, recommendation: "рассмотреть" },
  { candidate: "Мария Гарсия", vacancy: "Backend Engineer", date: "6 фев 2026", duration: "25 мин", score: 94, recommendation: "нанять" },
  { candidate: "Сергей Вилсон", vacancy: "Senior React Developer", date: "5 фев 2026", duration: "30 мин", score: 85, recommendation: "нанять" },
  { candidate: "Том Ли", vacancy: "Full Stack Developer", date: "4 фев 2026", duration: "35 мин", score: 62, recommendation: "отказать" },
];

const recColor: Record<string, string> = {
  "нанять": "border-success/30 text-success",
  "рассмотреть": "border-warning/30 text-warning",
  "отказать": "border-destructive/30 text-destructive",
};

const CompanySessions = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <CompanySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-heading font-bold mb-1">Сессии</h1>
          <p className="text-sm text-muted-foreground mb-8">Обзор завершённых интервью-сессий</p>

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