/**
 * 幕三：你的安心，由你決定
 *
 * - 不安指數示意出現
 * - Google Maps 導航整合圖示
 * - 強調「不替你判斷」的產品定位
 * - 文案：導航 + 安全資訊，一個 App 搞定
 */

import { m, useTransform, MotionValue } from 'framer-motion';

interface Props {
  scrollYProgress: MotionValue<number>;
}

export default function Act3({ scrollYProgress }: Props) {
  const contentOpacity = useTransform(scrollYProgress, [0.68, 0.76], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.68, 0.76], [30, 0]);

  return (
    <m.div
      className="section-container relative z-10 flex flex-col items-center"
      style={{ opacity: contentOpacity, y: contentY }}
    >
      {/* 不安指數示意 */}
      <div className="flex items-center gap-4 mb-8">
        {/* 模擬位置卡 */}
        <div className="bg-white rounded-2xl shadow-lg border border-surface-200 p-5 w-64">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="font-semibold text-surface-900 text-sm">信義區松壽路</p>
              <p className="text-xs text-surface-400 mt-0.5">共 42 則回報・更新於 2 小時前</p>
            </div>
            <div className="score-badge bg-primary-100 text-primary-700">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              1.5
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['商圈', '人多', '便利商店'].map((tag) => (
              <span key={tag} className="tag-chip text-[10px]">
                {tag}
              </span>
            ))}
          </div>
          {/* 不安指數量表 */}
          <div className="mt-3 pt-3 border-t border-surface-100">
            <div className="flex items-center justify-between text-[10px] text-surface-400 mb-1">
              <span>不安指數</span>
              <span>1.5 / 5</span>
            </div>
            <div className="h-1.5 bg-surface-100 rounded-full overflow-hidden">
              <m.div
                className="h-full bg-primary-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '30%' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>

        {/* 連接線 + Google Maps 導航 */}
        <div className="hidden sm:flex flex-col items-center gap-2">
          <div className="w-8 border-t-2 border-dashed border-surface-300" />
          <div className="w-12 h-12 rounded-xl bg-white shadow border border-surface-200 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#34A853" />
              <circle cx="12" cy="9" r="2.5" fill="white" />
            </svg>
          </div>
          <span className="text-[10px] text-surface-400 text-center leading-tight">
            內建
            <br />
            Google Maps 導航
          </span>
        </div>
      </div>

      {/* 文案 */}
      <div className="text-center max-w-lg">
        <p className="text-xs font-bold text-primary-400 tracking-widest mb-3">ACT 03</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-4">
          你的安心，由你決定
        </h2>
        <p className="text-lg text-surface-600 leading-relaxed">
          安心地圖不替你判斷，只讓你看見。
          <br />
          導航與安全資訊，在安心地圖裡一次搞定。
          <br />
          <span className="text-surface-400 text-base">所有決定權，都在你手上。</span>
        </p>
      </div>
    </m.div>
  );
}
