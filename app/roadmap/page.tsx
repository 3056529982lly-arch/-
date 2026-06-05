import { roadmap } from "@/data/roadmap";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RoadmapPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">培训路线</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            用4周把新人从“会找入口”带到“能独立完成基础运营判断与复盘”。
          </p>
        </div>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>路线状态</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg bg-emerald-50 p-3">
                <p className="text-xl font-semibold text-emerald-700">1</p>
                <p className="text-xs text-emerald-700">已完成</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-3">
                <p className="text-xl font-semibold text-blue-700">1</p>
                <p className="text-xs text-blue-700">进行中</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xl font-semibold text-slate-700">2</p>
                <p className="text-xs text-slate-500">未开始</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      <RoadmapTimeline stages={roadmap} />
    </div>
  );
}
