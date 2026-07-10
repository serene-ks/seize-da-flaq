/**
 * countdown.js
 * Pure, framework-agnostic countdown math. No JSX here — the
 * Countdown component (Milestone 2) will call getCountdownState()
 * on an interval and render whatever it returns.
 */

/**
 * @typedef {Object} CountdownState
 * @property {'unconfigured'|'counting'|'completed'} status
 * @property {number} days
 * @property {number} hours
 * @property {number} minutes
 * @property {number} seconds
 */

/**
 * @param {string|null} targetDateISO - ISO 8601 string (or null if unset)
 * @returns {CountdownState}
 */
export function getCountdownState(targetDateISO) {
  if (!targetDateISO) {
    return { status: 'unconfigured', days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const target = new Date(targetDateISO).getTime();

  if (Number.isNaN(target)) {
    // Defensive: malformed config value should never crash the UI.
    return { status: 'unconfigured', days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { status: 'completed', days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { status: 'counting', days, hours, minutes, seconds };
}

/** Zero-pads a number to 2 digits for display, e.g. 4 -> "04". */
export function pad2(n) {
  return String(n).padStart(2, '0');
}
