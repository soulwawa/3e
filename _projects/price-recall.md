---
title: "얼마였지? — 반복 구매 상품 가격 기록·비교 iOS 앱"
site: "https://apps.apple.com/kr/app/%EC%96%BC%EB%A7%88%EC%98%80%EC%A7%80/id6768031093"
period: "2026.04 - 현재"
skill:
  backend: "Supabase — Postgres, Auth(Email OTP), RLS, SECURITY DEFINER RPC, SQL 마이그레이션"
  frontend: "Swift, SwiftUI (iOS 17+), @Observable, NavigationStack"
  operation: "App Store Connect 배포·심사 대응, 원격 버전 정책(force/recommend update), 제품 사이트(Jekyll) 운영"
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

- **기획 공백을 직접 메움**: PRD·로드맵·의사결정 문서를 작성하고, 인증 방식·상품/카테고리 구조·구매처 처리·단위가격 계산 기준을 트레이드오프와 함께 비교해 결정한 뒤 구현에 들어갔다.
- **핵심 차별점인 '실단가' 계산 엔진을 설계**: 영수증 금액이 아니라 적립 포인트·결제일 카드 할인 같은 *나중에 들어오는 가치(deferred value)* 를 차감한 `net_unit_price = max(0, (총액+배송비) - (포인트+카드할인)) / 수량` 을 매장 비교·정렬·UI의 기준값으로 삼았다. 음수 단가는 폼 검증·DB CHECK·Swift `max(0)` 3계층으로 차단.
- **iOS 아키텍처를 단독 설계**: iOS 17+ SwiftUI + `@Observable` + `NavigationStack` 위에 Feature-first Layered Architecture(기능별 Presentation/Domain/Data)를 적용해 6개 기능(상품/가격기록/검색/인증/온보딩/버전정책)을 구성.
- **Supabase 백엔드를 직접 구축**: 사용자 소유(RLS) 스키마와 마이그레이션, 이메일 OTP 인증, 최근 구매처 추천 같은 입력 가속 로직을 구현.
- **출시·운영 인프라까지 구축**: 원격 버전 정책(force/recommend update + Semver 파서), 로그인 전 체험용 둘러보기(게스트) 모드, mock + auth-bypass QA 스킴과 시뮬레이터 자동 검증 워크플로우를 만들어 회귀를 빠르게 잡았다.

## 결과

- 개발 시작(2026.04)부터 약 7주 만에 iOS **v1.0(빌드 24)을 App Store에 단독 출시**.
- Apple 첫 심사 리젝(Guideline 5.1.1(v))을 받은 뒤, **인앱 회원 탈퇴 인프라를 설계·구현**(즉시 hard delete + 가명처리 archive: sha256+salt, SECURITY DEFINER RPC)해 재제출, 승인까지 직접 처리.
- 출시 직전 cold-start 인증 레이스를 진단·해결(`.resolving` 라우트 + sign-out 디바운스)해 재실행 시 세션 깜빡임 제거.
- 앱 코드 약 5,650 LOC(Swift 51개 파일) + 계산·버전정책 단위 테스트 약 955 LOC(9개 파일), Supabase 마이그레이션 3종.
- 기획·UX·iOS·백엔드·App Store 배포·버전 정책·제품 사이트(pricerecall.com)까지 **1인 end-to-end로 설계·구축·출시·운영**.
