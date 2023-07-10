import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: fit-content;
    background-color: ${(props) => props.theme.green};
    padding-top: 20px;
    padding-bottom: 30px;
`
const Title = styled.h1`
    width: fit-content; 
    margin: 0 auto;
    padding-bottom: 30px;
    color: ${(props) => props.theme.textGreen};
`
const Content = styled.p`
    max-width: 100%;    
    margin: 0 auto;
    white-space: pre-line
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