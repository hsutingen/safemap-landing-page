import { m } from 'framer-motion';
import { config } from '../config';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : 0.15, delayChildren: reduced ? 0 : 0.3 },
    },
  };

  const item = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-warm-200/30 rounded-full blur-3xl" />
        {/* 簡化地圖網格背景 */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-container relative z-10 text-center max-w-3xl"
      >
        {/* 小標籤 */}
        <m.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium border border-primary-200">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            早期使用者招募中
          </span>
        </m.div>

        {/* 主標題 */}
        <m.h1
          variants={item}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 leading-tight mb-6"
        >
          {config.hero.headline}
        </m.h1>

        {/* 副標題 */}
        <m.p
          variants={item}
          className="text-lg sm:text-xl text-surface-600 leading-relaxed mb-4 max-w-2xl mx-auto"
        >
          {config.hero.subheadline}
        </m.p>

        {/* 定位聲明 */}
        <m.p
          variants={item}
          className="text-sm text-surface-400 mb-10"
        >
          {config.positioning.navigationNote}
        </m.p>

        {/* CTA */}
        <m.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={config.cta.waitlist} className="btn-primary text-base px-8 py-3.5">
            {config.hero.cta}
          </a>
          <a href={config.cta.learnMore} className="btn-secondary text-base px-8 py-3.5">
            {config.hero.ctaSecondary}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </m.div>

        {/* 信任指標 */}
        <m.div variants={item} className="mt-12 flex items-center justify-center gap-6 text-sm text-surface-400">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            不追蹤位置
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            不做導航
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            社群共建
          </span>
        </m.div>
      </m.div>
    </section>
  );
}
