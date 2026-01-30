/**
 * 功能特色區塊
 * 以卡片呈現安心地圖的核心功能，並明確標示產品邊界。
 */

import { m } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { config } from '../config';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: '路段安心指數',
    description: '每個地點都有社群回報的安心指數（1–5 分），幫助你了解路段的安全狀態。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: '風險事件提示',
    description: '標示近期新聞報導或社群回報的安全事件地點，讓你出門前多一分了解。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: '社群共建',
    description: '安全資訊來自每一位使用者的回報——你的一筆標記，可能幫到另一個夜歸的人。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    title: '搭配 Google Maps',
    description: '安心地圖不做導航——我們專注提供安全資訊層，導航一律交給 Google Maps。',
  },
];

export default function Features() {
  const reduced = useReducedMotion();

  const cardVariants = reduced
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <section id="features" className="py-24 bg-white">
      <div className="section-container">
        {/* 標題 */}
        <m.div
          className="text-center mb-16"
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-4">
            安心地圖做什麼？
          </h2>
          <p className="text-surface-500 max-w-xl mx-auto">
            {config.positioning.oneLiner}
          </p>
        </m.div>

        {/* 功能卡片 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <m.div
              key={feature.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: reduced ? 0 : i * 0.1 }}
              className="bg-surface-50 rounded-2xl p-6 border border-surface-200 hover:border-primary-300 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-surface-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-surface-500 leading-relaxed">{feature.description}</p>
            </m.div>
          ))}
        </div>

        {/* 產品邊界聲明 */}
        <m.div
          className="mt-16 bg-warm-50 border border-warm-200 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto"
          initial={reduced ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-semibold text-warm-800 mb-4 text-center">
            安心地圖的邊界
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-bold text-primary-500 tracking-widest mb-3">我們做的</p>
              <ul className="space-y-2">
                {config.positioning.noteDo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-surface-700">
                    <svg className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold text-red-400 tracking-widest mb-3">我們不做的</p>
              <ul className="space-y-2">
                {config.positioning.noteDoNot.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-surface-700">
                    <svg className="w-4 h-4 text-red-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
