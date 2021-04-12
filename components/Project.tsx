import styled from "styled-components";
import React from "react";
import Link from 'next/link'
import {Divider1x} from "./common";
import ProjectListData, { TProjectListData }  from "../data/projectList";
import device from "../lib/device";

const ProjectContainer = styled.section`
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledProjectItem = styled.div`
  border: 2px solid lightgray;
  margin: 1rem;
  padding: 1rem;
  color: white;
  cursor: pointer;
  box-shadow: 2px 2px;
  
  @media ${device.mobileL} {
    margin: 0.5rem;
  }
`;

const StyledProjectItemTitle = styled.h3`
  font-size: 1.1rem;
`;

const StyledProjectItemDetail = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;

const StyledProjectItemPeriod= styled.small`
  font-size: 0.8rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.8);
`;

const ProjectItem = ({title, period, summary, slug}:TProjectListData) => {
  return (
    <Link as={`/projects/${slug}`} href="/projects/[slug]">
    <StyledProjectItem>
        <StyledProjectItemTitle>{title}</StyledProjectItemTitle>
        <Divider1x/>
        <StyledProjectItemDetail>{summary}</StyledProjectItemDetail>
        <StyledProjectItemPeriod>{period}</StyledProjectItemPeriod>
    </StyledProjectItem>
    </Link>
  );
};

export default function Project() {
  return (
    <ProjectContainer>
      <Title>📔 Project</Title>
      <ProjectGrid>
        {ProjectListData.map((ele:TProjectListData, index)=>
          <ProjectItem
            title={ele.title}
            summary={ele.summary}
            period={ele.period}
            slug={ele.slug}
            key={index}
          />)}
      </ProjectGrid>
    </ProjectContainer>
  );
}
