import { motion } from "framer-motion";
import { Upload, Mic, FileBarChart } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload & Configure",
    description: "Upload your knowledge base or select from our course catalog. Set your assessment criteria.",
  },
  {
    icon: Mic,
    number: "02",
    title: "AI Conducts Interview",
    description: "Our AI interviewer engages in natural voice conversation, adapting questions dynamically.",
  },
  {
    icon: FileBarChart,
    number: "03",
    title: "Get Detailed Report",
    description: "Receive comprehensive analysis with scores, recommendations, and actionable insights.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="floating-orb w-80 h-80 top-0 left-1/2 -translate-x-1/2 opacity-[0.06]" />
      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            How it <span className="gradient-text">works</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Three simple steps to transform your assessment process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="stat-mono text-5xl font-bold text-primary/20 mb-4">
                {step.number}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 translate-x-1/2 w-8 border-t border-dashed border-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
