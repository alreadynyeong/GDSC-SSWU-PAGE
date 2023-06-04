import React, { useState } from "react";
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

const Container = styled.div`
  padding: 50px;
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  box-shadow: 5px 0.2px 5px 1px lightgray;
  overflow: scroll;
  background-color: ${(props)=>props.theme.backgroundColor}
`;
const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding-left: 50px;
`;
const Menu = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  border-radius: 51px;
  border: 1px solid;
  padding: 10px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 4px;
  }
`;
const Nav = ({ toggleTheme, darkMode }: any) => {
  const [menu, setMenu] = useState<boolean>(false);
  const theme = darkMode ? darkTheme : lightTheme;
  console.log("?",darkMode, toggleTheme)
  console.log("!",theme)
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Container theme={theme}>
      <GlobalStyle />
        <div>
          {darkMode=='dark' ? <SSWUdark width={199} height={"100%"} /> : <SSWU width={199} height={"100%"} />}
        </div>
        <Button onClick={toggleTheme}>
          {darkMode=='dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
        </Button>
        <Mobile>
          <Button onClick={toggleMenu}>
            {menu? <HiX size={20} /> : <HiMenu size={20} />}
          </Button>
        </Mobile>
        <PC>
          <MenuContainer>
            {NavBarMenus.map((menu) => (
              <Menu
                style={{ borderColor: menu.color }}
                key={menu.route}
              >
                <Link href={menu.route} passHref>
                  <div>{menu.title}</div>
                </Link>
              </Menu>
            ))}
          </MenuContainer>
        </PC>
      </Container>
      {menu && (
        <MobileMenuDrop />
      )}
    </>
  );
};

export default Nav;
