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
  p {
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

const HeaderModalDay = (
  setModalDayOpen,
  modalDayOpen,
  onSubmit,
  input,
  onChange
) => {
  return (
    <Header>
      <button onClick={() => setModalDayOpen(!modalDayOpen)}>✖️</button>
      <p>Enter a date</p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="YYYY-MM-DD"
          input={input}
          onChange={onChange}
        />
        <input type="submit" onClick={onChange} value="send" />
      </form>
    </Header>
  );
};

export default HeaderModalDay;
