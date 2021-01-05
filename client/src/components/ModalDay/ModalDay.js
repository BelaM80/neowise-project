import styled from "styled-components/macro";
import React from "react";
import PropTypes from "prop-types";
import InnerModalDay from "./InnerModalDay";
import HeaderModalDay from "./HeaderModalDay";

const ModalDayContainer = styled.div`
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

const ModalDay = ({
  modalDayOpen,
  setModalDayOpen,
  nasaPic,
  input,
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
            input,
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
  input: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default ModalDay;
