import React from "react"
import { NavBarMenus } from "@/constants/Route"
import styled from "styled-components"
import SSWU from '@/public/SSWU.svg'
import Link from "next/link"

const Container = styled.div`
    padding: 50px;
    background-color: white;
    width: 100%;
    height: 130px;
    display: flex;
	justify-content: space-between;
	align-item: center;
`
const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    gap: 50px
`
const Menu = styled.div`
    display: flex;
    align-items: center;
`
const Nav = () => {
    return (
        <Container>
            <div>
                <SSWU width={199} height={'100%'}/>
            </div>
            <MenuContainer>
                {NavBarMenus.map((menu)=>(
                    <Menu key={menu.route}>
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