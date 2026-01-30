import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { config } from '../config';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-primary-700">
          <svg width="28" height="28" viewBox="0 0 32 32" className="shrink-0">
            <circle cx="16" cy="16" r="14" fill="#37957d" />
            <path
              d="M16 8 C12 8 9 11 9 15 C9 20 16 26 16 26 C16 26 23 20 23 15 C23 11 20 8 16 8Z"
              fill="white"
              opacity="0.9"
            />
            <circle cx="16" cy="15" r="3" fill="#37957d" />
          </svg>
          <span className="text-lg">{config.productNameShort}</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-surface-600">
          <a href="#narrative" className="hover:text-primary-600 transition-colors">
            認識安心地圖
          </a>
          <a href="#features" className="hover:text-primary-600 transition-colors">
            功能特色
          </a>
          <a href="#faq" className="hover:text-primary-600 transition-colors">
            常見問題
          </a>
          <a href={config.cta.waitlist} className="btn-primary text-sm py-2 px-4">
            {config.hero.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-surface-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="選單"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-surface-200"
          >
            <div className="section-container py-4 flex flex-col gap-3">
              <a
                href="#narrative"
                className="py-2 text-surface-700 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                認識安心地圖
              </a>
              <a
                href="#features"
                className="py-2 text-surface-700 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                功能特色
              </a>
              <a
                href="#faq"
                className="py-2 text-surface-700 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                常見問題
              </a>
              <a
                href={config.cta.waitlist}
                className="btn-primary text-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                {config.hero.cta}
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
