import styled from "styled-components/macro";
import React from "react";
import PropTypes from "prop-types";
import InnerModal from "./InnerModal";

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

const Modal = ({
  modalOpen,
  setModalOpen,
  nasaItems,
  value,
  onSubmit,
  onChange,
}) => {
  return (
    <>
      {modalOpen ? (
        <ModalContainer modalOpen={modalOpen}>
          <ModalHeader>
            <button onClick={() => setModalOpen(!modalOpen)}>✖️</button>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Type a keyword"
                value={value}
                onChange={onChange}
              />
              <input type="submit" onClick={onChange} />
            </form>
          </ModalHeader>
          {nasaItems?.map((item) => (
            <InnerModal
              key={item.nasaId}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              alt=""
            />
          ))}
        </ModalContainer>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  modalOpen: PropTypes.bool,
  setModalOpen: PropTypes.func,
  nasaItems: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Modal;
