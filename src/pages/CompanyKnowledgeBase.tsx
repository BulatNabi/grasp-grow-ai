import CompanySidebar from "@/components/CompanySidebar";
import { Upload, FileText, Video, Trash2, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const documents = [
  { name: "API Design Guidelines.pdf", type: "pdf", date: "8 фев 2026", status: "ready", size: "2.4 МБ" },
  { name: "React Best Practices.docx", type: "doc", date: "6 фев 2026", status: "ready", size: "1.1 МБ" },
  { name: "System Design Interview Questions.pdf", type: "pdf", date: "4 фев 2026", status: "processing", size: "3.8 МБ" },
  { name: "Company Culture Handbook.pdf", type: "pdf", date: "1 фев 2026", status: "ready", size: "5.2 МБ" },
  { name: "Technical Onboarding.mp4", type: "video", date: "28 янв 2026", status: "ready", size: "124 МБ" },
];

const CompanyKnowledgeBase = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <CompanySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-heading font-bold mb-1">База знаний</h1>
          <p className="text-sm text-muted-foreground mb-8">Загружайте документы для настройки ИИ-интервьюера</p>

          <div className="glass-card border-2 border-dashed border-primary/30 p-10 text-center mb-8 hover:border-primary/50 transition-colors cursor-pointer">
            <Upload className="w-10 h-10 text-accent mx-auto mb-3" />
            <p className="font-medium mb-1">Перетащите файлы сюда</p>
            <p className="text-xs text-muted-foreground mb-4">PDF, DOCX, TXT, MP4 — Макс. 50 МБ</p>
            <Button variant="gradient" size="sm">Выбрать файлы</Button>
          </div>

          <h2 className="text-lg font-semibold mb-4">Загруженные документы</h2>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.name} className="glass-card p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  {doc.type === "video" ? (
                    <Video className="w-5 h-5 text-accent" />
                  ) : (
                    <FileText className="w-5 h-5 text-accent" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{doc.name}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{doc.date}</span>
                    <span>{doc.size}</span>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={`text-xs ${
                    doc.status === "ready"
                      ? "border-success/30 text-success"
                      : "border-warning/30 text-warning"
                  }`}
                >
                  {doc.status === "ready" ? (
                    <><CheckCircle className="w-3 h-3 mr-1" />Готово</>
                  ) : (
                    <><Loader2 className="w-3 h-3 mr-1 animate-spin" />Обработка</>
                  )}
                </Badge>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive shrink-0">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyKnowledgeBase;