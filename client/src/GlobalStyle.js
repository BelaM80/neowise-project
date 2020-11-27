import { createGlobalStyle } from "styled-components";
import img from "./assets/background.jpg";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: "Orbitron", Arial, sans-serif;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 100vmax;
  color: #fff;
}

body {
  /* display: grid;
  grid-template-rows: 30px 1fr 1fr; */

}

.App {
  text-align: center;
}

h1 {
  font-weight: 900;
  letter-spacing: 0.8rem;
  font-size: 30px;
  color: #fff;
  line-height: 1;
  margin: 20px 0 20px;
  text-align: center;
}

`;

export default GlobalStyle;
