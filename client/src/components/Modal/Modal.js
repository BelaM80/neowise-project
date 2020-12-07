import styled from "styled-components/macro";
import React from "react";
import img from "../../assets/hubble-eyes.jpg";
import PropTypes from "prop-types";

const ModalContainer = styled.div`
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

const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  input {
    border: none;
    border-bottom: 1px solid black;
    margin-right: 1rem;
    padding: 0.3rem;
    font-family: "Orbitron", Arial, sans-serif;
  }
`;

const Modal = ({ modalOpen, setModalOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {modalOpen ? (
        <ModalContainer modalOpen={modalOpen}>
          <ModalHeader>
            {" "}
            <button onClick={() => setModalOpen(!modalOpen)}>✖️</button>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Type a keyword" />
            </form>
          </ModalHeader>
          <img src={img} alt="#"></img>
          <h2>Titel</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
            impedit repellat sequi aliquam error itaque vitae pariatur labore
            soluta quasi ex commodi! Suscipit quo aliquid consequatur culpa,
            aliquam ipsam quod!
          </p>
        </ModalContainer>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  modalOpen: PropTypes.bool,
  setModalOpen: PropTypes.bool,
};

export default Modal;
