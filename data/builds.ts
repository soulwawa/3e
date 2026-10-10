export type Build = {
  slug: string;
  title: string;
  tagline: string;
  result: string;
  tags: string[];
};

// 출시한 대표 프로젝트. slug는 _projects/<slug>.md 상세 페이지와 연결.
// 추가 프로젝트는 추후 공유받아 이 배열에 끼워넣음.
export const featuredBuilds: Build[] = [
  {
    slug: "memopan",
    title: "매모판",
    tagline: "네이버 스마트스토어 셀러 상품 분석 SaaS",
    result: "기획부터 구축까지 주도 · 약 2.9TB DB 무중단 운영",
    tags: ["Java · Spring Boot", "Python · Airflow", "PostgreSQL DBA", "ClickHouse"],
  },
  {
    slug: "hi-inven-ios",
    title: "안녕재고 · iOS",
    tagline: "대화로 집안 재고와 기한을 관리하는 iPhone 앱",
    result: "재고를 기기에 저장 · 기한 알림",
    tags: ["SwiftUI", "SwiftData", "Foundation Models", "AI 활용 개발"],
  },
  {
    slug: "price-recall",
    title: "얼마였지?",
    tagline: "반복 구매하는 생필품의 가격 기록·비교 iOS 앱",
    result: "할인·적립·배송비를 반영한 실단가",
    tags: ["SwiftUI", "Supabase", "실단가 비교", "AI 활용 개발"],
  },
  {
    slug: "tiny-moments",
    title: "작은 위로",
    tagline: "아이 사진과 한 문장으로 남기는 육아일기·위로 카드 앱",
    result: "사진·기록은 기기에 저장 · 홈 화면 위젯",
    tags: ["SwiftUI", "SwiftData", "WidgetKit", "AI 활용 개발"],
  },
  {
    slug: "checktodo",
    title: "CheckTodo",
    tagline: "잠금화면 기반 할일 생산성 앱",
    result: "혼자 개발 · 글로벌 90개국 · 사용자 12,000명",
    tags: ["Flutter", "Firebase"],
  },
  {
    slug: "hi-inven",
    title: "안녕재고 · 초기 서비스",
    tagline: "2022–2024 · 웹·iOS·Android 재고 관리 서비스",
    result: "가입자 1,668명 · 2024.06 서비스 종료",
    tags: ["Django", "Next.js", "Capacitor", "AWS"],
  },
];
