"use client";

import { useState } from "react";
import { Header } from "@/components/dashboard/header";
import { Sidebar } from "@/components/dashboard/sidebar";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { SignalCard, type Signal } from "@/components/dashboard/signal-card";
import { AlertCards } from "@/components/dashboard/alert-cards";
import { Watchlist } from "@/components/dashboard/watchlist";
import { SignalHistory } from "@/components/dashboard/signal-history";
import { PremiumSection } from "@/components/dashboard/premium-section";
import { NotificationSettings } from "@/components/dashboard/notification-settings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const activeSignals: Signal[] = [
  {
    id: "1",
    coin: "Bitcoin",
    symbol: "BTC",
    type: "BUY",
    price: 67234.5,
    targetPrice: 72500,
    stopLoss: 64000,
    confidence: 92,
    timeframe: "4H",
    timestamp: "2024-01-15T10:30:00Z",
    status: "active",
  },
  {
    id: "2",
    coin: "Ethereum",
    symbol: "ETH",
    type: "BUY",
    price: 3456.78,
    targetPrice: 3850,
    stopLoss: 3200,
    confidence: 88,
    timeframe: "1D",
    timestamp: "2024-01-15T09:15:00Z",
    status: "active",
  },
  {
    id: "3",
    coin: "Solana",
    symbol: "SOL",
    type: "SELL",
    price: 178.45,
    targetPrice: 155,
    stopLoss: 190,
    confidence: 75,
    timeframe: "1H",
    timestamp: "2024-01-15T08:00:00Z",
    status: "active",
  },
  {
    id: "4",
    coin: "Avalanche",
    symbol: "AVAX",
    type: "BUY",
    price: 42.18,
    targetPrice: 52,
    stopLoss: 38,
    confidence: 82,
    timeframe: "4H",
    timestamp: "2024-01-15T07:45:00Z",
    status: "active",
  },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Background gradient effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-primary/3 blur-3xl" />
      </div>

      <Header onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Page Header */}
            <div>
              <h1 className="text-2xl font-bold md:text-3xl">
                Welcome back, Trader
              </h1>
              <p className="mt-1 text-muted-foreground">
                Here&apos;s what&apos;s happening with your signals today.
              </p>
            </div>

            {/* Stats Overview */}
            <StatsCards />

            {/* Main Content Tabs */}
            <Tabs defaultValue="signals" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid lg:grid-cols-4 bg-secondary/50 backdrop-blur">
                <TabsTrigger value="signals">Signals</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="premium">Premium</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="signals" className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-3">
                  {/* Active Signals */}
                  <div className="space-y-4 lg:col-span-2">
                    <h2 className="font-semibold">Active Signals</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {activeSignals.map((signal) => (
                        <SignalCard key={signal.id} signal={signal} />
                      ))}
                    </div>
                  </div>

                  {/* Alerts Sidebar */}
                  <div className="space-y-6">
                    <AlertCards />
                  </div>
                </div>

                {/* Watchlist */}
                <Watchlist />
              </TabsContent>

              <TabsContent value="history">
                <SignalHistory />
              </TabsContent>

              <TabsContent value="premium">
                <PremiumSection />
              </TabsContent>

              <TabsContent value="settings">
                <NotificationSettings />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
