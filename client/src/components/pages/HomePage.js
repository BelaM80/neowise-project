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
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={newName}
            placeholder="Enter your name"
            onChange={handleChange}
            link
          />
        </form>
        <a href="/storybook">To Storybook</a>
      </Container>
    </>
  );
}

HomePage.propTypes = {
  name: PropTypes.string,
  onNameChange: PropTypes.func.isRequired,
};

export default HomePage;
