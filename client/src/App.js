import HomePage from "./components/pages/HomePage.js";
import GlobalStyle from "./GlobalStyle";
import React from "react";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <HomePage />
      <a href="/storybook">To Storybook</a>
    </div>
  );
}

export default App;
