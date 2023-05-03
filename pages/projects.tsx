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
            content={"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.comThis is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"}/>
            <List/>
        </Container>
    )
}

export default Projects;