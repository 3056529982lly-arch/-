import { modules } from "@/data/modules";
import { ModuleCard } from "@/components/ModuleCard";
import { Card, CardContent } from "@/components/ui/card";

export default function ModulesPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-950">Amazon Modules</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          Each module combines concept training, SOP review, hands-on practice, and assessment.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <p className="text-sm font-medium text-slate-500">Modules</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">{modules.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm font-medium text-slate-500">Average progress</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">50%</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm font-medium text-slate-500">Estimated learning</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">48 hrs</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((module) => (
          <ModuleCard key={module.title} module={module} />
        ))}
      </section>
    </div>
  );
}
