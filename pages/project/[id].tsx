import Introduce from "@/components/project/Introduce";
import styled from "styled-components";
import { useRouter } from 'next/router';

const Container = styled.div`
    background-color: white;
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
    }
`

const Detail = () => {
    const router = useRouter();
    const team = router.query.id;
    return (
        <Container>
            <Introduce title={"SOLUTION CHALLENGE"} 
        content={"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"}/>
            <Title>TEAM {team}</Title>
            <ImageBox></ImageBox>
            <Info>
                <div>"앱 이름"</div>
                <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com                    
                </p>
            </Info>
        </Container>
    )
}
export default Detail;