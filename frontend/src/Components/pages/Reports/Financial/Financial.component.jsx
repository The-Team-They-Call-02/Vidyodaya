import React from "react";
import { useHistory } from "react-router-dom";

// styled-componets
import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
} from "../Reports.styles";

import { ReportsContainer, YearsContainer, Text } from "./Financial.styles";

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

  return (
    <Container>
      <HeadingContainer>
        <Heading>Financial</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <ReportsContainer>
        {Object.keys(years)
          .map((year) => {
            return (
              <>
                <YearsContainer>
                  <Text year>Reports {year}</Text>
                  {years[year].map((data) => {
                    return (
                      <>
                        <Text>{data.name}</Text>
                      </>
                    );
                  })}
                </YearsContainer>
              </>
            );
          })
          .reverse()}
      </ReportsContainer>
    </Container>
  );
};

export default Financial;
