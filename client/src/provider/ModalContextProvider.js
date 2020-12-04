import React, { createContext } from "react";
import useModal from "../hooks/useModal";
import Modal from "../components/Card/Modal";
import PropTypes from "prop-types";

let ModalContext;
const { Provider } = (ModalContext = createContext());

const ModalProvider = ({ children }) => {
  const { modal, handleModal, modalContent } = useModal();
  return (
    <Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.string,
};

export { ModalContext, ModalProvider };
