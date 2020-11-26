import React from "react";

import "./header.css";

const Header = () => (
  <header className="wrapper">
    <h1>NEOWISE - PROJECT</h1>
    <p>Test</p>
  </header>
);

Header.defaultProps = {
  user: null,
};

export default Header;
