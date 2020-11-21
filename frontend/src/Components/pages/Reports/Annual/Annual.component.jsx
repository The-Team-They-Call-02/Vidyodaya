import React from "react";
import { useHistory } from "react-router-dom";

// styled-components
import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
} from "../Reports.styles";

import { DocumentsContainer, Document, Name } from "./Annual.styles";

const dummy = [
  {
    name: "VBVT Annual Report 2018 – 19",
  },

  {
    name: "VBVT Annual Report March 2018",
  },
];

const Annual = () => {
  const history = useHistory();

  // might have to make history.push dynamic based on what Document is clicked
  // same with 'to' property of Name(Link) component

  // we an make this goBack func a util function since it's used in multiple components anyway
  // function that takes in a path to goBack to
  const goBack = () => {
    history.push("/reports/");
  };
  return (
    <Container>
      <HeadingContainer>
        <Heading>Annual</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <DocumentsContainer>
        {dummy.map((doc) => {
          return (
            <Document>
              <Name to="/reports/">{doc.name}</Name>;
            </Document>
          );
        })}
      </DocumentsContainer>
    </Container>
  );
};

export default Annual;
