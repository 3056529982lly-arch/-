import { weeklyTasks } from "@/data/tasks";
import { TaskList } from "@/components/TaskList";

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-950">Practice Tasks</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          Four weeks of practical exercises that turn training modules into daily operating skills.
        </p>
      </section>
      <TaskList weeks={weeklyTasks} />
    </div>
  );
}
