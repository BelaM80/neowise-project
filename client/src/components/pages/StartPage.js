import Header from "../Header/Header";
import LinkButton from "../Link/Link";
import React from "react";
import Container from "../Container";

function StartPage() {
  return (
    <>
      <Header />
      <Container>
        <p>Caiptain xy is required on bridge!</p>
        <LinkButton />
      </Container>
    </>
  );
}

export default StartPage;
