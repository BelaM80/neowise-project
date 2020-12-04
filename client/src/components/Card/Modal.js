import React, { useContext } from "react";
import styled from "styled-components";
import img from "../../assets/hubble-eyes.jpg";
import { ModalContext } from "../../provider/ModalContextProvider";

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme.secondaryActive};
  opacity: 0.8;
  backdrop-filter: blur(10px);
  z-index: 1;
`;

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

const Modal = () => {
  const { modalContent, handleModal, modal } = useContext(ModalContext);
  if (modal) {
    return (
      <ModalContainer>
        <CardContainer>
          <img src={img} alt="#"></img>
          <h2>Titel</h2>
          <p>{modalContent}</p>
          <button onClick={() => handleModal()}>✖️</button>
        </CardContainer>
      </ModalContainer>
    );
  }
};
export default Modal;
