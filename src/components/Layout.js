import styled from "@emotion/styled";
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import circ from "../assets/circ.png";
import menu from "../assets/mobilemenu.png";
import close from "../assets/mobileclose.png";

import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, useAnimation } from "framer-motion";
import { MyContext } from "./ContextProvider";

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

const MobileMenu = styled(motion.div)`
  z-index: 500;
  position: fixed;
  top: 0;
  height: 0;
  width: 100%;
  display: none;
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

const menuVariants = {
  visible: {
    top: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    transition: {
      when: "beforeChildren",
    },
  },
  hidden: {
    height: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const menuItemVariants = {
  visible: {
    display: "block",
  },

  hidden: {
    display: "none",
  },
};

export function Layout({ children }) {
  const [mobileVisible, setMobileVisible] = useState(false);
  const controls = useAnimation();
  const ulControls = useAnimation();

  const { color } = useContext(MyContext);

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
            <img
              src={close}
              onClick={async () => {
                setMobileVisible(false);
                await ulControls.start("hidden");
                await controls.start("hidden");
              }}
            />
          ) : (
            <img
              src={menu}
              onClick={() => {
                controls.start("visible");
                ulControls.start("visible");
                setMobileVisible(true);
              }}
            />
          )}
        </NavInner>
      </NavContainer>
      <MobileMenu initial="hidden" animate={controls} variants={menuVariants}>
        <motion.ul
          initial="hidden"
          animate={ulControls}
          variants={menuItemVariants}
        >
          <li>
            <A
              exact
              to="/"
              activeStyle={{
                color: "white",
              }}
              onClick={async () => {
                setMobileVisible(false);
                await ulControls.start("hidden");
                await controls.start("hidden");
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
              onClick={async () => {
                setMobileVisible(false);
                await ulControls.start("hidden");
                await controls.start("hidden");
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
              onClick={async () => {
                setMobileVisible(false);
                await ulControls.start("hidden");
                await controls.start("hidden");
              }}
            >
              ABOUT
            </A>
          </li>
        </motion.ul>
      </MobileMenu>
      <Container>{children}</Container>
    </Wrapper>
  );
}

Layout.prototype = {
  children: PropTypes.element.isRequired,
};
