import React from "react";
import Introduce from "@/components/project/Introduce";
import List from "@/components/project/List";
import styled from "styled-components";


const Container = styled.div`
    margin: 0 auto;
    background-color: #F3FAF6;
    padding: 200px 50px 50px 50px;
`
const Projects = () => {
    return (
        <Container>
            <Introduce title={"SOLUTION CHALLENGE"} 
            content={`UN은 2015년에 17가지 지속 가능한 발전 목표를 세우고 2030년까지 이를 달성하기 위한 목표를 세웠습니다. 193개 UN 모든 회원국이 빈곤을 퇴치하고 번영을 보장하며 지구를 보호하기 위한 17가지 목표에 동의했습니다.

            2023 솔루션 챌린지의 목표는 Google 기술을 사용한 17가지 지속 가능한 개발 목표 중 하나 이상을 달성하는 데 기여하는 프로젝트를 만드는 것입니다.`}/>
            <List/>
        </Container>
    )
}

export default Projects;