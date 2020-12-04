import styled from "styled-components/macro";
import React, { useContext } from "react";
import img from "../../assets/hubble-eyes.jpg";
import { ModalContext } from "../../provider/ModalContextProvider";

const CardContainer = styled.div`
  width: 600px;
  background-color: #fff;
  color: black;
  padding: 0.8rem;
  border-radius: 30px;
  box-shadow: 0px 0px 15px 3px #fff;

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

const Card = () => {
  const { handleModal } = useContext(ModalContext);

  return (
    <CardContainer>
      <img src={img} alt="#"></img>
      <h2>Titel</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, impedit
        repellat sequi aliquam error itaque vitae pariatur labore soluta quasi
        ex commodi! Suscipit quo aliquid consequatur culpa, aliquam ipsam quod!
      </p>
      <button onClick={() => handleModal()}>✖️</button>
    </CardContainer>
  );
};

export default Card;
