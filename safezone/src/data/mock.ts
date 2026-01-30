/**
 * Mock 資料：地點、事件、回報
 * 至少 8 個地點、2 個事件
 */

export interface Review {
  id: number;
  stars: number;    // 1–5
  text: string;
  date: string;
  author: string;
}

export interface Location {
  id: number;
  name: string;
  lat: number;
  lng: number;
  avgStars: number;    // 不安指數 1–5（越高越多人回報不安）
  reviewCount: number; // 回報總數
  lastUpdated: string; // e.g. '2025-01-28'
  tags: string[];
  reviews: Review[];   // 最近幾筆回報（供預覽）
}

export interface SafetyEvent {
  id: number;
  title: string;
  location: string;
  date: string;
  type: 'infrastructure' | 'traffic' | 'crime' | 'community';
  description: string;
}

export const locations: Location[] = [
  {
    id: 1,
    name: '台北車站北門廣場',
    lat: 25.0478,
    lng: 121.517,
    avgStars: 1.8,
    reviewCount: 34,
    lastUpdated: '2025-01-28',
    tags: ['人多', '路燈明亮', '監視器'],
    reviews: [
      { id: 11, stars: 2, text: '白天人潮很多，走起來安心。', date: '2025-01-28', author: '通勤族' },
      { id: 12, stars: 1, text: '監視器密集，路燈也很亮。', date: '2025-01-25', author: '台北居民' },
      { id: 13, stars: 2, text: '車站周邊整體感覺不錯，偶爾有流動攤販。', date: '2025-01-20', author: '匿名使用者' },
    ],
  },
  {
    id: 2,
    name: '大安森林公園東側步道',
    lat: 25.033,
    lng: 121.5355,
    avgStars: 2.2,
    reviewCount: 18,
    lastUpdated: '2025-01-26',
    tags: ['路燈明亮', '步道寬敞', '巡邏頻繁'],
    reviews: [
      { id: 21, stars: 2, text: '傍晚散步很舒服，巡邏人員常經過。', date: '2025-01-26', author: '公園常客' },
      { id: 22, stars: 3, text: '晚上九點後人少了一些，但路燈很亮。', date: '2025-01-22', author: '夜跑者' },
    ],
  },
  {
    id: 3,
    name: '信義區松壽路',
    lat: 25.036,
    lng: 121.567,
    avgStars: 1.5,
    reviewCount: 42,
    lastUpdated: '2025-01-29',
    tags: ['商圈', '人多', '便利商店'],
    reviews: [
      { id: 31, stars: 1, text: '百貨商圈人超多，完全不會擔心。', date: '2025-01-29', author: '逛街族' },
      { id: 32, stars: 2, text: '便利商店走幾步就有，晚上也很亮。', date: '2025-01-27', author: '信義區居民' },
      { id: 33, stars: 1, text: '週末人潮滿滿，路燈也充足。', date: '2025-01-24', author: '匿名使用者' },
    ],
  },
  {
    id: 4,
    name: '文山區興隆路三段',
    lat: 24.993,
    lng: 121.551,
    avgStars: 3.2,
    reviewCount: 15,
    lastUpdated: '2025-01-27',
    tags: ['路燈偏暗', '人少', '施工中'],
    reviews: [
      { id: 41, stars: 4, text: '路燈好幾盞沒亮，走起來有點怕。', date: '2025-01-27', author: '文山居民' },
      { id: 42, stars: 3, text: '施工圍籬讓人行道變窄，不太舒服。', date: '2025-01-23', author: '通勤族' },
    ],
  },
  {
    id: 5,
    name: '士林夜市周邊',
    lat: 25.088,
    lng: 121.524,
    avgStars: 2.5,
    reviewCount: 7,
    lastUpdated: '2025-01-15',
    tags: ['人多', '巷弄複雜', '攤販密集'],
    reviews: [
      { id: 51, stars: 3, text: '巷弄內較暗，但主要街道人多。', date: '2025-01-15', author: '匿名使用者' },
      { id: 52, stars: 2, text: '夜市營業時間很熱鬧，收攤後比較安靜。', date: '2025-01-10', author: '台北居民' },
      { id: 53, stars: 3, text: '攤販區域動線混亂，要注意。', date: '2025-01-05', author: '夜市常客' },
    ],
  },
  {
    id: 6,
    name: '中山站南京西路',
    lat: 25.0528,
    lng: 121.5209,
    avgStars: 2.0,
    reviewCount: 3,
    lastUpdated: '2025-01-08',
    tags: ['商圈', '路燈明亮', '便利商店'],
    reviews: [
      { id: 61, stars: 2, text: '商圈路段很亮，但巷內安靜。', date: '2025-01-08', author: '中山區居民' },
      { id: 62, stars: 1, text: '白天逛街人很多，感覺安全。', date: '2025-01-03', author: '匿名使用者' },
      { id: 63, stars: 3, text: '深夜經過有點空曠。', date: '2024-12-28', author: '夜歸族' },
    ],
  },
  {
    id: 7,
    name: '萬華區廣州街',
    lat: 25.037,
    lng: 121.499,
    avgStars: 3.5,
    reviewCount: 5,
    lastUpdated: '2025-01-12',
    tags: ['人少', '路燈偏暗', '巷弄複雜'],
    reviews: [
      { id: 71, stars: 4, text: '巷弄很多死角，晚上不太敢走。', date: '2025-01-12', author: '萬華居民' },
      { id: 72, stars: 3, text: '路燈偏暗，有些路段幾乎沒人。', date: '2025-01-06', author: '匿名使用者' },
      { id: 73, stars: 4, text: '夜間巡邏有增加，但整體還是偏暗。', date: '2025-01-02', author: '社區志工' },
    ],
  },
  {
    id: 8,
    name: '松山車站前站',
    lat: 25.049,
    lng: 121.578,
    avgStars: 2.1,
    reviewCount: 22,
    lastUpdated: '2025-01-25',
    tags: ['交通繁忙', '便利商店', '人多'],
    reviews: [
      { id: 81, stars: 2, text: '車站附近人多車多，注意交通就好。', date: '2025-01-25', author: '通勤族' },
      { id: 82, stars: 3, text: '機車跟行人動線交錯，有點危險。', date: '2025-01-20', author: '松山居民' },
    ],
  },
  {
    id: 9,
    name: '公館水源市場周邊',
    lat: 25.0115,
    lng: 121.5335,
    avgStars: 2.4,
    reviewCount: 9,
    lastUpdated: '2025-01-18',
    tags: ['學區', '人多', '路燈明亮'],
    reviews: [
      { id: 91, stars: 2, text: '學生很多，白天很熱鬧。', date: '2025-01-18', author: '台大學生' },
      { id: 92, stars: 3, text: '晚上水源市場收攤後比較冷清。', date: '2025-01-14', author: '公館居民' },
      { id: 93, stars: 2, text: '整體照明不錯，但小巷要注意。', date: '2025-01-10', author: '匿名使用者' },
    ],
  },
  {
    id: 10,
    name: '內湖科技園區',
    lat: 25.078,
    lng: 121.575,
    avgStars: 2.8,
    reviewCount: 12,
    lastUpdated: '2025-01-22',
    tags: ['上班人潮', '深夜人少', '寬敞道路'],
    reviews: [
      { id: 101, stars: 2, text: '上班時間人很多，下班後還好。', date: '2025-01-22', author: '科技業上班族' },
      { id: 102, stars: 4, text: '深夜幾乎沒人，雖然路寬但有點怕。', date: '2025-01-17', author: '加班族' },
    ],
  },
];

export const events: SafetyEvent[] = [
  {
    id: 1,
    title: '路燈故障通報',
    location: '文山區興隆路三段',
    date: '2024-12-15',
    type: 'infrastructure',
    description: '社區居民回報路段連續三盞路燈未亮，已通報市府養工處。',
  },
  {
    id: 2,
    title: '行人安全事件',
    location: '松山車站前站',
    date: '2024-12-10',
    type: 'traffic',
    description: '站前廣場機車與行人動線交錯，社群建議留意通行。',
  },
  {
    id: 3,
    title: '夜間巡邏加強',
    location: '萬華區廣州街',
    date: '2025-01-05',
    type: 'community',
    description: '當地里長辦公室公告，夜間巡守隊已增加巡邏頻率。',
  },
];

/**
 * Waitlist（記憶體儲存）
 */
const waitlistStore: { email: string; timestamp: string }[] = [];

export function addToWaitlist(email: string) {
  const entry = { email, timestamp: new Date().toISOString() };
  waitlistStore.push(entry);
  console.log('[Waitlist] New signup:', entry);
  console.log('[Waitlist] Total:', waitlistStore.length);
  return { success: true, position: waitlistStore.length };
}
