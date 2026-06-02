export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    items: [
      "Python (Django)",
      "Node.js (Express)",
      "Java (Spring Boot)",
      "Supabase",
      "REST API",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "SwiftUI", "TypeScript"],
  },
  {
    title: "Data",
    items: [
      "Airflow ETL",
      "데이터 파이프라인",
      "ClickHouse",
    ],
  },
  {
    title: "Infra · DB",
    items: [
      "AWS",
      "Docker",
      "PostgreSQL",
      "Redis",
    ],
  },
];

export const domains: string[] = [
  "라스트마일 물류",
  "키즈 O2O",
  "의약품 유통",
  "정보보안 (CTI)",
  "디지털사이니지",
  "커머스 · 셀러분석",
];
