import React from "react"
import styled from "styled-components"
import Image from "next/image"
import GDSC from "@/public/GDSC.svg"
import Button from "../common/button"

const Container = styled.div`
    height: 590px;
    background-color: white;
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
    width: 500px;
    font-size: 16px;
    >p {
        margin-top: 10px;
        line-height: 1.2
    }
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
                    </Big>
                    <Small>
                        <p>Google Developer Student Clubs (GDSC) 프로그램은 학생들이 개발/리더십 능력을 키울 수 있도록 지원하는 프로그램입니다. 기술적 성장을 위한 교육자료를 제공하고 리더십 개발을 위한 다양한 활동들을 지원합니다.
</p>
                        <p>총 29명의 성신여대 학생으로 이루어진 GDSC SSWU 4기는 다양한 주제의 프로젝트와 스터디를 진행하였으며, 각종 Google Korea 행사에 참여하였습니다.</p>
                    </Small>
                    <ButtonBox>
                        <Button onClick={()=>{console.log("contact")}}>CONTACT US</Button>
                        <Button onClick={()=>{console.log("join")}}>JOIN US</Button>
                    </ButtonBox>
                </div>
                <ImageContainer>
                    {/* <Image src="/test.jpeg" alt={""} width={411} height={335}/> */}
                </ImageContainer>
            </Contents>
        </Container>
    )
}

export default HomeTop;