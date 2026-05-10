"use client";

import {
  ArrowDown,
  ArrowUp,
  CheckCircle,
  History,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const historyData = [
  {
    id: "1",
    coin: "BTC",
    type: "BUY" as const,
    entryPrice: 64200,
    exitPrice: 67500,
    profit: 5.14,
    status: "won" as const,
    date: "2024-01-15",
  },
  {
    id: "2",
    coin: "ETH",
    type: "SELL" as const,
    entryPrice: 3650,
    exitPrice: 3420,
    profit: 6.3,
    status: "won" as const,
    date: "2024-01-14",
  },
  {
    id: "3",
    coin: "SOL",
    type: "BUY" as const,
    entryPrice: 185,
    exitPrice: 178,
    profit: -3.78,
    status: "lost" as const,
    date: "2024-01-13",
  },
  {
    id: "4",
    coin: "AVAX",
    type: "BUY" as const,
    entryPrice: 38.5,
    exitPrice: 44.2,
    profit: 14.81,
    status: "won" as const,
    date: "2024-01-12",
  },
  {
    id: "5",
    coin: "LINK",
    type: "BUY" as const,
    entryPrice: 14.2,
    exitPrice: 15.8,
    profit: 11.27,
    status: "won" as const,
    date: "2024-01-11",
  },
  {
    id: "6",
    coin: "DOT",
    type: "SELL" as const,
    entryPrice: 7.8,
    exitPrice: 8.1,
    profit: -3.85,
    status: "lost" as const,
    date: "2024-01-10",
  },
];

export function SignalHistory() {
  const winRate = (
    (historyData.filter((h) => h.status === "won").length / historyData.length) *
    100
  ).toFixed(0);

  const totalProfit = historyData
    .reduce((acc, h) => acc + h.profit, 0)
    .toFixed(2);

  return (
    <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="flex flex-col gap-4 border-b border-border/50 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <History className="h-5 w-5 text-primary" />
          <h2 className="font-semibold">Signal History</h2>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <p className="text-lg font-bold text-emerald-400">{winRate}%</p>
            <p className="text-xs text-muted-foreground">Win Rate</p>
          </div>
          <div className="text-center">
            <p
              className={cn(
                "text-lg font-bold",
                Number(totalProfit) >= 0 ? "text-emerald-400" : "text-red-400"
              )}
            >
              {Number(totalProfit) >= 0 ? "+" : ""}
              {totalProfit}%
            </p>
            <p className="text-xs text-muted-foreground">Total Profit</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/30 text-left text-sm text-muted-foreground">
              <th className="p-4">Coin</th>
              <th className="p-4">Type</th>
              <th className="p-4">Entry</th>
              <th className="p-4">Exit</th>
              <th className="p-4">Profit</th>
              <th className="p-4">Status</th>
              <th className="p-4 hidden sm:table-cell">Date</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((trade) => (
              <tr
                key={trade.id}
                className="border-b border-border/20 transition-colors hover:bg-secondary/20"
              >
                <td className="p-4 font-medium">{trade.coin}</td>
                <td className="p-4">
                  <Badge
                    className={cn(
                      "text-xs",
                      trade.type === "BUY"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-red-500/20 text-red-400"
                    )}
                  >
                    {trade.type === "BUY" ? (
                      <ArrowUp className="mr-1 h-3 w-3" />
                    ) : (
                      <ArrowDown className="mr-1 h-3 w-3" />
                    )}
                    {trade.type}
                  </Badge>
                </td>
                <td className="p-4 font-mono text-sm">
                  ${trade.entryPrice.toLocaleString()}
                </td>
                <td className="p-4 font-mono text-sm">
                  ${trade.exitPrice.toLocaleString()}
                </td>
                <td
                  className={cn(
                    "p-4 font-mono text-sm font-medium",
                    trade.profit >= 0 ? "text-emerald-400" : "text-red-400"
                  )}
                >
                  {trade.profit >= 0 ? "+" : ""}
                  {trade.profit}%
                </td>
                <td className="p-4">
                  {trade.status === "won" ? (
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-400" />
                  )}
                </td>
                <td className="p-4 hidden text-sm text-muted-foreground sm:table-cell">
                  {trade.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
