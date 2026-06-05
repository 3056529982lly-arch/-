"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Copy, FileCheck2, Search } from "lucide-react";
import { sopItems } from "@/data/sop";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTrainingProgress } from "@/hooks/useTrainingProgress";
import { cn } from "@/lib/utils";

const tagFilters = ["全部", "竞品", "Listing", "图片", "A+", "广告", "售后", "数据复盘"];

export default function SopPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("全部");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [copiedNow, setCopiedNow] = useState<Record<string, boolean>>({});
  const { sopCopied, actions } = useTrainingProgress();

  const filteredSops = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return sopItems.filter((item) => {
      const matchesTag = activeTag === "全部" || item.tags.includes(activeTag) || item.category === activeTag;
      const searchable = [item.title, item.description, item.category, ...item.tags]
        .join(" ")
        .toLowerCase();
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
      return matchesTag && matchesQuery;
    });
  }, [activeTag, query]);

  async function copySop(title: string, steps: string[]) {
    const text = `${title}\n${steps.map((step, index) => `${index + 1}. ${step}`).join("\n")}`;
    await navigator.clipboard.writeText(text);
    actions.markSopCopied(title);
    setCopiedNow((current) => ({ ...current, [title]: true }));
    window.setTimeout(() => {
      setCopiedNow((current) => ({ ...current, [title]: false }));
    }, 1600);
  }

  return (
    <div className="space-y-6">
      <section className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 className="text-2xl font-semibold text-slate-950">SOP流程</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            搜索流程、按标签筛选，并把步骤复制到工作记录或培训表格中。
          </p>
        </div>
        <Card>
          <CardContent className="flex items-center gap-3 p-5">
            <div className="rounded-md bg-blue-50 p-2 text-blue-700">
              <Search className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">当前结果</p>
              <p className="text-lg font-semibold text-slate-950">{filteredSops.length}个SOP</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardContent className="space-y-4 p-5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索标题、标签或说明"
              className="h-10 w-full rounded-md border bg-white pl-9 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {tagFilters.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={cn(
                  "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
                  activeTag === tag
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "bg-white text-slate-600 hover:bg-slate-50"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <section className="grid gap-4 lg:grid-cols-2">
        {filteredSops.map((item) => {
          const isExpanded = expanded[item.title] ?? false;
          const isCopied = copiedNow[item.title] || sopCopied[item.title];

          return (
            <Card key={item.title} className="flex h-full flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Badge variant="secondary">{item.category}</Badge>
                    <CardTitle className="mt-3 leading-6">{item.title}</CardTitle>
                    {sopCopied[item.title] && (
                      <p className="mt-2 text-xs font-medium text-emerald-700">已复制过</p>
                    )}
                  </div>
                  <div className="rounded-md bg-blue-50 p-2 text-blue-700">
                    <FileCheck2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="text-sm leading-6 text-slate-600">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="muted">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setExpanded((current) => ({ ...current, [item.title]: !isExpanded }))}
                  className="mt-4 flex w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  {isExpanded ? "收起流程步骤" : `展开 ${item.steps.length} 个步骤`}
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")}
                    aria-hidden="true"
                  />
                </button>

                {isExpanded && (
                  <div className="mt-4 space-y-2">
                    {item.steps.map((step, index) => (
                      <div key={step} className="flex gap-3 rounded-md border bg-slate-50 p-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white text-xs font-semibold text-blue-700">
                          {index + 1}
                        </div>
                        <p className="pt-0.5 text-sm leading-6 text-slate-700">{step}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
                  <p className="text-xs text-slate-500">更新于 {item.updated}</p>
                  <Button
                    type="button"
                    variant={isCopied ? "outline" : "default"}
                    size="sm"
                    onClick={() => copySop(item.title, item.steps)}
                  >
                    <Copy className="h-4 w-4" aria-hidden="true" />
                    {copiedNow[item.title] ? "已复制" : "复制流程"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {filteredSops.length === 0 && (
        <Card>
          <CardContent className="p-6 text-sm text-slate-500">没有找到匹配的SOP。</CardContent>
        </Card>
      )}
    </div>
  );
}
