import React from 'react';
import Nav from './Nav';
import Books from './Pages/Books.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Books} />
          <Route component={Nav} />
        </Switch>
      </div>
    </Router>
  );

export default App;