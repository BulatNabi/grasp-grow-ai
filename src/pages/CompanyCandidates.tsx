import CompanySidebar from "@/components/CompanySidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { FileText, MailPlus, Download } from "lucide-react";

const candidates = [
  { name: "Иван Петров", email: "ivan@email.com", vacancy: "Senior React Developer", invited: "6 фев 2026", status: "завершено", score: 92 },
  { name: "Анна Смирнова", email: "anna@email.com", vacancy: "Senior React Developer", invited: "5 фев 2026", status: "завершено", score: 78 },
  { name: "Мария Гарсия", email: "maria@email.com", vacancy: "Backend Engineer", invited: "4 фев 2026", status: "завершено", score: 94 },
  { name: "Алексей Чен", email: "alex@email.com", vacancy: "Full Stack Developer", invited: "3 фев 2026", status: "ожидание", score: null },
  { name: "Сергей Вилсон", email: "sergey@email.com", vacancy: "Senior React Developer", invited: "2 фев 2026", status: "завершено", score: 85 },
  { name: "Лиза Браун", email: "lisa@email.com", vacancy: "DevOps Engineer", invited: "1 фев 2026", status: "ожидание", score: null },
];

const CompanyCandidates = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <CompanySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-heading font-bold mb-1">Кандидаты</h1>
              <p className="text-sm text-muted-foreground">Управляйте и просматривайте кандидатов</p>
            </div>
            <Button variant="hero-outline" size="sm"><Download className="w-3 h-3 mr-1" />Экспорт CSV</Button>
          </div>

          <div className="glass-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-border/30 hover:bg-transparent">
                  <TableHead>Имя</TableHead>
                  <TableHead>Вакансия</TableHead>
                  <TableHead>Приглашён</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Балл</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {candidates.map((c, i) => (
                  <TableRow key={i} className="border-border/20">
                    <TableCell>
                      <p className="font-medium text-sm">{c.name}</p>
                      <p className="text-xs text-muted-foreground">{c.email}</p>
                    </TableCell>
                    <TableCell className="text-sm">{c.vacancy}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{c.invited}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          c.status === "завершено"
                            ? "border-success/30 text-success"
                            : "border-warning/30 text-warning"
                        }`}
                      >
                        {c.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {c.score !== null ? (
                        <span className={`stat-mono text-sm font-semibold ${c.score >= 85 ? "text-success" : "text-warning"}`}>
                          {c.score}%
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground">—</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        {c.status === "завершено" ? (
                          <Button variant="ghost" size="sm"><FileText className="w-4 h-4" /></Button>
                        ) : (
                          <Button variant="ghost" size="sm"><MailPlus className="w-4 h-4" /></Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyCandidates;