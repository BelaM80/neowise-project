import React from "react";
import PropTypes from "prop-types";

import "./header.css";

const Header = () => (
  <header className="wrapper">
    <h1>NEOWISE - PROJECT</h1>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};

export default Header;
