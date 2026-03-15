import DashboardSidebar from "@/components/DashboardSidebar";
import { Coins, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const tokenHistory = [
  { action: "Сессия: React Fundamentals", tokens: -5, date: "8 фев 2026", balance: 142 },
  { action: "Сессия: System Design Basics", tokens: -5, date: "5 фев 2026", balance: 147 },
  { action: "Покупка токенов — Про", tokens: +100, date: "1 фев 2026", balance: 152 },
  { action: "Сессия: TypeScript Advanced", tokens: -5, date: "28 янв 2026", balance: 52 },
  { action: "Приветственный бонус", tokens: +50, date: "20 янв 2026", balance: 57 },
];

const packages = [
  { name: "Стартовый", tokens: 50, price: "$9.99", popular: false },
  { name: "Про", tokens: 150, price: "$24.99", popular: true },
  { name: "Корпоративный", tokens: 500, price: "$69.99", popular: false },
];

const DashboardTokens = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-heading font-bold mb-1">Токены</h1>
          <p className="text-sm text-muted-foreground mb-8">Управляйте балансом токенов</p>

          <div className="glass-card p-6 mb-8 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Coins className="w-7 h-7 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Текущий баланс</p>
              <p className="stat-mono text-3xl font-bold">142</p>
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-4">Купить токены</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`glass-card-hover p-5 text-center ${pkg.popular ? "gradient-border" : ""}`}>
                {pkg.popular && (
                  <span className="text-xs font-semibold text-accent mb-2 block">Популярный</span>
                )}
                <h3 className="font-semibold mb-1">{pkg.name}</h3>
                <p className="stat-mono text-2xl font-bold mb-1">{pkg.tokens}</p>
                <p className="text-xs text-muted-foreground mb-4">токенов</p>
                <p className="text-lg font-semibold mb-4">{pkg.price}</p>
                <Button variant={pkg.popular ? "gradient" : "hero-outline"} size="sm" className="w-full">
                  <Zap className="w-3 h-3 mr-1" />Купить
                </Button>
              </div>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-4">История транзакций</h2>
          <div className="space-y-2">
            {tokenHistory.map((item, i) => (
              <div key={i} className="glass-card p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{item.action}</p>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
                <div className="text-right">
                  <p className={`stat-mono text-sm font-semibold ${item.tokens > 0 ? "text-success" : "text-muted-foreground"}`}>
                    {item.tokens > 0 ? "+" : ""}{item.tokens}
                  </p>
                  <p className="text-xs text-muted-foreground">Бал: {item.balance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardTokens;