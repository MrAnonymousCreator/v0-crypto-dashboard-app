"use client";

import { ArrowDown, ArrowUp, Clock, Target, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Signal {
  id: string;
  coin: string;
  symbol: string;
  type: "BUY" | "SELL";
  price: number;
  targetPrice: number;
  stopLoss: number;
  confidence: number;
  timeframe: string;
  timestamp: string;
  status: "active" | "closed" | "pending";
}

export function SignalCard({ signal }: { signal: Signal }) {
  const isBuy = signal.type === "BUY";
  const potentialGain = (
    ((signal.targetPrice - signal.price) / signal.price) *
    100
  ).toFixed(1);

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/80">
      {/* Glassmorphism gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-lg font-bold">
              {signal.symbol.slice(0, 2)}
            </div>
            <div>
              <h3 className="font-semibold">{signal.coin}</h3>
              <p className="text-sm text-muted-foreground">{signal.symbol}/USDT</p>
            </div>
          </div>
          <Badge
            className={cn(
              "font-semibold",
              isBuy
                ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
                : "bg-red-500/20 text-red-400 hover:bg-red-500/30"
            )}
          >
            {isBuy ? (
              <ArrowUp className="mr-1 h-3 w-3" />
            ) : (
              <ArrowDown className="mr-1 h-3 w-3" />
            )}
            {signal.type}
          </Badge>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">Entry Price</p>
            <p className="font-mono text-sm font-medium">
              ${signal.price.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Target</p>
            <p className="font-mono text-sm font-medium text-emerald-400">
              ${signal.targetPrice.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Stop Loss</p>
            <p className="font-mono text-sm font-medium text-red-400">
              ${signal.stopLoss.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Target className="h-3 w-3" />
              <span className="text-emerald-400">+{potentialGain}%</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3" />
              <span>{signal.confidence}% confidence</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{signal.timeframe}</span>
            </div>
          </div>
          <Button size="sm" variant="secondary">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
