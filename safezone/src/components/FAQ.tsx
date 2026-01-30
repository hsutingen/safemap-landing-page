/**
 * FAQ — 常見問題
 * 明確反映產品定位與邊界。
 */

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const faqs = [
  {
    q: '安心地圖可以導航嗎？',
    a: '可以！安心地圖直接整合 Google Maps 導航，你可以在 App 內規劃路線並開始導航。同時，地圖上會顯示沿途路段的不安指數與風險事件提示，讓你在導航時也能掌握安全資訊。',
  },
  {
    q: '安心地圖會幫我規劃最安全的路線嗎？',
    a: '路線規劃由內建的 Google Maps 負責，安心地圖不另外推薦「最安全路線」。但你可以在導航時參考沿途的不安指數，自行決定是否調整路線。所有決定權在你手上。',
  },
  {
    q: '不安指數的資料來源是什麼？',
    a: '不安指數來自社群回報——使用者在感到不安時可以標記路段狀況，例如照明不足、人煙稀少、環境雜亂等。安全是常態，人們只在感到不安時才會主動回報，因此分數越高代表越多人曾在該路段感到不安。我們也會整合公開新聞事件與政府開放資料，提供參考資訊。',
  },
  {
    q: '為什麼有些地點不顯示不安指數？',
    a: '為了確保資料的可靠性與代表性，每個地點需要累積至少 10 則社群回報後，不安指數才會公開顯示。在達到門檻之前，你會看到目前的回報進度（例如 7/10），也可以查看已收到的個別回報內容。你的每一筆回報都會幫助這個地點更快達到公開顯示的門檻。',
  },
  {
    q: '安心地圖會追蹤我的位置嗎？',
    a: '不會。安心地圖不做即時定位追蹤。你可以主動查看任何地點的安全資訊，我們不會在背景記錄你的移動軌跡。',
  },
  {
    q: '不安指數高的地方就一定是危險的嗎？',
    a: '不安指數僅反映社群回報的綜合感受，分數高代表較多人曾在該處感到不安，但不代表絕對的危險。請將它當作參考資訊之一。安心地圖不做判斷，也不保證任何地點的安全性。',
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
