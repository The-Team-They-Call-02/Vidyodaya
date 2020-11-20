import React from "react";
import { Link } from "react-router-dom";

// styled-components
import { Heading } from "../GetInvolved.styles";
import {
  HomeContainer,
  LinksContainer,
  Links,
  PageHeader,
  InfoContainer,
  Info,
} from "./GetInvolvedHome.styles";

const GetInvolvedHome = () => {
  return (
    <HomeContainer>
      <Heading>Get Involved</Heading>

      <LinksContainer>
        <Links to="/volunteers">
          <InfoContainer>
            <PageHeader>Volunteer</PageHeader>
            <Info>internship</Info>
            <Info>research</Info>
            <Info>volunteering</Info>
          </InfoContainer>
        </Links>

        <Links to="/donations">
          <InfoContainer>
            <PageHeader>Donate</PageHeader>
          </InfoContainer>
        </Links>
      </LinksContainer>
    </HomeContainer>
  );
};

export default GetInvolvedHome;
