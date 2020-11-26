import styled from "styled-components/macro";
import React from "react";

const Button = styled.button`
  background-color: #fff;
  border-radius: 50px;
  border: none;
  font-family: "Orbitron", Arial, sans-serif;
  font-size: 1rem;
  text-align: center;
  padding: 0.8rem;
  width: 200px;
  box-shadow: 0px 0px 15px 3px #fff;
  cursor: pointer;
`;

export function LinkButton() {
  return (
    <Button type="button" onClick={onclick}>
      Start
    </Button>
  );
}

export default LinkButton;