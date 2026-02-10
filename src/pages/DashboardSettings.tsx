import DashboardSidebar from "@/components/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const DashboardSettings = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-heading font-bold mb-1">Settings</h1>
          <p className="text-sm text-muted-foreground mb-8">Manage your account preferences</p>

          <Tabs defaultValue="profile">
            <TabsList className="mb-6 bg-secondary/50">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <div className="glass-card p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-primary/10 text-accent text-xl font-bold">A</AvatarFallback>
                  </Avatar>
                  <Button variant="hero-outline" size="sm">Change Avatar</Button>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input defaultValue="Alex" className="bg-secondary/50 border-border/30" />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input defaultValue="Johnson" className="bg-secondary/50 border-border/30" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input defaultValue="alex@example.com" className="bg-secondary/50 border-border/30" />
                </div>
                <Button variant="gradient">Save Changes</Button>
              </div>
            </TabsContent>

            <TabsContent value="notifications">
              <div className="glass-card p-6 space-y-6">
                {[
                  { label: "Session reminders", desc: "Get notified before scheduled sessions" },
                  { label: "Score reports", desc: "Receive email when reports are ready" },
                  { label: "New courses", desc: "Updates about new course releases" },
                  { label: "Marketing emails", desc: "Tips, promotions, and news" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <Switch defaultChecked={item.label !== "Marketing emails"} />
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

export default DashboardSettings;
