import React from "react";
import Input from "../Input/Input";
import Header from "../Header/Header";
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomePage = () => (
  <>
    <Header />
    <Container>
      <Input onSubmit="submit" type="input" placeholder="Enter your name" />
    </Container>
  </>
);

export default HomePage;
