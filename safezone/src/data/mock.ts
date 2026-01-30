/**
 * Mock 資料：地點、事件
 * 至少 8 個地點、2 個事件
 */

export interface Location {
  id: number;
  name: string;
  lat: number;
  lng: number;
  score: number; // 安心指數 1–5
  tags: string[];
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
    score: 4.2,
    tags: ['人多', '路燈明亮', '監視器'],
  },
  {
    id: 2,
    name: '大安森林公園東側步道',
    lat: 25.033,
    lng: 121.5355,
    score: 3.8,
    tags: ['路燈明亮', '步道寬敞', '巡邏頻繁'],
  },
  {
    id: 3,
    name: '信義區松壽路',
    lat: 25.036,
    lng: 121.567,
    score: 4.5,
    tags: ['商圈', '人多', '便利商店'],
  },
  {
    id: 4,
    name: '文山區興隆路三段',
    lat: 24.993,
    lng: 121.551,
    score: 2.8,
    tags: ['路燈偏暗', '人少', '施工中'],
  },
  {
    id: 5,
    name: '士林夜市周邊',
    lat: 25.088,
    lng: 121.524,
    score: 3.5,
    tags: ['人多', '巷弄複雜', '攤販密集'],
  },
  {
    id: 6,
    name: '中山站南京西路',
    lat: 25.0528,
    lng: 121.5209,
    score: 4.0,
    tags: ['商圈', '路燈明亮', '便利商店'],
  },
  {
    id: 7,
    name: '萬華區廣州街',
    lat: 25.037,
    lng: 121.499,
    score: 2.5,
    tags: ['人少', '路燈偏暗', '巷弄複雜'],
  },
  {
    id: 8,
    name: '松山車站前站',
    lat: 25.049,
    lng: 121.578,
    score: 3.9,
    tags: ['交通繁忙', '便利商店', '人多'],
  },
  {
    id: 9,
    name: '公館水源市場周邊',
    lat: 25.0115,
    lng: 121.5335,
    score: 3.6,
    tags: ['學區', '人多', '路燈明亮'],
  },
  {
    id: 10,
    name: '內湖科技園區',
    lat: 25.078,
    lng: 121.575,
    score: 3.2,
    tags: ['上班人潮', '深夜人少', '寬敞道路'],
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
