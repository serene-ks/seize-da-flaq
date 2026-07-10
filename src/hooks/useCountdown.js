import { useEffect, useState } from 'react';
import { getCountdownState } from '@utils/countdown';

/**
 * Ticks every second and returns the current CountdownState for the
 * given ISO date. Reads the interval only — never the date itself —
 * from its caller, so the caller stays responsible for sourcing the
 * date from eventConfig.js.
 *
 * @param {string|null} targetDateISO
 */
export function useCountdown(targetDateISO) {
  const [state, setState] = useState(() => getCountdownState(targetDateISO));

  useEffect(() => {
    setState(getCountdownState(targetDateISO));
    if (!targetDateISO) return undefined;

    const id = setInterval(() => {
      setState(getCountdownState(targetDateISO));
    }, 1000);

    return () => clearInterval(id);
  }, [targetDateISO]);

  return state;
}
