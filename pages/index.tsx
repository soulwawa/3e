import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import About from "../components/About";
import Work from "../components/Work";
import { LineDivider } from "../components/common";
import Project from "../components/Project";
import Footer from "../components/Footer";
import device from "../lib/device";

const Container = styled.div`
  max-width: 68rem;
  margin: 0 auto;

  @media ${device.laptop} {
    margin: auto 1.5rem;
  }
`;

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // 0ms 딜레이를 줘야 정상 작동하는 경우도 있음
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, []);

  return (
    <Layout>
      <Container>
        <About />
        <LineDivider />
        <Work />
        <LineDivider />
        <Project />
      </Container>
      <Footer />
    </Layout>
  );
}
