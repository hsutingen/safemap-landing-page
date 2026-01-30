/**
 * Waitlist — 早期使用者招募表單
 * 提交後 console.log + memory store。
 */

import { useState, FormEvent } from 'react';
import { m } from 'framer-motion';
import { config } from '../config';
import { addToWaitlist } from '../data/mock';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [position, setPosition] = useState(0);
  const reduced = useReducedMotion();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    const result = addToWaitlist(email.trim());
    setPosition(result.position);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="waitlist" className="py-24 bg-surface-50">
      <div className="section-container max-w-xl">
        <m.div
          className="bg-white rounded-3xl shadow-lg border border-surface-200 p-8 sm:p-10 text-center"
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {submitted ? (
            /* 成功狀態 */
            <m.div
              initial={reduced ? {} : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-surface-900 mb-3">
                歡迎加入！
              </h3>
              <p className="text-surface-600 mb-2">
                你是第 <span className="font-bold text-primary-600">{position}</span> 位早期使用者。
              </p>
              <p className="text-sm text-surface-400">
                我們會在產品準備好時通知你。
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2"
              >
                再邀請一位朋友
              </button>
            </m.div>
          ) : (
            /* 表單 */
            <>
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-3">
                搶先體驗安心地圖
              </h2>
              <p className="text-surface-500 mb-8">
                留下 Email，成為最早的一群使用者。
                <br />
                <span className="text-sm text-surface-400">
                  我們不會寄垃圾信，也不會把你的信箱給任何人。
                </span>
              </p>

              {config.showEmailField && (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="flex-1 px-4 py-3 rounded-xl border border-surface-300 bg-surface-50
                               text-surface-900 placeholder:text-surface-400
                               focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent
                               transition-all"
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    {config.hero.cta}
                  </button>
                </form>
              )}
            </>
          )}
        </m.div>
      </div>
    </section>
  );
}
