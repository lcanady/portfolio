import styled from "@emotion/styled";
import React, { useState } from "react";
import PropTypes from "prop-types";
import circ from "../assets/circ.png";
import menu from "../assets/mobilemenu.png";
import close from "../assets/mobileclose.png";
import social from "../assets/banner.png";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${circ}), ${({ color }) => (color ? color : "#46B39D")};
  background-size: cover;
`;

const A = styled(NavLink)`
  font-weight: bold;
  color: rgba(255, 255, 255, 0.6);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  &.selected {
    color: rgba(255, 255, 255, 1);
  }

  @media screen and (max-width: 1024px) {
    font-size: 2rem;
  }
`;

const Container = styled.div`
  max-width: 1220px;
  width: 100%;
`;

const NavContainer = styled.div`
  z-index: 600;
  position: fixed;
  padding: 0 32px;
  top: 0;
  display: flex;
  height: 90px;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
const NavInner = styled.div`
  width: 100%;

  ul {
    display: flex;
    list-style: none;
    height: 90px;
    justify-content: center;
    align-items: center;
  }

  li {
    padding: 0 32px;
  }

  img {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    ul {
      display: none;
    }

    img {
      margin-left: auto;
      display: block;
      cursor: pointer;
    }
  }
`;

const MobileMenu = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 500;
  position: absolute;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${circ}), #334752;
  background-size: cover;

  ul {
    list-style: none;
  }

  li {
    padding: 16px 0;
  }
`;

export function Layout({ children, color }) {
  const [mobileVisible, setMobileVisible] = useState(false);

  return (
    <Wrapper color={color}>
      <Helmet>
        <meta
          property="og:image"
          content="https://digibear.io/banner.4c3aa056.png"
        />
      </Helmet>
      <NavContainer>
        <NavInner>
          <ul>
            <li>
              <A
                exact
                to="/"
                activeStyle={{
                  color: "white",
                }}
              >
                HOME
              </A>
            </li>
            <li>
              <A
                exact
                to="/work"
                activeStyle={{
                  color: "white",
                }}
              >
                WORK
              </A>
            </li>
            <li>
              <A
                exact
                to="/about"
                activeStyle={{
                  color: "white",
                }}
              >
                ABOUT
              </A>
            </li>
          </ul>
          {mobileVisible ? (
            <img src={close} onClick={() => setMobileVisible(false)} />
          ) : (
            <img src={menu} onClick={() => setMobileVisible(true)} />
          )}
        </NavInner>
      </NavContainer>
      <MobileMenu visible={mobileVisible}>
        <ul>
          <li>
            <A
              exact
              to="/"
              activeStyle={{
                color: "white",
              }}
              onClick={() => setMobileVisible(false)}
            >
              HOME
            </A>
          </li>
          <li>
            <A
              exact
              to="/work"
              activeStyle={{
                color: "white",
              }}
              onClick={() => setMobileVisible(false)}
            >
              WORK
            </A>
          </li>
          <li>
            <A
              exact
              to="/about"
              activeStyle={{
                color: "white",
              }}
              onClick={() => setMobileVisible(false)}
            >
              ABOUT
            </A>
          </li>
        </ul>
      </MobileMenu>
      <Container>{children}</Container>
    </Wrapper>
  );
}

Layout.prototype = {
  color: PropTypes.string,
  children: PropTypes.element.isRequired,
};
