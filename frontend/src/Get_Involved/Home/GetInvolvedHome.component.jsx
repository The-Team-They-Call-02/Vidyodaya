import React from "react";

// styled-components
import { Heading } from "../GetInvolved.styles";
import {
  HomeContainer,
  LinksContainer,
  Links,
  PageHeader,
  InfoContainer,
  Info,
  HeadingContainer,
  ViewDashboard,
} from "./GetInvolvedHome.styles";

// view dashboard will need a prop isAdmin which will probably come from the backend API call

const GetInvolvedHome = () => {
  return (
    <HomeContainer>
      <HeadingContainer>
        <Heading>Get Involved</Heading>
        <ViewDashboard> View Dashboard </ViewDashboard>
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
    </HomeContainer>
  );
};

export default GetInvolvedHome;
