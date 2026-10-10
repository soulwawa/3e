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

집안 식재료와 생활용품의 이름·수량·장소·기한을 매번 입력하는 부담을 줄이고자 했습니다. 다만 대화를 잘못 해석하면 실제 재고나 기한도 잘못 기록될 수 있습니다. 자연스러운 입력을 제공하면서, 저장할 정보가 부족하거나 날짜가 잘못된 경우를 다루는 것이 핵심 과제입니다.

## 접근

- **재고와 대화를 기기 안에서 처리합니다.** SwiftData로 재고를 저장하고, 지원되는 iOS 26 이상 환경에서는 Apple Foundation Models로 입력을 해석합니다. 회원가입·서버 동기화 없이 사용하며 대화를 외부 AI 서버로 보내지 않습니다. AI를 사용할 수 없는 환경에서도 기본 재고 관리와 기한 알림은 제공합니다.
- **입력 해석과 저장할 정보의 확인을 함께 다룹니다.** “사과 2개를 냉장고에 내일까지 담아줘”처럼 입력하되, 부족한 정보나 유효하지 않은 날짜는 다시 확인합니다. 날짜만 고쳐 말하는 후속 답변에서는 이미 입력한 이름·수량을 유지하도록 처리합니다. 목록에서도 재고를 확인·수정할 수 있습니다.
- **기한을 기록한 뒤 챙기는 흐름까지 연결합니다.** 로컬 알림과 Live Activity로 기한이 가까운 물건을 안내하고, 잠금 화면과 지원 기기의 Dynamic Island에서 확인할 수 있도록 구성했습니다.

## 출시·개선

2026.09.07 App Store에 공개했으며 iPhone·iOS 18 이상을 지원합니다. 출시 후 두 자리 연도, 구분자·공백이 섞인 날짜 등 실제 입력 형태를 보완했습니다. 날짜를 다시 알려주는 대화에서 이름·수량을 유지하고, 잘못된 기한이 저장되지 않도록 확인하는 흐름도 개선했습니다.
