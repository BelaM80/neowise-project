import GlobalStyle from "./GlobalStyle";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import StartPage from "./components/pages/StartPage";
import NeowisePage from "./components/pages/NeowisePage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/neowisepage">
          <NeowisePage />
        </Route>
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
