import { useNavigate, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Lock } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Login | AI Interview Coach" description="Log in to continue your AI-powered mock interviews." />
      <section className="container flex min-h-screen items-center justify-center py-12">
        <Card className="w-full max-w-md border-border">
          <CardHeader>
            <h1 className="text-2xl font-semibold">Log in</h1>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2"><Mail className="opacity-70" /> Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center gap-2"><Lock className="opacity-70" /> Password</Label>
                <Input id="password" type="password" placeholder="••••••••" required />
              </div>
              <Button type="submit" className="w-full" variant="default">Login</Button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground">
              New here?{" "}
              <Link to="/signup" className="text-primary underline-offset-4 hover:underline">Create an account</Link>
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Login;
