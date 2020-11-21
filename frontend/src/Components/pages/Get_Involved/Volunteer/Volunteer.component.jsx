import React from "react";
import { useHistory } from "react-router-dom";

// styled components
import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
} from "../GetInvolved.styles";

import {
  BodyContainer,
  ContentContainer,
  Content,
  Headline,
  Info,
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
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <BodyContainer>
        <ContentContainer questions>
          <Content>
            <Headline>Doing What?</Headline>
            <Info>
              Web Designer - our website needs to be pdated and enhanced from
              time to time.
              <br />
              Graphic Designer - we constantly have books, pamphlets, posters,
              and so on, which needs someone with imagination and humour.
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
              Fund Raising - we are looking for people who can come up with
              ideas to improve our funding base, manage the existing funders,
              and train someone to handle this.
            </Info>
          </Content>
          <Content>
            <Headline>Where?</Headline>
            <Info>
              In Gudalur, nestled in the beautiful Nilgiri mountains of
              Tamilnadu, South India.
            </Info>
          </Content>
          <Content>
            <Headline>Who can volunteer?</Headline>
            <Info>
              Anyone! As long as you love working with children. We hope that
              you will be:
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
            </Info>
          </Content>
          <Content>
            <Headline>For how long?</Headline>
            <Info>Minimum of 1 month</Info>
          </Content>
          <Content>
            <Headline>What about accomodation and things?</Headline>
            <Info>
              You get a "room with a view", a mere 5-minute walk from the
              school. A friendly kitchen provides you with healthy South Indian
              vegetarian food so you won't have to cook unless you want to!
              <br />
              <br />
              Broadband Internet and phone connections are easily accessible.
            </Info>
          </Content>
        </ContentContainer>

        <ContentContainer>
          <Content>
            <Headline internships style={{ marginBottom: "50px" }}>
              Internships/Research/Volunteering
            </Headline>

            <Headline internships>VBVT</Headline>
            <Headline internships>
              Interns, Research and Volunteer Policy
            </Headline>

            <Info internships>
              We work with a marginalised adivasi community whom the government
              of India has categorized as a Particulary Vulnerable Tribal
              Group(PVTG). It is important that we are all sensitive to their
              way of life and this policy statement is made out to safeguard
              that
            </Info>
          </Content>
          <Content>
            <Info policy>
              1.) All requests for internships/research/volunteering should be
              addressed to vbvtgudalur@gmail.com and nanditha.accord@gmail.com
              or REGISTER below.
            </Info>

            <Info policy>
              2.) Undergraduate and degree students will not be considered
              unless in exceptional cases.
            </Info>

            <Info policy>
              3.) Every request should be accompanied by a CV as well as a SOP
              as to why the individual/team wishes to work with the organisation
              and how they hope to contribute to the community.
            </Info>

            <Info policy>
              4.) We will be requesting a fee of Rs. 5000 for all placements
              within the organisation which will cover the cost of
              organisation’s time as well as resources. However, for deserving
              candidates, this fee may be waived upon request
            </Info>
            <Info policy>
              5.) Subject to availability, accommodation is available in the
              organisation at the rate of Rs.100/night. Food expenses will be
              extra.
            </Info>
            <Info policy>
              6.) There will be a mid level review of the interns as well as a
              final presentation which must be accompanied by a deliverable.
            </Info>
            <Info policy>
              7.) Please enter adivasi villages only when accompanied by a staff
              member. Remember you are entering someone’s home so please be
              respectful of their privacy and needs.
            </Info>
            <Info policy>
              8.) All interns are requested to strictly adhere to the
              photography policy of the organisation:
              <br />
              <br />
              <Content>
                <Info policy>
                  {" "}
                  1.) Photographs to be taken only with the consent of Staff
                  concerned
                </Info>
                <Info policy>
                  {" "}
                  2.) All pictures to be shared with VBVT with full rights to
                  use them
                </Info>
                <Info policy>
                  {" "}
                  3.) Photographs to be acknowledged when personally used by the
                  interns
                </Info>
              </Content>
            </Info>
          </Content>
        </ContentContainer>

        <CtaContainer>
          <Headline>Interested?</Headline>
          <CtaBtn to="/get-involved/volunteers/register">Register</CtaBtn>
        </CtaContainer>
      </BodyContainer>
    </Container>
  );
};

export default Volunteer;
