import { motion } from 'framer-motion';

const GLOW_CLASSES = {
  cyan: 'hover:shadow-glow-cyan',
  pink: 'hover:shadow-glow-pink',
  purple: 'hover:shadow-glow-purple',
  orange: 'hover:shadow-glow-orange',
};

export default function GlassCard({ children, className = '', glow = 'cyan', hover = true, as: Tag = 'div', ...props }) {
  const MotionTag = motion[Tag] ?? motion.div;
  return (
    <MotionTag {...props}
      className={`glass-panel rounded-2xl p-6 sm:p-8 transition-shadow duration-500 ${
        hover ? GLOW_CLASSES[glow] : ''
      } ${className}`}
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      {children}
    </MotionTag>
  );
}
