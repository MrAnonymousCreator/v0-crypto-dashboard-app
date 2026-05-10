"use client";

import { Activity, DollarSign, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Active Signals",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: Activity,
    description: "vs last week",
  },
  {
    label: "Win Rate",
    value: "78.5%",
    change: "+3.2%",
    trend: "up",
    icon: TrendingUp,
    description: "last 30 days",
  },
  {
    label: "Total Profit",
    value: "$12,847",
    change: "+24.5%",
    trend: "up",
    icon: DollarSign,
    description: "this month",
  },
  {
    label: "Community",
    value: "45.2K",
    change: "+892",
    trend: "up",
    icon: Users,
    description: "active traders",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-primary/50"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <div className="rounded-lg bg-primary/10 p-2">
                <stat.icon className="h-4 w-4 text-primary" />
              </div>
            </div>

            <p className="mt-2 text-2xl font-bold">{stat.value}</p>

            <div className="mt-2 flex items-center gap-2">
              <span
                className={cn(
                  "text-sm font-medium",
                  stat.trend === "up" ? "text-emerald-400" : "text-red-400"
                )}
              >
                {stat.change}
              </span>
              <span className="text-xs text-muted-foreground">
                {stat.description}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
