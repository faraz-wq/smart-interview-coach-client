import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <SEO title="AI Interview Coach – Get Started" description="Practice mock interviews with AI. Start now or log in to continue your progress." />

      {/* Animated background */}
      <div aria-hidden className="absolute inset-0 animated-gradient" />

      {/* Centered minimal actions */}
      <section className="relative z-10 container min-h-screen flex items-center justify-center">
        <h1 className="sr-only">AI Interview Coach</h1>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button asChild size="lg" variant="hero">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
