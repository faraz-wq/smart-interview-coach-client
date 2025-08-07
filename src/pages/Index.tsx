import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Sparkles, Upload, Mic, Timer, ShieldCheck, Gauge, ArrowRight, FileText, PlayCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const features = [
  { icon: Upload, title: "Resume-aware questions", description: "Upload your resume and get tailored questions that mirror real interviews." },
  { icon: Mic, title: "Record answers", description: "Practice with audio/video and get comfortable speaking under time pressure." },
  { icon: Timer, title: "Built-in timer", description: "Answer within realistic time limits to build sharp, concise responses." },
  { icon: Gauge, title: "Actionable scoring", description: "Instant AI feedback with scores, strengths, and improvement tips." },
  { icon: FileText, title: "Transcripts & insights", description: "Auto-transcribed answers with section-by-section breakdowns." },
  { icon: ShieldCheck, title: "Privacy-first", description: "Your data stays secure. Export or delete any time." },
] as const;

const testimonials = [
  {
    quote: "Got three callbacks in a week. The feedback on structure and clarity was spot on.",
    author: "Ava, Product Manager",
  },
  {
    quote: "Felt like a real interview. I fixed rambling answers and boosted my confidence.",
    author: "Noah, Software Engineer",
  },
  {
    quote: "Loved the resume-specific questions. It highlighted gaps I hadn’t noticed.",
    author: "Liam, Data Analyst",
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <SEO title="AI Interview Coach – Ace Your Next Interview" description="Practice mock interviews with AI. Upload your resume, record answers, and get instant feedback to land offers faster." />

      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-2xl" />
        <div className="absolute left-[-10%] bottom-[-10%] h-[24rem] w-[24rem] rounded-full bg-primary/10 blur-2xl" />
      </div>

      <header className="container py-6 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-lg story-link">Interview Coach</Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Login</Link>
          <Button asChild size="sm" variant="hero">
            <Link to="/signup" className="inline-flex items-center">Get Started <ArrowRight className="ml-2" /></Link>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="container pt-8 pb-20 md:pb-28 text-center">
        <div className="mx-auto max-w-3xl animate-enter">
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50">
            <Sparkles className="text-primary" />
            AI Interview Coach
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ace your next interview</span>
            <br /> with tailored, resume-aware practice
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Upload your resume, practice realistic questions, and get instant feedback on delivery, structure, and clarity.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" variant="hero" className="hover-scale">
              <Link to="/signup" className="inline-flex items-center">Start free practice <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover-scale">
              <Link to="/login" className="inline-flex items-center">Log in</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[{label:'Avg. score boost',value:'+32%'},{label:'Practice sessions',value:'25k+'},{label:'Satisfaction',value:'4.9/5'}].map((s, i) => (
            <div key={i} className="rounded-xl border p-5 bg-card/50 backdrop-blur animate-fade-in" style={{ animationDelay: `${i * 100}ms` as any }}>
              <div className="text-2xl font-semibold">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container py-16 md:py-24">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Features that help you win</h2>
          <p className="mt-3 text-muted-foreground">Everything you need to practice like it’s the real thing—and improve fast.</p>
        </header>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }, idx) => (
            <article key={title} className="group rounded-xl border bg-card/50 p-6 transition-all hover:shadow-lg hover:-translate-y-0.5 hover:bg-accent/20 animate-fade-in" style={{ animationDelay: `${idx * 80}ms` as any }}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                <Icon />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16 md:py-24">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What candidates say</h2>
          <p className="mt-3 text-muted-foreground">Real stories from real practice sessions.</p>
        </header>
        <div className="mt-10">
          <Carousel opts={{ align: 'start', loop: true }}>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <blockquote className="h-full rounded-xl border bg-card/50 p-6 animate-fade-in">
                    <p className="text-base">“{t.quote}”</p>
                    <footer className="mt-4 text-sm text-muted-foreground">— {t.author}</footer>
                  </blockquote>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-5 flex items-center gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-accent/10" aria-hidden />
        <div className="container py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready to practice smarter?</h2>
          <p className="mt-3 text-muted-foreground">Land interviews with confident, structured answers.</p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" variant="hero" className="hover-scale">
              <Link to="/signup" className="inline-flex items-center">Start free <PlayCircle className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover-scale">
              <Link to="/resume-upload" className="inline-flex items-center">Try a demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
