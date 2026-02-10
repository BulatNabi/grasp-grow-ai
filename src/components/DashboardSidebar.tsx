import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  History,
  Award,
  Settings,
  Coins,
  LogOut,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: BookOpen, label: "My Courses", path: "/dashboard/courses" },
  { icon: History, label: "Sessions", path: "/dashboard/sessions" },
  { icon: Award, label: "Certificates", path: "/dashboard/certificates" },
  { icon: Coins, label: "Tokens", path: "/dashboard/tokens" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 border-r border-border/30 bg-card/40 backdrop-blur-xl min-h-screen p-4 hidden lg:flex flex-col">
      <Link to="/" className="text-xl font-heading font-bold gradient-text mb-8 px-3">
        mocki
      </Link>

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

export default DashboardSidebar;
