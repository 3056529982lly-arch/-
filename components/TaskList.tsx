import { CalendarClock } from "lucide-react";
import { PracticeTask, WeeklyTasks } from "@/data/tasks";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TaskListProps = {
  weeks: WeeklyTasks[];
};

const priorityVariant = {
  High: "warning",
  Medium: "secondary",
  Low: "muted"
} as const;

const statusVariant = {
  Done: "success",
  "In Progress": "secondary",
  "Not Started": "muted"
} as const;

function TaskRow({ task }: { task: PracticeTask }) {
  return (
    <div className="grid gap-3 border-t py-4 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-[1fr_auto]">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-semibold text-slate-950">{task.title}</h3>
          <Badge variant={priorityVariant[task.priority]}>{task.priority}</Badge>
          <Badge variant={statusVariant[task.status]}>{task.status}</Badge>
        </div>
        <p className="mt-1 text-sm leading-5 text-slate-600">{task.description}</p>
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-500 md:justify-end">
        <CalendarClock className="h-4 w-4" aria-hidden="true" />
        {task.estimatedTime}
      </div>
    </div>
  );
}

export function TaskList({ weeks }: TaskListProps) {
  return (
    <div className="grid gap-4">
      {weeks.map((week) => (
        <Card key={week.week}>
          <CardHeader className="pb-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <CardTitle>{week.week}</CardTitle>
                <p className="mt-1 text-sm text-slate-500">{week.focus}</p>
              </div>
              <Badge variant="outline">{week.tasks.length} tasks</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {week.tasks.map((task) => (
              <TaskRow key={task.title} task={task} />
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
