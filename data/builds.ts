export type Build = {
  slug: string;
  title: string;
  tagline: string;
  result: string;
  tags: string[];
};

// 직접 만들어 출시한 대표 빌드. slug는 _projects/<slug>.md 상세 페이지와 연결.
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
    slug: "price-recall",
    title: "얼마였지?",
    tagline: "반복 구매 상품의 '실단가'를 기록·비교하는 iOS 앱",
    result: "기획·iOS·백엔드·운영까지 1인 풀스택 · App Store 정식 출시",
    tags: ["SwiftUI", "Supabase", "단독 풀스택", "App Store 출시"],
  },
  {
    slug: "tiny-moments",
    title: "작은 위로",
    tagline: "부모를 위한 위로 카드 iOS 앱 (아이 사진 + 위로 문구)",
    result: "착수 8일 만에 App Store 단독 출시 · 5주간 3개 버전 배포",
    tags: ["SwiftUI", "SwiftData", "WidgetKit", "단독 출시"],
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
    title: "안녕재고",
    tagline: "직접 출시·운영한 재고 관리 앱",
    result: "실사용자 1,668명 · 종료까지 책임",
    tags: ["Django", "Next.js", "Capacitor", "AWS"],
  },
];
