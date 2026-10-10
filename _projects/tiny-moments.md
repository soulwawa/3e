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

AI 에이전트를 활용해 개발한 개인 프로젝트로, 2026.04 App Store에 출시했습니다.

## 제품의 방향

아이 사진과 짧은 문장으로 육아 기록을 남기고, 위로 카드와 위젯에서 그 장면을 다시 보는 앱입니다. 사진과 기록은 기기에 보관하며, 원본을 보존한 채 감성 톤을 적용합니다. 홈 화면 위젯에서 보던 사진·문구는 앱에서도 이어 볼 수 있습니다.

## 위젯 문제처럼 보였던 화면 전환 오류

위젯 연결 기능을 검증하던 중, 사진을 보고 앱을 백그라운드로 보낸 뒤 같은 위젯을 다시 누르면 기록 작성 화면이 열리는 현상이 있었습니다. 처음에는 위젯 진입 직후의 문제로 해석했지만, 첫 수정으로 해결되지 않았습니다. **사진 보기 → 홈 제스처로 나가기 → 위젯으로 재진입**이라는 실제 순서를 기준으로 다시 확인해야 했습니다.

원인은 위젯 링크가 아니라 화면 전체를 덮는 사진 카드의 제스처 처리였습니다. 홈 표시줄에서 시작한 위쪽 입력까지 카드의 ‘기록 작성’ 스와이프로 받아들이고 있었습니다. 수정에서는 입력의 시작 영역과 앱의 활성 상태를 함께 확인해 시스템 홈 제스처와 카드 조작을 구분했습니다.

Simulator에서 같은 하단 입력을 비교해 수정 전에는 기록 화면으로 넘어가고 수정 후에는 사진 카드가 유지되는 것을 확인했습니다. 정상적인 카드 중앙 스와이프는 계속 동작해야 했고, 이미 작성 중인 기록을 닫거나 초안을 지우는 방식으로 현상을 감추지 않았습니다.
