import React from "react";
import { Layout } from "../components/Layout.js";
import logo from "../assets/logo-large.png";
import dribble from "../assets/dribble.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import styled from "@emotion/styled";

const Container = styled.div`
  margin-left: 120px;
  width: calc(100% - 120px);
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1140px) {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 280px;
  height: 261px;
  margin-left: 120px;

  @media screen and (max-width: 1140px) {
    margin-left: 0;
    width: 130px;
    height: 111px;
  }
`;

const Intro = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 50px;
  max-width: calc(280px * 2);
  width: 100%;

  display: inline-block;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  span {
    color: white;
    padding: 0 4px;
    border-bottom: 2px solid #f0ca4d;
  }

  @media screen and (max-width: 1140px) {
    text-align: center;
    margin-top: 32px;
    padding-right: 32px;
    padding-left: 32px;
    font-size: 1.7rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.3rem;
    line-height: 2.2rem;
  }
`;

const Divider = styled.div`
  border-left: 2px white solid;
  opacity: 0.5;
  max-height: 70%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  width: 3px;
`;

const IntroContainer = styled.div``;

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

  @media screen and (max-width: 1140px) {
    margin-top: 64px;
    justify-content: center;
  }

  @media screen and (max-width: 400px) {
    padding: 0 32px;
    justify-content: center;
  }
`;

export default function Home() {
  return (
    <Layout>
      <Container>
        <Logo src={logo} />
        <Divider />
        <IntroContainer>
          <Intro>
            Hello, <br />
            My name is
            <span>Lem Canady</span>.<br />I am an
            <span>Interactive Designer</span>, <span>Illustrator</span>, and
            <span>Web Developer</span> <br />
            living in the beautiful <span>PNW</span>.
          </Intro>
          <Icons>
            <a
              href="https://github.com/lcanady"
              target="_blank"
              rel="noreferrer"
            >
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
    </Layout>
  );
}
