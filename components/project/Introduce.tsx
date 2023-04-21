import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 300px;
    background-color: white;
    padding-top: 20px;
`
const Title = styled.h1`
    width: fit-content; 
    margin: 0 auto;
    padding-bottom: 30px;
`
const Content = styled.p`
    width: 600px;
    margin: 0 auto;
`
interface IntroduceProps {
    title: string,
    content: string
}

const Introduce = ({ 
    title = 'Introduce Title', 
    content = 'Introduce content' }: IntroduceProps) => {
    return(
        <Container>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </Container>
    )
}

export default Introduce;