import { roadmap } from "@/data/roadmap";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RoadmapPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">Training Roadmap</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            A structured onboarding path from Amazon platform basics to weekly operating review.
          </p>
        </div>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Roadmap Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg bg-emerald-50 p-3">
                <p className="text-xl font-semibold text-emerald-700">1</p>
                <p className="text-xs text-emerald-700">Done</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-3">
                <p className="text-xl font-semibold text-blue-700">1</p>
                <p className="text-xs text-blue-700">Active</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xl font-semibold text-slate-700">7</p>
                <p className="text-xs text-slate-500">Next</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <RoadmapTimeline stages={roadmap} />
    </div>
  );
}
