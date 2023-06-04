import React, { useState } from "react";
import styled from "styled-components";
import SSWU from "@/public/Logo/SSWU.svg";
import Link from "next/link";
import { Mobile, PC } from "@/hook/useMideaQuery";
import { HiMenu, HiX } from "react-icons/hi";
import MobileMenuDrop from "@/components/layout/MobileMenuDrop";
import { NavBarMenus } from "@/constants/Route";

const Container = styled.div`
  padding: 50px;
  background-color: white;
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  box-shadow: 5px 0.2px 5px 1px lightgray;
  overflow: scroll;
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

const Nav = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Container>
        <div>
          <SSWU width={199} height={"100%"} />
        </div>
        <Mobile>
          <div onClick={toggleMenu}>
            {menu? <HiX size={20} /> : <HiMenu size={20} />}
          </div>
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
