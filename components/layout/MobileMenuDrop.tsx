import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { NavBarMenus } from "@/constants/Route";
import { HiX } from "react-icons/hi";
import router from "next/router";

const MobileMenuDropContainer = styled.div`
  text-align: right;
  height: fit-content;
  padding: 5px;
  position: absolute;
  top: 75px;
  right: 90px;
  margin-right: -40px;
  border-radius: 5px;
  border: 1px solid lightgray;
  > div {
    padding: 5px;
    color: ${(props) => props.theme.textColor};
  }
`;

const MobileMenuDrop = () => {
  return (
    <MobileMenuDropContainer>
      {NavBarMenus.map((menu) => (
        <div style={{ borderColor: menu.color }} key={menu.route}>
            <div onClick={()=>router.push(menu.route)} style={{ color: menu.color }}>{menu.title}</div>
        </div>
      ))}
    </MobileMenuDropContainer>
  );
};

export default MobileMenuDrop;
