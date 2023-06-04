import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SSWU from "@/public/Logo/SSWU.svg";
import SSWUdark from "@/public/Logo/SSWUdark.svg";
import Link from "next/link";
import { Mobile, PC } from "@/hook/useMideaQuery";
import { HiMenu, HiX } from "react-icons/hi";
import { FiMoon, FiSun } from "react-icons/fi";
import MobileMenuDrop from "@/components/layout/MobileMenuDrop";
import { NavBarMenus } from "@/constants/Route";
import { lightTheme, darkTheme, GlobalStyle } from '@/styles/Theme';
import router from "next/router";

const Container = styled.div`
  padding: 0px;
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  box-shadow: 5px 0.2px 5px 1px lightgray;
  background-color: ${(props) => props.theme.backgroundColor};
  margin-top: -10px;
`;
const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding-left: 50px;
  margin-right: 40px;
`;
const Logo = styled.div`
  margin-top: 50px;
  margin-left: 40px;
`;
const Menu = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  border-radius: 51px;
  border: 1px solid;
  padding: 10px;
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  cursor: pointer;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-left: 15px;
  }
`;
const MenuButton = styled.div`
  display: flex;
  margin-right: 40px;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 4px;
  }
`;
const Nav = ({ toggleTheme, darkMode }: any) => {
  const [menu, setMenu] = useState<boolean>(false);
  const theme = darkMode ? darkTheme : lightTheme;

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setMenu(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Container theme={theme}>
        <GlobalStyle />
        <Logo>
          {darkMode ? (
            <SSWUdark width={199} height={"100%"} />
          ) : (
            <SSWU width={199} height={"100%"} />
          )}
        </Logo>
        <Button onClick={toggleTheme}>
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </Button>
        <Mobile>
          <MenuButton onClick={toggleMenu}>
            {menu ? <HiX size={20} /> : <HiMenu size={20} />}
          </MenuButton>
        </Mobile>
        <PC>
          <MenuContainer>
            {NavBarMenus.map((menu) => (
              <Menu
                onClick={() => {
                  setMenu(false);
                  router.push(menu.route);
                }}
                style={{ borderColor: menu.color }}
              >
                <span style={{ textDecoration: "none" }}>{menu.title}</span>
              </Menu>
            ))}
          </MenuContainer>
        </PC>
      </Container>
      {menu && <MobileMenuDrop />}
    </>
  );
};

export default Nav;
