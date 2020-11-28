import Header from "../Header/Header";
import LinkButton from "../Link/Link";
import React, { useEffect, useState } from "react";
import Container from "../Container";

function StartPage() {
  const [value, setValue] = useState(localStorage.getItem("name") || "");
  useEffect(() => {
    localStorage.setItem("name", value);
  }, [value]);
  const onChange = (event) => setValue(event.target.value);
  return (
    <>
      <Header />
      <Container>
        <p onChange={onChange}>Captain {value} is required on bridge!</p>
        <LinkButton>Start</LinkButton>
      </Container>
    </>
  );
}

export default StartPage;
