import React from "react";

import {
  Header,
  MainContainer,
  Container,
  TextContainer,
  Image,
} from "../About.styles";
import boardmembers from "../../../../Assets/About/Trustees.svg";

const ManagingCommittee = () => {
  return (
    <MainContainer>
      <Container id="founder-trustees">
        <Header>Managing Committee</Header>
        <p>Composition of Managing Committee/Governing Body</p>
        <p>Details of Board of Trustees of VBVT</p>
        <br />
        <img style={{ width: "1000px" }} src={boardmembers} />
      </Container>
    </MainContainer>
  );
};

export default ManagingCommittee;
