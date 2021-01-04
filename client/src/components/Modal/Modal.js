import styled from "styled-components/macro";
import React from "react";
import PropTypes from "prop-types";
import InnerModal from "./InnerModal";
import HeaderModal from "./HeaderModal";

const ModalContainer = styled.div`
  width: 600px;
  background-color: #fff;
  color: #010a26;
  padding: 0.8rem;
  border-radius: 30px;
  box-shadow: 0px 0px 15px 3px #fff;
  max-height: 700px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Modal = ({
  modalOpen,
  setModalOpen,
  nasaItems,
  input,
  onSubmit,
  onChange,
}) => {
  return (
    <>
      {modalOpen ? (
        <ModalContainer>
          {HeaderModal(setModalOpen, modalOpen, onSubmit, input, onChange)}
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
  input: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Modal;
