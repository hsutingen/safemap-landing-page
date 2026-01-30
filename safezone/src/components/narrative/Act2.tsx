/**
 * 幕二：安全資訊來自大家
 *
 * - 地圖上逐漸出現點位（stagger）
 * - tag chips 出現：路燈明亮、人多、便利商店等
 * - 文案：每一個標記，都來自走過這條路的人
 */

import { m, useTransform, MotionValue } from 'framer-motion';

interface Props {
  scrollYProgress: MotionValue<number>;
}

// 模擬地圖上的標記點位
const mapPoints = [
  { x: 120, y: 100, delay: 0 },
  { x: 280, y: 80, delay: 0.1 },
  { x: 200, y: 180, delay: 0.2 },
  { x: 340, y: 150, delay: 0.3 },
  { x: 90, y: 220, delay: 0.4 },
  { x: 310, y: 250, delay: 0.5 },
  { x: 180, y: 280, delay: 0.6 },
  { x: 250, y: 60, delay: 0.7 },
];

const tags = ['路燈明亮', '人多', '便利商店', '巡邏頻繁', '步道寬敞', '監視器'];

export default function Act2({ scrollYProgress }: Props) {
  // 點位出現的進度
  const dotsProgress = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  // Tags 出現
  const tagsOpacity = useTransform(scrollYProgress, [0.48, 0.56], [0, 1]);
  const tagsY = useTransform(scrollYProgress, [0.48, 0.56], [16, 0]);

  return (
    <div className="section-container relative z-10 flex flex-col items-center">
      {/* 地圖 + 點位 */}
      <div className="relative w-full max-w-md h-72 mb-6">
        <svg viewBox="0 0 400 320" className="w-full h-full">
          {/* 簡化街道 */}
          <g stroke="#d6d3c8" strokeWidth="1.5" fill="none" opacity="0.5">
            <path d="M0 100 H400" />
            <path d="M0 200 H400" />
            <path d="M130 0 V320" />
            <path d="M270 0 V320" />
          </g>

          {/* 逐漸出現的安全標記點 */}
          {mapPoints.map((pt, i) => (
            <m.g key={i} style={{ opacity: useTransform(dotsProgress, [pt.delay, pt.delay + 0.2], [0, 1]) }}>
              {/* 波紋 */}
              <circle cx={pt.x} cy={pt.y} r="16" fill="#37957d" opacity="0.1">
                <animate attributeName="r" values="10;20;10" dur="3s" repeatCount="indefinite" begin={`${pt.delay * 2}s`} />
                <animate attributeName="opacity" values="0.15;0.05;0.15" dur="3s" repeatCount="indefinite" begin={`${pt.delay * 2}s`} />
              </circle>
              {/* 標記點 */}
              <circle cx={pt.x} cy={pt.y} r="6" fill="#37957d" />
              <circle cx={pt.x} cy={pt.y} r="2.5" fill="white" />
            </m.g>
          ))}
        </svg>
      </div>

      {/* Tag chips */}
      <m.div
        className="flex flex-wrap justify-center gap-2 mb-8 max-w-sm"
        style={{ opacity: tagsOpacity, y: tagsY }}
      >
        {tags.map((tag, i) => (
          <m.span
            key={tag}
            className="tag-chip"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
          >
            {tag}
          </m.span>
        ))}
      </m.div>

      {/* 文案 */}
      <m.div className="text-center max-w-lg" style={{ opacity: tagsOpacity }}>
        <p className="text-xs font-bold text-primary-400 tracking-widest mb-3">ACT 02</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-4">
          安全資訊來自大家
        </h2>
        <p className="text-lg text-surface-600 leading-relaxed">
          每一個標記，都來自走過這條路的人。
          <br />
          路燈亮不亮、人多不多、附近有沒有便利商店——
          <br />
          社群的力量，讓每條路更透明。
        </p>
      </m.div>
    </div>
  );
}
