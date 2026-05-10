"use client";

import { Check, Crown, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Get started with essential signals",
    features: [
      "5 signals per day",
      "Basic coin tracking",
      "Community access",
      "Email notifications",
    ],
    popular: false,
    current: true,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious traders",
    features: [
      "Unlimited signals",
      "Advanced analytics",
      "Priority alerts",
      "API access",
      "Custom watchlists",
      "24/7 support",
    ],
    popular: true,
    current: false,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For trading firms",
    features: [
      "Everything in Pro",
      "White-label solution",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Team management",
    ],
    popular: false,
    current: false,
  },
];

export function PremiumSection() {
  return (
    <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
      <div className="mb-6 flex items-center gap-2">
        <Crown className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-semibold">Upgrade Your Plan</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative overflow-hidden rounded-xl border p-5 transition-all",
              plan.popular
                ? "border-primary bg-primary/5"
                : "border-border/50 bg-secondary/20"
            )}
          >
            {plan.popular && (
              <div className="absolute -right-12 top-3 rotate-45 bg-primary px-12 py-1 text-xs font-semibold text-primary-foreground">
                Popular
              </div>
            )}

            <div className="mb-4">
              <div className="flex items-center gap-2">
                {plan.name === "Pro" ? (
                  <Zap className="h-5 w-5 text-primary" />
                ) : plan.name === "Enterprise" ? (
                  <Sparkles className="h-5 w-5 text-primary" />
                ) : null}
                <h3 className="font-semibold">{plan.name}</h3>
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>
            </div>

            <ul className="mb-5 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              className="w-full"
              variant={plan.current ? "secondary" : plan.popular ? "default" : "outline"}
              disabled={plan.current}
            >
              {plan.current ? "Current Plan" : "Choose Plan"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
