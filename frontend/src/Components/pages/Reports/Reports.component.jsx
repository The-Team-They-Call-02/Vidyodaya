import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import ReportsHome from "./ReportsHome/ReportsHome.component";
import Annual from "./Annual/Annual.component";
import Financial from "./Financial/Financial.component";
import Other from "./Other/Other.component";
import Dashboard from "./Dashboard/Dashboard.component";
import AddReport from "./AddReport/AddReport.component";

// styled-components
import {
  MainContainer,
  SocialIconsContainer,
  SocialIcons,
} from "./Reports.styles";

// react-icons
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Reports = () => {
  return (
    <MainContainer>
      <SocialIconsContainer>
        <SocialIcons color="#6CADDE">
          <FaTwitterSquare />
        </SocialIcons>
        <SocialIcons>
          <FaFacebookSquare color="#3B5998" />
        </SocialIcons>
      </SocialIconsContainer>

      <Switch>
        <Route path="/reports/annual" component={Annual} />
        <Route path="/reports/financial" component={Financial} />
        <Route path="/reports/other" component={Other} />
        <Route path="/reports/dashboard" component={Dashboard} />
        <Route path="/reports/add-report" component={AddReport} />
        <Route path="/reports/" component={ReportsHome} />
      </Switch>
    </MainContainer>
  );
};

export default Reports;
