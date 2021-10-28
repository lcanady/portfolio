import styled from "@emotion/styled";
import React, { useContext, useEffect } from "react";
import { MyContext } from "../components/ContextProvider";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Headline = styled.h1`
  font-weight: bold;
  font-size: 144px;
  opacity: 0.7;
`;
const Subhead = styled.h2``;

export default function NotFound() {
  const { setColor } = useContext(MyContext);

  useEffect(() => setColor("#DE4F3C"), []);

  return (
    <Container>
      <Headline>404</Headline>
      <Subhead>Page Not Found.</Subhead>
    </Container>
  );
}
