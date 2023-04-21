import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { TEAMS } from "@/constants/Teams";

const Container = styled.div`
    background-color: white;
`
const Title = styled.h1`
    width: fit-content; 
    margin: 0 auto;
    color: black;
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
    border: 1px solid black;
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
                            <TeamImage></TeamImage>
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