import Header from "../Header/Header";
import LinkButton from "../Link/Link";
import React from "react";
import Container from "../Container";
import PropTypes from "prop-types";

function StartPage({ name }) {
  return (
    <>
      <Header />
      <Container>
        <p>Captain {name} is required on bridge!</p>
        <LinkButton>Start</LinkButton>
      </Container>
    </>
  );
}

StartPage.propTypes = {
  name: PropTypes.string,
};

export default StartPage;
