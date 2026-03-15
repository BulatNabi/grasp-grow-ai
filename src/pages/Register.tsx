import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Building2, User } from "lucide-react";
import Navbar from "@/components/Navbar";

const Register = () => {
  const [userType, setUserType] = useState<"individual" | "company" | null>(null);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <div className="floating-orb w-96 h-96 -top-48 -left-48" />
      <div className="floating-orb w-72 h-72 bottom-0 -right-36 opacity-10" />

      <div className="flex items-center justify-center min-h-screen px-4 pt-16">
        <div className="glass-card p-8 w-full max-w-lg">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-heading font-bold mb-2">Создайте аккаунт</h1>
            <p className="text-sm text-muted-foreground">Выберите, как вы хотите использовать mocki</p>
          </div>

          {!userType ? (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setUserType("individual")}
                className="glass-card-hover p-6 text-center"
              >
                <User className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Частное лицо</h3>
                <p className="text-xs text-muted-foreground">Учитесь и получайте сертификаты</p>
              </button>
              <button
                onClick={() => setUserType("company")}
                className="glass-card-hover p-6 text-center"
              >
                <Building2 className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Компания</h3>
                <p className="text-xs text-muted-foreground">Нанимайте и обучайте команды</p>
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => setUserType(null)}
                  className="text-xs text-accent hover:underline"
                >
                  ← Изменить тип
                </button>
                <span className="text-xs text-muted-foreground">
                  {userType === "individual" ? "Личный аккаунт" : "Корпоративный аккаунт"}
                </span>
              </div>

              {userType === "company" && (
                <div className="space-y-2">
                  <Label htmlFor="company">Название компании</Label>
                  <Input
                    id="company"
                    placeholder="ООО «Пример»"
                    className="bg-secondary/50 border-border/40 focus:border-primary rounded-xl"
                  />
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first">Имя</Label>
                  <Input
                    id="first"
                    placeholder="Иван"
                    className="bg-secondary/50 border-border/40 focus:border-primary rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last">Фамилия</Label>
                  <Input
                    id="last"
                    placeholder="Иванов"
                    className="bg-secondary/50 border-border/40 focus:border-primary rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-secondary/50 border-border/40 focus:border-primary rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-secondary/50 border-border/40 focus:border-primary rounded-xl"
                />
              </div>

              <Button variant="gradient" className="w-full rounded-xl" type="submit">
                Создать аккаунт
              </Button>
            </form>
          )}

          <p className="text-center text-sm text-muted-foreground mt-6">
            Уже есть аккаунт?{" "}
            <Link to="/login" className="text-accent hover:underline">
              Войти
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;