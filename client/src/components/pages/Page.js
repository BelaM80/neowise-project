import React from "react";
import Input from "../Input/Input";
import Header from "../../components/Header/Header";
import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Page = () => (
  <>
    <Header />
    <Container>
      <Input onSubmit="submit" type="input" placeholder="Enter your name" />
    </Container>
  </>
);

export default Page;
