import { Bell, CalendarDays, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b bg-white/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-500">Operations onboarding</p>
          <h1 className="truncate text-lg font-semibold text-slate-950">
            Amazon New Staff Training
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Week 2
          </Button>
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  );
}
