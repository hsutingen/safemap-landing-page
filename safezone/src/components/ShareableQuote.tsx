/**
 * ShareableQuote — 可截圖分享的理念文字區塊
 * 設計為視覺突出、適合截圖分享到社群的樣式。
 */

import { m } from 'framer-motion';
import { config } from '../config';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function ShareableQuote() {
  const reduced = useReducedMotion();

  return (
    <section className="py-24 bg-primary-700 relative overflow-hidden">
      {/* 裝飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-600/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-800/50 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <m.div
          className="max-w-2xl mx-auto text-center"
          initial={reduced ? {} : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* 引號 */}
          <svg className="w-10 h-10 text-primary-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4.017v10H0z" />
          </svg>

          <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug mb-8">
            {config.shareableQuotes[0]}
          </blockquote>

          <p className="text-primary-200 text-sm mb-8">
            — {config.productName}
          </p>

          {/* 分享按鈕 */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-primary-300 text-sm">分享這句話</span>
            <button
              onClick={() => {
                const text = `「${config.shareableQuotes[0]}」— ${config.productName}`;
                if (navigator.share) {
                  navigator.share({ text });
                } else {
                  navigator.clipboard.writeText(text);
                  alert('已複製到剪貼簿！');
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              分享
            </button>
          </div>
        </m.div>
      </div>
    </section>
  );
}
