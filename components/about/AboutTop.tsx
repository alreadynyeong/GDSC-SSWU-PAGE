import React from "react";
import styled from "styled-components";
import GDSC from "@/public/Logo/GDSC.svg"
import Developer from "@/public/Logo/Developer.svg"

const Container = styled.div`
    height: 740px;
    display: flex;
    overflow: scroll;
    padding: 10px;
    background-color: #FFFFFF;
    padding: 40px;
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
    >div {
        margin-top: 37px;
        margin-right: 10px;
    }
`
const ImageBox = styled.div`
    // border: 1px solid red;
    width: 461px;
    height: 392px;
    margin: 20px;
`
const AboutTop = () => {
    return (
        <Container>
            <Contents>
                <Info>
                    <Big>
                        <p>GDSC</p>
                        <p>Sungshin Women's University 4th</p>
                    </Big>
                    <Small>
                        <p> GDSC SSWU 4기는 성신여대 학생 29명으로 이루어져있는 구글 개발 커뮤니티입니다</p>
                    </Small>
                    <LogoBox>
                        <div><GDSC /></div>
                        <Developer/>
                    </LogoBox>
                </Info>
                <ImageBox>
                <img src={`https://alreadynyeong.github.io/GDSC-SSWU-PAGE/Photo/AboutPhoto.jpeg`} alt={""} width={461} height={392}/>
                </ImageBox>
            </Contents>
        </Container>
    )
}

export default AboutTop;