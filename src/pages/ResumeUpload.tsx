import { useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ResumeUpload = () => {
  const navigate = useNavigate();

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/interview");
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Upload Resume | AI Interview Coach" description="Upload your resume or paste text to generate interview questions." />
      <section className="container py-10">
        <h1 className="text-3xl font-semibold mb-6">Resume Upload</h1>
        <Card className="max-w-3xl">
          <CardHeader>
            <CardTitle>Provide your resume</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Upload file (PDF/DOCX)</label>
                <Input type="file" accept=".pdf,.doc,.docx" />
              </div>
              <div className="text-center text-sm text-muted-foreground">— or —</div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Paste resume text</label>
                <Textarea placeholder="Paste your resume content here..." className="min-h-36" />
              </div>
              <Button type="submit" variant="default">Generate Questions</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default ResumeUpload;
