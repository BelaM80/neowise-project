import styled from "styled-components/macro";
import React, { useState } from "react";
import img from "../../assets/hubble-eyes.jpg";
import PropTypes from "prop-types";
import { getNasaItems } from "../../utils/api";

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

const Modal = ({ modalOpen, setModalOpen, title, description }) => {
  async function loadNasaItems(title) {
    const nasaData = await getNasaItems(title);
    return nasaData;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loadNasaItems(search);
    setSearch([]);
  };
  const [search, setSearch] = useState("");

  return (
    <>
      {modalOpen ? (
        <ModalContainer modalOpen={modalOpen}>
          <ModalHeader>
            <button onClick={() => setModalOpen(!modalOpen)}>✖️</button>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Type a keyword" value={search} />
            </form>
          </ModalHeader>
          <img src={img} alt={title}></img>
          <h2>{title}</h2>
          <p>{description}</p>
        </ModalContainer>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  modalOpen: PropTypes.bool,
  setModalOpen: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.node,
};

export default Modal;
