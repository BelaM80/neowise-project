import React, { useState } from "react";
import Input from "../Input/Input";
import Header from "../Header/Header";
import Container from "../Container";

function HomePage() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <a href="/storybook">To Storybook</a>
      </Container>
    </>
  );
}

export default HomePage;
