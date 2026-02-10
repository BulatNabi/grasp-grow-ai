import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-heading font-bold gradient-text mb-3">mocki</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered interviews and training that adapt to every candidate.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent transition-colors">Features</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">For Companies</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">For Individuals</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent transition-colors">Documentation</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">API Reference</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/20 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} mocki. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
