import React, { useState } from "react";
import Input from "../Input/Input";
import Header from "../Header/Header";
import Container from "../Container";
import { useHistory } from "react-router-dom";
//import { setName } from "../../utils/Storage";

function HomePage() {
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newName = [name];
    setName("");
    localStorage.setItem("name", JSON.stringify(newName));
    history.push("/startpage");
  };
  const [name, setName] = useState("");
  console.log(name);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={name}
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

export default HomePage;
