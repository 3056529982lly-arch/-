import { Check, Circle, Play } from "lucide-react";
import { RoadmapStage } from "@/data/roadmap";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type RoadmapTimelineProps = {
  stages: RoadmapStage[];
};

const statusIcon = {
  Completed: Check,
  "In Progress": Play,
  Upcoming: Circle
};

const statusClass = {
  Completed: "bg-emerald-600 text-white",
  "In Progress": "bg-blue-600 text-white",
  Upcoming: "bg-white text-slate-400"
};

export function RoadmapTimeline({ stages }: RoadmapTimelineProps) {
  return (
    <div className="space-y-3">
      {stages.map((stage) => {
        const Icon = statusIcon[stage.status];
        return (
          <Card key={stage.stage}>
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
                    <p className="text-sm font-medium text-blue-700">Stage {stage.stage}</p>
                    <Badge variant={stage.status === "Upcoming" ? "muted" : "secondary"}>
                      {stage.status}
                    </Badge>
                  </div>
                  <h2 className="mt-2 text-base font-semibold text-slate-950">
                    {stage.title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{stage.description}</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3 text-sm text-slate-600 md:max-w-64">
                  <span className="font-medium text-slate-800">Outcome:</span> {stage.outcome}
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
