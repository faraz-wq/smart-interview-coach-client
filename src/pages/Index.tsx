import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <SEO title="AI Interview Coach – Get Started" description="Practice mock interviews with AI. Start now or log in to continue your progress." />

      {/* Animated background */}
      <div aria-hidden className="absolute inset-0 animated-gradient" />
      <div aria-hidden className="absolute inset-0 animated-particles" />

      {/* Centered content */}
      <section className="relative z-10 container min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-fade-in bg-gradient-to-r from-primary via-accent to-foreground bg-clip-text text-transparent">
            Smart Interview Coach
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in">
            <Button asChild size="lg" variant="hero" className="hover-scale">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover-scale">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
