import React from 'react';
import { Route } from 'react-router-dom';
import Programs from './Programs/Programs';
import About from './Components/About';


function App() {
  return (
    <div >
    test
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/programs">
    <Programs/>
    </Route>
    </div>
  );
}

export default App;
