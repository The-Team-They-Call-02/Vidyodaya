import React from "react";
import { useHistory, Link } from "react-router-dom";

import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
  ProgramDonateContainer,
  TextContainer,
  ButtonContainer,
  Links,
} from "../../Programs.styles";
import { EducationContainer } from "../EducationProgram.styles";

const Scholarships = (props) => {
  const history = useHistory();

  const goBack = () => {
    history.push("/programs/education-program");
  };

  return (
    <Container>
      <HeadingContainer>
        <Heading id="education-program">Scholarships</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <EducationContainer>
        <div className="education-program-inner-container">
          <TextContainer>
            <p>
              The Adivasi Scholarship Fund was set up in 2010, with seed money
              of Rs.2 lakhs contributed by friends and wellwishers. As more and
              more students reach university, the need for scholarships to
              support them is growing fast. Over the last year, 19 students have
              received scholarships for higher education. Many students prefer
              to work, alongside their studies.
            </p>
          </TextContainer>
        </div>
      </EducationContainer>
    </Container>
  );
};

export default Scholarships;
