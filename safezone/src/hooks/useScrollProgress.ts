import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

/**
 * 取得某個元素在視窗中的滾動進度 (0–1)。
 * 用於 scroll-telling 敘事區塊。
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  offset: [string, string] = ['start start', 'end end']
): { scrollYProgress: MotionValue<number> } {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });
  return { scrollYProgress };
}

/**
 * 將 scrollYProgress 映射到指定範圍的 opacity。
 */
export function useProgressOpacity(
  progress: MotionValue<number>,
  range: [number, number],
  outputRange: [number, number] = [0, 1]
): MotionValue<number> {
  return useTransform(progress, range, outputRange);
}
