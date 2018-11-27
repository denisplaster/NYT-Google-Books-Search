import React from "react";
import Typography from '@material-ui/core/Typography';
require('../App.css');

const Nav = () => {
  return (
   
    <header className="App-header">
          <Typography   color="primary" component="h2" variant="h1" className="header-title" gutterBottom>
          Nyt Google Book Search
          </Typography>
    </header>
   
    )
  }

export default Nav;
