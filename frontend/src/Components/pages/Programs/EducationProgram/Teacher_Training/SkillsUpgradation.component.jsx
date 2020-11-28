import React from "react";
import { useHistory, Link } from "react-router-dom";
import image from "../../../../../Assets/Programs/skill-upgradation.jpg";

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

const SkillsUpgradation = (props) => {
  const history = useHistory();

  const goBack = () => {
    history.push("/programs/education-program");
  };

  return (
    <Container>
      <HeadingContainer>
        <Heading id="education-program">
          Skills Upgradation Training Jan'15 to Dec'15
        </Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <EducationContainer>
        <div className="education-program-inner-container">
          <TextContainer>
            <p>
              Viswa Bharati Vidyodaya Trust (VBVT) has been conducting an
              intensive residential Two-year teacher training programme for
              batches of around 15 youth from the adivasi community since 2009.
              There was a need felt among these trained teachers to upgrade
              their own teaching skills that could enable them to reach to
              children in an efficient way. To address this need, in the year
              2015, VBVT has started a 2 years Skill Upgradation program to a
              batch of 15 trained teachers (8 male and 7 female) from 3 tribes
              Paniyas, Mullakurumbas and Bettakurumbas – but 1 of them left the
              training due to personal reasons.
            </p>
            <br />
            <p>
              The Skill Upgradation training program provides training in the
              following areas:
            </p>
            <table>
              <tr>
                <th>Topics</th>
                <th>Year 1 - Total No. of hours</th>
              </tr>
              <tr>
                <td>Computer Training</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Leadership & Communications</td>
                <td>66</td>
              </tr>
              <tr>
                <td>Herbal medicines and nutritional foods</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Games</td>
                <td>44</td>
              </tr>
              <tr>
                <td>Arts & Crafts</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Science experiment (grade 5, 6 & 7)</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Science theory (grade 7 & 8)</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Mathematics (grade 6, 7 & 8)</td>
                <td>60</td>
              </tr>
              <tr>
                <td>English (grade 4,5 &6)</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Spoken English</td>
                <td>60</td>
              </tr>
            </table>
            <p>
              As a part of this program on Herbal Medicine, with the support
              from FRLHT (Foundation for Revitalization of Local Health
              Traditions) the trainees visited villages to learn on herbal
              medicine, interviewed practitioners, conducted workshops and
              documented a note on how to revive this herbal practices.
            </p>
            <br />
            <p>
              As an exposure visit, the trainees visited Tropical Genepool
              Garden in Nadugani – surprised by the varieties of species, the
              visit gave them a thought-provoking experience.
            </p>
            <br />
          </TextContainer>
          <img src={image} alt="" style={{ width: "800px" }} />
          <TextContainer>
            <br />
            <h3 id="higher-education">Assessment</h3>
            <br />
            <p>
              For each area the assessment is done based on different criteria
              like
            </p>
            <ul style={{ margin: "2% 10%" }}>
              <li>Participation in class</li>
              <li>Assignment submissions</li>
              <li>Communication level</li>
              <li>Self-initiative level</li>
            </ul>
            <p>
              In general the trainers felt the trainees have shown good overall
              improvement in all the areas. They were able to communicate in
              English, use internet to gather information & learn, solve
              problems better, express creativity in activities,relate concepts
              between Spoken English & subject English etc.,During the sessions,
              the trainers could see the trainees’ interest, curiosity and
              questioning sense that showed improvement in their confidence
              level & communication skills. Also, trainers felt their General
              Knowledge level has to be improved through series of activities.
            </p>
          </TextContainer>
        </div>
      </EducationContainer>
    </Container>
  );
};

export default SkillsUpgradation;
