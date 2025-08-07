import { useParams, useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockHistory = [
  { id: "1", date: "2025-07-01", role: "Frontend Engineer", score: 82 },
  { id: "2", date: "2025-07-03", role: "Data Analyst", score: 74 },
  { id: "3", date: "2025-07-05", role: "Product Manager", score: 88 },
];

const HistoryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = mockHistory.find((i) => i.id === id);

  return (
    <main className="min-h-screen bg-background">
      <SEO title="History Details | AI Interview Coach" description="Full feedback and transcript from a past interview." />
      <section className="container py-10 space-y-6">
        <h1 className="text-3xl font-semibold">History Details</h1>
        <Card className="max-w-3xl">
          <CardHeader>
            <CardTitle>
              {item ? `${item.role} — ${new Date(item.date).toLocaleDateString()} — ${item.score}%` : "Interview"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p><strong>Summary:</strong> You demonstrated strong knowledge and communication. Focus on quantifying impact and shortening intros.</p>
            <p><strong>Transcript:</strong> I have 4 years of experience building web apps with React and TypeScript... </p>
            <div className="pt-2">
              <Button variant="secondary" onClick={() => navigate("/dashboard")}>Back to Dashboard</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default HistoryDetails;
