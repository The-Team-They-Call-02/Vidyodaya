import React from "react";

// styled-components
import { Container, HeadingContainer, Heading } from "../Reports.styles";

import { LinksContainer, Links } from "./ReportsHome.styles";
import { BackgroundImageContainer } from "../../../../Styles/GlobalStyles";

const ReportsHome = () => {
  return (
    <Container>
    <BackgroundImageContainer style={{marginTop: "0", height: "100%"}}>
		</BackgroundImageContainer>
      <HeadingContainer>
        <Heading>Reports</Heading>
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
