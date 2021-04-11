import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import About from "../components/About";
import Work from "../components/Work";
import { LineDivider } from "../components/common";
import Project from "../components/Project";
import Footer from "../components/Footer";

const Container = styled.div`
  max-width: 68rem;
  margin: 0 auto;
`;

export default function Home() {
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
