/**
 * SafetyDemo — 不安指數互動展示
 * 展示 mock 地點資料與不安指數，讓使用者預覽產品體驗。
 * 實作 MIN_PUBLIC_REVIEWS 門檻：reviewCount < 10 時不顯示聚合星等。
 */

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { locations, events, type Location } from '../data/mock';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { config } from '../config';

export default function SafetyDemo() {
  const [selected, setSelected] = useState(locations[2]); // 預設選中信義區（充足資料）
  const reduced = useReducedMotion();

  const hasEnoughReviews = (loc: Location) =>
    loc.reviewCount >= config.minPublicReviews;

  const scoreColor = (score: number) => {
    if (score >= 3) return 'text-red-600 bg-red-100';
    if (score >= 2) return 'text-warm-700 bg-warm-100';
    return 'text-primary-600 bg-primary-100';
  };

  const scoreBar = (score: number) => {
    const pct = (score / config.safetyScoreScale.max) * 100;
    if (score >= 3) return { width: `${pct}%`, bg: 'bg-red-400' };
    if (score >= 2) return { width: `${pct}%`, bg: 'bg-warm-500' };
    return { width: `${pct}%`, bg: 'bg-primary-500' };
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
            看看不安指數長什麼樣
          </h2>
          <p className="text-surface-500">
            點選地點，預覽安心地圖的資訊呈現方式。
          </p>
        </m.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* 地點列表 */}
          <div className="lg:col-span-2 space-y-2">
            {locations.slice(0, 8).map((loc) => {
              const sufficient = hasEnoughReviews(loc);
              return (
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
                          : sufficient
                            ? scoreColor(loc.avgStars)
                            : 'bg-surface-100 text-surface-400'
                      }`}
                    >
                      {sufficient ? loc.avgStars : `${loc.reviewCount}/${config.minPublicReviews}`}
                    </span>
                  </div>
                </button>
              );
            })}
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
                {hasEnoughReviews(selected) ? (
                  /* ── 資料充足：顯示完整不安指數 ── */
                  <>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-surface-900">{selected.name}</h3>
                        <p className="text-sm text-surface-400 mt-1">
                          共 {selected.reviewCount} 則回報・更新於 {selected.lastUpdated}
                        </p>
                      </div>
                      <div className={`score-badge text-lg ${scoreColor(selected.avgStars)}`}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2l2.39 4.84L17.3 7.8l-3.65 3.56.86 5.03L10 13.9l-4.51 2.5.86-5.03L2.7 7.8l4.91-.96L10 2z" />
                        </svg>
                        {selected.avgStars}
                      </div>
                    </div>

                    {/* 不安指數量表 */}
                    <div className="mb-5">
                      <div className="flex justify-between text-xs text-surface-400 mb-1.5">
                        <span>不安指數</span>
                        <span>{selected.avgStars} / {config.safetyScoreScale.max}</span>
                      </div>
                      <div className="h-2.5 bg-surface-100 rounded-full overflow-hidden">
                        <m.div
                          className={`h-full rounded-full ${scoreBar(selected.avgStars).bg}`}
                          initial={{ width: 0 }}
                          animate={{ width: scoreBar(selected.avgStars).width }}
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
                  </>
                ) : (
                  /* ── 資料不足：不顯示聚合星等 ── */
                  <>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-surface-900">{selected.name}</h3>
                        <p className="text-sm text-surface-400 mt-1">
                          {selected.lat.toFixed(4)}, {selected.lng.toFixed(4)}
                        </p>
                      </div>
                      <div className="score-badge-neutral">
                        資料不足 {selected.reviewCount}/{config.minPublicReviews}
                      </div>
                    </div>

                    {/* 說明 */}
                    <div className="bg-surface-50 rounded-xl p-4 mb-5 border border-surface-100">
                      <p className="text-sm text-surface-600 leading-relaxed">
                        為降低誤判，未滿 {config.minPublicReviews} 則回報不顯示聚合星等。你可以查看每則回報內容。
                      </p>
                    </div>

                    {/* 回報進度條 */}
                    <div className="mb-5">
                      <div className="flex justify-between text-xs text-surface-400 mb-1.5">
                        <span>回報進度</span>
                        <span>{selected.reviewCount} / {config.minPublicReviews}</span>
                      </div>
                      <div className="h-2.5 bg-surface-100 rounded-full overflow-hidden">
                        <m.div
                          className="h-full rounded-full bg-surface-300"
                          initial={{ width: 0 }}
                          animate={{ width: `${(selected.reviewCount / config.minPublicReviews) * 100}%` }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                        />
                      </div>
                    </div>

                    {/* 已收到的回報 */}
                    <div className="mb-5">
                      <p className="text-xs font-bold text-surface-400 tracking-widest mb-3">
                        已收到的回報
                      </p>
                      {selected.reviews.slice(0, 3).map((review) => (
                        <div key={review.id} className="bg-surface-50 rounded-lg p-3 mb-2 border border-surface-100">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium text-surface-600">{review.author}</span>
                            <span className="text-[10px] text-surface-400">{review.date}</span>
                          </div>
                          <div className="flex items-center gap-0.5 mb-1.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg
                                key={i}
                                className={`w-3 h-3 ${i < review.stars ? 'text-warm-400' : 'text-surface-200'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 2l2.39 4.84L17.3 7.8l-3.65 3.56.86 5.03L10 13.9l-4.51 2.5.86-5.03L2.7 7.8l4.91-.96L10 2z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-xs text-surface-500">{review.text}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {selected.tags.map((tag) => (
                        <span key={tag} className="tag-chip">{tag}</span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href="#waitlist"
                      className="block w-full text-center py-3 rounded-xl bg-primary-50 text-primary-700 font-semibold hover:bg-primary-100 transition-colors border border-primary-200"
                    >
                      新增回報
                      <span className="block text-xs font-normal text-primary-500 mt-0.5">
                        再 {config.minPublicReviews - selected.reviewCount} 則就會公開顯示星等
                      </span>
                    </a>
                  </>
                )}
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
