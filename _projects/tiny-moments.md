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

## 문제

육아 중에는 사진을 찍어도 그날의 감정과 이야기를 길게 남기기 어렵다. 사진 한 장과 짧은 문장으로 기억을 남기고, 지친 순간에는 아이 사진과 위로 문구를 다시 만날 수 있는 앱을 만들었다. 사진과 기록을 외부 서버로 보내지 않고 사용할 수 있도록 설계했다.

## 접근

- 기획부터 개발·출시까지 **혼자** — SwiftUI + SwiftData(iOS 17+)로 사진·문구 카드와 육아 기록을 구현
- **사진 한 장 + 한 문장으로 기록**하고 모아보기. 사진 앱의 공유 시트에서도 바로 기록을 만들고, 촬영일을 자동으로 읽거나 직접 날짜를 수정할 수 있도록 구성
- **원본을 보존하는 감성 톤**을 카드와 위젯에 적용하고, 카드 이미지를 공유하는 기능 제공
- 홈 화면·잠금 화면 위젯에 사진·위로 문구와 함께한 날(D+N)을 표시. **홈 화면 위젯을 탭하면 같은 사진과 문구를 앱에서 이어서 확인**하도록 연결
- **프라이버시 우선** — 로그인 없이 사용하고, 사용자가 추가한 사진·기록은 기기에만 저장

## 결과

- **2026.04 App Store(한국) 단독 출시**, iOS 17 이상 지원
- 위로 카드·육아 기록·공유 시트·위젯을 연결해 **사진을 남기고 다시 보는 흐름을 직접 구현·운영**
- 출시 후 원본을 보존하는 감성 톤과 카드 공유, **위젯에서 앱으로 이어 보기**까지 개선
