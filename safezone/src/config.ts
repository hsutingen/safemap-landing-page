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
      '安心地圖不是導航，而是把安全資訊，放進你每天在用的地圖裡。',
    cta: '加入早期使用者',
    ctaSecondary: '往下探索',
  },

  /* ── 產品定位聲明 ── */
  positioning: {
    oneLiner:
      '安心地圖不是導航，而是把安全資訊，放進你每天在用的地圖裡。',
    noteDo: [
      '提供路段 / 地點的安心指數',
      '標示風險事件或社會危害新聞的地點',
      '讓社群共同回報與更新安全資訊',
    ],
    noteDoNot: [
      '不做導航',
      '不推薦路線',
      '不計算最佳路線',
      '不替你做安全判斷——所有決定權在你手上',
    ],
    navigationNote: '導航交給 Google Maps，安全資訊交給安心地圖。',
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

  /* ── 安心指數量表 ── */
  safetyScoreScale: { min: 1, max: 5 },

  /* ── 動效預設 ── */
  reducedMotionDefault: false,
} as const;
