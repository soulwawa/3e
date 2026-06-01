---
title: "Tiny Moments — 부모를 위한 위로 카드 iOS 앱"
site: "https://apps.apple.com/kr/app/%EC%9E%91%EC%9D%80-%EC%9C%84%EB%A1%9C/id6763057739"
period: "2026.04 - 현재"
skill:
  backend: "서버리스 — 원격 업데이트 정책 JSON을 GitHub Pages 정적 호스팅으로 운영"
  frontend: "SwiftUI, SwiftData, WidgetKit, PhotosUI, Share Extension (iOS 17+)"
  operation: "App Store Connect 배포, App Group 컨테이너, xcodegen 기반 프로젝트 생성, GitHub Pages(랜딩·개인정보처리방침·정책 JSON)"
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

- **제품 전체를 단독 설계·구현·출시.** SwiftUI + SwiftData(iOS 17+)로 앱을 짓고, xcodegen으로 프로젝트 파일을 코드로 관리해 pbxproj 충돌을 제거했다.
- **앱·홈위젯·잠금화면위젯·공유 Extension 4개 번들을 한 App Group으로 묶어** 사진을 공유. 위젯은 함께한 날(D+N)을 표시하도록 설계했다.
- **공유 Extension → 앱 데이터 전달을 Inbox 패턴으로 직접 설계.** staging→committed atomic rename, copy-then-save-then-delete, 멱등성 체크, 재시도·격리(quarantine) 한도까지 구현해 사진 유실 없이 안전하게 흡수되도록 했다.
- **원격 업데이트 게이트(UpdateGate)를 직접 구축.** GitHub Pages에 올린 정책 JSON으로 강제/권장 업데이트를 제어하고, 네트워크 실패 시 캐시로 동작하는 fail-open 상태머신 + 채널(debug/testflight/production) 분기까지 설계했다.
- **프라이버시 우선 결정:** 모든 사진·기록을 기기에만 저장, 로그인 없음, 서버 전송 없음으로 운영.
- **테스트 100개로 회귀 방어망을 직접 구축**하고, 시뮬레이터 자동화로 빌드→설치→UI 검증 워크플로우를 운영했다.

## 결과

- **2026-04-16 착수, 8일 만인 2026-04-24 App Store(한국) 단독 출시.**
- 이후 5주간 **v1.1.0(D-day 위젯)·v1.2.0(공유 Extension)** 까지 **3개 버전을 직접 배포·운영** (정식 태그 3개).
- 단독 개발로 **커밋 190개**, **테스트 100개(20개 파일)** 누적.
- 강제/권장 업데이트 정책을 원격에서 제어하는 운영 인프라를 갖춰, 출시 후에도 클라이언트 재배포 없이 버전 정책을 조정 가능.
