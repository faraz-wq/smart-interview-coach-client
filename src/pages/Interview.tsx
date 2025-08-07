import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Timer, Video, Mic } from "lucide-react";

const Interview = () => {
  const navigate = useNavigate();
  const questions = useMemo(
    () => [
      "Tell me about yourself and your experience relevant to this role.",
      "Describe a challenging project and how you handled it.",
      "How do you ensure code quality and maintainability?",
    ],
    []
  );
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    if (!open || !recording) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [open, recording]);

  const onNext = () => {
    if (index < questions.length - 1) setIndex((i) => i + 1);
    else navigate("/results");
  };

  const resetTimer = () => setSeconds(0);

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Interview | AI Interview Coach" description="Answer AI-generated interview questions with audio/video recording." />
      <section className="container py-10 space-y-6">
        <h1 className="text-3xl font-semibold">Interview</h1>
        <Card className="max-w-3xl">
          <CardContent className="p-6 space-y-6">
            <div className="text-lg">Question {index + 1} of {questions.length}</div>
            <p className="text-xl font-medium leading-relaxed">{questions[index]}</p>
            <div className="flex flex-wrap gap-3">
              <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) { setRecording(false); resetTimer(); } }}>
                <DialogTrigger asChild>
                  <Button variant="outline"><Video /> Open Recorder</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2"><Mic /> Record your answer</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="aspect-video w-full rounded-md bg-muted/50 flex items-center justify-center text-muted-foreground">
                      Camera preview
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm"><Timer className="opacity-70" /> {Math.floor(seconds/60).toString().padStart(2,'0')}:{(seconds%60).toString().padStart(2,'0')}</div>
                      {!recording ? (
                        <Button onClick={() => { setRecording(true); }} variant="default">Start</Button>
                      ) : (
                        <Button onClick={() => { setRecording(false); }} variant="destructive">Stop</Button>
                      )}
                      <Button onClick={() => { setOpen(false); }} variant="secondary">Save & Close</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button onClick={onNext} variant="default">Next Question</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Interview;
