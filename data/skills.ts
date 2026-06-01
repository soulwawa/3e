export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    items: [
      "Python (Django · Flask · Sanic)",
      "Node.js (Express)",
      "Java (Spring Boot)",
      "REST API",
      "GraphQL (Hasura · Graphene)",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue", "Flutter", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Data",
    items: [
      "Airflow ETL",
      "데이터 파이프라인",
      "ClickHouse",
      "AWS Redshift",
      "QuickSight (BI)",
      "추천 모델",
    ],
  },
  {
    title: "Infra · DB",
    items: [
      "AWS (EC2 · ECS · RDS · EB · CodePipeline · S3 · CloudFront · ELK)",
      "Docker",
      "PostgreSQL DBA",
      "Redis · Valkey",
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
