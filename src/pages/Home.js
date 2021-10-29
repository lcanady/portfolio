import React, { useContext, useEffect } from "react";
import logo from "../assets/logo-large.png";
import dribble from "../assets/dribble.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import styled from "@emotion/styled";
import { MyContext } from "../components/ContextProvider.js";
import useWindowDimensions from "../hooks/useWindowDimensions.js";

const Container = styled.div`
  max-width: 1220px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    padding-top: 90px;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
`;

const Logo = styled.img`
  margin-top: -120px;
  width: 150px;
  height: 131px;
  margin-right: auto;

  @media screen and (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 32px;
  }
`;

const Intro = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  max-width: calc(180px * 2);
  width: 100%;

  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  span {
    color: white;
    padding: 0 4px;
    border-bottom: 2px solid #f0ca4d;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
    text-align: center;
    padding: 0 16px;
  }
`;

const Icons = styled.div`
  margin: 24px 0;
  display: flex;

  img {
    margin-left: 8px;
    height: 60px;
    width: 60px;
    cursor: pointer;
  }

  & img:first-child {
    margin-left: 0;
  }

  @media screen and (max-width: 900px) {
    padding: 0 32px;

    justify-content: center;

    img {
      margin: 8px;
    }
  }
`;

const IntroContainer = styled.div``;

export default function Home() {
  const { setColor } = useContext(MyContext);
  const { height, width } = useWindowDimensions();

  useEffect(() => setColor(""), []);

  return (
    <Container height={height}>
      <Logo src={logo} />
      <IntroContainer>
        <Intro>
          Hello, <br />
          My name is <span>Lem Canady</span>. <br />I am am
          <span>Interactive Designer</span>, <span>Illustrator</span>, and
          <span>Web Developer</span> living in the beautiful <span>PNW</span>.
        </Intro>
        <Icons>
          <a href="https://github.com/lcanady" target="_blank" rel="noreferrer">
            <img src={github} />
          </a>
          <a href="https://www.linkedin.com/in/lcanady/" target="_blank">
            <img src={linkedin} />
          </a>
          <a href="https://dribbble.com/lcanady" target="_blank">
            <img src={dribble} />
          </a>
        </Icons>
      </IntroContainer>
    </Container>
  );
}
