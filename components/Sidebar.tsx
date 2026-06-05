"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpenCheck,
  ClipboardCheck,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Route,
  ShoppingBag
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Training Roadmap", href: "/roadmap", icon: Route },
  { name: "Amazon Modules", href: "/modules", icon: GraduationCap },
  { name: "SOP Library", href: "/sop", icon: FileText },
  { name: "Practice Tasks", href: "/tasks", icon: ClipboardCheck },
  { name: "Quiz & Assessment", href: "/quiz", icon: BookOpenCheck }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b bg-white lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-72 lg:border-b-0 lg:border-r">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center gap-3 border-b px-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white">
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">Amazon Ops Training</p>
            <p className="text-xs text-slate-500">Onboarding dashboard</p>
          </div>
        </div>

        <nav className="flex gap-1 overflow-x-auto px-3 py-3 lg:flex-col lg:overflow-visible">
          {navigation.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex min-w-fit items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950",
                  active && "bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto hidden border-t p-5 lg:block">
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-950">Week 2 Focus</p>
            <p className="mt-1 text-sm leading-5 text-slate-600">
              Research competitors, improve listings, and build better operating habits.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
