import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Database,
  Briefcase,
  Users,
  History,
  BarChart3,
  Settings,
  Coins,
  LogOut,
  Building2,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/company" },
  { icon: Database, label: "Knowledge Base", path: "/company/knowledge-base" },
  { icon: Briefcase, label: "Vacancies", path: "/company/vacancies" },
  { icon: Users, label: "Candidates", path: "/company/candidates" },
  { icon: History, label: "Sessions", path: "/company/sessions" },
  { icon: BarChart3, label: "Reports", path: "/company/reports" },
  { icon: Coins, label: "Tokens", path: "/company/tokens" },
  { icon: Settings, label: "Settings", path: "/company/settings" },
];

const CompanySidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 border-r border-border/30 bg-card/40 backdrop-blur-xl min-h-screen p-4 hidden lg:flex flex-col">
      <Link to="/" className="flex items-center gap-2 mb-2 px-3">
        <span className="text-xl font-heading font-bold gradient-text">mocki</span>
      </Link>
      <div className="flex items-center gap-2 px-3 mb-8">
        <Building2 className="w-3 h-3 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">Business</span>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                active
                  ? "bg-primary/10 text-accent border border-primary/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-destructive transition-colors">
        <LogOut className="w-4 h-4" />
        Log out
      </button>
    </aside>
  );
};

export default CompanySidebar;
