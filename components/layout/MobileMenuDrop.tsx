import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Link from "next/link";
import { NavBarMenus } from "@/constants/Route";
import { HiX } from "react-icons/hi";
import router from "next/router";

const MobileMenuDropContainer = styled.div`
  position: fixed;
  top: calc(130px + 10px);
  right: 10px;
  z-index: 1;
  text-align: right;
  height: fit-content;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const MobileMenuDrop = () => {
    const theme = useContext(ThemeContext);
    return (
        <MobileMenuDropContainer theme={theme}>
        {NavBarMenus.map((menu) => (
            <div style={{ borderColor: menu.color }} key={menu.route}>
            <div onClick={()=>router.push(menu.route)} style={{ color: menu.color }}>{menu.title}</div>
        </div>
        ))}
        </MobileMenuDropContainer>
    );
};

export default MobileMenuDrop;
