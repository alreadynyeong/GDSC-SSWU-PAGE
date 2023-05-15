import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 690px;
    background-color: #FEF5F5;
    padding: 40px;
    overflow: scroll;
`
const ContentBox = styled.div`
    width: 830px;
    margin: 0 auto;
    display: flex;
    align-item: center;
    justify-content: space-between;
    padding-top: 130px;
`
const ImageContainer = styled.div`
    width: 328px;
    height: 335px;
    // border: 1px solid red;
    border-radius: 100px 0px 0px 0px;
    overflow: hidden;
`
const SquareImage = styled.div`
    width: 515px;
    height: 117px;
    // border: 1px solid red;
    margin: 0 auto;
    margin-top: -80px;
    overflow: hidden;
`
const TextBox = styled.div`
    width: 440px;
    >p{
        padding-top: 20px;
        padding-left:10px;
    }
`
const Title = styled.p`
    color: #EA4335;
    font-size: 48px;
    font-weight: bold;

`

const HomeBottom = () => {
    return (
        <Container>
            <ContentBox>
                <ImageContainer>
                    <img src={`https://alreadynyeong.github.io/GDSC-SSWU-PAGE/Photo/Highlight2.jpeg`} alt={""} width={328} height={335}/>
                </ImageContainer>
                <TextBox>
                    <Title>HIGHLIGHT</Title>
                    <p>GDSC 성신여대에서는 GDSC SSWU뿐만 아니라 GDG, GDSC 주최의 다양한 행사에 참여합니다.</p>
                </TextBox>
            </ContentBox>
            <SquareImage>
                <img src={`https://alreadynyeong.github.io/GDSC-SSWU-PAGE/Photo/Highlight1.jpeg`} alt={""} width={515} height={307}/>
            </SquareImage>
        </Container>
    )
}
export default HomeBottom;