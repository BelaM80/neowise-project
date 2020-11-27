import Header from "../Header/Header";
import LinkButton from "../Link/Link";
import React from "react";

import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function StartPage() {
  return (
    <body>
      <Container>
        <Header />
        <LinkButton />
      </Container>
    </body>
  );
}

export default StartPage;
