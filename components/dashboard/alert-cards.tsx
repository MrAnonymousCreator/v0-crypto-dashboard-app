"use client";

import { AlertTriangle, Bell, Flame, Rocket, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const initialAlerts = [
  {
    id: "1",
    type: "urgent" as const,
    icon: Flame,
    title: "BTC Breaking Resistance",
    message: "Bitcoin is testing the $68,000 resistance level. Strong buy signal expected.",
    time: "2 min ago",
  },
  {
    id: "2",
    type: "signal" as const,
    icon: TrendingUp,
    title: "New ETH Buy Signal",
    message: "Entry at $3,450 with target $3,800. Confidence: 85%",
    time: "15 min ago",
  },
  {
    id: "3",
    type: "info" as const,
    icon: Bell,
    title: "SOL Alert Triggered",
    message: "Your price alert for Solana at $180 has been triggered.",
    time: "1 hour ago",
  },
  {
    id: "4",
    type: "warning" as const,
    icon: AlertTriangle,
    title: "High Volatility Warning",
    message: "Market showing increased volatility. Trade with caution.",
    time: "2 hours ago",
  },
  {
    id: "5",
    type: "opportunity" as const,
    icon: Rocket,
    title: "Breakout Opportunity",
    message: "AVAX showing bullish divergence on 4H chart.",
    time: "3 hours ago",
  },
];

const alertStyles = {
  urgent: "border-red-500/30 bg-red-500/5",
  signal: "border-emerald-500/30 bg-emerald-500/5",
  info: "border-blue-500/30 bg-blue-500/5",
  warning: "border-yellow-500/30 bg-yellow-500/5",
  opportunity: "border-primary/30 bg-primary/5",
};

const iconStyles = {
  urgent: "text-red-400 bg-red-500/10",
  signal: "text-emerald-400 bg-emerald-500/10",
  info: "text-blue-400 bg-blue-500/10",
  warning: "text-yellow-400 bg-yellow-500/10",
  opportunity: "text-primary bg-primary/10",
};

export function AlertCards() {
  const [alerts, setAlerts] = useState(initialAlerts);

  const dismissAlert = (id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Recent Alerts</h2>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          View All
        </Button>
      </div>

      <div className="space-y-2">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={cn(
              "group relative flex items-start gap-3 rounded-xl border p-4 backdrop-blur-sm transition-all hover:scale-[1.01]",
              alertStyles[alert.type]
            )}
          >
            <div className={cn("rounded-lg p-2", iconStyles[alert.type])}>
              <alert.icon className="h-4 w-4" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium text-sm">{alert.title}</h3>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {alert.time}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                {alert.message}
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
              onClick={() => dismissAlert(alert.id)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}

        {alerts.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-xl border border-border/50 bg-card/30 py-8 text-center">
            <Bell className="h-10 w-10 text-muted-foreground/50" />
            <p className="mt-2 text-sm text-muted-foreground">No alerts</p>
          </div>
        )}
      </div>
    </div>
  );
}
