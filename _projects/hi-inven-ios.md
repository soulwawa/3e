---
title: "안녕재고 · iOS — 대화형 재고 관리 앱"
site: "https://apps.apple.com/kr/app/id6802033161"
period: "2026 - 현재"
skill:
  backend: "서버 없이 기기 내 저장 (SwiftData)"
  frontend: "Swift · SwiftUI · Apple Foundation Models"
  operation: "App Store Connect · 로컬 알림 · Live Activity"
images:
  [
    "/static/project/hi-inven-ios/01-chat-add.jpg",
    "/static/project/hi-inven-ios/02-home.jpg",
    "/static/project/hi-inven-ios/04-inventory.jpg",
    "/static/project/hi-inven-ios/05-live-activity.jpg",
  ]
link: "https://hi-inven.com"
---

AI 에이전트를 활용해 개발하고 2026년에 출시한 iPhone 앱입니다. [2022–2024년 초기 서비스](/projects/hi-inven)의 운영 경험을 바탕으로, 같은 생활 속 문제를 대화 중심의 iOS 앱으로 다시 풀었습니다.

## 문제

집안 식재료와 생활용품이 늘면 어디에 무엇이 얼마나 남았는지, 언제까지 챙겨야 하는지를 함께 기억하기 어렵습니다. 물건을 기록하는 부담을 줄이고 필요한 시점에 먼저 알려주는 재고 비서를 만들고자 했습니다.

## 접근

- **SwiftUI 기반 iPhone 앱**에서 “사과 2개를 냉장고에 내일까지 담아줘”처럼 이름·수량·장소·기한을 한 문장으로 기록합니다. 대화로 조회하거나 사용·폐기 수량을 처리하고, 목록에서도 수정할 수 있습니다.
- **Apple Foundation Models로 기기 안에서 입력을 해석**합니다. 지원되는 iOS 26 이상 기기에서 AI를 사용할 수 있을 때 활용하며, 사용할 수 없는 환경에서도 기본 재고 관리와 기한 알림을 제공합니다. 잘못된 날짜나 부족한 정보는 저장 전에 다시 확인합니다.
- **SwiftData로 재고를 기기에 저장**합니다. 회원가입이나 서버 동기화 없이 사용할 수 있고, 대화 입력을 외부 AI 서버로 전송하지 않습니다.
- **로컬 알림과 Live Activity**로 기한이 가까운 물건을 안내합니다. 앱을 열지 않아도 잠금 화면과 지원 기기의 Dynamic Island에서 급한 물건을 확인할 수 있습니다.

## 결과

- **2026.09.07 App Store 공개 출시** — iPhone 전용, iOS 18 이상 지원
- 서버 기반 하이브리드 서비스의 운영 경험을 바탕으로, **기기 내 데이터·온디바이스 AI 중심의 iOS 앱으로 재출시**
- 출시 후 실제 날짜 입력 표현과 후속 답변 처리를 보완하며, 이름·수량을 유지하고 잘못된 기한 저장을 방지하는 흐름을 개선
