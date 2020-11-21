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
import { MainContainer } from "./Reports.styles";

const Reports = () => {
  return (
    <MainContainer>
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
