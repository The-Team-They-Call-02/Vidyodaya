import React from "react";
import { useHistory } from "react-router-dom";

// styled-components
import {
  Container,
  HeadingContainer,
  Heading,
  ViewDashboard,
} from "../Reports.styles";

import { LinksContainer, Links } from "./ReportsHome.styles";
import { BackgroundImageContainer } from "../../../../Styles/GlobalStyles";

import { FaPlus } from "react-icons/fa";

const ReportsHome = () => {
  const history = useHistory();

  const goBack = () => {
    history.push("/reports/add-report");
  };

  return (
    <Container>
      <BackgroundImageContainer
        style={{ marginTop: "0", height: "100%" }}
      ></BackgroundImageContainer>
      <HeadingContainer>
        <Heading>Reports</Heading>
        <ViewDashboard onClick={goBack}>
          <FaPlus />{" "}
        </ViewDashboard>
      </HeadingContainer>

      <LinksContainer>
        <Links to="/reports/annual">Annual Reports</Links>
        <Links to="/reports/financial">Financial Reports</Links>
        <Links to="/reports/other">Other Reports</Links>
      </LinksContainer>
    </Container>
  );
};

export default ReportsHome;
