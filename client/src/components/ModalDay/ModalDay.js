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
          {nasaPic?.map((pic) => (
            <InnerModalDay
              key={pic.date}
              title={pic.title}
              explanation={pic.explanation}
              imageSrc={pic.url}
              alt={pic.title}
            />
          ))}
        </ModalDayContainer>
      ) : null}
    </>
  );
};

ModalDay.propTypes = {
  modalDayOpen: PropTypes.bool,
  setModalDayOpen: PropTypes.func,
  nasaPic: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default ModalDay;
