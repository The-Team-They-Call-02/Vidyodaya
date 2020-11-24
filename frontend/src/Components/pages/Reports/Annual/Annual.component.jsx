import React from "react";
import { useHistory } from "react-router-dom";

// styled-components
import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
} from "../Reports.styles";

import { ReportsContainer, Document, Name } from "./Annual.styles";

const Annual = (props) => {
  const history = useHistory();
  const { reports } = props;

  const goBack = () => {
    history.push("/reports/");
  };
  return (
    <Container>
      <HeadingContainer>
        <Heading>Annual</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <ReportsContainer>
        {reports.map((doc) => {
          return (
            <Document key={doc.reportId}>
              <Name to={`/reports/${doc.title}/${doc.reportId}`}>
                {doc.title}
              </Name>
              ;
            </Document>
          );
        })}
      </ReportsContainer>
    </Container>
  );
};

export default Annual;
