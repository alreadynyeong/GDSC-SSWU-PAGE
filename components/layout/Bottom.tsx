import React from "react"
import Link from "next/link"
import { Infos } from "@/constants/Info"
import styled from "styled-components"

const Container = styled.div`
    background-color: white;
    width: 100%;
    padding: 50px;
`
const Line = styled.div`
    background-color: black;
    width: 100%;
    height: 1px;
    margin-bottom: 16px;
`
const Info = styled.div`
    font-size: 16px;
    margin-bottom:3px;
`
const Bottom = () => {
    return (
       <Container>
            <Line/>
            <div>
                {Infos.map((i)=>(
                    <div key={i.title}>
                        <Info>{i.title}: <Link href={i.url} passHref>{i.url}</Link></Info>
                    </div>
                ))}
            </div>
       </Container>
    )
}

export default Bottom;