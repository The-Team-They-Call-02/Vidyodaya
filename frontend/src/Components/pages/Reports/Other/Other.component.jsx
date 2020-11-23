import React from "react";
import { useHistory } from "react-router-dom";
// styled-components
import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
} from "../Reports.styles";

import { ReportsContainer, Document, Name } from "./Other.styles";

const dummy = [
  {
    name: "Education Evaluation by Francis V. Sathya",
  },
];

const Other = () => {
  const history = useHistory();

  const goBack = () => {
    history.push("/reports/");
  };

  return (
    <Container>
      <HeadingContainer>
        <Heading>Other Reports</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>
      <ReportsContainer>
        {dummy.map((doc) => {
          return (
            <>
              <Document>
                <Name>{doc.name}</Name>
              </Document>
            </>
          );
        })}
      </ReportsContainer>
    </Container>
  );
};

export default Other;
