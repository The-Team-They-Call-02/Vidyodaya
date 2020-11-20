import React from "react";
import { Route } from "react-router-dom";
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
      <GetInvolved />
    </>
  );
}

export default App;

// <>
//       <h1>test</h1>
//       {/* <Route exact path="/">
//       <Main />
//     </Route> */}
//       <Route path="/about">
//         <About />
//       </Route>
//       <Route path="/programs">
//         <Programs />
//       </Route>
//       <Route path="/blog">
//         <Blog />
//       </Route>
//     </>
