import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  FrisbeeProgram,
  ChildrenCamps,
  EducationProgram,
  ProgramsPage,
  Balwadis,
  Culture,
} from './Components/pages/Programs';
import About from './Components/pages/About';
import Blog from './Components/pages/Blog';
import Home from "./Components/pages/Home";
import GetInvolved from "./Components/pages/Get_Involved/GetInvolved.component";
import GlobalStyles from "./Styles/GlobalStyles";

function App() {
  return (
    <Router>
      <GlobalStyles />

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/programs">
        <ProgramsPage />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>

      <Route path="/get-involved">
        <GetInvolved />
      </Route>
    </Router>
  );
}

export default App;
