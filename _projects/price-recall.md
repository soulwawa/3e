---
title: "얼마였지? — 반복 구매 상품 가격 기록·비교 iOS 앱"
site: "https://apps.apple.com/kr/app/id6768031093"
period: "2026.04 - 현재"
skill:
  backend: "Supabase (Postgres · Auth · RLS)"
  frontend: "Swift, SwiftUI (iOS 17+)"
  operation: "App Store Connect, GitHub Pages"
images:
  [
    "/static/project/price-recall/01_product_list.png",
    "/static/project/price-recall/02_product_detail.png",
    "/static/project/price-recall/03_price_record_form.png",
    "/static/project/price-recall/04_price_history.png",
  ]
link: "https://pricerecall.com"
---

AI 에이전트를 활용해 개발·개선한 개인 프로젝트입니다.

## 문제

기저귀·분유·생수처럼 반복 구매하는 상품은 할인·적립 조건과 묶음 수량이 달라 총 결제 금액만으로 비교하기 어렵습니다. 같은 상품의 포장 구성이 나중에 바뀌더라도, 과거에 어떤 수량과 가격으로 샀는지는 그대로 남아야 합니다. 구매 이력을 같은 단위로 비교하고 그 기준을 유지하는 데 초점을 맞췄습니다.

## 접근

- **실제 부담한 금액으로 비교합니다.** 상품 가격과 배송비에 적립 포인트·카드 할인을 반영하고, 비교 수량으로 나눠 실단가를 계산합니다. 구매처별 가격과 시간순 이력을 같은 기준으로 볼 수 있습니다.
- **묶음 입력과 총수량 입력을 함께 지원합니다.** 묶음당 수량에 구매 묶음 수를 곱해 계산하되, 특별 구성이나 실측 수량은 총수량으로 입력합니다. 현재 상품 규격으로 환산할 수 없는 수량은 임의로 바꾸지 않습니다.
- **현재 상품 정보와 과거 구매 기록을 구분합니다.** 기록을 수정할 때는 구매 당시 수량을 불러옵니다. 상품의 묶음당 수량을 바꾼 뒤 과거 기록의 메모만 수정해도, 이전 수량과 단가의 기준이 바뀌지 않도록 처리합니다.

## 출시·개선

2026.05 App Store에 출시했습니다. 이후 묶음 구매 수량 계산과 기존 기록의 수정 경로를 보완했습니다. 상품의 기준 수량을 변경한 뒤에도 과거 기록의 수량·단가가 유지되는지는 출시 전 검증 항목에 포함해 확인했습니다.
