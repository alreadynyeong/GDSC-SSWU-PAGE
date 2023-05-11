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
    // border: 1px solid black;
    margin: 0 auto;
    overflow: scroll;
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
        content={`
        UN은 2015년에 17가지 지속 가능한 발전 목표를 세우고 2030년까지 이를 달성하기 위한 목표를 세웠습니다. 193개 UN 모든 회원국이 빈곤을 퇴치하고 번영을 보장하며 지구를 보호하기 위한 17가지 목표에 동의했습니다.

2023 솔루션 챌린지의 목표는 Google 기술을 사용한 17가지 지속 가능한 개발 목표 중 하나 이상을 달성하는 데 기여하는 프로젝트를 만드는 것입니다.
`}/>
            <TeamBox>
                <Title>TEAM {team}</Title>
                <ImageBox>
                    <img src={`/Teams/${team}2.png`} alt={""} width={1046} height={408}/>
                </ImageBox>
                <Info>
                    <div>"{data?.name}"</div>
                    <p>{data?.content}</p>
                </Info>
            </TeamBox>
        </Container>
    )
}
export default Detail;