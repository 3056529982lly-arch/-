"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  FileText,
  Library,
  RotateCcw,
  ShieldAlert,
  Target
} from "lucide-react";
import {
  compliancePrinciple,
  dashboardStats,
  graduationStandards,
  keyMetrics,
  quickAccess,
  todaysTasks,
  weeklyOverview
} from "@/data/dashboard";
import { modules } from "@/data/modules";
import { weeklyTasks } from "@/data/tasks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ModuleCard } from "@/components/ModuleCard";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { taskId, todayTaskId, useTrainingProgress } from "@/hooks/useTrainingProgress";
import { cn } from "@/lib/utils";

const featuredModules = modules.slice(0, 4);
const weekTwoTasks = weeklyTasks[1].tasks.slice(0, 3);

export default function DashboardPage() {
  const progress = useTrainingProgress();
  const summaryCards = [
    {
      label: "已完成课程",
      value: `${progress.completedCourses}/${progress.totalCourses}`
    },
    {
      label: "已完成任务",
      value: `${progress.completedTasks}/${progress.totalTasks}`
    },
    {
      label: "测验得分",
      value: `${progress.quizScore}/${progress.totalQuizQuestions}`
    },
    {
      label: "总体进度",
      value: `${progress.overallProgress}%`
    }
  ];

  function resetProgress() {
    if (window.confirm("确定要重置所有学习进度吗？此操作只会清除本机保存的学习记录。")) {
      progress.actions.resetAll();
    }
  }

  return (
    <div className="space-y-6">
      <section className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <Card>
          <CardContent className="p-6">
            <Badge variant="secondary">内部培训 · 美国站 · 精铺/半精品团队</Badge>
            <h2 className="mt-4 text-2xl font-semibold leading-9 text-slate-950">
              {dashboardStats.title}
            </h2>
            <p className="mt-1 text-base font-medium text-blue-700">{dashboardStats.subtitle}</p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {["看懂后台", "安全上架", "数据复盘"].map((item) => (
                <div key={item} className="rounded-lg border bg-slate-50 p-3">
                  <p className="text-sm font-semibold text-slate-950">{item}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    4周内建立可执行的基础运营能力
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {keyMetrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border bg-slate-50 p-3">
                  <p className="text-xs font-medium text-slate-500">{metric.label}</p>
                  <p className="mt-1 text-xl font-semibold text-slate-950">{metric.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="h-full">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardTitle>学习进度</CardTitle>
                <p className="mt-1 text-sm text-slate-500">根据课程、任务和测验自动计算</p>
              </div>
              <Button type="button" variant="outline" size="sm" onClick={resetProgress}>
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                重置学习进度
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-semibold tracking-normal text-slate-950">
                {progress.overallProgress}%
              </span>
              <span className="pb-1 text-sm text-slate-500">总体进度</span>
            </div>
            <Progress value={progress.overallProgress} className="mt-5" />
            <div className="mt-5 grid grid-cols-2 gap-3">
              {summaryCards.map((card) => (
                <div key={card.label} className="rounded-lg border bg-slate-50 p-3">
                  <p className="text-xs font-medium text-slate-500">{card.label}</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-950">{card.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-4">
              <div>
                <CardTitle>本周重点</CardTitle>
                <p className="mt-1 text-sm text-slate-500">当前训练优先级</p>
              </div>
              <Target className="h-5 w-5 text-blue-600" aria-hidden="true" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold leading-8 text-slate-950">
              {dashboardStats.weeklyFocus}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              目标：输出竞品表、关键词表、标题草稿和合规检查表。
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-lg border bg-slate-50 p-3">
                <p className="text-xs font-medium text-slate-500">当前阶段</p>
                <p className="mt-1 text-sm font-semibold text-slate-950">
                  {dashboardStats.currentStage}
                </p>
              </div>
              <div className="rounded-lg border bg-slate-50 p-3">
                <p className="text-xs font-medium text-slate-500">下一检查点</p>
                <p className="mt-1 text-sm font-semibold text-slate-950">
                  {dashboardStats.nextCheckpoint}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <CardTitle>今日学习任务</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              {todaysTasks.map((task, index) => (
                <button
                  type="button"
                  key={task}
                  onClick={() => progress.actions.toggleTodayTask(task)}
                  className={cn(
                    "flex gap-3 rounded-lg border bg-slate-50 p-3 text-left transition-colors hover:border-blue-300 hover:bg-blue-50",
                    progress.todayCompletion[todayTaskId(task)] && "border-emerald-200 bg-emerald-50"
                  )}
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white text-sm font-semibold text-blue-700">
                    {index + 1}
                  </div>
                  <p className="flex-1 text-sm leading-5 text-slate-700">{task}</p>
                  {progress.todayCompletion[todayTaskId(task)] && (
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  )}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <CardTitle>4周训练概览</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {weeklyOverview.map((week) => (
                <div key={week} className="rounded-lg border bg-slate-50 p-3 text-sm font-medium text-slate-700">
                  {week}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <CardTitle>合规提醒</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base font-semibold leading-7 text-slate-950">
              {compliancePrinciple.reminder}
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {["不误导买家", "不写无法证明", "不碰评价操纵"].map((item) => (
                <div key={item} className="rounded-md border bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-950">核心课程模块</h2>
            <p className="mt-1 text-sm text-slate-500">覆盖平台、合规、Listing、广告、数据和售后</p>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/modules">
              全部课程
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

      <section className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <CardTitle>实战任务快照</CardTitle>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/tasks">
                  查看全部
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
                    <Badge
                      variant={
                        progress.taskCompletion[taskId("第2周", task.title)]
                          ? "success"
                          : task.status === "进行中"
                            ? "secondary"
                            : "muted"
                      }
                    >
                      {progress.taskCompletion[taskId("第2周", task.title)] ? "已完成" : task.status}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{task.deliverable}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>新人结业考核标准</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 sm:grid-cols-2">
              {graduationStandards.map((standard) => (
                <div key={standard} className="rounded-md border bg-slate-50 px-3 py-2 text-sm leading-5 text-slate-700">
                  {standard}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {quickAccess.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <div className="flex items-center gap-2">
                {item.title === "培训路线" && (
                  <BarChart3 className="h-5 w-5 text-blue-600" aria-hidden="true" />
                )}
                {item.title === "SOP流程" && (
                  <FileText className="h-5 w-5 text-blue-600" aria-hidden="true" />
                )}
                {item.title === "案例库" && (
                  <Library className="h-5 w-5 text-blue-600" aria-hidden="true" />
                )}
                <CardTitle>{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-slate-600">{item.description}</p>
              <Button asChild variant="ghost" className="mt-4 px-0 text-blue-700 hover:bg-transparent">
                <Link href={item.href}>
                  打开
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
