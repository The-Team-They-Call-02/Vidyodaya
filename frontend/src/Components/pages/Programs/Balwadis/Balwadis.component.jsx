import React from "react";
import { useHistory } from "react-router-dom";

// styled components
import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
  ProgramDonateContainer,
} from "../Programs.styles";
import { BalwadisContainer } from "./Balwadis.styles";

const Balwadis = () => {
  const history = useHistory();

  const goBack = () => {
    history.push("/programs/");
  };

  return (
    <Container>
      <HeadingContainer>
        <Heading>Balwadis</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <BalwadisContainer>
        <div className="balwadis-inner-container">
          <h3 className="main-title">Integrated Child Development Services</h3>
          <p>
            The trust was instrumental in bringing the ICDS program of the
            government to the remote tribal villages of Gudalur block. At
            present there are 160 ICDS centres although not all of them are
            accessible by the adivasi community. Around 300 Adivasi children
            upto age 5 go to ICDS centers ( Balwadis) and the trust along with a
            sister NGO ASHWINI monitors the children going to these centres
            <br />
            <br />
            Our experience has shown us that nutritional and educational inputs
            at the crucial age between 2 to 5 years, make a huge difference to
            the growth and the development of the child. Hence the trust has
            zeroed in on 18 Balwadis where the majority children are adivasis
            and follows up on the progress of those children.
          </p>
        </div>
      </BalwadisContainer>
      <ProgramDonateContainer>
        <h5 className="program-donations-text">
          Help us continue the ICDS program by donating.
        </h5>
        <button className="program-donations-btn">Donate</button>
      </ProgramDonateContainer>
    </Container>
  );
};

export default Balwadis;
