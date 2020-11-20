import React from "react";
import { Link } from "react-router-dom";

// styled-components
import { Heading } from "../GetInvolved.styles";
import { HomeContainer, LinksContainer, Links } from "./GetInvolvedHome.styles";

const GetInvolvedHome = () => {
  return (
    <HomeContainer>
      <Heading>Get Involved</Heading>

      <LinksContainer>
        <Links to="/volunteers" className="card-container">
          <div className="info-container">
            <h3>Volunteer</h3>
            <p>internship</p>
            <p>research</p>
            <p>volunteering</p>
          </div>
        </Links>

        <Links to="/donations" className="card-container">
          <div className="info-container">
            <h3>Donate</h3>
          </div>
        </Links>
      </LinksContainer>
    </HomeContainer>
  );
};

export default GetInvolvedHome;
