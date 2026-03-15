import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-heading font-bold gradient-text mb-3">mocki</h3>
            <p className="text-sm text-muted-foreground">
              ИИ-интервью и обучение, адаптирующиеся под каждого кандидата.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Продукт</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent transition-colors">Возможности</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Цены</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Для компаний</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Для частных лиц</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Ресурсы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent transition-colors">Документация</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">API</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Блог</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Правовая информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Условия использования</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/20 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} mocki. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;