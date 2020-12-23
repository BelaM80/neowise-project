import React from "react";
import styled from "styled-components/macro";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 3px #c9edff;

  input {
    border: none;
    border-bottom: 1px solid black;
    margin-right: 1rem;
    padding: 0.3rem;
    font-family: "Orbitron", Arial, sans-serif;
    background-color: #fff;
  }
  button {
    border: none;
    background-color: #fff;
    width: 20px;
    height: 20px;
    cursor: pointer;
    text-align: center;
  }
`;

const HeaderModal = (setModalOpen, modalOpen, onSubmit, value, onChange) => {
  return (
    <Header>
      <button onClick={() => setModalOpen(!modalOpen)}>✖️</button>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type a keyword"
          value={value}
          onChange={onChange}
        />
        <input type="submit" onClick={onChange} />
      </form>
    </Header>
  );
};

export default HeaderModal;
