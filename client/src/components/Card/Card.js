import styled from "styled-components/macro";
import React from "react";
import img from "../../assets/hubble-eyes.jpg";

const Div = styled.div`
  width: 600px;
  background-color: #fff;
  color: black;
  padding: 0.8rem;
  border-radius: 30px;
  box-shadow: 0px 0px 15px 3px #fff;

  img {
    max-width: 100%;
    border-radius: 25px;
    /* box-shadow: 0px 0px 10px 3px #010a26; */
  }
  button {
    border: none;
    background-color: #fff;
    width: 20px;
    height: 20px;
    cursor: pointer;
    text-align: center;
  }
`;

const Card = () => (
  <Div>
    <img src={img} alt="#"></img>
    <h2>Titel</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, impedit
      repellat sequi aliquam error itaque vitae pariatur labore soluta quasi ex
      commodi! Suscipit quo aliquid consequatur culpa, aliquam ipsam quod!
    </p>
    <button>✖️</button>
  </Div>
);

export default Card;
