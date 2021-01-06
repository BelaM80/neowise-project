import React, { useState } from "react";
import Input from "../Input/Input";
import Header from "../Header/Header";
import Container from "../Container";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

function HomePage({ onNameChange }) {
  const [newName, setNewName] = useState("");

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    onNameChange(newName);
    history.push("/startpage");
  };

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <p>
            Welcome to Neowise - a space exploration project. You will
            experience a 3D sunsystem, where you can move around and find
            astronomical information.
          </p>
          <p>Enter your name end press enter.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={newName}
            placeholder="Enter your name"
            onChange={handleChange}
            link
          />
        </form>
      </Container>
    </>
  );
}

HomePage.propTypes = {
  name: PropTypes.string,
  onNameChange: PropTypes.func.isRequired,
};

export default HomePage;
