import React from "react"
import styled from "styled-components"
import Image from "next/image"
import GDSC from "@/public/GDSC.svg"
import Button from "../common/button"

const Container = styled.div`
    height: 690px;
    background-color: white;
`
const Contents = styled.div`
    margin: 0 auto;
    // border: 1px solid red;
    width: fit-content;
    height: fit-content;
    display: flex;
    padding-top: 180px;
`
const ImageContainer = styled.div` 
    width: 411px;
    height: 335px;
    border-radius: 0px 0px 0px 106px;
    border: 1px solid red;
    overflow: hidden;
    margin-left: 100px;
`
const Big = styled.div`
    font-size: 48px;
    font-weight: bold;
`
const Small = styled.div`
    margin-top: 10px;
    font-size: 16px;
`
const ButtonBox = styled.div`
    margin-top: 15px;
    > button {
        margin-right: 10px;
    }
`
const HomeTop = () => {
    return (
        <Container>
            <Contents>
                <div>
                    <GDSC/>
                    <Big>
                        <p>GDSC SSWU</p>
                        <p>소개 문구 작성하기.</p>
                    </Big>
                    <Small>
                        <p>GDSC 성신여대 챕터입니다.</p>
                        <p>소개 문구에 대한 간단한 설명을 해주세요요</p>
                    </Small>
                    <ButtonBox>
                        <Button onClick={()=>{console.log("contact")}}>CONTACT US</Button>
                        <Button onClick={()=>{console.log("join")}}>JOIN US</Button>
                    </ButtonBox>
                </div>
                <ImageContainer>
                    {/* <Image src="/public/flower.png" alt={""} width={411} height={335}/> */}
                </ImageContainer>
            </Contents>
        </Container>
    )
}

export default HomeTop;