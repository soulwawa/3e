import React from "react";
import ErrorPage from "next/error";
import Layout from "../../components/Layout";
import { getAllProjects, getPostBySlug, markdownToHtml } from "../../lib/api";
import styled from "styled-components";
import {
  Divider1x,
  LightLineDivider,
  LineDivider,
} from "../../components/common";
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "../../components/Footer";
import NavLink from "../../components/NavLink";
import device from "../../lib/device";

type TSkill = {
  backend: string;
  frontend: string;
  operation: string;
};

type ProjectType = {
  slug: string;
  title: string;
  period: string;
  skill: TSkill;
  content: string;
  images: [string];
  link: string;
};

type Props = {
  project: ProjectType;
};

const Container = styled.div`
  max-width: 68rem;
  margin: 10rem auto;

  @media ${device.laptop} {
    margin: 5rem 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: black;
  margin-bottom: 1.5rem;
  text-align: left;
  font-weight: bold;
`;

const Period = styled.div`
  color: black;
  font-size: 1.2rem;
  font-style: italic;
`;

const SkillTitle = styled.div`
  font-size: 1.5rem;
`;

const Skill = styled.div`
  text-align: start;
  line-height: 2.5rem;
`;

const ImageItem = styled.div`
  margin: 1rem;
  text-align: center;
`;

const Project = ({ project }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        <Title>{project.title}</Title>
        <Period>프로젝트 기간 : {project.period}</Period>
        <LineDivider />
        <Divider1x />
        <SkillTitle>개발 기술</SkillTitle>
        <Divider1x />
        <Skill>Backend : {project.skill.backend}</Skill>
        {project.skill.frontend && (
          <Skill>Frontend : {project.skill.frontend}</Skill>
        )}
        {project.skill.operation && (
          <Skill>Operation : {project.skill.operation}</Skill>
        )}
        {project.link && (
          <Skill>
            Link : <NavLink href={project.link} name={project.link} />
          </Skill>
        )}
        <Divider1x />
        <LightLineDivider />
        <Divider1x />
        <SkillTitle>프로젝트 참여 정보</SkillTitle>
        <Divider1x />
        <Skill dangerouslySetInnerHTML={{ __html: project.content }} />
        {project.images.length > 0 && (
          <>
            <LightLineDivider />
            <Divider1x />
            <SkillTitle>프로젝트 스크린샷</SkillTitle>
            <Divider1x />
            <Divider1x />
            {project.images.map((ele, index) => (
              <ImageItem key={index}>
                <Image
                  src={ele}
                  alt={project.slug + index}
                  width="900"
                  height="600"
                />
              </ImageItem>
            ))}
          </>
        )}
      </Container>
      <Footer />
    </Layout>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const project = getPostBySlug(params.slug, [
    "title",
    "period",
    "skill",
    "slug",
    "images",
    "link",
    "content",
  ]);
  const content = await markdownToHtml(project.content || "");

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Project;
