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

AI 에이전트를 활용해 개발한 개인 프로젝트로, 2026.05 App Store에 출시했습니다.

## 문제

기저귀·분유·생수는 할인·적립 조건과 묶음 수량이 달라 총 결제 금액만으로 비교하기 어렵습니다. 얼마였지?는 상품 가격·배송비·포인트·카드 할인을 반영한 실단가와 구매 이력을 기록하는 앱입니다. iOS 앱과 Supabase를 연결해 사용자별 기록을 관리합니다.

## 현재 상품 정보가 과거 구매 기록을 바꾸지 않도록

묶음 수로 구매량을 입력하게 만들 때, 현재 상품의 포장 규격을 과거 기록에도 적용하면 문제가 생깁니다. 상품 정보만 바꿨거나 오래된 기록의 메모만 고쳤는데 당시 구매 수량과 단가까지 달라질 수 있기 때문입니다. 가격 비교 앱에서는 편리한 입력보다 기록의 기준이 유지되는 것이 먼저입니다.

새 기록은 묶음당 수량과 구매 묶음 수로 계산하되, 기존 기록은 **구매 당시 저장한 총수량**을 기준으로 수정 화면을 엽니다. 현재 상품 규격으로 묶음 수를 자동 추론하지 않습니다. 환산할 수 없는 수량도 입력값을 보존하고 안내하도록 했습니다.

검증에서는 상품의 묶음당 수량을 **33매에서 50매로 변경한 뒤**, 기존 198매 기록의 메모를 수정·저장하고 다시 열었습니다. 수량과 실단가가 유지되는지 확인해, 새 입력 방식이 이전 기록을 바꾸지 않는 것을 완료 기준으로 삼았습니다.
