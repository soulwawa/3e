---
title: "작은 위로 — 아이 사진 육아일기 iOS 앱"
site: "https://apps.apple.com/kr/app/id6763057739"
period: "2026.04 - 현재"
skill:
  backend: "서버 없이 기기 내 저장 (SwiftData)"
  frontend: "SwiftUI, SwiftData, WidgetKit (iOS 17+)"
  operation: "App Store Connect, GitHub Pages"
images:
  [
    "/static/project/tiny-moments/01_main-card-v132.jpg",
    "/static/project/tiny-moments/02_record-v132.jpg",
    "/static/project/tiny-moments/03_privacy-v132.jpg",
    "/static/project/tiny-moments/04.png",
  ]
link: "https://tinymoments.site"
---

AI 에이전트를 활용해 개발·개선한 개인 프로젝트입니다.

## 문제

육아 중에는 사진을 찍어도 그날의 감정과 이야기를 길게 남기기 어렵습니다. 짧게 기록하는 과정과, 남긴 사진을 일상에서 다시 보는 과정을 연결하고자 했습니다. 아이 사진과 기록을 외부 서버로 보내지 않고 사용할 수 있는 것도 제품의 전제입니다.

## 접근

- **사진 한 장과 한 문장으로 기록합니다.** 사진 앱의 공유 시트에서도 기록을 만들고, 촬영일을 읽거나 날짜를 수정할 수 있습니다. 별도의 긴 작성 과정을 요구하지 않는 입력 흐름입니다.
- **원본 보관과 화면 표현을 분리합니다.** 사용자가 추가한 사진·기록은 기기에 보관합니다. SwiftData로 기록을 관리하고, 사진 원본을 보존한 채 감성 톤을 카드와 위젯에 적용합니다. 로그인이나 서버 업로드 없이 사용할 수 있습니다.
- **위젯에서 보던 내용을 앱으로 이어 봅니다.** 홈 화면·잠금 화면 위젯에 사진·위로 문구와 함께한 날(D+N)을 표시합니다. 홈 화면 위젯을 누르면 같은 사진과 문구를 앱에서 확인할 수 있어, 위젯에서 본 장면을 다시 찾는 과정을 줄입니다.

## 출시·개선

2026.04 App Store에 출시했으며 iOS 17 이상을 지원합니다. 출시 후 감성 톤·카드 공유를 추가하고, 2026.10 공개 업데이트에서는 홈 화면 위젯의 사진·문구를 앱에서 이어 보는 동작을 반영했습니다.
