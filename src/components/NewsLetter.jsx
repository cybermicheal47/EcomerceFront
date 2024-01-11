import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: lightgreen;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const InputContaner = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
`;
const Input = styled.input`
  border: none;
  flex: 8;
`;
const Button = styled.button`
  flex: 1;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-left: 5px;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title> NewsLetter</Title>
      <Desc> Lorem ipsum dolor, sit amet consectetur adipisicing elit. </Desc>
      <InputContaner>
        <Input placeholder="Your  Email" />

        <Button>
          <Send />
        </Button>
      </InputContaner>
    </Container>
  );
};

export default NewsLetter;
