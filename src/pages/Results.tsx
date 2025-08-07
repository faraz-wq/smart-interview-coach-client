import { useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";

const Results = () => {
  const navigate = useNavigate();
  const score = 82;

  const onSave = () => {
    toast({ title: "Saved", description: "Results saved to history." });
    navigate("/dashboard");
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Results | AI Interview Coach" description="Review your interview results, transcript, and AI feedback." />
      <section className="container py-10 space-y-6">
        <h1 className="text-3xl font-semibold">Results</h1>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Transcript</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
              <p><strong>Q:</strong> Tell me about yourself and your experience relevant to this role.</p>
              <p><strong>A:</strong> I have 4 years of experience building web apps with React and TypeScript. I focus on accessibility, testing, and performance...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm"><span>Overall Score</span><span>{score}%</span></div>
                <Progress value={score} />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <div className="text-sm font-medium mb-1">Strengths</div>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Clear structure and relevant examples</li>
                    <li>Good communication pace</li>
                    <li>Strong understanding of fundamentals</li>
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-medium mb-1">Weaknesses</div>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Could quantify impact more</li>
                    <li>Add metrics to highlight outcomes</li>
                    <li>Shorten intro to save time</li>
                  </ul>
                </div>
              </div>
              <Button onClick={onSave} variant="default">Save to History</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Results;
