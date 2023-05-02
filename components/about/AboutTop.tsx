import React from "react";
import styled from "styled-components";
import GDSC from "@/public/GDSC.svg"

const Container = styled.div`
    height: 740px;
    display: flex;
    overflow: scroll;
    padding: 10px;
`
const Contents = styled.div`
    margin: 0 auto;
    // border: 1px solid red;
    width: fit-content;
    height: fit-content;
    display: flex;
    padding-top: 120px; 
`
const Info = styled.div`
    width: 500px;
    padding: 40px;
    margin-right: 100px;

`
const Big = styled.div`
    font-size: 48px;
    font-weight: bold;
`
const Small = styled.div`
    width: 500px;
    font-size: 16px;
    margin-bottom: 20px;
    >p {
        margin-top: 10px;
        line-height: 1.2
    }
`
const LogoBox = styled.div`
    display: flex;
    gap: 10px;
    > div {
        background-color: white;
        width: 92px;
        height: 96px;
        padding: 20px;
    }
`
const ImageBox = styled.div`
    border: 1px solid red;
    width: 461px;
    height: 544px;
    margin-top: 66px;
`
const AboutTop = () => {
    return (
        <Container>
            <Contents>
                <Info>
                    <Big>
                        <p>GDSC</p>
                        <p>성신여대를 한줄로 간단히 소개하는 말</p>
                    </Big>
                    <Small>
                        <p>GDSC 소개 GDSC 소개 GDSC 소개 GDSC 소개 GDSC 소개 GDSC 소개 GDSC 소개 GDSC 소개 GDSC 소개 GDSC 소개 </p>
                    </Small>
                    <LogoBox>
                        <div><GDSC /></div>
                        <div><GDSC /></div>
                        <div><GDSC /></div>
                    </LogoBox>
                </Info>
                <ImageBox>

                </ImageBox>
            </Contents>
        </Container>
    )
}

export default AboutTop;