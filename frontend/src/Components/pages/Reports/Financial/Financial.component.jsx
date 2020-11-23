import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// styled-componets
import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
} from "../Reports.styles";

import { ReportsContainer, YearsContainer, Text } from "./Financial.styles";

const Financial = (props) => {
  const history = useHistory();
  const { reports } = props;

  const [years, setYears] = useState({});

  useEffect(() => {
    const temp = {};

    reports.forEach((report) => {
      if (!(report.year in temp)) {
        temp[report.year] = [report];
      } else {
        temp[report.year].push(report);
      }
    });

    setYears(temp);
  }, []);

  const goBack = () => {
    history.push("/reports");
  };

  return (
    <Container>
      <HeadingContainer>
        <Heading>Financial</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <ReportsContainer>
        {Object.keys(years)
          .map((year, i) => {
            return (
              <YearsContainer key={i * Math.random() * i * Math.random()}>
                <Text year="true" disabled>
                  Reports {year}
                </Text>
                {years[year].map((data, j) => {
                  return (
                    <Text
                      to={`/reports/${data.title}/${data.reportId}`}
                      key={`${j}${data.year}${i}`}
                    >
                      {data.title}
                    </Text>
                  );
                })}
              </YearsContainer>
            );
          })
          .reverse()}
      </ReportsContainer>
    </Container>
  );
};

export default Financial;
