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
    title: "Voice-based AI Interviewer",
    description: "Natural voice conversations powered by advanced AI that adapts in real-time.",
  },
  {
    icon: Database,
    title: "Knowledge Base Integration",
    description: "Upload your own content. Our RAG system ensures relevant, accurate assessments.",
  },
  {
    icon: FileText,
    title: "Real-time Transcription",
    description: "Every word captured and analyzed with speaker-level precision.",
  },
  {
    icon: Brain,
    title: "Adaptive Assessment",
    description: "Questions dynamically adjust based on responses for deeper evaluation.",
  },
  {
    icon: BarChart3,
    title: "Detailed Reports",
    description: "Comprehensive analytics with topic breakdowns and actionable recommendations.",
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Earn verifiable certificates upon successful course completion.",
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
            Everything you need for{" "}
            <span className="gradient-text">smarter assessments</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A complete platform for voice-based AI interviews and training, built for scale.
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
