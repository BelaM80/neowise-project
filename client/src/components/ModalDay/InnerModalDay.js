import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Frame = styled.div`
  border: 1px solid lightgrey;
  margin-top: 1rem;
  border-radius: 28px;

  div {
    padding: 0.6rem;
  }
  img {
    max-width: 100%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
`;

const H1 = styled.h1`
  color: black;
`;

const InnerModal = ({ title, explanation, imageSrc, date }) => {
  return (
    <>
      <H1>Astronomic Picture Of The Day</H1>
      <Frame>
        <img src={imageSrc} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{date}</p>
          <p>{explanation}</p>
        </div>
      </Frame>
    </>
  );
};
InnerModal.propTypes = {
  title: PropTypes.string,
  explanation: PropTypes.string,
  imageSrc: PropTypes.node,
  date: PropTypes.string,
};
export default InnerModal;
