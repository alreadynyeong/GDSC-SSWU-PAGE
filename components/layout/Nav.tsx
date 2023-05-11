import React from "react"
import { NavBarMenus } from "@/constants/Route"
import styled from "styled-components"
import SSWU from '@/public/Logo/SSWU.svg'
import Link from "next/link"

const Container = styled.div`
    padding: 50px;
    background-color: white;
    width: 100%;
    height: 130px;
    display: flex;
	justify-content: space-between;
	align-item: center;
    position: fixed;
    box-shadow: 5px 0.2px 5px 1px lightgray;
`
const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    gap: 50px;
    padding-left: 50px;
`
const Menu = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    border-radius: 51px;
    border: 1px solid;
    padding: 10px;
`
const Nav = () => {
    return (
        <Container>
            <div>
                <SSWU width={199} height={'100%'}/>
            </div>
            <MenuContainer>
                {NavBarMenus.map((menu)=>(
                    <Menu
                    style={{borderColor: menu.color}}  
                    key={menu.route}>
                        <Link href={menu.route} passHref>
                            <div>{menu.title}</div>
                        </Link>
                    </Menu>
                ))}
            </MenuContainer>
        </Container>
    )
}

export default Nav;