import GlobalStyle from "./GlobalStyle";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import StartPage from "./components/pages/StartPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/startpage">
          <StartPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
