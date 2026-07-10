import { motion } from 'framer-motion';

const VARIANT_CLASSES = {
  primary:
    'bg-gradient-to-r from-neon-pink to-neon-purple text-white shadow-glow-pink hover:shadow-glow-purple', secondary:
    'border border-neon-cyan/60 text-neon-cyan bg-transparent hover:bg-neon-cyan/10 hover:shadow-glow-cyan',
  ghost: 'text-white/80 hover:text-white bg-transparent',
};


export default function Button({
  children,variant = 'primary',href,onClick,type = 'button',className = '',ariaLabel,disabled = false,
}) 
{
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 sm:px-8 sm:py-3.5 font-display text-sm sm:text-base font-semibold tracking-wider uppercase transition-shadow duration-300 disabled:opacity-40 disabled:cursor-not-allowed ${VARIANT_CLASSES[variant]} ${className}`;

  const motionProps = {
    whileHover: disabled ? undefined : { scale: 1.05, y: -2 },
    whileTap: disabled ? undefined : { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 22 },
  };

  if (disabled) {
    return (
      <motion.button type="button" disabled aria-label={ariaLabel} className={classes}>
        {children}
      </motion.button>
    );
  }

  if (href) {
    return (
      <motion.a href={href} aria-label={ariaLabel} className={classes} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
