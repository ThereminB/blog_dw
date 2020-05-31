import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Blog from "../pages/Blog";
import SigIn from "../pages/SigIn";

function App() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Blog} />
            <Route exact path ="/SigIn" component ={SigIn} />
          </Switch>
      </BrowserRouter>
    );
  }
  
  export default App;