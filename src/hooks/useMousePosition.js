import { useEffect, useState } from 'react';

/**
 * Tracks pointer position normalized to a -1..1 range relative to the
 * viewport center. Used for subtle parallax in the Hero background
 * layers. Returns {0,0} on touch-only devices (no mousemove fired)
 * so parallax layers simply stay still rather than breaking.
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setPosition({ x, y });
    }
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return position;
}
