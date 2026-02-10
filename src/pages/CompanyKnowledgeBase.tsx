import CompanySidebar from "@/components/CompanySidebar";
import { Upload, FileText, Video, Trash2, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const documents = [
  { name: "API Design Guidelines.pdf", type: "pdf", date: "Feb 8, 2026", status: "ready", size: "2.4 MB" },
  { name: "React Best Practices.docx", type: "doc", date: "Feb 6, 2026", status: "ready", size: "1.1 MB" },
  { name: "System Design Interview Questions.pdf", type: "pdf", date: "Feb 4, 2026", status: "processing", size: "3.8 MB" },
  { name: "Company Culture Handbook.pdf", type: "pdf", date: "Feb 1, 2026", status: "ready", size: "5.2 MB" },
  { name: "Technical Onboarding.mp4", type: "video", date: "Jan 28, 2026", status: "ready", size: "124 MB" },
];

const CompanyKnowledgeBase = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <CompanySidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-heading font-bold mb-1">Knowledge Base</h1>
          <p className="text-sm text-muted-foreground mb-8">Upload documents to customize your AI interviewer</p>

          {/* Upload Area */}
          <div className="glass-card border-2 border-dashed border-primary/30 p-10 text-center mb-8 hover:border-primary/50 transition-colors cursor-pointer">
            <Upload className="w-10 h-10 text-accent mx-auto mb-3" />
            <p className="font-medium mb-1">Drag & drop files here</p>
            <p className="text-xs text-muted-foreground mb-4">PDF, DOCX, TXT, MP4 — Max 50MB</p>
            <Button variant="gradient" size="sm">Browse Files</Button>
          </div>

          {/* Documents List */}
          <h2 className="text-lg font-semibold mb-4">Uploaded Documents</h2>
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
                    <><CheckCircle className="w-3 h-3 mr-1" />Ready</>
                  ) : (
                    <><Loader2 className="w-3 h-3 mr-1 animate-spin" />Processing</>
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
