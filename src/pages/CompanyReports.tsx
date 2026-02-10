import CompanySidebar from "@/components/CompanySidebar";
import { BarChart3, TrendingUp, Users, Award } from "lucide-react";

const topPerformers = [
  { name: "Maria Garcia", vacancy: "Backend Engineer", score: 94 },
  { name: "John Doe", vacancy: "Senior React Developer", score: 92 },
  { name: "Sam Wilson", vacancy: "Senior React Developer", score: 85 },
];

const vacancyStats = [
  { title: "Senior React Developer", candidates: 12, avgScore: 85, completed: 10 },
  { title: "Backend Engineer", candidates: 8, avgScore: 82, completed: 6 },
  { title: "Full Stack Developer", candidates: 15, avgScore: 78, completed: 9 },
  { title: "DevOps Engineer", candidates: 5, avgScore: 76, completed: 3 },
];

const CompanyReports = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <CompanySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-heading font-bold mb-1">Reports</h1>
          <p className="text-sm text-muted-foreground mb-8">Analytics and insights across your hiring pipeline</p>

          {/* Overview Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Users, label: "Total Interviews", value: "28", color: "text-accent" },
              { icon: BarChart3, label: "Avg Score", value: "82%", color: "text-success" },
              { icon: TrendingUp, label: "Hire Rate", value: "35%", color: "text-warning" },
              { icon: Award, label: "Top Score", value: "94%", color: "text-accent" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-5">
                <div className="flex items-center gap-3 mb-2">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
                <p className="text-2xl font-heading font-bold stat-mono">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Top Performers */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Top Performers</h2>
              <div className="space-y-3">
                {topPerformers.map((p, i) => (
                  <div key={i} className="glass-card p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="stat-mono text-xs text-muted-foreground w-5">#{i + 1}</span>
                      <div>
                        <p className="text-sm font-medium">{p.name}</p>
                        <p className="text-xs text-muted-foreground">{p.vacancy}</p>
                      </div>
                    </div>
                    <span className="stat-mono text-sm font-semibold text-success">{p.score}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Per Vacancy */}
            <div>
              <h2 className="text-lg font-semibold mb-4">By Vacancy</h2>
              <div className="space-y-3">
                {vacancyStats.map((v) => (
                  <div key={v.title} className="glass-card p-4">
                    <h3 className="text-sm font-medium mb-2">{v.title}</h3>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>{v.candidates} candidates</span>
                      <span>{v.completed} completed</span>
                      <span className="stat-mono font-semibold text-foreground">Avg {v.avgScore}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyReports;
