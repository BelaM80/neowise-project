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
        <p>
          Navigation: Press the left mousekey to spin around. Press the right
          mousekey to change your viewpoint position. Scroll to zoom in and out.
        </p>
        <LinkButton>Start</LinkButton>
      </Container>
    </>
  );
}

StartPage.propTypes = {
  name: PropTypes.string,
};

export default StartPage;
