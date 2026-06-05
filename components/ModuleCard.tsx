"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  Layers3,
  PlayCircle,
  RotateCcw
} from "lucide-react";
import { TrainingModule } from "@/data/modules";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CourseStatus, useTrainingProgress } from "@/hooks/useTrainingProgress";
import { cn } from "@/lib/utils";

const difficultyVariant = {
  "入门": "success",
  "进阶": "warning",
  "重点": "outline"
} as const;

const statusVariant = {
  "未开始": "muted",
  "学习中": "secondary",
  "已完成": "success"
} as const;

const statusProgress: Record<CourseStatus, number> = {
  "未开始": 0,
  "学习中": 50,
  "已完成": 100
};

type ModuleCardProps = {
  module: TrainingModule;
};

export function ModuleCard({ module }: ModuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { courseStatus, actions } = useTrainingProgress();
  const status = courseStatus[module.title] ?? "未开始";
  const assessmentSummary =
    module.assessment.length > 34 ? `${module.assessment.slice(0, 34)}...` : module.assessment;

  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle className="leading-6">{module.title}</CardTitle>
              <Badge variant={statusVariant[status]}>{status}</Badge>
            </div>
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

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-lg border bg-slate-50 p-3">
            <p className="text-xs font-medium text-slate-500">学习目标</p>
            <p className="mt-1 text-xl font-semibold text-slate-950">
              {module.learningGoals.length}
            </p>
          </div>
          <div className="rounded-lg border bg-slate-50 p-3">
            <p className="text-xs font-medium text-slate-500">实操任务</p>
            <p className="mt-1 text-xl font-semibold text-slate-950">
              {module.practice.length}
            </p>
          </div>
        </div>

        <p className="mt-4 rounded-lg bg-blue-50 p-3 text-sm leading-5 text-blue-900">
          <span className="font-medium text-slate-800">考核：</span>
          {assessmentSummary}
        </p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => actions.setCourse(module.title, "学习中")}
          >
            <PlayCircle className="h-4 w-4" aria-hidden="true" />
            标记为学习中
          </Button>
          <Button
            type="button"
            size="sm"
            className="flex-1"
            onClick={() => actions.setCourse(module.title, "已完成")}
          >
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            标记为已完成
          </Button>
        </div>

        <button
          type="button"
          className="mt-4 flex w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
          onClick={() => setIsExpanded((current) => !current)}
        >
          查看课程详情
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")}
            aria-hidden="true"
          />
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-4 rounded-lg border bg-slate-50 p-4">
            <div>
              <p className="text-sm font-semibold text-slate-950">学习目标</p>
              <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
                {module.learningGoals.map((goal) => (
                  <li key={goal}>· {goal}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">实操任务</p>
              <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
                {module.practice.map((task) => (
                  <li key={task}>· {task}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-white p-3">
              <p className="text-sm font-semibold text-slate-950">考核要求</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{module.assessment}</p>
            </div>
          </div>
        )}

        <div className="mt-auto pt-5">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-slate-700">课程进度</span>
            <span className="text-slate-500">{statusProgress[status]}%</span>
          </div>
          <Progress value={statusProgress[status]} />
          {status !== "未开始" && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="mt-3 px-0 text-slate-500 hover:bg-transparent hover:text-slate-900"
              onClick={() => actions.setCourse(module.title, "未开始")}
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              重置本课状态
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
