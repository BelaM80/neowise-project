import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const Frame = styled.div`
  /* border: 1px solid lightgrey; */
  margin-top: 2rem;
  border-radius: 28px;
  box-shadow: 0px 0px 15px 3px #c9edff;

  div {
    padding: 0.6rem;
  }
  img {
    max-width: 100%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
`;

const InnerModal = ({ title, description, imageSrc }) => {
  return (
    <Frame>
      <img src={imageSrc} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Frame>
  );
};
InnerModal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.node,
};
export default InnerModal;
