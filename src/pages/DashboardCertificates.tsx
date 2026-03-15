import DashboardSidebar from "@/components/DashboardSidebar";
import { Award, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  { course: "React Fundamentals", date: "8 фев 2026", score: 92, id: "CERT-RF-2026-001" },
  { course: "Node.js Patterns", date: "28 янв 2026", score: 95, id: "CERT-NP-2026-002" },
  { course: "TypeScript Advanced", date: "15 янв 2026", score: 88, id: "CERT-TA-2026-003" },
];

const DashboardCertificates = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-heading font-bold mb-1">Сертификаты</h1>
          <p className="text-sm text-muted-foreground mb-8">Ваши полученные достижения</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert) => (
              <div key={cert.id} className="glass-card-hover p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-1">{cert.course}</h3>
                <p className="text-xs text-muted-foreground mb-1">{cert.date}</p>
                <p className="stat-mono text-sm font-semibold text-success mb-1">{cert.score}%</p>
                <p className="text-xs text-muted-foreground mb-4">{cert.id}</p>
                <div className="flex gap-2 justify-center">
                  <Button variant="hero-outline" size="sm"><Download className="w-3 h-3 mr-1" />Скачать</Button>
                  <Button variant="ghost" size="sm"><Share2 className="w-3 h-3" /></Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardCertificates;