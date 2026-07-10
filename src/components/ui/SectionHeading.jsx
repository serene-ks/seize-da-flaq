/**
 * Shared section-title pattern: eyebrow label, Orbitron display
 * title, optional supporting copy. Keeping this as one component
 * means every section's heading hierarchy (h2) stays consistent
 * for accessibility and visual rhythm.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  accent = 'cyan',
  className = '',
}) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';
  const accentClass = {
    cyan: 'text-neon-cyan',
    pink: 'text-neon-pink',
    purple: 'text-neon-purple',
    orange: 'text-neon-orange',
  }[accent];

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <span className={`reveal-item mb-3 font-display text-xs sm:text-sm tracking-[0.35em] uppercase ${accentClass}`}>
          {eyebrow}
        </span>
      )}
      <h2 className="reveal-item font-display text-display-lg font-bold text-white uppercase tracking-wide">
        {title}
      </h2>
      {description && (
        <p className="reveal-item mt-4 max-w-2xl text-sm sm:text-base text-white/70 font-body leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
