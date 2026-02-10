import DashboardSidebar from "@/components/DashboardSidebar";
import { BookOpen, Clock, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const enrolledCourses = [
  { title: "React Fundamentals", progress: 75, modules: 12, completed: 9, category: "Frontend", difficulty: "Beginner" },
  { title: "System Design Basics", progress: 40, modules: 8, completed: 3, category: "Architecture", difficulty: "Intermediate" },
  { title: "TypeScript Advanced", progress: 90, modules: 10, completed: 9, category: "Language", difficulty: "Advanced" },
];

const recommendedCourses = [
  { title: "Node.js Backend Development", modules: 15, duration: "6h", rating: 4.8, students: 1240, category: "Backend" },
  { title: "Data Structures & Algorithms", modules: 20, duration: "10h", rating: 4.9, students: 3200, category: "CS Fundamentals" },
  { title: "Cloud Architecture (AWS)", modules: 12, duration: "8h", rating: 4.7, students: 890, category: "Cloud" },
  { title: "GraphQL Masterclass", modules: 8, duration: "4h", rating: 4.6, students: 650, category: "API" },
];

const DashboardCourses = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-5xl">
          <h1 className="text-2xl font-heading font-bold mb-1">My Courses</h1>
          <p className="text-sm text-muted-foreground mb-8">Track your learning progress</p>

          {/* Enrolled Courses */}
          <h2 className="text-lg font-semibold mb-4">In Progress</h2>
          <div className="grid gap-4 mb-10">
            {enrolledCourses.map((course) => (
              <div key={course.title} className="glass-card-hover p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium">{course.title}</h3>
                    <Badge variant="outline" className="text-xs border-primary/30 text-accent">
                      {course.difficulty}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    {course.completed}/{course.modules} modules completed
                  </p>
                  <Progress value={course.progress} className="h-2" />
                </div>
                <Button variant="gradient" size="sm">Continue</Button>
              </div>
            ))}
          </div>

          {/* Recommended */}
          <h2 className="text-lg font-semibold mb-4">Recommended for You</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {recommendedCourses.map((course) => (
              <div key={course.title} className="glass-card-hover p-5">
                <Badge variant="secondary" className="mb-3 text-xs">{course.category}</Badge>
                <h3 className="font-medium mb-2">{course.title}</h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{course.modules} modules</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-warning" />{course.rating}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.students}</span>
                </div>
                <Button variant="hero-outline" size="sm" className="w-full">Start Course</Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardCourses;
