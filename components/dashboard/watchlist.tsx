"use client";

import { Plus, Star, TrendingDown, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const watchlistData = [
  {
    id: "1",
    coin: "Bitcoin",
    symbol: "BTC",
    price: 67234.5,
    change24h: 2.45,
    volume: "32.5B",
    marketCap: "1.32T",
  },
  {
    id: "2",
    coin: "Ethereum",
    symbol: "ETH",
    price: 3456.78,
    change24h: -1.23,
    volume: "18.2B",
    marketCap: "415.6B",
  },
  {
    id: "3",
    coin: "Solana",
    symbol: "SOL",
    price: 178.45,
    change24h: 5.67,
    volume: "4.8B",
    marketCap: "78.2B",
  },
  {
    id: "4",
    coin: "Cardano",
    symbol: "ADA",
    price: 0.6234,
    change24h: -0.89,
    volume: "892M",
    marketCap: "22.1B",
  },
  {
    id: "5",
    coin: "Avalanche",
    symbol: "AVAX",
    price: 42.18,
    change24h: 3.21,
    volume: "1.2B",
    marketCap: "15.8B",
  },
];

export function Watchlist() {
  return (
    <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-border/50 p-4">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-primary" />
          <h2 className="font-semibold">Watchlist</h2>
        </div>
        <Button size="sm" variant="ghost">
          <Plus className="mr-1 h-4 w-4" />
          Add
        </Button>
      </div>

      <div className="divide-y divide-border/30">
        {watchlistData.map((coin) => (
          <div
            key={coin.id}
            className="flex items-center justify-between p-4 transition-colors hover:bg-secondary/30"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold">
                {coin.symbol.slice(0, 2)}
              </div>
              <div>
                <p className="font-medium">{coin.coin}</p>
                <p className="text-sm text-muted-foreground">{coin.symbol}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-mono font-medium">
                ${coin.price.toLocaleString()}
              </p>
              <div
                className={cn(
                  "flex items-center justify-end gap-1 text-sm",
                  coin.change24h >= 0 ? "text-emerald-400" : "text-red-400"
                )}
              >
                {coin.change24h >= 0 ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {coin.change24h >= 0 ? "+" : ""}
                {coin.change24h}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
