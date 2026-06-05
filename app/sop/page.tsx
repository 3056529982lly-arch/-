import { FileCheck2, ListChecks, UserRound } from "lucide-react";
import { sopItems } from "@/data/sop";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SopPage() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-950">SOP Library</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          Reference procedures for common Amazon operations tasks, organized by workflow area.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sopItems.map((item) => (
          <Card key={item.title} className="flex h-full flex-col">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Badge variant="secondary">{item.category}</Badge>
                  <CardTitle className="mt-3 leading-6">{item.title}</CardTitle>
                </div>
                <div className="rounded-md bg-blue-50 p-2 text-blue-700">
                  <FileCheck2 className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <p className="text-sm leading-6 text-slate-600">{item.description}</p>
              <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
                <div className="rounded-lg border bg-slate-50 p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <ListChecks className="h-3.5 w-3.5" aria-hidden="true" />
                    Steps
                  </div>
                  <p className="mt-1 text-sm font-semibold text-slate-950">{item.steps}</p>
                </div>
                <div className="rounded-lg border bg-slate-50 p-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <UserRound className="h-3.5 w-3.5" aria-hidden="true" />
                    Owner
                  </div>
                  <p className="mt-1 text-sm font-semibold text-slate-950">{item.owner}</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">Updated {item.updated}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
