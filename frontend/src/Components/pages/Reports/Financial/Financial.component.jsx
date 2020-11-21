import React from "react";
import { useHistory } from "react-router-dom";

// styled-componets
import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
} from "../Reports.styles";

import { YearsContainer, Text } from "./Financial.styles";

const dummy2020 = [
  {
    year: 2020,
    name: "FCRA Quarterly Report July 2020 to September 2020",
  },
  {
    year: 2020,
    name: "VBVT FCRA Quarterly Report January 2020 to March 2020",
  },
  {
    year: 2020,
    name: "VBVT FCRA Quarterly Report April 2020 to June 2020",
  },
];

const dummy2019 = [
  {
    year: 2019,
    name: "Foreign Accounts Statement Report 2018-2019",
  },

  {
    year: 2019,
    name: "Consolidated Accounts Statement Report 2018-2019",
  },
  {
    year: 2019,
    name: "FCRA Quarterly Report January 2019 to March 2019",
  },
  {
    year: 2019,
    name: "FCRA Quarterly Report April 2019 to June 2019",
  },
  {
    year: 2019,
    name: "FCRA Quarterly Report July 2019 to September 2019",
  },
  {
    year: 2019,
    name: "FCRA Quartely Report October 2019 to December 2019",
  },
];

const dummy2018 = [
  {
    year: 2018,
    name: "FCRA Quartely Report October 2018 to December 2018",
  },
];

const years = {
  2020: dummy2020,
  2019: dummy2019,
  2018: dummy2018,
};

const Financial = () => {
  const history = useHistory();

  const goBack = () => {
    history.push("/reports");
  };

  // remember to change to="" later to proper path

  return (
    <Container>
      <HeadingContainer>
        <Heading>Financial</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <div>
        {Object.keys(years)
          .map((year, i) => {
            return (
              <YearsContainer key={i * Math.random() * i * Math.random()}>
                <Text year="true" disabled>
                  Reports {year}
                </Text>
                {years[year].map((data, j) => {
                  return (
                    <Text to="/reports/" key={`${j}${data.year}${i}`}>
                      {data.name}
                    </Text>
                  );
                })}
              </YearsContainer>
            );
          })
          .reverse()}
      </div>
    </Container>
  );
};

export default Financial;
