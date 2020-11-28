import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//COMPONENTS
import About from "./Components/pages/About/About.component";
import Articles from "./Components/pages/Articles/Articles.component";
import Programs from "./Components/pages/Programs/Programs.component";
import Home from "./Components/pages/Home";
import GetInvolved from "./Components/pages/Get_Involved/GetInvolved.component";
import Reports from "./Components/pages/Reports/Reports.component";
import ContactForm from "./Components/pages/Contact_Form/ContactForm.component";
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";
import Login from "./Components/pages/Login";
import FounderTrustees from "./Components/pages/About/Founder_Trustees/FounderTrustees.component";
import ManagingCommittee from "./Components/pages/About/Managing_Committee/ManagingCommittee.component";

import AxiosWithAuth from "./Utils/AxiosWithAuth";
import { AppContext } from "./context/context";

// styled-components
import GlobalStyles from "./Styles/GlobalStyles";

function App() {
  const [articles, addArticles] = useState([
    {
      title: "",
      description: "",
      imgUrl: "",
    },
  ]);
  const [articleArray, setArticleArray] = useState([]);

  return (
    <Router>
      <AppContext.Provider
        value={{
          articles,
          addArticles,
          articleArray,
          setArticleArray,
        }}
      >
        <GlobalStyles />
        <Navbar />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/about/founder-trustees">
            <FounderTrustees />
          </Route>

          <Route path="/about/managing-committee">
            <ManagingCommittee />
          </Route>

          <Route path="/programs">
            <Programs />
          </Route>

          <Route path="/articles">
            <Articles />
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

          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </AppContext.Provider>
    </Router>
  );
}

export default App;
