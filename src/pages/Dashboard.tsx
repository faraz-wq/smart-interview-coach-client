import { useNavigate, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, History, Plus } from "lucide-react";

const mockHistory = [
  { id: "1", date: "2025-07-01", role: "Frontend Engineer", score: 82 },
  { id: "2", date: "2025-07-03", role: "Data Analyst", score: 74 },
  { id: "3", date: "2025-07-05", role: "Product Manager", score: 88 },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Dashboard | AI Interview Coach" description="Start a new mock interview or review your interview history and feedback." />
      <section className="container py-10 space-y-8">
        <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-semibold tracking-tight">Interview Dashboard</h1>
          <Button onClick={() => navigate("/resume-upload")} variant="hero">
            <Plus /> Start New Interview
          </Button>
        </header>

        <article className="space-y-4">
          <h2 className="text-xl font-medium flex items-center gap-2"><History /> Past Interviews</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mockHistory.map((item) => (
              <Card key={item.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <CalendarDays className="opacity-70" /> {new Date(item.date).toLocaleDateString()}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">{item.role}</div>
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/history/${item.id}`}>View ({item.score}%)</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Dashboard;
