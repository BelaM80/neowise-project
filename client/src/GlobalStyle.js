import { createGlobalStyle } from "styled-components";
import img from "./assets/background.jpg";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  width: 100%;
  height: 100%;
  font-family: "Orbitron", Arial, sans-serif;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  background-position: center;
}

body {
  width: 100%;
  height: 100%;

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

canvas {
  height: 100vh;
}

`;

export default GlobalStyle;
