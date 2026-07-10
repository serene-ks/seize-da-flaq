/**
 * Standard max-width + horizontal padding wrapper used by every
 * section so spacing stays consistent site-wide. Change the values
 * here, not per-section, if the site's margins ever need to shift.
 */
export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}