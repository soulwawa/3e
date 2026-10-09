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

## 문제

기저귀·분유·이유식·생수처럼 반복 구매하는 상품은 쇼핑몰마다 가격이 다르고 할인 시점이 제각각이라, "이거 지난번에 얼마였지?"를 매번 다시 비교하는 데 시간과 피로가 든다. 시중 가계부 앱은 과하고, 쇼핑 앱의 자동 최저가는 내가 실제로 결제한 가격과 다르다. 외부 기획서 없이 직접 겪은 문제를 출발점으로, 요구사항·데이터 모델·계산 기준을 스스로 정의해 제품으로 만들었다.

## 접근

- 직접 겪은 문제에서 출발해 **기획·데이터 모델·계산 기준을 스스로 정의**하고 구현
- 핵심 차별점 **'실단가'** — 영수증 금액이 아니라 적립 포인트·카드 할인까지 반영한 실제 단가를 기준으로 매장 비교
- **묶음당 수량 × 구매 묶음 수**로 총 비교 수량을 계산하고, 특별 구성이나 실측 수량은 직접 입력할 수 있도록 지원
- 기존 가격 기록을 수정할 때 **구매 당시 수량을 보존**해 과거 단가의 비교 기준을 유지
- 상품별 최근가·최저가, 구매처별 가격 비교와 시간순 구매 이력을 한곳에서 확인하는 화면 구성
- **iOS 앱 + Supabase 백엔드를 직접 구축** (이메일 OTP 인증, 사용자별 데이터, 최근 구매처 추천)
- 게스트 둘러보기 모드, 원격 버전 정책 등 출시·운영 장치까지 직접 마련

## 결과

- 개발 시작 후 약 7주 만에 iOS **v1.0을 App Store 단독 출시**
- 첫 심사 리젝 후 **인앱 회원 탈퇴 기능을 직접 구현**해 재제출·승인까지 처리
- 기획·UX·iOS·백엔드·출시·운영까지 **1인 end-to-end로 설계·구축·운영**
