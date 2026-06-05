"use client";

import { useMemo, useState } from "react";
import { AlertCircle, CheckSquare, ChevronDown, Copy, Search, Wrench } from "lucide-react";
import { caseItems } from "@/data/cases";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTrainingProgress } from "@/hooks/useTrainingProgress";
import { cn } from "@/lib/utils";

const categories = ["全部", "数据复盘", "图片与转化", "售后处理", "广告优化"];

export default function CasesPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("全部");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [copiedNow, setCopiedNow] = useState<Record<string, boolean>>({});
  const { caseCopied, actions } = useTrainingProgress();

  const filteredCases = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return caseItems.filter((item) => {
      const matchesCategory = activeCategory === "全部" || item.category === activeCategory;
      const searchable = [item.title, item.problem, item.action, ...item.checklist]
        .join(" ")
        .toLowerCase();
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  async function copyCase(title: string, checklist: string[], action: string) {
    const text = `${title}\n检查清单：\n${checklist
      .map((item, index) => `${index + 1}. ${item}`)
      .join("\n")}\n建议动作：${action}`;
    await navigator.clipboard.writeText(text);
    actions.markCaseCopied(title);
    setCopiedNow((current) => ({ ...current, [title]: true }));
    window.setTimeout(() => {
      setCopiedNow((current) => ({ ...current, [title]: false }));
    }, 1600);
  }

  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold text-slate-950">案例库</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
          搜索常见运营问题，按清单定位原因，再复制处理步骤沉淀到复盘记录。
        </p>
      </section>

      <Card>
        <CardContent className="space-y-4 p-5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索案例标题、问题或检查清单"
              className="h-10 w-full rounded-md border bg-white pl-9 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
                  activeCategory === category
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "bg-white text-slate-600 hover:bg-slate-50"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <section className="grid gap-4 md:grid-cols-2">
        {filteredCases.map((item) => {
          const isExpanded = expanded[item.title] ?? false;
          const isCopied = copiedNow[item.title] || caseCopied[item.title];

          return (
            <Card key={item.title} className="flex h-full flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Badge variant="secondary">{item.category}</Badge>
                    <CardTitle className="mt-3 leading-6">{item.title}</CardTitle>
                    {caseCopied[item.title] && (
                      <p className="mt-2 text-xs font-medium text-emerald-700">已复制过</p>
                    )}
                  </div>
                  <div className="rounded-md bg-blue-50 p-2 text-blue-700">
                    <AlertCircle className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <button
                  type="button"
                  onClick={() => setExpanded((current) => ({ ...current, [item.title]: !isExpanded }))}
                  className="flex w-full items-center justify-between rounded-md border bg-white px-3 py-2 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  {isExpanded ? "收起案例详情" : "展开问题背景与处理清单"}
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")}
                    aria-hidden="true"
                  />
                </button>

                {isExpanded && (
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border bg-slate-50 p-3">
                      <p className="text-xs font-semibold text-slate-500">问题背景</p>
                      <p className="mt-1 text-sm leading-6 text-slate-700">{item.problem}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-950">
                        <CheckSquare className="h-4 w-4 text-blue-600" aria-hidden="true" />
                        检查清单
                      </div>
                      {item.checklist.map((check) => (
                        <div key={check} className="rounded-md border bg-white px-3 py-2 text-sm leading-5 text-slate-700">
                          {check}
                        </div>
                      ))}
                    </div>
                    <div className="rounded-lg bg-blue-50 p-3">
                      <div className="flex items-center gap-2 text-sm font-semibold text-blue-800">
                        <Wrench className="h-4 w-4" aria-hidden="true" />
                        建议动作
                      </div>
                      <p className="mt-2 text-sm leading-6 text-blue-800">{item.action}</p>
                    </div>
                  </div>
                )}

                <div className="mt-auto flex justify-end pt-4">
                  <Button
                    type="button"
                    variant={isCopied ? "outline" : "default"}
                    size="sm"
                    onClick={() => copyCase(item.title, item.checklist, item.action)}
                  >
                    <Copy className="h-4 w-4" aria-hidden="true" />
                    {copiedNow[item.title] ? "已复制" : "复制处理清单"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {filteredCases.length === 0 && (
        <Card>
          <CardContent className="p-6 text-sm text-slate-500">没有找到匹配的案例。</CardContent>
        </Card>
      )}
    </div>
  );
}
