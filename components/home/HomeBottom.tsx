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
    border: 1px solid red;
    border-radius: 100px 0px 0px 0px;
`
const SquareImage = styled.div`
    width: 515px;
    height: 117px;
    border: 1px solid red;
    margin: 0 auto;
    margin-top: -80px;
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
                <ImageContainer/>
                <TextBox>
                    <Title>HIGHLIGHT</Title>
                    <p>GDSC 성신여대에서 한 활동 중 가장 성과가 좋거나, 대표될 수 있는 결과물을 넣으면 좋을 것 같습니다. </p>
                </TextBox>
            </ContentBox>
            <SquareImage/>
        </Container>
    )
}
export default HomeBottom;