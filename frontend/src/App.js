import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {
  FrisbeeProgram,
  ChildrenCamps,
  EducationProgram,
  Programs,
  Balwadis,
  Culture,
} from './Components/pages/Programs';
import About from './Components/pages/About';
import Blog from './Components/pages/Blog';
import Home from "./Components/pages/Home";
import GlobalStyles from "./Styles/GlobalStyles";


function App() {
  return (
    <Router>
    <GlobalStyles/>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/programs">
      <Programs/>
    </Route>
    <Route path="/blog">
      <Blog />
    </Route>
    </Router>
  );
}

export default App;
