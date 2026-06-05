import { ArrowUpRight, CheckCircle2, Clock3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type ProgressCardProps = {
  progress: number;
  currentStage: string;
  completedTasks: number;
  totalTasks: number;
};

export function ProgressCard({
  progress,
  currentStage,
  completedTasks,
  totalTasks
}: ProgressCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>Overall Onboarding Progress</CardTitle>
            <p className="mt-1 text-sm text-slate-500">Current stage: {currentStage}</p>
          </div>
          <div className="rounded-md bg-blue-50 p-2 text-blue-700">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-semibold tracking-normal text-slate-950">
            {progress}%
          </span>
          <span className="pb-1 text-sm text-slate-500">complete</span>
        </div>
        <Progress value={progress} className="mt-5" />
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-lg border bg-slate-50 p-3">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
              Tasks
            </div>
            <p className="mt-2 text-2xl font-semibold text-slate-950">
              {completedTasks}/{totalTasks}
            </p>
          </div>
          <div className="rounded-lg border bg-slate-50 p-3">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Clock3 className="h-4 w-4 text-blue-600" aria-hidden="true" />
              Pace
            </div>
            <p className="mt-2 text-2xl font-semibold text-slate-950">On track</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
