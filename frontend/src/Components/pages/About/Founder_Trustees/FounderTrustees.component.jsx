import React from "react";
import { Header, MainContainer, Container } from "../About.styles";
import boardmembers from "../../../../Assets/About/Trustees.svg";

const FounderTrustees = () => {
  return (
    <MainContainer>
      <Container id="founder-trustees">
        <Header>Founder Trustees</Header>
        <p>
          FOUNDER TRUSTEES OF THE VISWA BHARATI VIDYODAYA TRUST, GUDALUR 1993
        </p>
        <br />
        <img
          alt="Board Members"
          style={{ width: "1000px" }}
          src={boardmembers}
        />
      </Container>
    </MainContainer>
  );
};

export default FounderTrustees;
