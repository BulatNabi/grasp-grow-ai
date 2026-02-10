import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import VoiceWaveform from "@/components/VoiceWaveform";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background orbs */}
      <div className="floating-orb w-96 h-96 -top-48 -left-48" />
      <div className="floating-orb w-[500px] h-[500px] -bottom-64 -right-64 opacity-10" />
      <div className="floating-orb w-64 h-64 top-1/3 right-1/4 opacity-[0.08] animate-float" />

      <div className="container relative z-10 text-center max-w-4xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-sm text-accent">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            AI-Powered Voice Platform
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-heading font-800 leading-tight mb-6"
        >
          AI-Powered{" "}
          <span className="gradient-text">Interviews</span>
          <br />& Training
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Conduct voice-based AI interviews and training sessions that adapt to
          each candidate. Get detailed reports, certifications, and actionable insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button variant="gradient" size="lg" className="text-base px-8 py-6 rounded-xl" asChild>
            <Link to="/register">
              For Companies <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 rounded-xl" asChild>
            <Link to="/register">For Individuals</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-card p-8 max-w-md mx-auto"
        >
          <p className="text-sm text-muted-foreground mb-4">Live AI Interview Preview</p>
          <VoiceWaveform />
          <p className="text-xs text-muted-foreground mt-4 stat-mono">
            Analyzing response patterns...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
