import styled from "styled-components/macro";
import React from "react";

const Button = styled.a`
  background-color: #fff;
  border-radius: 50px;
  border: none;
  font-family: "Orbitron", Arial, sans-serif;
  font-size: 1rem;
  text-align: center;
  padding: 0.8rem 50px;
  max-width: 200px;
  max-height: 60px;
  box-shadow: 0px 0px 15px 3px #fff;
  cursor: pointer;
  margin-top: 60px;
  color: black;
`;

export function LinkButton() {
  return (
    <Button type="button" onClick={onclick} href="/neowisepage">
      Start
    </Button>
  );
}

export default LinkButton;
