import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Programs from './Programs/Programs';
import About from './Components/About';
import Blog from './Components/Blog';
import Home from "./Components/Home";
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
