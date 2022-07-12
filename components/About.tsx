import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import device from "../lib/device";

const AboutContainer = styled.section`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Avatar = styled.span`
  border-radius: 100%;
  display: inline-block;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 2rem 0;
`;

const AvatarImage = styled.img`
  border-radius: 100%;
  display: block;
  width: 10rem;
`;

const H1 = styled.h1`
  font-size: 1.8rem;
  font-weight: 200;
  margin-bottom: 1.5rem;
  line-height: 2.8rem;
  word-break: keep-all;
  text-align: left;

  @media ${device.laptop} {
    font-size: 1.5rem;
  }

  @media ${device.mobileL} {
    font-size: 1.3rem;
    line-height: 2rem;
  }
`;

const IconList = styled.li`
  border-radius: 100%;
  border: 1px solid rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.05);
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

const A = styled.a`
  text-decoration: none;
  color: black;
`;

export default function About() {
  return (
    <AboutContainer>
      <Avatar>
        <AvatarImage src="/static/about/3e.jpeg" alt="profile" />
      </Avatar>
      <H1>
        👋🏻 5년차 개발자로 스타트업에서 주로 풀스택 개발을 담당하였습니다.
        <br/>
        20명 정도 되는 개발조직 안에 9명으로 구성된 백엔드파트를 책임진 경험이 있습니다.
        <br/><br/>
        회사의 성장에 기여하는 것을 매우 흥미롭게 생각하며, 비효율적이고 반복되는 업무를 개선하는 걸 좋아합니다.
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
