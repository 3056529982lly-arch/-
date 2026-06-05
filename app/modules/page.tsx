import { ShieldCheck } from "lucide-react";
import { compliancePrinciple } from "@/data/dashboard";
import { modules } from "@/data/modules";
import { ModuleCard } from "@/components/ModuleCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ModulesPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-950">课程模块</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          9门课程覆盖平台基础、账号合规、Listing、促销广告、数据复盘、售后与工具沉淀。
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <p className="text-sm font-medium text-slate-500">课程数量</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">{modules.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm font-medium text-slate-500">训练周期</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">4周</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm font-medium text-slate-500">适用类目</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">模型/积木</p>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-blue-600" aria-hidden="true" />
            <CardTitle>{compliancePrinciple.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-slate-600">{compliancePrinciple.reminder}</p>
          <details className="mt-4 rounded-lg border bg-slate-50 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-slate-950">
              查看6类合规检查点
            </summary>
            <div className="mt-3 grid gap-2 md:grid-cols-2">
              {compliancePrinciple.categories.map((item) => (
                <div key={item} className="rounded-md border bg-white px-3 py-2 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </details>
        </CardContent>
      </Card>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((module) => (
          <ModuleCard key={module.title} module={module} />
        ))}
      </section>

    </div>
  );
}
