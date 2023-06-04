import { Mobile, PC } from "@/hook/useMideaQuery";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const Container = styled.div`
    height: 690px;
    background-color: ${(props) => props.theme.red};
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
    color: ${(props) => props.theme.textRed};
    font-size: 48px;
    font-weight: bold;

`
const MobileContentBox = styled.div`
    width: fit-contents;
    margin: 0 auto;
    align-item: center;
`
const MobileImageContainer = styled.div`
    width: 328px;
    height: 335px;
    border-radius: 100px 0px 0px 0px;
    overflow: hidden;
`
const MobileTextBox = styled.div`
    width: 300px;
    margin-bottom: 50px;
    >p{
        padding-top: 20px;
        padding-left:10px;
    }
`
const MobileSquareImage = styled.div`
    width: 280px;
    height: 77px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: -70px;
`

const HomeBottom = () => {
    const theme = useContext(ThemeContext);
    return (
        <>
        <PC>
            <Container theme={theme}>
                <ContentBox>
                    <ImageContainer>
                        <img src={`https://alreadynyeong.github.io/GDSC-SSWU-PAGE/Photo/Highlight2.jpeg`} alt={""} width={328} height={335}/>
                    </ImageContainer>
                    <TextBox>
                        <Title theme={theme}>HIGHLIGHT</Title>
                        <p>GDSC 성신여대에서는 GDSC SSWU뿐만 아니라 GDG, GDSC 주최의 다양한 행사에 참여합니다.</p>
                    </TextBox>
                </ContentBox>
                <SquareImage>
                    <img src={`https://alreadynyeong.github.io/GDSC-SSWU-PAGE/Photo/Highlight1.jpeg`} alt={""} width={515} height={117}/>
                </SquareImage>
            </Container>
        </PC>
        <Mobile>
            <Container>
                <MobileContentBox>
                    <MobileTextBox>
                        <Title>HIGHLIGHT</Title>
                        <p>GDSC 성신여대에서는 GDSC SSWU뿐만 아니라 GDG, GDSC 주최의 다양한 행사에 참여합니다.</p>
                    </MobileTextBox>
                    <MobileImageContainer>
                        <img src={`https://alreadynyeong.github.io/GDSC-SSWU-PAGE/Photo/Highlight2.jpeg`} alt={""} width={300} height={315}/>
                    </MobileImageContainer>
                    <MobileSquareImage>
                    <img src={`https://alreadynyeong.github.io/GDSC-SSWU-PAGE/Photo/Highlight1.jpeg`} alt={""} width={300} height={70}/>
                    </MobileSquareImage>
                </MobileContentBox>
            </Container>
        </Mobile>
        </>
    )
}
export default HomeBottom;