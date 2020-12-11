import React from "react";
import PropTypes from "prop-types";

const InnerModal = ({ title, description, imageSrc }) => {
  return (
    <div>
      <img src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
InnerModal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.node,
};
export default InnerModal;
