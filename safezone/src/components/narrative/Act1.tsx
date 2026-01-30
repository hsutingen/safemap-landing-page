/**
 * 幕一：走在回家的路上
 *
 * - 簡化地圖背景淡入（由父層處理）
 * - 一條行走路線被畫出（SVG path animation）
 * - 三個場景 icon 出現：夜歸、跑步、通勤
 * - 文案：每個人每天都在走這些路
 */

import { m, useTransform, MotionValue } from 'framer-motion';

interface Props {
  scrollYProgress: MotionValue<number>;
}

export default function Act1({ scrollYProgress }: Props) {
  // 路線繪製進度 (0 → 0.25 的滾動區間)
  const pathLength = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  // icon 出現
  const iconsOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const iconsY = useTransform(scrollYProgress, [0.15, 0.25], [20, 0]);

  return (
    <div className="section-container relative z-10 flex flex-col items-center">
      {/* 行走路線 SVG */}
      <div className="relative w-full max-w-md h-48 mb-8">
        <svg viewBox="0 0 400 180" className="w-full h-full" fill="none">
          {/* 行走路線 */}
          <m.path
            d="M 30 140 C 80 140, 100 60, 160 80 S 260 140, 320 100 S 370 40, 380 50"
            stroke="#37957d"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            style={{ pathLength }}
          />
          {/* 起點 */}
          <m.circle cx="30" cy="140" r="6" fill="#37957d" style={{ opacity: pathLength }} />
          {/* 終點（家） */}
          <m.g style={{ opacity: pathLength }}>
            <circle cx="380" cy="50" r="8" fill="#e9ad46" />
            <text x="380" y="54" textAnchor="middle" fontSize="10" fill="white">
              H
            </text>
          </m.g>
        </svg>
      </div>

      {/* 場景 icons */}
      <m.div
        className="flex items-center gap-6 mb-8"
        style={{ opacity: iconsOpacity, y: iconsY }}
      >
        <SceneIcon icon="moon" label="夜歸" />
        <SceneIcon icon="run" label="跑步" />
        <SceneIcon icon="commute" label="通勤" />
      </m.div>

      {/* 文案 */}
      <m.div className="text-center max-w-lg" style={{ opacity: iconsOpacity }}>
        <p className="text-xs font-bold text-primary-400 tracking-widest mb-3">ACT 01</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-4">
          走在回家的路上
        </h2>
        <p className="text-lg text-surface-600 leading-relaxed">
          每個人每天都在走這些路——夜歸回家、晨間跑步、日常通勤。
          <br />
          路的安全，是最基本的事。
        </p>
      </m.div>
    </div>
  );
}

/* ── 場景 Icon ── */
function SceneIcon({ icon, label }: { icon: string; label: string }) {
  const paths: Record<string, JSX.Element> = {
    moon: (
      <path
        d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
        fill="currentColor"
      />
    ),
    run: (
      <>
        <circle cx="13.5" cy="5.5" r="2.5" fill="currentColor" />
        <path
          d="M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3A7.3 7.3 0 0 0 19 13v-2a5.4 5.4 0 0 1-3.6-1.6L14 7.6a2 2 0 0 0-1.6-.8c-.3 0-.5 0-.8.1L6 9.8V13h2V11l1.8-.9"
          fill="currentColor"
        />
      </>
    ),
    commute: (
      <>
        <path
          d="M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM18 9H6V6h12v3z"
          fill="currentColor"
        />
      </>
    ),
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600">
        <svg width="24" height="24" viewBox="0 0 24 24">
          {paths[icon]}
        </svg>
      </div>
      <span className="text-xs font-medium text-surface-500">{label}</span>
    </div>
  );
}
