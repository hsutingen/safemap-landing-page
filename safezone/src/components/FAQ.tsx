/**
 * FAQ — 常見問題
 * 明確反映產品定位與邊界。
 */

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const faqs = [
  {
    q: '安心地圖是導航 App 嗎？',
    a: '不是。安心地圖不做導航、不推薦路線、不計算最佳路線。我們專注提供「安全資訊層」——包含路段安心指數與風險事件地點提示。需要導航時，請使用 Google Maps。',
  },
  {
    q: '安心地圖會幫我規劃最安全的路線嗎？',
    a: '不會。安心地圖不做路線判斷。我們只呈現安全資訊，所有決定權在你手上。你可以參考安心指數，自行決定要走的路。',
  },
  {
    q: '安心指數的資料來源是什麼？',
    a: '安心指數來自社群回報——使用者可以標記路段的照明狀況、人流、便利設施等。我們也會整合公開新聞事件與政府開放資料（例如路燈維修紀錄），提供參考資訊。',
  },
  {
    q: '安心地圖會追蹤我的位置嗎？',
    a: '不會。安心地圖不做即時定位追蹤。你可以主動查看任何地點的安全資訊，我們不會在背景記錄你的移動軌跡。',
  },
  {
    q: '安心指數低的地方就是危險的嗎？',
    a: '安心指數僅反映社群回報的綜合感受，不代表絕對的安全或危險。請將它當作參考資訊之一。安心地圖不做判斷，也不保證任何地點的安全性。',
  },
  {
    q: '我可以回報一個地點的安全資訊嗎？',
    a: '可以！社群共建是安心地圖的核心。你可以為走過的路段標記路燈狀況、人潮、便利設施等 tag，幫助其他人更了解這條路。',
  },
  {
    q: '安心地圖目前支援哪些城市？',
    a: '目前正在進行早期測試，優先以台北市為範圍。未來將逐步擴展至其他城市。歡迎加入早期使用者名單，第一時間收到更新通知。',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduced = useReducedMotion();

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="section-container max-w-3xl">
        <m.div
          className="text-center mb-12"
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-4">
            常見問題
          </h2>
          <p className="text-surface-500">
            關於安心地圖，你可能想知道的事。
          </p>
        </m.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <m.div
              key={i}
              initial={reduced ? {} : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: reduced ? 0 : i * 0.05 }}
              className="bg-surface-50 rounded-xl border border-surface-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-100 transition-colors"
              >
                <span className="font-medium text-surface-800 pr-4">{faq.q}</span>
                <m.svg
                  className="w-5 h-5 text-surface-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path d="M19 9l-7 7-7-7" />
                </m.svg>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <m.div
                    initial={reduced ? { height: 'auto' } : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-surface-600 leading-relaxed text-sm">
                      {faq.a}
                    </p>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
