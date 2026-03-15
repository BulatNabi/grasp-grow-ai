import CompanySidebar from "@/components/CompanySidebar";
import { Users, Zap, BarChart3, Database, Plus, Upload, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, label: "Всего кандидатов", value: "48", color: "text-accent" },
  { icon: Zap, label: "Активные сессии", value: "5", color: "text-success" },
  { icon: BarChart3, label: "Средний балл", value: "82%", color: "text-warning" },
  { icon: Database, label: "База знаний", value: "24 док.", color: "text-accent" },
];

const recentActivity = [
  { text: "Иван Петров завершил интервью на позицию Senior React Developer", time: "2 часа назад", type: "session" },
  { text: "Приглашён новый кандидат: jane.smith@company.com", time: "4 часа назад", type: "invite" },
  { text: "База знаний обновлена: API Design Guidelines.pdf", time: "Вчера", type: "upload" },
  { text: "Мария Гарсия набрала 94% на оценке Backend Engineer", time: "Вчера", type: "session" },
  { text: "Создана новая вакансия: Full Stack Developer", time: "2 дня назад", type: "vacancy" },
];

const CompanyDashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <CompanySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-heading font-bold mb-1">Панель компании</h1>
              <p className="text-sm text-muted-foreground">Обзор процесса найма</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Button variant="gradient" size="sm"><Plus className="w-3 h-3 mr-1" />Создать вакансию</Button>
            <Button variant="hero-outline" size="sm"><UserPlus className="w-3 h-3 mr-1" />Пригласить кандидата</Button>
            <Button variant="hero-outline" size="sm"><Upload className="w-3 h-3 mr-1" />Загрузить документы</Button>
          </div>

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

          <h2 className="text-lg font-semibold mb-4">Последняя активность</h2>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="glass-card p-4 flex items-center justify-between">
                <p className="text-sm">{item.text}</p>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyDashboard;