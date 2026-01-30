/**
 * SafetyDemo — 安心指數互動展示
 * 展示 mock 地點資料與安心指數，讓使用者預覽產品體驗。
 */

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { locations, events } from '../data/mock';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { config } from '../config';

export default function SafetyDemo() {
  const [selected, setSelected] = useState(locations[2]); // 預設選中信義區
  const reduced = useReducedMotion();

  const scoreColor = (score: number) => {
    if (score >= 4) return 'text-primary-600 bg-primary-100';
    if (score >= 3) return 'text-warm-700 bg-warm-100';
    return 'text-red-600 bg-red-100';
  };

  const scoreBar = (score: number) => {
    const pct = (score / config.safetyScoreScale.max) * 100;
    if (score >= 4) return { width: `${pct}%`, bg: 'bg-primary-500' };
    if (score >= 3) return { width: `${pct}%`, bg: 'bg-warm-500' };
    return { width: `${pct}%`, bg: 'bg-red-400' };
  };

  return (
    <section className="py-24 bg-surface-50">
      <div className="section-container">
        <m.div
          className="text-center mb-12"
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-4">
            看看安心指數長什麼樣
          </h2>
          <p className="text-surface-500">
            點選地點，預覽安心地圖的資訊呈現方式。
          </p>
        </m.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* 地點列表 */}
          <div className="lg:col-span-2 space-y-2">
            {locations.slice(0, 8).map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelected(loc)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                  selected.id === loc.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white hover:bg-primary-50 text-surface-700 border border-surface-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm truncate pr-2">{loc.name}</span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${
                      selected.id === loc.id
                        ? 'bg-white/20 text-white'
                        : scoreColor(loc.score)
                    }`}
                  >
                    {loc.score}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* 詳細卡片 */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <m.div
                key={selected.id}
                initial={reduced ? {} : { opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduced ? {} : { opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl shadow-lg border border-surface-200 p-6 sm:p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-surface-900">{selected.name}</h3>
                    <p className="text-sm text-surface-400 mt-1">
                      {selected.lat.toFixed(4)}, {selected.lng.toFixed(4)}
                    </p>
                  </div>
                  <div className={`score-badge text-lg ${scoreColor(selected.score)}`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2l2.39 4.84L17.3 7.8l-3.65 3.56.86 5.03L10 13.9l-4.51 2.5.86-5.03L2.7 7.8l4.91-.96L10 2z" />
                    </svg>
                    {selected.score}
                  </div>
                </div>

                {/* 安心指數量表 */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs text-surface-400 mb-1.5">
                    <span>安心指數</span>
                    <span>{selected.score} / {config.safetyScoreScale.max}</span>
                  </div>
                  <div className="h-2.5 bg-surface-100 rounded-full overflow-hidden">
                    <m.div
                      className={`h-full rounded-full ${scoreBar(selected.score).bg}`}
                      initial={{ width: 0 }}
                      animate={{ width: scoreBar(selected.score).width }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {selected.tags.map((tag) => (
                    <span key={tag} className="tag-chip">{tag}</span>
                  ))}
                </div>

                {/* 相關事件 */}
                {events.filter((e) => e.location === selected.name).length > 0 && (
                  <div className="pt-4 border-t border-surface-100">
                    <p className="text-xs font-bold text-surface-400 tracking-widest mb-3">
                      近期事件
                    </p>
                    {events
                      .filter((e) => e.location === selected.name)
                      .map((ev) => (
                        <div key={ev.id} className="bg-warm-50 rounded-lg p-3 mb-2">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-warm-700">{ev.title}</span>
                            <span className="text-[10px] text-surface-400">{ev.date}</span>
                          </div>
                          <p className="text-xs text-surface-500">{ev.description}</p>
                        </div>
                      ))}
                  </div>
                )}

                {/* 小提醒 */}
                <p className="text-[11px] text-surface-400 mt-4 leading-relaxed">
                  安心地圖僅提供參考資訊，不做任何安全判斷或路線建議。所有決定權在使用者身上。
                </p>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
