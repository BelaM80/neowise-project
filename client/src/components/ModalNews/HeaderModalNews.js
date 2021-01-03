import React from "react";
import styled from "styled-components/macro";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 1rem;
  color: #010a26;
  box-shadow: 0px 0px 15px 3px #c9edff;
  border-radius: 20px;

  input {
    border: none;
    color: #010a26;

    border-bottom: 1px solid black;
    margin-right: 1rem;
    padding: 0.3rem;
    font-family: "Orbitron", Arial, sans-serif;
  }
  h2 {
    margin: 0px;
    color: #010a26;
  }
  button {
    color: #010a26;
    border: none;
    background-color: #fff;
    width: 20px;
    height: 20px;
    cursor: pointer;
    text-align: center;
  }
`;

const HeaderModalNews = (
  setModalNewsOpen,
  modalNewsOpen,
  onSubmit,
  onChange
) => {
  return (
    <Header>
      <button onClick={() => setModalNewsOpen(!modalNewsOpen)}>✖️</button>
      <h2>Space News</h2>
      <form onSubmit={onSubmit}>
        <input type="submit" value="GET" onClick={onChange} />
      </form>
    </Header>
  );
};

export default HeaderModalNews;
