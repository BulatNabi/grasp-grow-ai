import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-xl">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-xl font-heading font-bold gradient-text">
          mocki
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {isLanding && (
            <>
              <a href="#features" className="text-sm text-muted-foreground hover:text-accent transition-colors">Features</a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-accent transition-colors">Pricing</a>
            </>
          )}
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button variant="gradient" size="sm" className="rounded-lg" asChild>
            <Link to="/register">Get Started</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur-xl px-4 py-4 space-y-3">
          {isLanding && (
            <>
              <a href="#features" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>Features</a>
              <a href="#pricing" className="block text-sm text-muted-foreground" onClick={() => setOpen(false)}>Pricing</a>
            </>
          )}
          <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
            <Link to="/login" onClick={() => setOpen(false)}>Log in</Link>
          </Button>
          <Button variant="gradient" size="sm" className="w-full" asChild>
            <Link to="/register" onClick={() => setOpen(false)}>Get Started</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
