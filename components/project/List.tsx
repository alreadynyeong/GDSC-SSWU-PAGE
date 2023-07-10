import React from "react";
import styled from "styled-components";
import { TEAMS } from "@/data/Teams";
import { Mobile, PC } from "@/hook/responsive";
import { useRouter } from "next/router";

const Container = styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
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
    margin: 10px;
    flex-basis: 150px;
    flex-grow: 1;
    text-decoration: none;
`
const TeamImage = styled.div`
    width: 250px;
    height: 309px;
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
    color: ${(props) => props.theme.textColor};
`
const MobileItemContainer = styled.div`
    margin: 0 auto;
    text-decoration: none;
`
const MobileTeamName = styled.div`
    font-weight: bold;
    width: fit-content; 
    margin: 0 auto;
    color: ${(props) => props.theme.textColor};
    padding: 10px;
`
const MobileTeamMember = styled.div`
    width: fit-content; 
    margin: 0 auto;
    margin-bottom: 40px;
`
const MobileTitle = styled.h2`
    width: fit-content; 
    margin: 0 auto;
    color: #0F9D58;
    margin-bottom: 30px;
`
const List = () => {
    const router = useRouter();
    return(
        <Container>
            <PC>
            <Title>OUT PRODUCT</Title>
            <Items>
                {TEAMS.map((t)=>(
                        <ItemContainer onClick={()=>router.push(`/project/${t.team}`)}>
                            <TeamImage>
                                <img src={`https://alreadynyeong.github.io/GDSC-SSWU-PAGE/Teams/${t.team}1.png`} alt={""} width={250} height={309}/>
                            </TeamImage>
                            <TeamName>{t.team} TEAM</TeamName>
                            <TeamMember>{t.member}</TeamMember>
                        </ItemContainer>
                ))}
            </Items>
            </PC>

            <Mobile>
            <MobileTitle>OUT PRODUCT</MobileTitle>
            <Items>
                {TEAMS.map((t)=>(
                        <MobileItemContainer onClick={()=>router.push(`/project/${t.team}`)}>
                            <div>
                                <img src={`https://alreadynyeong.github.io/GDSC-SSWU-PAGE/Teams/${t.team}1.png`} alt={""} width={200} height={259}/>
                            </div>
                            <MobileTeamName>{t.team} TEAM</MobileTeamName>
                            <MobileTeamMember>{t.member}</MobileTeamMember>
                        </MobileItemContainer>
                ))}
            </Items>
            </Mobile>
        </Container>
    )
}

export default List;