import React from "react";
import { useHistory } from "react-router-dom";

// styled components
import {
  Container,
  HeadingContainer,
  ViewDashboard,
  Heading,
  BackBtn,
} from "../GetInvolved.styles";

import {
  BodyContainer,
  Content,
  Question,
  Answer,
  CtaContainer,
  CtaBtn,
} from "./Volunteer.styles";

const Volunteer = () => {
  const history = useHistory();

  const goBack = () => {
    history.push("/get-involved");
  };

  return (
    <Container>
      <HeadingContainer>
        <Heading>Volunteer</Heading>
        <ViewDashboard>View Dashboard</ViewDashboard>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <BodyContainer>
        <Content>
          <Question>Doing What?</Question>
          <Answer>
            Web Designer - our website needs to be pdated and enhanced from time
            to time.
            <br />
            Graphic Designer - we constantly have books, pamphlets, posters, and
            so on, which needs someone with imagination and humour.
            <br />
            Tech Trainer - in a changing world, we are looking for someone who
            can train youth in what the world of tomorrow needs.
            <br />
            Games Enthusiast - we work with children and all kids love to
            play... How does one do this with fun and life skills?
            <br />
            Finance Managers - we are unable to get chartered accountants to
            help manage and train our staff in accounting and finance.
            <br />
            Fund Raising - we are looking for people who can come up with ideas
            to improve our funding base, manage the existing funders, and train
            someone to handle this.
          </Answer>
        </Content>
        <Content>
          <Question>Where?</Question>
          <Answer>
            In Gudalur, nestled in the beautiful Nilgiri mountains of Tamilnadu,
            South India.
          </Answer>
        </Content>
        <Content>
          <Question>Who can volunteer?</Question>
          <Answer>
            Anyone! As long as you love working with children. We hope that you
            will be:
            <br />
            <br />
            - At least 21 years old and a graduate
            <br />
            - Enthusiastic and willing to learn
            <br />
            - Passionate about innovative teaching
            <br />
            - Extremely fluent in English
            <br />
            - Self-motivated
            <br />
            - Flexible and ready to play an active part in the life of the
            school
            <br />- Good at arts and crafts
          </Answer>
        </Content>
        <Content>
          <Question>For how long?</Question>
          <Answer>Minimum of 1 month</Answer>
        </Content>
        <Content>
          <Question>What about accomodation and things?</Question>
          <Answer>
            You get a "room with a view", a mere 5-minute walk from the school.
            A friendly kitchen provides you with healthy South Indian vegetarian
            food so you won't have to cook unless you want to!
            <br />
            <br />
            Broadband Internet and phone connections are easily accessible.
          </Answer>
        </Content>

        <CtaContainer>
          <Question>Interested?</Question>
          <CtaBtn to="/get-involved/volunteers/register">Register</CtaBtn>
        </CtaContainer>
      </BodyContainer>
    </Container>
  );
};

export default Volunteer;
