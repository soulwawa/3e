import React from "react";
import styled from "styled-components";
import { Divider1x, LightLineDivider } from "./common";
import device from "../lib/device";

const WorkContainer = styled.section`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: black;
  margin-bottom: 1.5rem;
  text-align: left;
  font-weight: bold;
`;

const WorkTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  text-align: left;
  font-weight: bold;

  @media ${device.mobileL} {
    font-size: 1rem;
  }
`;

const WorkDescriptionContainer = styled.div`
  text-align: start;
`;

const WorkDescriptionTitle = styled.div`
  display: flex;
  font-size: 1.1rem;

  @media ${device.mobileL} {
    font-size: 1rem;
    flex-direction: column;
  }
`;

const WorkDescriptionDetail = styled.p`
  text-align: start;
  line-height: 1.6rem;
  white-space: pre-line;
  word-break: keep-all;

  @media ${device.mobileL} {
    font-size: 0.8rem;
  }
`;

const EduPrizeTitle = styled.div`
  text-align: start;
  font-size: 1.1rem;
  margin-bottom: 1rem;

  @media ${device.mobileL} {
    font-size: 1rem;
  }
`;

export default function Work() {
  return (
    <WorkContainer>
      <Title>👨🏻‍💻 Work Experiences</Title>
      {/*OIQ*/}
      <Divider1x />
      <WorkTitle>[📃 2023.11 ~ / OIQ / Develop Based Player]</WorkTitle>
      <WorkDescriptionContainer>
        <WorkDescriptionTitle>▶️ 생산성 플랫폼</WorkDescriptionTitle>
      </WorkDescriptionContainer>
      <Divider1x />
      <WorkDescriptionDetail>{`- CheckTodo 앱 개발`}</WorkDescriptionDetail>
      <Divider1x />
      <LightLineDivider />
      {/*바로팜*/}
      <Divider1x />
      <WorkTitle>[📃 2022.08 ~ 2023.11 / 바로팜 / 백엔드 엔지니어]</WorkTitle>
      <WorkDescriptionContainer>
        <WorkDescriptionTitle>▶️ 의약품 주문 통합 플랫폼</WorkDescriptionTitle>
      </WorkDescriptionContainer>
      <Divider1x />
      <WorkDescriptionDetail>
        {`- 의약품 주문 통합 플랫폼 상품 전시 영역에 필요한 백엔드 API(Python Django) 서비스 개발 및 운영
          - 전시영역 관리에 필요한 관리자 페이지(Next.js) 개발
          - 파트너 페이지(Next.js) 개발
          - 의약품 영업을 위한 세일즈 페이지(Next.js) 개발
          - 코드레벨 최적화 및 리팩토링 다수 수행`}
      </WorkDescriptionDetail>
      <Divider1x />
      <LightLineDivider />
      {/*라이픽*/}
      <Divider1x />
      <WorkTitle>
        [📃 2022.06 ~ 2022.07[폐업] / 라이픽 / 테크챕터 검색&데이터 파트 /
        데이터 엔지니어]
      </WorkTitle>
      <WorkDescriptionContainer>
        <WorkDescriptionTitle>
          ▶️ 올인원 QOL(Quality of Life) 플랫폼
        </WorkDescriptionTitle>
      </WorkDescriptionContainer>
      <Divider1x />
      <WorkDescriptionDetail>
        {`- 비즈니스 요구사항에 따른 데이터 처리 및 조회 시스템 설계, 개발 및 운영`}
      </WorkDescriptionDetail>
      <Divider1x />
      <LightLineDivider />
      {/*놀이의발견*/}
      <Divider1x />
      <WorkTitle>
        [📃 2020.10 ~ 2022.06 / 놀이의발견 / 플랫폼실 백엔드파트 / 파트장 ]
      </WorkTitle>
      <WorkDescriptionContainer>
        <WorkDescriptionTitle>▶️ O2O 키즈플랫폼</WorkDescriptionTitle>
      </WorkDescriptionContainer>
      <Divider1x />
      <WorkDescriptionDetail>
        {`[O2O 키즈 플랫폼 플랫폼실 백엔드파트 매니지먼트]
          - 2021.12 ~ 2022.06: O2O 키즈플랫폼 플랫폼실 백엔드파트 매니지먼트
          - 2021.06 ~ 2021.12 : O2O 키즈플랫폼 플랫폼실 백엔드2파트(CRM, 사장님, 정산, DevOps) 매니지먼트
          
          [O2O 키즈 플랫폼 데이터 엔지니어]
          - 마케팅 성과측정 데이터 파이프라인 개발
          - 퍼널 분석용 RAW 데이터 수집 가공 가시화
          - 전사 BI (AWS Quicksight) 전사 대시보드 개선
          - 아이나이, 지역기반 추천 모델 개발
          - 외부 채널 주문데이터 전사 대시보드 파이프라인 개발
          
          [놀이의발견 CRM / O2O 키즈플랫폼 전사 관리자]
          - O20 키즈플랫폼 CRM, 전사 관리자 개발
          - React / Python Django REST API 웹 서비스
          - 기존 서비스 유지보수 및 Admin Tool 개발
          - 기존 jquery기반 레거시 프로젝트를 React기반으로 마이그레이션
          - 컨테이너 기반 빌드/배포 자동화 시스템 구축 참여
          - 코드레벨 최적화 및 리팩토링 다수 수행
          - 운영 환경 : AWS ( EC2, RDS, APM)`}
      </WorkDescriptionDetail>
      <Divider1x />
      <LightLineDivider />
      {/* 알고랩 */}
      <Divider1x />
      <WorkTitle>[📃 2019.07 ~ 2020.10 / 알고랩 / 개발팀 / 선임 ]</WorkTitle>
      <WorkDescriptionContainer>
        <WorkDescriptionTitle>
          ▶️ 라스트마일 물류 웹서비스 개발
        </WorkDescriptionTitle>
      </WorkDescriptionContainer>
      <Divider1x />
      <WorkDescriptionDetail>
        {`- Python ( Django ) 을 이용한 Rest API, GraphQL 개발
          - Vue, React 를 이용한 웹, 관리자 페이지 개발
          - Sanic, Peewee 를 이용한 마이크로서비스 개발
          - Hasura, Graphene-Django 를 활용한 GraphQL 개발
          - AWS 운영 관리 : EC2(docker), RDS(Postgresql), CodePipeline, S3, ELK`}
      </WorkDescriptionDetail>
      <Divider1x />
      <LightLineDivider />
      {/* 시스메이트 */}
      <Divider1x />
      <WorkTitle>
        [📃 2019.02 ~ 2019.07 / 시스메이트 / 솔루션사업부 개발팀 / 사원 ]
      </WorkTitle>
      <WorkDescriptionContainer>
        <WorkDescriptionTitle>
          ▶️ 디지털사이니지 웹 솔루션 개발
        </WorkDescriptionTitle>
      </WorkDescriptionContainer>
      <Divider1x />
      <WorkDescriptionDetail>
        {`- 디지털 사이니지 를 이용한 웹 빌더 개발 ( Django, React )
          - 디지털 사이니지를 이용한 맞춤형 웹개발
          - Python ( Django ) 을 이용한 웹 개발
          - Django Admin 커스텀 마이징을 통한 관리자 페이지 개발 
          - javascript 를 이용한 길찾기 (SVG) 개발`}
      </WorkDescriptionDetail>
      <Divider1x />
      <LightLineDivider />
      {/* 디플랫폼 */}
      <Divider1x />
      <WorkTitle>
        [📃 2018.06 ~ 2019.01 / 디플랫폼 / 개발팀 / 연구원 ]
      </WorkTitle>
      <WorkDescriptionContainer>
        <WorkDescriptionTitle>
          ▶️ CTI 정보보안 데이터 웹 플랫폼 구축
        </WorkDescriptionTitle>
      </WorkDescriptionContainer>
      <Divider1x />
      <WorkDescriptionDetail>
        {`- Python ( Django ) 을 이용한 사이버 위협 정보 웹 크롤링, 데이터 파싱
          - MongoDB, Neo4j, PostgreSQL 를 이용한 데이터베이스 개발
          - 사이버 위협 정보 수집 시스템 운영
          - 국가 차원의 침해사고 대응을 위한 사이버 위협 인텔리전스 분석(CTI) 및 정보 공유 기술 개발`}
      </WorkDescriptionDetail>
      <Divider1x />
      <LightLineDivider />

      <Divider1x />
      <Title>👨🏻‍💻 Education</Title>
      <EduPrizeTitle>
        ▶️ 2017.12 ~ 2018.04 한국생산성본부 센서네트워크 기반의 IoT 융합서비스
        개발
      </EduPrizeTitle>
      <EduPrizeTitle>
        {" "}
        ▶️ 2012.03 ~ 2013.03 학점은행제 컴퓨터공학 졸업
      </EduPrizeTitle>
      <EduPrizeTitle>
        {" "}
        ▶️ 2004.03 ~ 2011.03 경기대학교 건축학과 중퇴
      </EduPrizeTitle>

      <Divider1x />
      <Title>🏆 Prize</Title>
      <EduPrizeTitle>
        ▶️ 2017.12 ~ 2018.04 한국생산성본부 센서네트워크 기반의 IoT 융합서비스
      </EduPrizeTitle>
    </WorkContainer>
  );
}
