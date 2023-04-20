import React from "react";
import styled from "styled-components"

const StyeldButton = styled.button`
    height: 39px;
    padding: 0px 10px 0px 10px;
    background-color: black;
    border: none;
    color: white;
    font-size: 16px;
`


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: string;
    onClick: ()=>void;
    
}

const Button = ({ children, onClick }: ButtonProps)=>{
    return <StyeldButton onClick={onClick}>{children}</StyeldButton>
};

export default Button;