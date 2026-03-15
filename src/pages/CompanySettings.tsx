import CompanySidebar from "@/components/CompanySidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

const CompanySettings = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <CompanySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-heading font-bold mb-1">Настройки</h1>
          <p className="text-sm text-muted-foreground mb-8">Управляйте аккаунтом компании</p>

          <Tabs defaultValue="company">
            <TabsList className="mb-6 bg-secondary/50">
              <TabsTrigger value="company">Компания</TabsTrigger>
              <TabsTrigger value="notifications">Уведомления</TabsTrigger>
              <TabsTrigger value="security">Безопасность</TabsTrigger>
            </TabsList>

            <TabsContent value="company">
              <div className="glass-card p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-primary/10 text-accent text-xl font-bold">AC</AvatarFallback>
                  </Avatar>
                  <Button variant="hero-outline" size="sm">Изменить логотип</Button>
                </div>
                <div className="space-y-2">
                  <Label>Название компании</Label>
                  <Input defaultValue="Acme Corp" className="bg-secondary/50 border-border/30" />
                </div>
                <div className="space-y-2">
                  <Label>Отрасль</Label>
                  <Input defaultValue="Технологии" className="bg-secondary/50 border-border/30" />
                </div>
                <div className="space-y-2">
                  <Label>Описание</Label>
                  <Textarea defaultValue="Ведущая технологическая компания, специализирующаяся на облачных решениях." className="bg-secondary/50 border-border/30" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Email администратора</Label>
                    <Input defaultValue="admin@acmecorp.com" className="bg-secondary/50 border-border/30" />
                  </div>
                  <div className="space-y-2">
                    <Label>Сайт</Label>
                    <Input defaultValue="https://acmecorp.com" className="bg-secondary/50 border-border/30" />
                  </div>
                </div>
                <Button variant="gradient">Сохранить</Button>
              </div>
            </TabsContent>

            <TabsContent value="notifications">
              <div className="glass-card p-6 space-y-6">
                {[
                  { label: "Кандидат завершил сессию", desc: "Уведомление, когда кандидат заканчивает интервью" },
                  { label: "Новый кандидат зарегистрирован", desc: "Когда кто-то регистрируется по ссылке приглашения" },
                  { label: "Еженедельный отчёт", desc: "Получайте еженедельную сводку всей активности" },
                  { label: "Низкий баланс токенов", desc: "Оповещение, когда токенов меньше 50" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="security">
              <div className="glass-card p-6 space-y-6">
                <div className="space-y-2">
                  <Label>Текущий пароль</Label>
                  <Input type="password" className="bg-secondary/50 border-border/30" />
                </div>
                <div className="space-y-2">
                  <Label>Новый пароль</Label>
                  <Input type="password" className="bg-secondary/50 border-border/30" />
                </div>
                <div className="space-y-2">
                  <Label>Подтвердите новый пароль</Label>
                  <Input type="password" className="bg-secondary/50 border-border/30" />
                </div>
                <Button variant="gradient">Обновить пароль</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default CompanySettings;