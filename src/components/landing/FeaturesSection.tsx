import { motion } from "framer-motion";
import {
  Mic,
  Database,
  FileText,
  Brain,
  BarChart3,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Голосовой ИИ-интервьюер",
    description: "Естественные голосовые диалоги на базе продвинутого ИИ, адаптирующегося в реальном времени.",
  },
  {
    icon: Database,
    title: "Интеграция базы знаний",
    description: "Загрузите свои материалы. Наша RAG-система обеспечит релевантные и точные оценки.",
  },
  {
    icon: FileText,
    title: "Транскрипция в реальном времени",
    description: "Каждое слово фиксируется и анализируется с точностью до говорящего.",
  },
  {
    icon: Brain,
    title: "Адаптивная оценка",
    description: "Вопросы динамически подстраиваются под ответы для более глубокой оценки.",
  },
  {
    icon: BarChart3,
    title: "Подробные отчёты",
    description: "Комплексная аналитика с разбивкой по темам и практическими рекомендациями.",
  },
  {
    icon: Award,
    title: "Сертификаты",
    description: "Получайте верифицируемые сертификаты по завершении курсов.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Всё для{" "}
            <span className="gradient-text">умной оценки</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Полноценная платформа для голосовых ИИ-интервью и обучения, созданная для масштабирования.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;