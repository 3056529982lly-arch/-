import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  ClipboardList,
  FileText,
  Target
} from "lucide-react";
import { dashboardStats, quickAccess, todaysTasks } from "@/data/dashboard";
import { modules } from "@/data/modules";
import { weeklyTasks } from "@/data/tasks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressCard } from "@/components/ProgressCard";
import { ModuleCard } from "@/components/ModuleCard";
import { Badge } from "@/components/ui/badge";

const featuredModules = modules.slice(0, 4);
const weekTwoTasks = weeklyTasks[1].tasks;

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <ProgressCard
          progress={dashboardStats.overallProgress}
          currentStage={dashboardStats.currentStage}
          completedTasks={dashboardStats.completedTasks}
          totalTasks={dashboardStats.totalTasks}
        />
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-4">
              <div>
                <CardTitle>Weekly Focus Area</CardTitle>
                <p className="mt-1 text-sm text-slate-500">Active learning priority</p>
              </div>
              <Target className="h-5 w-5 text-blue-600" aria-hidden="true" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold leading-8 text-slate-950">
              {dashboardStats.weeklyFocus}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Build repeatable research habits, document observations, and connect listing
              improvements to customer search intent.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg border bg-slate-50 p-3">
                <p className="text-xs font-medium text-slate-500">Current stage</p>
                <p className="mt-1 text-sm font-semibold text-slate-950">
                  {dashboardStats.currentStage}
                </p>
              </div>
              <div className="rounded-lg border bg-slate-50 p-3">
                <p className="text-xs font-medium text-slate-500">Next checkpoint</p>
                <p className="mt-1 text-sm font-semibold text-slate-950">Friday review</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <CardTitle>Today's Learning Tasks</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {todaysTasks.map((task, index) => (
                <div key={task} className="flex gap-3 rounded-lg border bg-slate-50 p-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white text-sm font-semibold text-blue-700">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-5 text-slate-700">{task}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <CardTitle>Practice Snapshot</CardTitle>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/tasks">
                  View all
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weekTwoTasks.map((task) => (
                <div key={task.title} className="rounded-lg border p-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-slate-950">{task.title}</p>
                    <Badge variant={task.status === "In Progress" ? "secondary" : "muted"}>
                      {task.status}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{task.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-950">Key Amazon Operation Modules</h2>
            <p className="mt-1 text-sm text-slate-500">Core learning areas for new operations staff</p>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/modules">
              All modules
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
          {featuredModules.map((module) => (
            <ModuleCard key={module.title} module={module} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {quickAccess.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <div className="flex items-center gap-2">
                {item.title === "Training Roadmap" && (
                  <BarChart3 className="h-5 w-5 text-blue-600" aria-hidden="true" />
                )}
                {item.title === "SOP Library" && (
                  <FileText className="h-5 w-5 text-blue-600" aria-hidden="true" />
                )}
                {item.title === "Practice Tasks" && (
                  <ClipboardList className="h-5 w-5 text-blue-600" aria-hidden="true" />
                )}
                <CardTitle>{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-slate-600">{item.description}</p>
              <Button asChild variant="ghost" className="mt-4 px-0 text-blue-700 hover:bg-transparent">
                <Link href={item.href}>
                  Open
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
