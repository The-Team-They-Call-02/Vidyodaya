import React from "react";

// styled-components
import { Heading, HeadingContainer, Container } from "../GetInvolved.styles";
import {
  LinksContainer,
  Links,
  PageHeader,
  InfoContainer,
  Info,
} from "./GetInvolvedHome.styles";

// view dashboard will need a prop isAdmin which will probably come from the backend API call

const GetInvolvedHome = () => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>Get Involved</Heading>
      </HeadingContainer>
      <LinksContainer>
        <Links to="/get-involved/volunteers">
          <InfoContainer>
            <PageHeader>Volunteer</PageHeader>
            <Info>internship</Info>
            <Info>research</Info>
            <Info>volunteering</Info>
          </InfoContainer>
        </Links>

        <Links to="/get-involved/donations">
          <InfoContainer>
            <PageHeader>Donate</PageHeader>
          </InfoContainer>
        </Links>
      </LinksContainer>
    </Container>
  );
};

export default GetInvolvedHome;
