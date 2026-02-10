import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "$29",
    tokens: "50 sessions",
    description: "Perfect for individuals getting started",
    features: [
      "Voice AI interviews",
      "Course catalog access",
      "Basic reports",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$99",
    tokens: "200 sessions",
    description: "For growing teams and recruiters",
    features: [
      "Everything in Starter",
      "Custom knowledge base",
      "Advanced analytics",
      "Candidate management",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    tokens: "Unlimited",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "SSO & compliance",
    ],
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Simple, <span className="gradient-text">token-based</span> pricing
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Pay only for what you use. Scale up as you grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-6 border ${
                plan.featured
                  ? "border-primary/40 bg-primary/5 shadow-[0_0_40px_hsla(263,70%,58%,0.1)]"
                  : "border-border/30 bg-card/60 backdrop-blur-xl"
              } relative`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-1">
                <span className="text-4xl font-heading font-bold">{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span className="text-muted-foreground text-sm">/month</span>
                )}
              </div>
              <p className="text-sm text-accent stat-mono mb-6">{plan.tokens}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? "gradient" : "hero-outline"}
                className="w-full rounded-xl"
                asChild
              >
                <Link to="/register">Get Started</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
