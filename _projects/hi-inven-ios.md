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

AI 에이전트를 활용해 개발하고 2026.09 App Store에 출시한 iPhone 앱입니다. [2022–2024년 초기 서비스](/projects/hi-inven)가 다루던 집안 재고 관리 문제를 대화 중심의 iOS 앱으로 다시 구성했습니다.

## 제품의 과제

이름·수량·장소·기한을 한 문장으로 기록하되, 잘못 해석한 값이 재고에 저장되지 않도록 다루는 앱입니다. SwiftData로 재고를 기기에 저장하고, 지원되는 iOS 26 이상 환경에서는 Apple Foundation Models로 입력을 해석합니다. 대화를 외부 AI 서버로 보내지 않으며, AI를 사용할 수 없어도 기본 재고 관리와 기한 알림을 이용할 수 있습니다. 최소 지원 버전은 iOS 18입니다.

## 날짜 입력을 넓히면서 상품명은 바꾸지 않기

`28/9/17`처럼 사람이 사용하는 날짜 표기를 처리하는 과정에서는, 날짜처럼 보이는 숫자나 기호를 어디까지 해석할지가 중요했습니다. 상품번호나 수량을 날짜로 바꾸지 않도록 기한을 말하는 문맥을 확인했습니다. 달력에 없는 날짜나 일자가 빠진 연월은 임의로 완성하지 않고 다시 확인하도록 했습니다.

수정 후보를 검증하던 중에는 날짜 표기를 정리하는 코드가 **상품명에 들어 있는 전각 기호까지 바꾸는 부작용**이 발견됐습니다. 입력 전체를 정규화하는 범위를 줄이고, 날짜 패턴 안에서 구분자를 인식하도록 고쳐 상품명 원문을 보존했습니다.

검증은 모델의 답변이 그럴듯한지만 보는 데서 끝내지 않았습니다. 원문과 변형 표기를 회귀 입력으로 남기고, 실제 모델 경로에서 **저장된 이름·수량·기한을 다시 조회**했습니다. 날짜만 고쳐 말하는 후속 답변에서도 나머지 정보가 유지되는지 함께 확인했습니다. 이 검증은 정해진 입력 표본에 대한 결과이며, 모든 자연어 입력의 정확도를 보장하는 수치로 확대하지 않았습니다.
