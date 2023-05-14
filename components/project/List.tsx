import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { TEAMS } from "@/constants/Teams";

const Container = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 1px 2px 5px 0.2px lightgray;
`
const Title = styled.h1`
    width: fit-content; 
    margin: 0 auto;
    color: #0F9D58;
    margin-bottom: 30px;
`
const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
`
const ItemContainer = styled.div`
    width: 250px;
    margin: 20px;
    flex-basis: 150px;
    flex-grow: 1;
`
const TeamImage = styled.div`
    width: 250px;
    height: 309px;
    // border: 1px solid black;
    margin: 0 auto;
`
const TeamName = styled.div`
    font-weight: bold;
    width: fit-content; 
    margin: 0 auto;
    padding: 10px;
`
const TeamMember = styled.div`
    width: fit-content; 
    margin: 0 auto;
`
const List = () => {
    return(
        <Container>
            <Title>OUT PRODUCT</Title>
            <Items>
                {TEAMS.map((t)=>(
                    <Link href={`/project/${t.team}`} key={t.team}>
                        <ItemContainer>
                            <TeamImage>
                                {/* <img src={`https://alreadynyeong.github.io/GDSC-SSWU-PAGE/Teams/${t.team}1.png`} alt={""} width={250} height={309}/> */}
                                <img src={`https://alreadynyeong.github.io/GDSC-SSWU-PAGE/Teams/${t.team}1.png`} alt={""} width={250} height={309}/>
                            </TeamImage>
                            <TeamName>{t.team} TEAM</TeamName>
                            <TeamMember>{t.member}</TeamMember>
                        </ItemContainer>
                    </Link>
                ))}
            </Items>
        </Container>
    )
}

export default List;