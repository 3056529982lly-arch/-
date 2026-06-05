"use client";

import { CheckCircle2, HelpCircle, RotateCcw, ShieldCheck, XCircle } from "lucide-react";
import { quizQuestions } from "@/data/quiz";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { QuizAnswer, useTrainingProgress } from "@/hooks/useTrainingProgress";
import { cn } from "@/lib/utils";

export default function QuizPage() {
  const {
    quizAnswers,
    quizScore,
    answeredQuizCount,
    totalQuizQuestions,
    quizAccuracy,
    actions
  } = useTrainingProgress();

  return (
    <div className="space-y-6">
      <section className="grid gap-4 lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">测验考核</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            选择答案后立即查看结果和解析，答题记录会保存在本机。
          </p>
        </div>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-blue-50 p-2 text-blue-700">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">当前得分</p>
                <p className="text-lg font-semibold text-slate-950">
                  {quizScore}/{totalQuizQuestions} · {quizAccuracy}%
                </p>
              </div>
            </div>
            <Progress value={quizAccuracy} className="mt-4" />
            <div className="mt-4 flex items-center justify-between gap-3 text-sm text-slate-500">
              <span>已答 {answeredQuizCount}/{totalQuizQuestions}</span>
              <Button type="button" variant="outline" size="sm" onClick={actions.resetQuiz}>
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                重新答题
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4">
        {quizQuestions.map((question, index) => {
          const selected = quizAnswers[question.question];
          const answered = Boolean(selected);
          const isCorrect = selected === question.answer;

          return (
            <Card key={question.question}>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-sm font-semibold text-blue-700">
                    {index + 1}
                  </div>
                  <Badge variant="outline">{question.area}</Badge>
                  {answered && (
                    <Badge variant={isCorrect ? "success" : "warning"}>
                      {isCorrect ? "回答正确" : "需要复习"}
                    </Badge>
                  )}
                </div>
                <CardTitle className="pt-2 leading-6">{question.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 md:grid-cols-2">
                  {question.options.map((option) => {
                    const optionSelected = selected === option.label;
                    const optionIsAnswer = option.label === question.answer;
                    return (
                      <button
                        type="button"
                        key={option.label}
                        onClick={() => actions.answerQuiz(question.question, option.label as QuizAnswer)}
                        className={cn(
                          "flex min-h-12 items-center justify-between gap-3 rounded-lg border bg-white p-3 text-left text-sm text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50",
                          optionSelected && "border-blue-600 bg-blue-50 text-blue-900",
                          answered && optionIsAnswer && "border-emerald-500 bg-emerald-50",
                          answered && optionSelected && !optionIsAnswer && "border-amber-400 bg-amber-50"
                        )}
                      >
                        <span>
                          <span className="font-semibold text-slate-950">{option.label}. </span>
                          {option.text}
                        </span>
                        {answered && optionIsAnswer && (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                        )}
                        {answered && optionSelected && !optionIsAnswer && (
                          <XCircle className="h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
                        )}
                        {!answered && (
                          <HelpCircle className="h-4 w-4 shrink-0 text-slate-300" aria-hidden="true" />
                        )}
                      </button>
                    );
                  })}
                </div>
                {answered && (
                  <div className="mt-4 rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-700">
                    <span className="font-semibold text-slate-950">解析：</span>
                    正确答案 {question.answer}。{question.explanation}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </section>
    </div>
  );
}
