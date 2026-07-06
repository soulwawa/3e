export const profile = {
  name: "고석만",
  handle: "3ES",
  role: "Backend · Full-stack Engineer",
  headline: "문제 현장에 들어가, 마지막 1마일까지 직접 책임지는 엔지니어",
  subline:
    "기획부터 설계·구현·운영·DB까지 — 플레이북 없이 들어가 프로덕션을 돌립니다.",
  intro:
    "스타트업부터 다양한 규모의 조직에서 백엔드·풀스택 개발을 경험하며, 서비스 성능 최적화와 안정적인 시스템 구축에 집중해 왔습니다. 작은 문제에서 시작해 흐름을 바꾸는 일을 좋아하고, 기술적 해결뿐 아니라 협업·커뮤니케이션에서도 성과를 내는 개발자를 지향합니다.",
  stats: [
    {
      value: "10개월+",
      label: "무중단 운영",
      note: "설계·런칭을 주도한 내재화 서비스",
    },
    { value: "4종", label: "직접 출시한 앱", note: "App Store 출시·운영 (안녕재고·CheckTodo 등)" },
    { value: "−40%", label: "인프라 비용", note: "DevOps 공백 대응·절감" },
  ],
  howIWork: [
    "문서도 담당자도 없는 코드에 들어가 전체 구조부터 장악합니다.",
    "기획이 비어 있으면 직접 채워 설계하고 구현합니다.",
    "만들고 끝이 아니라, 무중단으로 굴러가게 운영합니다.",
  ],
  socials: [
    {
      label: "Email",
      href: "mailto:soulwawa85@gmail.com",
      icon: "mail" as const,
    },
    {
      label: "GitHub",
      href: "https://github.com/soulwawa",
      icon: "github" as const,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/%EC%84%9D%EB%A7%8C-%EA%B3%A0-a7b1b6179/",
      icon: "linkedin" as const,
    },
  ],
};

export type IconName = (typeof profile.socials)[number]["icon"];
