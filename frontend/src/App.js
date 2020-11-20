import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Programs from './Programs/Programs';
import About from './Components/About';


function App() {
  return (
    <Router>
    test
    {/* <Route exact path="/">
      <Main />
    </Route> */}
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/programs">
    <Programs/>
    </Route>
    </Router>
  );
}

export default App;
