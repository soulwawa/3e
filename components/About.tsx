import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const AboutContainer = styled.section`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Avatar = styled.span`
  border-radius: 100%;
  display: inline-block;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.25);
  margin: 2rem 0;
`;

const AvatarImage = styled.img`
  border-radius: 100%;
  display: block;
  width: 10rem;
`;

const H1 = styled.h1`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 200;
  margin-bottom: 1.5rem;
  line-height: 2.8rem;
  word-break: break-word;
  text-align: left;
`;

const Strong = styled.strong`
  color: white;
  font-weight: 200;
`;

const IconList = styled.li`
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.05);
  width: 3rem;
  height: 3rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 2rem;
`;

// TODO: 수정
const A = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
`;

export default function About() {
  return (
    <AboutContainer>
      <Avatar>
        <AvatarImage src="/static/about/3e.jpeg" alt="profile" />
      </Avatar>
      <H1>
        👋🏻 Hello, DevOps를 꿈꾸는{" "}
        <Strong>React를 좋아하는 python Django 개발자입니다!</Strong>
        <br />
        Django의 매력에 빠져 백엔드 개발로 시작하였지만, 여러 기술에 흥미를
        느끼는 성격상, 신기술을 스터디하는 것을 즐깁니다. <br />
        Python과 React를 주로 사용하고 있고, DevOps라는 큰 꿈을 지니고 있습니다.
        <br />
        최근 관심사로는 주로 사용하는 언어가 동적 타입 언어이다 보니, python은
        타입 체킹을, javascript는 typescript의 적용을 위해 공부 중입니다.
      </H1>
      <ul>
        <IconList>
          <A href="https://www.facebook.com/soulwawa" target="_blank">
            <Icon icon={faFacebook} />
          </A>
        </IconList>
        <IconList>
          <A href="https://github.com/soulwawa" target="_blank">
            <Icon icon={faGithub} />
          </A>
        </IconList>
        <IconList>
          <A href="mailto:soulwawa85@gmail.com" target="_blank">
            <Icon icon={faEnvelope} />
          </A>
        </IconList>
      </ul>
    </AboutContainer>
  );
}
