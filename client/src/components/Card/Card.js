import styled from "styled-components/macro";
import React, { useState } from "react";
import img from "../../assets/hubble-eyes.jpg";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  width: 600px;
  background-color: #fff;
  color: black;
  padding: 0.8rem;
  border-radius: 30px;
  box-shadow: 0px 0px 15px 3px #fff;
  /* transform: ${({ modalOpen }) =>
    modalOpen ? "translateY(0)" : "translateY(100%)"};
  transition: transform 0.3s ease-in-out; */

  visibility: ${({ modalOpen }) => (!modalOpen ? "hidden" : "visible")};

  img {
    max-width: 100%;
    border-radius: 25px;
  }
  button {
    border: none;
    background-color: #fff;
    width: 20px;
    height: 20px;
    cursor: pointer;
    text-align: center;
  }
`;

const Card = ({ modalOpen }) => {
  const [closeModal, setCloseModal] = useState(true);

  return (
    <CardContainer setCloseModal={setCloseModal} modalOpen={modalOpen}>
      <img src={img} alt="#"></img>
      <h2>Titel</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, impedit
        repellat sequi aliquam error itaque vitae pariatur labore soluta quasi
        ex commodi! Suscipit quo aliquid consequatur culpa, aliquam ipsam quod!
      </p>
      <button onClick={() => setCloseModal(closeModal)}>✖️</button>
    </CardContainer>
  );
};

Card.propTypes = {
  modalOpen: PropTypes.bool,
};

export default Card;
