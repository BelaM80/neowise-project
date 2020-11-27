import GlobalStyle from "./GlobalStyle";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
