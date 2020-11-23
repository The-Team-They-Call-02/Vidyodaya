import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

// components
import ReportsHome from "./ReportsHome/ReportsHome.component";
import Annual from "./Annual/Annual.component";
import Financial from "./Financial/Financial.component";
import Other from "./Other/Other.component";
import AddReport from "./AddReport/AddReport.component";
import ReportPage from "./ReportPage/ReportPage.component";

// styled-components
import { MainContainer } from "./Reports.styles";

const Reports = () => {
  const [annual, setAnnual] = useState([]);
  const [financial, setFinancial] = useState([]);
  const [other, setOther] = useState([]);

  useEffect(() => {
    axios
      .get("https://opportunity-hack-vidyodaya.herokuapp.com/reports/reports")
      .then((res) => {
        const tempAnnual = [];
        const tempFinancial = [];
        const tempOther = [];

        res.data.forEach((report) => {
          if (report.category === "annual") {
            tempAnnual.push(report);
          } else if (report.category === "financial") {
            tempFinancial.push(report);
          } else {
            tempOther.push(report);
          }
        });

        setAnnual(tempAnnual);
        setFinancial(tempFinancial);
        setOther(tempOther);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainContainer>
      <Switch>
        <Route path="/reports/annual">
          <Annual reports={annual} />
        </Route>

        <Route path="/reports/financial">
          <Financial reports={financial} />
        </Route>

        <Route path="/reports/other">
          <Other reports={other} />
        </Route>

        <Route path="/reports/add-report" component={AddReport} />
        <Route path="/reports/:title/:id" component={ReportPage} />
        <Route path="/reports/" component={ReportsHome} />
      </Switch>
    </MainContainer>
  );
};

export default Reports;
