import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const Container = styled.div`
    height: 300px;
    background-color: ${(props) => props.theme.green};
    padding-top: 20px;
`
const Title = styled.h1`
    width: fit-content; 
    margin: 0 auto;
    padding-bottom: 30px;
    color: ${(props) => props.theme.textGreen};
`
const Content = styled.p`
    max-width: 100%;    
    // width: 600px;
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
        const theme = useContext(ThemeContext);
    return(
        <Container theme={theme}>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </Container>
    )
}

export default Introduce;