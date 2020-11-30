import GlobalStyle from "./GlobalStyle";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import StartPage from "./components/pages/StartPage";
import NeowisePage from "./components/pages/NeowisePage";

function App() {
  const [name, setName] = useState(() => localStorage.getItem("name") || "");
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/neowisepage">
          <NeowisePage />
        </Route>
        <Route path="/startpage">
          <StartPage name={name} />
        </Route>
        <Route path="/">
          <HomePage name={name} onNameChange={(newName) => setName(newName)} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
