---
title: "매모판 · 네이버 스마트스토어 셀러 상품 분석 SaaS"
site: "https://memopan.io"
period: "2024.05 - 현재"
skill:
  backend: "Java (Spring Boot · JPA · QueryDSL), Python (Airflow · SQS 워커)"
  frontend:
  operation: "Kubernetes, AWS(Aurora PostgreSQL · SQS · S3), ClickHouse, Valkey, Argo CD"
images:
  [
    "/static/project/memopan/memopan.jpeg",
    "/static/project/memopan/memopan1.jpeg",
    "/static/project/memopan/memopan2.jpeg",
    "/static/project/memopan/memopan3.jpeg",
    "/static/project/memopan/memopan4.jpeg",
  ]
---

## 문제

외부 의존으로 운영되던 **Node.js 기반** 스마트스토어 분석 솔루션을 자체 서비스로 내재화해야 했습니다. 기획자가 도메인 로직을 완전히 파악하지 못한 상태였고, 전담 개발자는 사실상 1명이었습니다.

## 접근

- 기존 **Node.js 서비스를 인수·안정화**하고 떠난 DevOps 공백을 직접 대응
- 내재화하며 백엔드를 **헥사고날 아키텍처(Spring Boot · JPA · QueryDSL)로 재설계·포팅** — 검색순위진단 캐싱·페이지네이션 고도화, 상품명 SEO 분석, 네이버 커머스 API 인증 체계(OAuth 토큰 캐싱)
- 상품 동기화 파이프라인(분산락 · graceful shutdown · S3 중복 제거)과 Airflow 기반 ETL(검색순위 분석 · 계정SET 빌드 · 캐시 웜업) 신규 구축
- DB 운영을 개발자가 직접 수행 (DBA 겸임 — autovacuum 튜닝 · 파티션 관리 · 인덱스 최적화)
- 구 Node.js 버전은 캐시 인프라 전환(메모리 → Valkey)과 런타임 업그레이드 후 장애 없이 무중단 종료

## 결과

- 내재화 서비스 2025.07 런칭 후 **약 10개월 무중단 운영**
- 약 **2.9TB** 운영 DB(단일 products 테이블 990GB)를 전담 DBA 없이 무장애 운영
- (구) Node.js 운영 시기 **인프라 비용 약 40% 절감** (DevOps 공백 대응)
- 기획 ~ 설계 ~ 구축 ~ 운영 ~ DBA 전 영역을 단독으로 책임

- [커머스솔루션마켓](https://solution.smartstore.naver.com/ko/solution/76DgGDhLyAuB6lwdl28QSe/detail)
- [홈페이지](https://memopan.io/d/pro/intro)
