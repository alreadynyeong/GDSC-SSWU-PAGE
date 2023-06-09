import React from "react";
import styled from "styled-components";
import { Infos } from "@/data/Info";

const Container = styled.div`
  background-color: white;
  width: 100%;
  padding-bottom: 20px;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const Line = styled.div`
  background-color: #696969;
  width: 100%;
  height: 0.7px;
  margin-bottom: 16px;
`;
const Info = styled.a`
  font-size: 12px;
  font-weight: lighter;
  margin-bottom: 3px;
  padding: 0px 50px 0px 50px;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;
const Bottom = () => {

  return (
    <Container>
      <Line />
      <div>
        {Infos.map((i) => (
          <div key={i.title}>
            <Info href={i.url}>{i.title}</Info>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Bottom;
