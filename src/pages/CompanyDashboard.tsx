import CompanySidebar from "@/components/CompanySidebar";
import { Users, Zap, BarChart3, Database, Plus, Upload, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, label: "Total Candidates", value: "48", color: "text-accent" },
  { icon: Zap, label: "Active Sessions", value: "5", color: "text-success" },
  { icon: BarChart3, label: "Avg Score", value: "82%", color: "text-warning" },
  { icon: Database, label: "Knowledge Base", value: "24 docs", color: "text-accent" },
];

const recentActivity = [
  { text: "John Doe completed Senior React Developer interview", time: "2 hours ago", type: "session" },
  { text: "New candidate invited: jane.smith@company.com", time: "4 hours ago", type: "invite" },
  { text: "Knowledge base updated: API Design Guidelines.pdf", time: "Yesterday", type: "upload" },
  { text: "Maria Garcia scored 94% on Backend Engineer assessment", time: "Yesterday", type: "session" },
  { text: "New vacancy created: Full Stack Developer", time: "2 days ago", type: "vacancy" },
];

const CompanyDashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <CompanySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-heading font-bold mb-1">Company Dashboard</h1>
              <p className="text-sm text-muted-foreground">Overview of your hiring pipeline</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Button variant="gradient" size="sm"><Plus className="w-3 h-3 mr-1" />Create Vacancy</Button>
            <Button variant="hero-outline" size="sm"><UserPlus className="w-3 h-3 mr-1" />Invite Candidate</Button>
            <Button variant="hero-outline" size="sm"><Upload className="w-3 h-3 mr-1" />Upload Documents</Button>
          </div>

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

          {/* Recent Activity */}
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
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
