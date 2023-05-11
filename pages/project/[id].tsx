import Introduce from "@/components/project/Introduce";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { TEAMS } from "@/constants/Teams";

const Container = styled.div`
    background-color: #F3FAF6;
    padding: 40px;
    padding-top: 200px;
`
const TeamBox = styled.div`
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 1px 2px 5px 0.2px lightgray;
`
const ImageBox = styled.div`
    max-width: 1120px;
    width: 90%;
    height: 437px;
    border: 1px solid black;
    margin: 0 auto;
`
const Title = styled.h1`
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 50px;
`
const Info = styled.div`
    padding: 60px;
    > div {
        font-size: 40px;
        font-weight: bold;
    }
    > p {
        padding: 30px;
        white-space: pre-line
    }
`

const Detail = () => {
    const router = useRouter();
    const team = router.query.id;
    const data = TEAMS.find(v=>v.team==team)
    return (
        <Container>
            <Introduce title={"SOLUTION CHALLENGE"} 
        content={"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"}/>
            <TeamBox>
                <Title>TEAM {team}</Title>
                <ImageBox></ImageBox>
                <Info>
                    <div>"{data?.name}"</div>
                    <p>{data?.content}</p>
                </Info>
            </TeamBox>
        </Container>
    )
}
export default Detail;