/**
 * 安心地圖 Safe Zone — 集中設定檔
 * 所有可調整的文案、連結、功能開關都集中在此管理。
 */
export const config = {
  /* ── 產品基本資訊 ── */
  productName: '安心地圖 Safe Zone',
  productNameShort: '安心地圖',
  productNameEn: 'Safe Zone',

  /* ── Hero 區塊 ── */
  hero: {
    headline: '走每一條路，都更安心一點',
    subheadline:
      '安心地圖整合 Google Maps 導航，讓你在導航的同時，也能看見路段的安全資訊。',
    cta: '加入早期使用者',
    ctaSecondary: '往下探索',
  },

  /* ── 產品定位聲明 ── */
  positioning: {
    oneLiner:
      '安心地圖整合 Google Maps 導航，讓你在導航的同時，也能看見路段的安全資訊。',
    noteDo: [
      '提供路段 / 地點的不安指數',
      '內建 Google Maps 導航功能',
      '標示風險事件或社會危害新聞的地點',
      '讓社群共同回報與更新安全資訊',
    ],
    noteDoNot: [
      '不推薦「最安全路線」——路線由 Google Maps 計算',
      '不替你做安全判斷——所有決定權在你手上',
    ],
    navigationNote: '導航 + 安全資訊，一個 App 全部搞定。',
  },

  /* ── 可分享文字 ── */
  shareableQuotes: [
    '每個人都值得在走路時，感到安心。',
    '你走的每條路，都有人在乎。',
    '安全不只是資料，是每個人的日常。',
  ],

  /* ── CTA 連結 ── */
  cta: {
    waitlist: '#waitlist',
    learnMore: '#narrative',
  },

  /* ── 社群連結 ── */
  social: {
    instagram: 'https://instagram.com/safezone',
    threads: 'https://threads.net/safezone',
    twitter: 'https://x.com/safezone',
  },

  /* ── 功能開關 ── */
  showEmailField: true,

  /* ── 不安指數量表 ── */
  safetyScoreScale: { min: 1, max: 5 },

  /* ── 最低公開顯示回報數 ── */
  minPublicReviews: 10,

  /* ── 動效預設 ── */
  reducedMotionDefault: false,
} as const;
