import DashboardSidebar from "@/components/DashboardSidebar";
import { BarChart3, Award, Zap, BookOpen } from "lucide-react";

const stats = [
  { icon: BookOpen, label: "Завершённые сессии", value: "12", color: "text-accent" },
  { icon: BarChart3, label: "Средний балл", value: "87%", color: "text-success" },
  { icon: Award, label: "Сертификаты", value: "3", color: "text-warning" },
  { icon: Zap, label: "Осталось токенов", value: "142", color: "text-accent" },
];

const recentSessions = [
  { title: "React Fundamentals", score: 92, date: "8 фев 2026" },
  { title: "System Design Basics", score: 78, date: "5 фев 2026" },
  { title: "TypeScript Advanced", score: 88, date: "2 фев 2026" },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-heading font-bold mb-1">С возвращением, Алекс</h1>
          <p className="text-sm text-muted-foreground mb-8">Ваш прогресс обучения</p>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-5">
                <div className="flex items-center gap-3 mb-2">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
                <p className="text-2xl font-heading font-bold stat-mono">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Recent Sessions */}
          <h2 className="text-lg font-semibold mb-4">Последние сессии</h2>
          <div className="space-y-3">
            {recentSessions.map((session) => (
              <div
                key={session.title}
                className="glass-card-hover p-4 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-medium text-sm">{session.title}</h3>
                  <p className="text-xs text-muted-foreground">{session.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`stat-mono text-sm font-semibold ${
                      session.score >= 85 ? "text-success" : "text-warning"
                    }`}
                  >
                    {session.score}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;