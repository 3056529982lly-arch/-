import { CheckCircle2, HelpCircle, ShieldCheck } from "lucide-react";
import { quizQuestions } from "@/data/quiz";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function QuizPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">Quiz & Assessment</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Sample checks for Amazon operations knowledge. This static layout can later connect to scoring.
          </p>
        </div>
        <Card>
          <CardContent className="flex items-center gap-3 p-5">
            <div className="rounded-md bg-blue-50 p-2 text-blue-700">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Assessment readiness</p>
              <p className="text-lg font-semibold text-slate-950">Practice mode</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4">
        {quizQuestions.map((question, index) => (
          <Card key={question.question}>
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-sm font-semibold text-blue-700">
                  {index + 1}
                </div>
                <Badge variant="outline">{question.area}</Badge>
              </div>
              <CardTitle className="pt-2 leading-6">{question.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 md:grid-cols-2">
                {question.options.map((option) => {
                  const isAnswer = option === question.answer;
                  return (
                    <div
                      key={option}
                      className="flex min-h-12 items-center justify-between gap-3 rounded-lg border bg-white p-3 text-sm text-slate-700"
                    >
                      <span>{option}</span>
                      {isAnswer ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                      ) : (
                        <HelpCircle className="h-4 w-4 shrink-0 text-slate-300" aria-hidden="true" />
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="flex justify-end">
        <Button>Submit Practice Quiz</Button>
      </div>
    </div>
  );
}
