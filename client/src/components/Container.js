import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  height: 50vh;
  width: 900px;
  a {
    text-decoration: none;
    margin-top: 50px;
    text-align: center;
  }
  div {
    width: 70%;
  }
  p {
    text-align: center;
    max-width: 60%;
    margin: 15px auto;
    font-size: 1.2rem;
  }
`;

export default Container;
