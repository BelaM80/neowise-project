import Header from "../Header/Header";
import LinkButton from "../Link/Link";
import React from "react";
import Container from "../Container";

function StartPage() {
  return (
    <>
      <Header />
      <Container>
        <p>Captain xy is required on bridge!</p>
        <LinkButton>Start</LinkButton>
      </Container>
    </>
  );
}

export default StartPage;
