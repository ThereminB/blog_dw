import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Blog from "../pages/Blog";
import SigIn from "../pages/SigIn";
import NewPost from "../pages/NewPost";

function App() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Blog} />
            <Route exact path="/SigIn" component ={SigIn} />
            <Route exact path="/NewPost" component = {NewPost} />
          </Switch>
      </BrowserRouter>
    );
  }
  
  export default App;