/**
 * ScrollNarrative — 三幕式 scroll-telling 核心動畫區塊
 *
 * 結構：一個高度為 300vh 的外層容器，內含 sticky 的視覺區塊。
 * 隨著使用者滾動，依序展示三個敘事幕：
 *   幕一：走在回家的路上
 *   幕二：安全資訊來自大家
 *   幕三：你的安心，由你決定
 *
 * 使用 Framer Motion 的 useScroll + useTransform 驅動動畫。
 * 支援 prefers-reduced-motion：簡化為淡入/淡出切換。
 */

import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

/* ── 子場景 ── */
import Act1 from './narrative/Act1';
import Act2 from './narrative/Act2';
import Act3 from './narrative/Act3';

export default function ScrollNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 三幕切換進度
  // Act1: 0 – 0.33 | Act2: 0.33 – 0.66 | Act3: 0.66 – 1.0
  const act1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.33, 0.38], [0, 1, 1, 0]);
  const act2Opacity = useTransform(scrollYProgress, [0.3, 0.38, 0.60, 0.68], [0, 1, 1, 0]);
  const act3Opacity = useTransform(scrollYProgress, [0.62, 0.70, 0.90, 1.0], [0, 1, 1, 1]);

  // 進度條
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // 如果偏好減少動態，以卡片形式呈現（不使用 sticky）
  if (reduced) {
    return (
      <section id="narrative" className="py-20">
        <div className="section-container space-y-16">
          <ReducedAct
            num="01"
            title="走在回家的路上"
            desc="每個人每天都在走這些路——夜歸、跑步、通勤。路的安全，是最基本的事。"
          />
          <ReducedAct
            num="02"
            title="安全資訊來自大家"
            desc="每一個標記，都來自走過這條路的人。路燈明亮、人多、便利商店⋯⋯社群的力量，讓路更透明。"
          />
          <ReducedAct
            num="03"
            title="你的安心，由你決定"
            desc="安心地圖不替你判斷，只讓你看見。導航交給 Google Maps，安心交給你自己。"
          />
        </div>
      </section>
    );
  }

  return (
    <section id="narrative" ref={containerRef} className="relative h-[300vh]">
      {/* 進度條 */}
      <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-surface-200">
        <m.div className="h-full bg-primary-500 origin-left" style={{ width: progressWidth }} />
      </div>

      {/* Sticky 視覺容器 */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* 共用地圖背景 */}
        <MapBackground scrollYProgress={scrollYProgress} />

        {/* 幕一 */}
        <m.div className="absolute inset-0 flex items-center justify-center" style={{ opacity: act1Opacity }}>
          <Act1 scrollYProgress={scrollYProgress} />
        </m.div>

        {/* 幕二 */}
        <m.div className="absolute inset-0 flex items-center justify-center" style={{ opacity: act2Opacity }}>
          <Act2 scrollYProgress={scrollYProgress} />
        </m.div>

        {/* 幕三 */}
        <m.div className="absolute inset-0 flex items-center justify-center" style={{ opacity: act3Opacity }}>
          <Act3 scrollYProgress={scrollYProgress} />
        </m.div>

        {/* 幕數指示 */}
        <ActIndicator scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}

/* ── 地圖背景 SVG ── */
function MapBackground({ scrollYProgress }: { scrollYProgress: any }) {
  const bgOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 0.08]);

  return (
    <m.div className="absolute inset-0 pointer-events-none" style={{ opacity: bgOpacity }}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        {/* 街道網格 */}
        <g stroke="#2D6A7F" strokeWidth="2" fill="none">
          {/* 橫向道路 */}
          <path d="M0 150 H800" />
          <path d="M0 300 H800" />
          <path d="M0 450 H800" />
          {/* 縱向道路 */}
          <path d="M200 0 V600" />
          <path d="M400 0 V600" />
          <path d="M600 0 V600" />
          {/* 斜向巷弄 */}
          <path d="M100 0 L300 200" />
          <path d="M500 100 L700 300" />
          <path d="M300 400 L500 600" />
        </g>
        {/* 街區色塊 */}
        <g fill="#2D6A7F" opacity="0.15">
          <rect x="220" y="170" width="160" height="110" rx="8" />
          <rect x="420" y="170" width="160" height="110" rx="8" />
          <rect x="220" y="320" width="160" height="110" rx="8" />
          <rect x="420" y="320" width="160" height="110" rx="8" />
          <rect x="30" y="320" width="150" height="110" rx="8" />
          <rect x="620" y="170" width="150" height="110" rx="8" />
        </g>
      </svg>
    </m.div>
  );
}

/* ── 幕數指示器 ── */
function ActIndicator({ scrollYProgress }: { scrollYProgress: any }) {
  const act1Active = useTransform(scrollYProgress, [0, 0.33], [1, 0.3]);
  const act2Active = useTransform(scrollYProgress, (v: number) =>
    v >= 0.3 && v <= 0.66 ? 1 : 0.3
  );
  const act3Active = useTransform(scrollYProgress, (v: number) =>
    v >= 0.62 ? 1 : 0.3
  );

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
      {[act1Active, act2Active, act3Active].map((opacity, i) => (
        <m.div
          key={i}
          className="w-2.5 h-2.5 rounded-full bg-primary-500"
          style={{ opacity }}
        />
      ))}
    </div>
  );
}

/* ── 無動效模式：卡片 ── */
function ReducedAct({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-surface-200 max-w-2xl mx-auto">
      <span className="text-xs font-bold text-primary-400 tracking-widest">ACT {num}</span>
      <h3 className="text-2xl font-bold text-surface-900 mt-2 mb-4">{title}</h3>
      <p className="text-surface-600 leading-relaxed">{desc}</p>
    </div>
  );
}
