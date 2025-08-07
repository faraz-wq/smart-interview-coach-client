import { SEO } from "@/components/SEO";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <SEO title="404 Not Found | AI Interview Coach" description="The page you are looking for does not exist." />
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-muted-foreground">Oops! Page not found</p>
        <Button onClick={() => navigate("/")} variant="outline">Return Home</Button>
      </section>
    </main>
  );
};

export default NotFound;
