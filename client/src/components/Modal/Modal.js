import styled from "styled-components/macro";
import React from "react";
import PropTypes from "prop-types";
import InnerModal from "./InnerModal";
import HeaderModal from "./HeaderModal";

const ModalContainer = styled.div`
  width: 600px;
  background-color: #fff;
  color: black;
  padding: 0.8rem;
  border-radius: 30px;
  box-shadow: 0px 0px 15px 3px #fff;
  height: 700px;
  overflow-x: hidden;
  overflow-y: auto;
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
        <ModalContainer>
          {HeaderModal(setModalOpen, modalOpen, onSubmit, value, onChange)}
          {nasaItems?.map((item) => (
            <InnerModal
              key={item.nasaId}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              alt={item.title}
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
