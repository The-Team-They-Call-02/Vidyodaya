import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Programs from "./Components/pages/Programs/Programs.component";
import About from "./Components/pages/About";
import Blog from "./Components/pages/Blog";
import Home from "./Components/pages/Home";
import GetInvolved from "./Components/pages/Get_Involved/GetInvolved.component";
import Reports from "./Components/pages/Reports/Reports.component";
import ContactForm from "./Components/pages/Contact_Form/ContactForm.component";
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";

// styled-components
import GlobalStyles from "./Styles/GlobalStyles";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/programs">
        <Programs />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/reports">
        <Reports />
      </Route>
      <Route path="/get-involved">
        <GetInvolved />
      </Route>
      <Route path="/contact">
        <ContactForm />
      </Route>

      <Footer />
    </Router>
  );
}

export default App;
