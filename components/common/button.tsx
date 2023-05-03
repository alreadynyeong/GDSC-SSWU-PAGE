import React from "react";
import styled from "styled-components"

const StyeldButton = styled.button`
    height: 39px;
    padding: 0px 10px 0px 10px;
    border-radius: 42px;
    border: none;
    color: white;
    font-size: 16px;
`


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: string;
    onClick: ()=>void;
    color: string;
}

const Button = ({ children, onClick, color }: ButtonProps)=>{
    return <StyeldButton style={{backgroundColor: color}} onClick={onClick}>{children}</StyeldButton>
};

export default Button;