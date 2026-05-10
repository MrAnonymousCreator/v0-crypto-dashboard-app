"use client";

import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const notificationOptions = [
  {
    id: "push",
    icon: Smartphone,
    label: "Push Notifications",
    description: "Get instant alerts on your device",
    defaultEnabled: true,
  },
  {
    id: "email",
    icon: Mail,
    label: "Email Notifications",
    description: "Receive daily signal summaries",
    defaultEnabled: true,
  },
  {
    id: "sms",
    icon: MessageSquare,
    label: "SMS Alerts",
    description: "Critical signals via text message",
    defaultEnabled: false,
  },
  {
    id: "browser",
    icon: Bell,
    label: "Browser Notifications",
    description: "Desktop notifications when trading",
    defaultEnabled: true,
  },
];

const alertTypes = [
  { id: "buy", label: "Buy Signals", defaultEnabled: true },
  { id: "sell", label: "Sell Signals", defaultEnabled: true },
  { id: "price", label: "Price Alerts", defaultEnabled: true },
  { id: "news", label: "Market News", defaultEnabled: false },
  { id: "portfolio", label: "Portfolio Updates", defaultEnabled: true },
];

export function NotificationSettings() {
  const [notifications, setNotifications] = useState<Record<string, boolean>>(
    () =>
      Object.fromEntries(
        [...notificationOptions, ...alertTypes].map((opt) => [
          opt.id,
          opt.defaultEnabled,
        ])
      )
  );

  const toggleNotification = (id: string) => {
    setNotifications((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
      <div className="mb-6 flex items-center gap-2">
        <Bell className="h-5 w-5 text-primary" />
        <h2 className="font-semibold">Notification Settings</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="mb-4 text-sm font-medium text-muted-foreground">
            Notification Channels
          </h3>
          <div className="space-y-4">
            {notificationOptions.map((option) => (
              <div
                key={option.id}
                className="flex items-center justify-between rounded-lg bg-secondary/30 p-3"
              >
                <div className="flex items-center gap-3">
                  <option.icon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <Label htmlFor={option.id} className="font-medium">
                      {option.label}
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </div>
                <Switch
                  id={option.id}
                  checked={notifications[option.id]}
                  onCheckedChange={() => toggleNotification(option.id)}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-medium text-muted-foreground">
            Alert Types
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {alertTypes.map((alert) => (
              <div
                key={alert.id}
                className="flex items-center justify-between rounded-lg bg-secondary/30 p-3"
              >
                <Label htmlFor={alert.id} className="text-sm font-medium">
                  {alert.label}
                </Label>
                <Switch
                  id={alert.id}
                  checked={notifications[alert.id]}
                  onCheckedChange={() => toggleNotification(alert.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
