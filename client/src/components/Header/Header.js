import React from "react";
import styled from "styled-components/macro";

const HeaderStyled = styled.header`
  font-weight: 700;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => (
  <HeaderStyled>
    <h1>NEOWISE - PROJECT</h1>
  </HeaderStyled>
);

export default Header;
