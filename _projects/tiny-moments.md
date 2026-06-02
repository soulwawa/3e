---
title: "작은 위로 — 부모를 위한 위로 카드 iOS 앱"
site: "https://apps.apple.com/kr/app/%EC%9E%91%EC%9D%80-%EC%9C%84%EB%A1%9C/id6763057739"
period: "2026.04 - 현재"
skill:
  backend: "서버리스 (GitHub Pages 정적 호스팅)"
  frontend: "SwiftUI, SwiftData, WidgetKit (iOS 17+)"
  operation: "App Store Connect, GitHub Pages"
images:
  [
    "/static/project/tiny-moments/01.png",
    "/static/project/tiny-moments/02.png",
    "/static/project/tiny-moments/03.png",
    "/static/project/tiny-moments/04.png",
  ]
link: "https://tinymoments.site"
---

## 문제

육아 중인 부모에게는 거창한 다이어리가 아니라, 지친 순간 아이 사진과 함께 받는 짧은 위로 한 줄이 필요했다. 기존 육아 기록 앱은 입력 부담이 크고, 사진·기록이 외부 서버로 올라가는 프라이버시 우려도 있었다. 기획서가 따로 없는 1인 프로젝트로, 문제 정의부터 출시·운영까지 직접 책임져야 했다.

## 접근

- 기획부터 개발·출시까지 **혼자** — SwiftUI + SwiftData(iOS 17+)로 구현
- 앱 + 홈/잠금화면 위젯 + 사진 공유 기능을 묶어, 위젯에 함께한 날(D+N)을 보여주도록 설계
- **원격 업데이트 게이트**를 직접 만들어, 출시 후에도 앱 재배포 없이 강제/권장 업데이트를 제어
- **프라이버시 우선** — 모든 사진·기록을 기기에만 저장 (로그인·서버 전송 없음)

## 결과

- **2026-04-16 착수, 8일 만에** App Store(한국) 단독 출시
- 이후 5주간 **3개 버전(v1.2까지) 직접 배포·운영**
- 단독 개발로 **커밋 190개 · 테스트 100개** 누적
