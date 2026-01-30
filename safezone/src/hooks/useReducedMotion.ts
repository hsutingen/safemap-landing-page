import { useEffect, useState } from 'react';
import { config } from '../config';

/**
 * 偵測使用者是否偏好減少動態效果。
 * 同時尊重系統設定與 config 預設值。
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(config.reducedMotionDefault);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}
