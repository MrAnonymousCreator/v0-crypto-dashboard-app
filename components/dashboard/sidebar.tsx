"use client";

import {
  BarChart3,
  Bell,
  Crown,
  History,
  Home,
  Settings,
  Star,
  TrendingUp,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Dashboard", href: "#dashboard", active: true },
  { icon: TrendingUp, label: "Signals", href: "#signals" },
  { icon: Star, label: "Watchlist", href: "#watchlist" },
  { icon: History, label: "History", href: "#history" },
  { icon: BarChart3, label: "Analytics", href: "#analytics" },
  { icon: Bell, label: "Notifications", href: "#notifications" },
  { icon: Crown, label: "Premium", href: "#premium" },
  { icon: Settings, label: "Settings", href: "#settings" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 border-r border-border/40 bg-card/95 backdrop-blur-xl transition-transform duration-300 md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 md:hidden">
          <span className="text-lg font-semibold">Menu</span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
              {item.label === "Premium" && (
                <span className="ml-auto rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary">
                  Upgrade
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 p-4 backdrop-blur">
            <p className="text-sm font-medium">Unlock Premium</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Get unlimited signals and alerts
            </p>
            <Button size="sm" className="mt-3 w-full">
              Upgrade Now
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
