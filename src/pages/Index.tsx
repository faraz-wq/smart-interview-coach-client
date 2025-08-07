import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <SEO title="AI Interview Coach" description="Practice mock interviews with AI. Upload your resume, record answers, and get instant feedback." />
      <section className="container py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Ace Your Next Interview</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Upload your resume, get tailored questions, record answers, and receive actionable AI feedback.</p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild variant="hero">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/login">Log in</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
