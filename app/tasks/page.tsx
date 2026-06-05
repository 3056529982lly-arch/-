import { weeklyTasks } from "@/data/tasks";
import { TaskList } from "@/components/TaskList";

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-950">实战任务</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          4周实操任务围绕后台入口、竞品分析、Listing 文案、图片 A+、广告、售后和周复盘展开。
        </p>
      </section>
      <TaskList weeks={weeklyTasks} />
    </div>
  );
}
