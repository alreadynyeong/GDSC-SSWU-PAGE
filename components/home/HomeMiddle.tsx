import React, { useState } from "react";
import styled, { CSSProp } from 'styled-components';
import HomeImage from "@/public/Home/HomeImage.svg"
import HomeImage2 from "@/public/Home/HomeImage2.svg"
import HomeImage3 from "@/public/Home/HomeImage3.svg"
import { HomeParts } from "@/constants/Part";
import { Mobile, PC } from "@/hook/useMideaQuery";

interface PickCircleProps {
    isActive: boolean;
    onClick: () => void;
  }

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
const MobileTitle = styled.div`
    font-size: 38px;
    font-weight: bold;
    padding: 90px 20px 20px 20px;
    color: #0F9D58;
`
const PickDiv = styled.div`
    display: flex;
    gap: 7px;
    margin: 0 auto;
    width: fit-content;
`
const PickCircle = styled.div<PickCircleProps>`
  border: 1px solid #0F9D58;
  width: 10px;
  height: 10px;
  border-radius: 100px;
  background-color: ${({ isActive }) => (isActive ? "#0F9D58" : "transparent")};
`;
const MobilePartBox = styled.div`
    align-item: center;
    width: fit-content;
    margin: 0 auto;
    margin-top: 40px;

`

const HomeMiddle = () => {
    const [pick, setPick] = useState<number>(0);
    return (
        <Container>
            <PC>
                <Title>WE STUDY ABOUT..</Title>
                <PartBox>
                    {HomeParts.map((p, index) => (
                        <Part key={p.title}>
                            {p.svg==1?(<HomeImage/>):p.svg==2?(<HomeImage2/>):(<HomeImage3/>)}
                            <PartTitle>{p.title}</PartTitle>
                            <p>{p.content}</p>
                        </Part>
                    ))}
                </PartBox>
            </PC>
            <Mobile>
                <MobileTitle>WE STUDY ABOUT..</MobileTitle>
                <PickDiv>
                    {HomeParts.map((p, index) => (
                        <PickCircle
                            key={index}
                            onClick={() => setPick(index)}
                            isActive={pick === index}
                        />
                    ))}
                </PickDiv>
                <MobilePartBox>
                    <Part key={HomeParts[pick].title}>
                        {HomeParts[pick].svg==1?(<HomeImage/>):HomeParts[pick].svg==2?(<HomeImage2/>):(<HomeImage3/>)}
                        <PartTitle>{HomeParts[pick].title}</PartTitle>
                        <p>{HomeParts[pick].content}</p>
                    </Part>
                </MobilePartBox>
            </Mobile>
        </Container>
    )
}
export default HomeMiddle;
