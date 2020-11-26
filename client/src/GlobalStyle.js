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
  background-size: 100vw;

}

.App {
  text-align: center;
}


`;

export default GlobalStyle;
