import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 1rem;
  input {
    border: none;
    border-bottom: 1px solid black;
    margin-right: 1rem;
    padding: 0.3rem;
    font-family: "Orbitron", Arial, sans-serif;
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
