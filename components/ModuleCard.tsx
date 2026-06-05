import { Clock, Layers3 } from "lucide-react";
import { TrainingModule } from "@/data/modules";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const difficultyVariant = {
  Beginner: "success",
  Intermediate: "warning",
  Advanced: "outline"
} as const;

type ModuleCardProps = {
  module: TrainingModule;
};

export function ModuleCard({ module }: ModuleCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="leading-6">{module.title}</CardTitle>
            <p className="mt-2 text-sm leading-5 text-slate-600">{module.description}</p>
          </div>
          <div className="rounded-md bg-blue-50 p-2 text-blue-700">
            <Layers3 className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={difficultyVariant[module.difficulty]}>{module.difficulty}</Badge>
          <Badge variant="muted">
            <Clock className="mr-1 h-3 w-3" aria-hidden="true" />
            {module.estimatedTime}
          </Badge>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {module.keySkills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-5">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-slate-700">Progress</span>
            <span className="text-slate-500">{module.progress}%</span>
          </div>
          <Progress value={module.progress} />
        </div>
      </CardContent>
    </Card>
  );
}
