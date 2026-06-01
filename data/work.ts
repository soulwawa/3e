export type WorkItem = {
  company: string;
  role: string;
  period: string;
  project: string;
  problem: string;
  did: string[];
  result?: string;
};

export const featuredWork: WorkItem[] = [
  {
    company: "코넥시오에이치",
    role: "백엔드 엔지니어",
    period: "2024.05 – 현재",
    project: "매모판 · 스마트스토어 셀러 분석 SaaS",
    problem:
      "외부 의존으로 돌아가던 스마트스토어 분석 솔루션을 자체 서비스로 내재화해야 했고, 떠난 DevOps 공백과 문서 없는 레거시까지 사실상 혼자 감당해야 하는 상황.",
    did: [
      "기존 Node.js 서비스를 내재화하며 헥사고날 아키텍처(Spring Boot · JPA · QueryDSL)로 재설계·포팅, 백엔드 API 직접 구현",
      "상품 동기화 파이프라인(분산락·graceful shutdown·S3 중복 제거) + Airflow ETL 신규 구축",
      "DB 운영을 직접 수행 (DBA 겸임 — autovacuum·파티션·인덱스 튜닝)",
      "구버전 캐시 인프라 전환(메모리→Valkey)·런타임 업그레이드 후 무중단 종료",
    ],
    result:
      "내재화 서비스 2025.07 런칭 후 약 10개월 무중단 운영, 약 2.9TB 운영 DB를 단독 DBA로 관리, 인프라 비용 약 40% 절감, 기획~DBA 전 영역 단독 오너십.",
  },
  {
    company: "바로팜",
    role: "백엔드 엔지니어",
    period: "2022.08 – 2023.11",
    project: "의약품 주문 통합 플랫폼",
    problem:
      "상품 전시 영역 백엔드와, 이를 운영·판매하기 위한 관리자·파트너·세일즈 도구가 함께 필요했다.",
    did: [
      "상품 전시 백엔드 API(Python Django) 개발·운영",
      "전시영역 관리자·파트너·세일즈 페이지(Next.js) 개발",
      "코드레벨 최적화 및 리팩토링 다수 수행",
    ],
  },
  {
    company: "놀이의발견",
    role: "플랫폼실 백엔드파트 · 파트장",
    period: "2020.10 – 2022.06",
    project: "O2O 키즈플랫폼",
    problem:
      "전사 Admin·CRM이 jQuery 레거시였고, 데이터 기반 의사결정과 백엔드 파트 운영을 동시에 끌고 가야 했다.",
    did: [
      "백엔드파트 파트장으로 매니지먼트",
      "jQuery 레거시 → React 마이그레이션, CRM·전사 관리자 개발(Django REST)",
      "컨테이너 기반 빌드·배포 자동화 구축 참여",
      "마케팅 성과측정 파이프라인·퍼널 분석 RAW 수집/가공, 전사 BI(QuickSight) 개선, 지역기반 추천 모델 개발",
    ],
  },
  {
    company: "알고랩",
    role: "개발팀 · 선임",
    period: "2019.07 – 2020.10",
    project: "라스트마일 물류 웹서비스",
    problem: "라스트마일 물류 웹서비스를 개발하고 운영해야 했다.",
    did: [
      "Django REST·GraphQL(Hasura) 개발",
      "Vue·React 사용자/관리자 페이지 개발",
      "Sanic·Peewee 마이크로서비스 개발",
      "AWS 운영(EC2 docker, RDS, CodePipeline, S3, CloudFront, ELK)",
    ],
  },
];

export const otherWork: string[] = [
  "라이픽 · 데이터 엔지니어 (2022.06–07) — 올인원 QOL 플랫폼 데이터 처리·조회 시스템 설계·개발",
  "시스메이트 · 솔루션사업부 (2019.02–07) — 디지털사이니지 웹 빌더·맞춤형 키오스크 웹 개발 (Django/React)",
  "디플랫폼 · 연구원 (2018.06–2019.01) — CTI 정보보안 위협정보 수집·분석·공유 시스템 (KISA 협업)",
];

export const education: string[] = [
  "2017.12 – 2018.04 · 한국생산성본부 — 센서네트워크 기반 IoT 융합서비스 개발 (우수상)",
  "2012.03 – 2013.03 · 학점은행제 컴퓨터공학 졸업",
  "2004.03 – 2011.03 · 경기대학교 건축학과 중퇴",
];
