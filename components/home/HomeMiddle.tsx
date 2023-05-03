import React from "react";
import styled from "styled-components";
import HomeImage from "@/public/HomeImage.svg"
import HomeImage2 from "@/public/HomeImage2.svg"
import HomeImage3 from "@/public/HomeImage3.svg"
import { HomeParts } from "@/constants/Part";

const Container = styled.div`
    height: 680px;
    background-color: #F3FAF6;
    text-align: center;
    overflow: scroll;
`
const Title = styled.div`
    font-size: 48px;
    font-weight: bold;
    padding: 90px;
    color: #0F9D58;
`
const PartBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    width: 900px;
    margin: 0 auto;
`
const Part = styled.div`
    width: 250px;
    height: 328px;
    > p{
        font-size: 17px;
    }
`
const PartTitle = styled.div`
    font-size: 27px;
    font-weight: semi-bold;
    margin: 30px;
`

const HomeMiddle = () => {
    return (
        <Container>
            <Title>WE STUDY ABOUT..</Title>
            <PartBox>
                {HomeParts.map((p)=>(
                    <Part key={p.title}>
                        {p.svg==1?(<HomeImage/>):p.svg==2?(<HomeImage2/>):(<HomeImage3/>)}
                        <PartTitle>{p.title}</PartTitle>
                        <p>{p.content}</p>
                    </Part>
                ))}
            </PartBox>
        </Container>
    )
}
export default HomeMiddle;