import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./components/Pages/Books";
import Saved from "./components/Pages/Saved";

import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/Books" component={Books} />
        <Route exact path="/Saved" component={Saved} />
        
      </Switch>
    </div>
  </Router>
);

export default App;
