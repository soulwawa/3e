import React from "react";
import styled from "styled-components";
import { Divider1x, DividerWidth1x, LightLineDivider } from "./common";
import NavLink from "./NavLink";

const WorkContainer = styled.section`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: white;
  margin-bottom: 1.5rem;
  text-align: left;
  font-weight: bold;
`;

const WorkTitle = styled.h2`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  text-align: left;
  font-weight: bold;
`;

const WorkDescriptionContainer = styled.div`
  text-align: start;
`;

const WorkDescriptionTitle = styled.div`
  display: flex;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
`;

const WorkDescriptionDetail = styled.p`
  text-align: start;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6rem;
  white-space: pre-line;
`;

export default function Work() {
  return (
    <WorkContainer>
      <Title>👨🏻‍💻 Work Experiences</Title>
      {/*놀이의발견*/}
      <Divider1x />
      <WorkTitle>[📃 2020.10 ~ / 놀이의발견 / IT 개발팀 ]</WorkTitle>
      <WorkDescriptionContainer>
        <WorkDescriptionTitle>
          ▶️ O2O 키즈플랫폼
          <DividerWidth1x />
          <NavLink
            href="https://nolbal.com"
            name="[ 놀이의발견: nolbal.com ]"
          />
        </WorkDescriptionTitle>
      </WorkDescriptionContainer>
      <Divider1x />
      <WorkDescriptionDetail>
        {`
          - O2O플랫폼 전사 Admin 개발 (Python / Django, React)
          - AWS운영관리 : EC2(docker), RDS(MySQL), APM
          `}
      </WorkDescriptionDetail>
      <Divider1x />
      <LightLineDivider />
      {/* 알고랩 */}
      <Divider1x />
      <WorkTitle>[📃 2019.07 ~ 2020.10 / 알고랩 / 개발팀 ]</WorkTitle>
      <WorkDescriptionContainer>
        <WorkDescriptionTitle>
          ▶️ 라스트마일 물류 웹서비스 개발
          <DividerWidth1x />
          <NavLink
            href="https://www.algoquick.com"
            name="[ 알고퀵: algoquick.com ]"
          />
        </WorkDescriptionTitle>
      </WorkDescriptionContainer>
      <Divider1x />
      <WorkDescriptionDetail>
        {`
          - Python ( Django ) 을 이용한 Rest API, GraphQL 개발
          - Vue, React 를 이용한 웹, 관리자 페이지 개발
          - Sanic, Peewee 를 이용한 마이크로서비스 개발
          - Hasura, Graphene-Django 를 활용한 GraphQL 개발
          - AWS 운영 관리 : EC2(docker), RDS(Postgresql), CodePipeline, S3, ELK
          `}
      </WorkDescriptionDetail>
      <Divider1x />
      <LightLineDivider />
      {/* 시스메이트 */}
      <Divider1x />
      <WorkTitle>
        [📃 2019.02 ~ 2019.07 / 시스메이트 / 솔루션사업부 개발팀 / 사원]
      </WorkTitle>
      <WorkDescriptionContainer>
        <WorkDescriptionTitle>
          ▶️ 디지털사이니지 웹 솔루션 개발
          <DividerWidth1x />
          <NavLink
            href="https://www.sysmate.co.kr"
            name="[ 시스메이트: https://www.sysmate.co.kr ]"
          />
        </WorkDescriptionTitle>
      </WorkDescriptionContainer>
      <Divider1x />
      <WorkDescriptionDetail>
        - 디지털 사이니지 를 이용한 웹 빌더 개발 ( Django, React )
        {`- 디지털 사이니지를 이용한 맞춤형 웹개발
          - Python ( Django ) 을 이용한 웹 개발
          - Django Admin 커스텀 마이징을 통한 관리자 페이지 개발 
          - javascript 를 이용한 길찾기 (SVG) 개발
          `}
      </WorkDescriptionDetail>
      <Divider1x />
      <LightLineDivider />
      {/* 디플랫폼 */}
      <Divider1x />
      <WorkTitle>[📃 2018.06 ~ 2019.01 / 디플랫폼 / 개발팀 / 연구원]</WorkTitle>
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
          - 국가 차원의 침해사고 대응을 위한 사이버 위협 인텔리전스 분석(CTI) 및 정보 공유 기술 개발
          `}
      </WorkDescriptionDetail>
      <Divider1x />
      <LightLineDivider />

      <Divider1x />
      <Title>👨🏻‍💻 Education</Title>
      <WorkTitle>
        {" "}
        ▶️ 2017.12 ~ 2018.04 한국생산성본부 센서네트워크 기반의 IoT 융합서비스
        개발{" "}
      </WorkTitle>
      <WorkTitle> ▶️ 2012.03 ~ 2013.03 학점은행제 컴퓨터공학 졸업 </WorkTitle>
      <WorkTitle> ▶️ 2004.03 ~ 2011.03 경기대학교 건축학과 중퇴 </WorkTitle>

      <Divider1x />
      <Title>🏆 Prize</Title>
      <WorkTitle>
        {" "}
        ▶️ 2017.12 ~ 2018.04 한국생산성본부 센서네트워크 기반의 IoT 융합서비스
        개발 우수상{" "}
      </WorkTitle>
    </WorkContainer>
  );
}
