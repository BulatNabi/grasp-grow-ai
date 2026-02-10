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
          <h1 className="text-2xl font-heading font-bold mb-1">Settings</h1>
          <p className="text-sm text-muted-foreground mb-8">Manage your company account</p>

          <Tabs defaultValue="company">
            <TabsList className="mb-6 bg-secondary/50">
              <TabsTrigger value="company">Company</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="company">
              <div className="glass-card p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-primary/10 text-accent text-xl font-bold">AC</AvatarFallback>
                  </Avatar>
                  <Button variant="hero-outline" size="sm">Change Logo</Button>
                </div>
                <div className="space-y-2">
                  <Label>Company Name</Label>
                  <Input defaultValue="Acme Corp" className="bg-secondary/50 border-border/30" />
                </div>
                <div className="space-y-2">
                  <Label>Industry</Label>
                  <Input defaultValue="Technology" className="bg-secondary/50 border-border/30" />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea defaultValue="Leading technology company specializing in cloud solutions." className="bg-secondary/50 border-border/30" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Admin Email</Label>
                    <Input defaultValue="admin@acmecorp.com" className="bg-secondary/50 border-border/30" />
                  </div>
                  <div className="space-y-2">
                    <Label>Website</Label>
                    <Input defaultValue="https://acmecorp.com" className="bg-secondary/50 border-border/30" />
                  </div>
                </div>
                <Button variant="gradient">Save Changes</Button>
              </div>
            </TabsContent>

            <TabsContent value="notifications">
              <div className="glass-card p-6 space-y-6">
                {[
                  { label: "Candidate completed session", desc: "Get notified when a candidate finishes an interview" },
                  { label: "New candidate registered", desc: "When someone signs up via invite link" },
                  { label: "Weekly summary report", desc: "Receive a weekly digest of all activity" },
                  { label: "Token balance low", desc: "Alert when tokens drop below 50" },
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
                  <Label>Current Password</Label>
                  <Input type="password" className="bg-secondary/50 border-border/30" />
                </div>
                <div className="space-y-2">
                  <Label>New Password</Label>
                  <Input type="password" className="bg-secondary/50 border-border/30" />
                </div>
                <div className="space-y-2">
                  <Label>Confirm New Password</Label>
                  <Input type="password" className="bg-secondary/50 border-border/30" />
                </div>
                <Button variant="gradient">Update Password</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default CompanySettings;
