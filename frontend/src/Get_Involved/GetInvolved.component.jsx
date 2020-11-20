import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import GetInvolvedHome from "./Home/GetInvolvedHome.component";
import Volunteer from "./Volunteer/Volunteer.component";
import Donations from "./Donations/Donations.component";

// styled-components
import { MainContainer } from "./GetInvolved.styles";

const GetInvolved = () => {
  return (
    <MainContainer>
      <Switch>
        <Route path="/volunteer" component={Volunteer} />
        <Route path="/donations" component={Donations} />
        <Route path="/" component={GetInvolvedHome} />
      </Switch>
    </MainContainer>
  );
};

export default GetInvolved;
