import React, { useContext } from "react"
import Link from "next/link"
import { Infos } from "@/constants/Info"
import styled, { ThemeContext } from "styled-components"

const Container = styled.div`
    background-color: white;
    width: 100%;
    padding-bottom: 50px;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
`
const Line = styled.div`
    background-color: #696969;
    width: 100%;
    height: 0.7px;
    margin-bottom: 16px;
`
const Info = styled.div`
    font-size: 12px;
    font-weight: lighter;
    margin-bottom:3px;
    padding: 0px 50px 0px 50px;

`
const Bottom = () => {
    const theme = useContext(ThemeContext);
    // console.log(theme)
    return (
       <Container>
            <Line/>
            <div>
                {Infos.map((i)=>(
                    <div key={i.title}>
                        <Link href={i.url} passHref><Info>{i.title}</Info></Link>
                    </div>
                ))}
            </div>
       </Container>
    )
}

export default Bottom;