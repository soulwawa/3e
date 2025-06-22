import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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

const P = styled.p`
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
      <H1>👋🏻 문제를 해결하며 함께 성장하는 개발자입니다.</H1>
      <P>
        스타트업부터 다양한 규모의 조직에서 백엔드와 풀스택 개발을 경험하며,
        서비스 성능 최적화와 안정적인 시스템 구축에 집중해 왔습니다.
        <br />
        <br />
        작은 문제에서 시작해 흐름을 바꾸는 일을 좋아하고,
        <br />
        회사의 성장에 기여할 수 있는 지점을 발견하고 개선하는 데서 큰 보람과
        흥미를 느낍니다.
        <br />
        <br />
        비효율적이거나 반복적인 작업을 개선하고, 팀과 함께 일의 방향성을
        고민하며 성장해왔습니다.
        <br />
        기술적인 해결뿐 아니라 협업과 커뮤니케이션에서도 성과를 내는 개발자를
        지향합니다.
        <br />
      </P>

      <ul>
        <IconList>
          <A
            href="https://www.linkedin.com/in/%EC%84%9D%EB%A7%8C-%EA%B3%A0-a7b1b6179/"
            target="_blank"
          >
            <Icon icon={faLinkedin} />
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
