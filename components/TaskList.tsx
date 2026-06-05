"use client";

import { useMemo, useState } from "react";
import { CalendarClock } from "lucide-react";
import { PracticeTask, WeeklyTasks } from "@/data/tasks";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { taskId, useTrainingProgress } from "@/hooks/useTrainingProgress";
import { cn } from "@/lib/utils";

type TaskListProps = {
  weeks: WeeklyTasks[];
};

type TaskFilter = "全部" | "未开始" | "进行中" | "已完成";

const filters: TaskFilter[] = ["全部", "未开始", "进行中", "已完成"];

const priorityVariant = {
  "高": "warning",
  "中": "secondary",
  "低": "muted"
} as const;

const statusVariant = {
  "已完成": "success",
  "进行中": "secondary",
  "未开始": "muted"
} as const;

function TaskRow({
  week,
  task,
  isDone,
  onToggle
}: {
  week: string;
  task: PracticeTask;
  isDone: boolean;
  onToggle: () => void;
}) {
  const displayStatus = isDone ? "已完成" : task.status;

  return (
    <div className="grid gap-3 border-t py-4 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-[1fr_auto]">
      <div className="flex gap-3">
        <input
          type="checkbox"
          aria-label={`${isDone ? "取消完成" : "标记完成"}：${task.title}`}
          checked={isDone}
          onChange={onToggle}
          className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 accent-blue-600"
        />
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-semibold text-slate-950">{task.title}</h3>
            <Badge variant={priorityVariant[task.priority]}>{task.priority}</Badge>
            <Badge variant={statusVariant[displayStatus]}>{displayStatus}</Badge>
          </div>
          <p className="mt-1 text-sm leading-5 text-slate-600">{task.description}</p>
          <p className="mt-2 text-xs font-medium text-slate-500">
            交付物：<span className="text-slate-700">{task.deliverable}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-500 md:justify-end">
        <CalendarClock className="h-4 w-4" aria-hidden="true" />
        {task.estimatedTime}
      </div>
    </div>
  );
}

export function TaskList({ weeks }: TaskListProps) {
  const [activeWeek, setActiveWeek] = useState(weeks[0]?.week ?? "第1周");
  const [filter, setFilter] = useState<TaskFilter>("全部");
  const { taskCompletion, actions } = useTrainingProgress();

  const currentWeek = weeks.find((week) => week.week === activeWeek) ?? weeks[0];

  const weekStats = useMemo(
    () =>
      weeks.map((week) => {
        const completed = week.tasks.filter((task) => taskCompletion[taskId(week.week, task.title)]).length;
        const percent = week.tasks.length ? Math.round((completed / week.tasks.length) * 100) : 0;
        return { week: week.week, completed, total: week.tasks.length, percent };
      }),
    [taskCompletion, weeks]
  );

  const filteredTasks = currentWeek.tasks.filter((task) => {
    const done = taskCompletion[taskId(currentWeek.week, task.title)];
    const displayStatus = done ? "已完成" : task.status;
    return filter === "全部" || displayStatus === filter;
  });

  const currentStats = weekStats.find((item) => item.week === currentWeek.week);

  return (
    <div className="space-y-4">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {weeks.map((week) => {
          const stats = weekStats.find((item) => item.week === week.week);
          const active = activeWeek === week.week;
          return (
            <button
              type="button"
              key={week.week}
              onClick={() => setActiveWeek(week.week)}
              className={cn(
                "min-w-fit rounded-md border px-3 py-2 text-sm font-medium transition-colors",
                active
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              )}
            >
              {week.week}
              <span className="ml-2 text-xs text-slate-500">{stats?.percent ?? 0}%</span>
            </button>
          );
        })}
      </div>

      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <CardTitle>{currentWeek.week}</CardTitle>
              <p className="mt-1 text-sm text-slate-500">{currentWeek.focus}</p>
            </div>
            <Badge variant="outline">
              {currentStats?.completed ?? 0}/{currentStats?.total ?? 0} 已完成
            </Badge>
          </div>
          <Progress value={currentStats?.percent ?? 0} className="mt-4" />
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setFilter(item)}
                className={cn(
                  "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
                  filter === item
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "bg-white text-slate-600 hover:bg-slate-50"
                )}
              >
                {item}
              </button>
            ))}
          </div>

          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <TaskRow
                key={task.title}
                week={currentWeek.week}
                task={task}
                isDone={Boolean(taskCompletion[taskId(currentWeek.week, task.title)])}
                onToggle={() => actions.toggleTask(currentWeek.week, task.title)}
              />
            ))
          ) : (
            <div className="rounded-lg border bg-slate-50 p-5 text-sm text-slate-500">
              当前筛选下暂无任务。
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
