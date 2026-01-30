import { config } from '../config';

export default function Footer() {
  return (
    <footer className="bg-surface-900 text-surface-400 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <svg width="24" height="24" viewBox="0 0 32 32" className="shrink-0">
                <circle cx="16" cy="16" r="14" fill="#37957d" />
                <path
                  d="M16 8 C12 8 9 11 9 15 C9 20 16 26 16 26 C16 26 23 20 23 15 C23 11 20 8 16 8Z"
                  fill="white"
                  opacity="0.9"
                />
                <circle cx="16" cy="15" r="3" fill="#37957d" />
              </svg>
              <span className="font-semibold text-white">{config.productNameShort}</span>
            </div>
            <p className="text-sm max-w-sm">
              {config.positioning.oneLiner}
            </p>
          </div>

          {/* 連結 */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
            <div className="flex items-center gap-4">
              <a
                href={config.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href={config.social.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Threads
              </a>
              <a
                href={config.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                X / Twitter
              </a>
            </div>
            <span className="hidden sm:inline text-surface-700">|</span>
            <a href="#faq" className="hover:text-white transition-colors">
              常見問題
            </a>
          </div>
        </div>

        <hr className="border-surface-800 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-500">
          <p>&copy; {new Date().getFullYear()} {config.productName}. All rights reserved.</p>
          <p>
            安心地圖僅提供安全資訊參考，不推薦最安全路線、不替使用者做安全判斷。
          </p>
        </div>
      </div>
    </footer>
  );
}
