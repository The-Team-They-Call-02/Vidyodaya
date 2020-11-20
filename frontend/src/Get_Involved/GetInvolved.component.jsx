import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import GetInvolvedHome from "./Home/GetInvolvedHome.component";
import Volunteer from "./Volunteer/Volunteer.component";
import Donations from "./Donations/Donations.component";
import RegisterForm from "./Volunteer/Register-form/Register-form.component";

// styled-components
import { MainContainer } from "./GetInvolved.styles";

const GetInvolved = () => {
  return (
    <MainContainer>
      <Switch>
        <Route
          path="/get-involved/volunteers/register"
          component={RegisterForm}
        />
        <Route path="/get-involved/volunteers" component={Volunteer} />
        <Route path="/get-involved/donations" component={Donations} />
        <Route path="/get-involved/" component={GetInvolvedHome} />
      </Switch>
    </MainContainer>
  );
};

export default GetInvolved;
