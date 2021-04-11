import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  flex-basis: 2em;
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
  padding: 1rem 0;
`;

export default function Footer() {
  return (
    <StyledFooter>Copyright &copy; 2019. 3e All rights reserved</StyledFooter>
  );
}
