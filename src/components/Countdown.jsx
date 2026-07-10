import { AnimatePresence, motion } from 'framer-motion';
import { eventConfig } from '@constants/eventConfig';
import { useCountdown } from '@hooks/useCountdown';
import { pad2 } from '@utils/countdown';

function TimeBlock({ value, label }) {
  return (
    <div className="glass-panel flex min-w-[68px] flex-col items-center rounded-xl px-3 py-2.5 sm:min-w-[92px] sm:px-6 sm:py-4">
      <div className="relative h-9 overflow-hidden sm:h-12">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -22, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="block font-display text-2xl font-bold tabular-nums text-neon-cyan text-glow-cyan sm:text-4xl"
          >
            {pad2(value)}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-1 text-[9px] uppercase tracking-widest text-white/60 sm:text-xs">
        {label}
      </span>
    </div>
  );
}

/**
 * Renders the countdown purely from `eventConfig.countdown`.
 * - null targetDate            -> "Mission Date Will Be Announced Soon"
 * - targetDate already passed  -> "Mission Has Begun"
 * - otherwise                  -> live Days/Hours/Minutes/Seconds blocks
 *
 * To change the date site-wide: edit `countdown.targetDate` in
 * src/constants/eventConfig.js. Nothing here needs to change.
 */
export default function Countdown({ className = '' }) {
  const { countdown } = eventConfig;
  const state = useCountdown(countdown.targetDate);

  if (state.status === 'unconfigured') {
    return (
      <div
        className={`glass-panel inline-flex items-center gap-3 rounded-full px-5 py-3 sm:px-6 ${className}`}
        role="status"
      >
        <span className="h-2 w-2 rounded-full bg-neon-orange animate-pulse-glow" aria-hidden="true" />
        <p className="font-display text-xs tracking-wide text-white/80 sm:text-base">
          {countdown.unconfiguredLabel}
        </p>
      </div>
    );
  }

  if (state.status === 'completed') {
    return (
      <div
        className={`glass-panel inline-flex items-center gap-3 rounded-full px-5 py-3 shadow-glow-pink sm:px-6 ${className}`}
        role="status"
      >
        <span className="h-2 w-2 rounded-full bg-neon-pink animate-pulse-glow" aria-hidden="true" />
        <p className="font-display text-xs tracking-wide text-neon-pink text-glow-pink sm:text-base">
          {countdown.completedLabel}
        </p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div
        className="flex items-center gap-2 sm:gap-4"
        role="timer"
        aria-live="off"
        aria-label="Countdown to mission start"
      >
        <TimeBlock value={state.days} label="Days" />
        <TimeBlock value={state.hours} label="Hours" />
        <TimeBlock value={state.minutes} label="Minutes" />
        <TimeBlock value={state.seconds} label="Seconds" />
      </div>
      {countdown.isPlaceholder && (
        <span className="text-[10px] uppercase tracking-widest text-white/40">
          Provisional date — final schedule to be announced
        </span>
      )}
    </div>
  );
}
