import React from "react";
import { Route, Link } from "react-router-dom";
import Programs from "./Programs/Programs";
import About from "./Components/About";
import Blog from "./Components/Blog";

import GlobalStyle from "./Styles/GlobalStyles";

// TEST
import GetInvolved from "./Get_Involved/GetInvolved.component";

function App() {
  return (
    <>
      <GlobalStyle />
      <Link to="/get-involved" style={{ fontSize: "4rem" }}>
        GET INVOLVED
      </Link>
      <h1>test</h1>
      {/* <Route exact path="/">
      <Main />
    </Route> */}
      <Route path="/about">
        <About />
      </Route>
      <Route path="/programs">
        <Programs />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/get-involved" component={GetInvolved} />
    </>
  );
}

export default App;
