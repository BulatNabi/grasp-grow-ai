import { motion } from "framer-motion";

const VoiceWaveform = () => {
  const bars = 24;

  return (
    <div className="flex items-center justify-center gap-[3px] h-16">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-primary to-accent"
          animate={{
            height: [8, 28, 12, 32, 8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.07,
          }}
        />
      ))}
    </div>
  );
};

export default VoiceWaveform;
