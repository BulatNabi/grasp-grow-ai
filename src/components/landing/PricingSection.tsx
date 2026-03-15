import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Стартовый",
    price: "$29",
    tokens: "50 сессий",
    description: "Идеально для начала работы",
    features: [
      "Голосовые ИИ-интервью",
      "Доступ к каталогу курсов",
      "Базовые отчёты",
      "Поддержка по email",
    ],
    featured: false,
  },
  {
    name: "Профессиональный",
    price: "$99",
    tokens: "200 сессий",
    description: "Для растущих команд и рекрутеров",
    features: [
      "Всё из Стартового",
      "Своя база знаний",
      "Продвинутая аналитика",
      "Управление кандидатами",
      "Приоритетная поддержка",
    ],
    featured: true,
  },
  {
    name: "Корпоративный",
    price: "По запросу",
    tokens: "Безлимит",
    description: "Для крупных организаций",
    features: [
      "Всё из Профессионального",
      "Персональный менеджер",
      "Кастомные интеграции",
      "Гарантия SLA",
      "SSO и комплаенс",
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
            Простое <span className="gradient-text">токен-ценообразование</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Платите только за то, что используете. Масштабируйтесь по мере роста.
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
                  Популярный
                </div>
              )}
              <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-1">
                <span className="text-4xl font-heading font-bold">{plan.price}</span>
                {plan.price !== "По запросу" && (
                  <span className="text-muted-foreground text-sm">/мес</span>
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
                <Link to="/register">Начать</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;