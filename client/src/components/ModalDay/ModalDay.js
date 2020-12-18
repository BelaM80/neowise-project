import styled from "styled-components/macro";
import React from "react";
import PropTypes from "prop-types";
import InnerModalDay from "./InnerModalDay";
import HeaderModalDay from "./HeaderModalDay";

const ModalDayContainer = styled.div`
  width: 600px;
  background-color: #fff;
  color: black;
  padding: 0.8rem;
  border-radius: 30px;
  box-shadow: 0px 0px 15px 3px #fff;
  height: 700px;
  overflow-x: hidden;
  overflow-y: auto;

  button {
    border: none;
    background-color: #fff;
    width: 20px;
    height: 20px;
    cursor: pointer;
    text-align: center;
  }
`;

const ModalDay = ({
  modalDayOpen,
  setModalDayOpen,
  nasaPic,
  value,
  onSubmit,
  onChange,
}) => {
  return (
    <>
      {modalDayOpen ? (
        <ModalDayContainer>
          {HeaderModalDay(
            setModalDayOpen,
            modalDayOpen,
            onSubmit,
            value,
            onChange
          )}
          {nasaPic && (
            <InnerModalDay
              key={nasaPic.date}
              title={nasaPic.title}
              date={nasaPic.date}
              explanation={nasaPic.explanation}
              imageSrc={nasaPic.url}
              alt={nasaPic.title}
            />
          )}
        </ModalDayContainer>
      ) : null}
    </>
  );
};

ModalDay.propTypes = {
  modalDayOpen: PropTypes.bool,
  setModalDayOpen: PropTypes.func,
  nasaPic: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default ModalDay;
