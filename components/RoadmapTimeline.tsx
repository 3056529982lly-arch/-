import { Check, Circle, Play } from "lucide-react";
import { RoadmapStage } from "@/data/roadmap";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type RoadmapTimelineProps = {
  stages: RoadmapStage[];
};

const statusIcon = {
  "已完成": Check,
  "进行中": Play,
  "未开始": Circle
};

const statusClass = {
  "已完成": "bg-emerald-600 text-white",
  "进行中": "bg-blue-600 text-white",
  "未开始": "bg-white text-slate-400"
};

export function RoadmapTimeline({ stages }: RoadmapTimelineProps) {
  return (
    <div className="space-y-3">
      {stages.map((stage) => {
        const Icon = statusIcon[stage.status];
        return (
          <Card key={stage.week}>
            <CardContent className="p-5">
              <div className="grid gap-4 md:grid-cols-[56px_1fr_auto] md:items-start">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border",
                    statusClass[stage.status]
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium text-blue-700">{stage.week}</p>
                    <Badge variant={stage.status === "未开始" ? "muted" : "secondary"}>
                      {stage.status}
                    </Badge>
                  </div>
                  <h2 className="mt-2 text-base font-semibold text-slate-950">
                    {stage.title}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {stage.relatedCourses.map((course) => (
                      <Badge key={course} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {stage.coreOutputs.map((output) => (
                      <div key={output} className="rounded-md border bg-slate-50 px-3 py-2 text-sm text-slate-700">
                        {output}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-slate-50 p-3 text-sm text-slate-600 md:max-w-64">
                  <span className="font-medium text-slate-800">考核：</span> {stage.assessment}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
