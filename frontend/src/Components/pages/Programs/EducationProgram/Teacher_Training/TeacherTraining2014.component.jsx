import React from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
  TextContainer,
} from "../../Programs.styles";
import { EducationContainer } from "../EducationProgram.styles";

const TeacherTraining2014 = (props) => {
  const history = useHistory();

  const goBack = () => {
    history.push("/programs/education-program");
  };

  return (
    <Container>
      <HeadingContainer>
        <Heading id="education-program">Teacher Training 2014</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <EducationContainer>
        <div className="education-program-inner-container">
          <TextContainer>
            <p>
              Viswa Bharati Vidyodaya Trust has been conducting an intensive
              residential Two-year teacher training programme for batches of
              around 15 youth from the adivasi community since 2009. This
              purpose is to equip at least one or two persons in each village
              who will help children in their studies upto Class 8
              (Elementary)level and thereby enabling them:
            </p>
            <ul style={{ margin: "2% 10%" }}>
              <li>to conduct evening classes in the village</li>
              <li>to take week-end classes at the area level</li>
              <li>to teach full time in schools</li>
              <li>
                Teach in Centres for drop-out children and help them join the
                mainstream schools.
              </li>
              <li>
                To make parents aware of educational needs, their child’s
                learning levels, and advice them about the best options for
                their child
              </li>
            </ul>
            <p>
              In the current batch there were 14 candidates from three tribes –
              Paniyas, Kattunayakans and Bettakurumbas initially but 3 of them
              left during the second year for various personal reasons. The
              batch had already completed the first year of training in 2013 and
              the Poristes funding helped the second year of training. A new
              batch of candidates is being taken in the year 2015.
            </p>
            <br />
            <p>
              The students are taught all the subjects essential for them like
              Tamil, English, Mathematics, Science, Social studies, Art & Craft,
              Health Education, Library, Teaching – Learning method, Child
              Psychology, Adivasis of the world – history and their knowledge,
              Adivasi Munnetra Sangam, Philosophy of Education, Challenges in
              Education, and Institutional management. During the second year
              they also began an intensive teaching programme in the Vidyodaya
              school where they are supervised and mentored. Only after this is
              completed are they given their certificates.
            </p>
            <br />
            <p>
              A baseline study was conducted at the beginning of the session.
              The students were tested in all subjects. They are continually
              tested during the course of the programme to ensure that they
              maintain their standards. They mentioned that they found English
              and Maths particularly challenging.
            </p>
            <br />
            <h3 id="higher-education">
              The process of their end of term Assessment:
            </h3>
            <br />
            <p>
              After revisiting the method used for the first batch of Trainees,
              the Trainers felt that an exam mode of Assessment really didn’t
              give us a good picture of their progress and development. After a
              prolonged session it was decided that a a two pronged method of
              Evaluation be done.
            </p>
            <br />
            <p>
              The first- Each subject teacher would give the Trainees a kind of
              a challenge, like a project, or preparing a question paper for a
              Class five student in a subject like Math or Science, or study a
              by observing a child and making a case study of the challenges it
              faced as a learner – for a subject like child psychology .. and so
              on for different subjects.
            </p>
            <br />
            <p>
              The second – Each Trainee would be asked to choose a Trainer from
              the Trainer group and sit with them on an individual basis ans try
              explain their own progress in many areas, to the Trainer of their
              selection. Two or three days time was allotted to make the Trainee
              feel happy and confident to talk about themselves, in an
              unhindered manner. This got us many insights into the problems
              faced and resolved, the self doubt they went through, the
              determination to resolve difficulties in the manner they had tried
              out during the Training course and lastly the importance of
              working together in a group irrespective of the individual
              differences among them.
            </p>
            <br />
            <p>
              Students were also taken to various exposure visits to courts,
              police station, government offices etc to build up their
              confidence and to give them exposure of the world around them and
              what they have to deal with.
            </p>
            <br />
            <p>
              Students were also taken to Calicut city, as no one of them had
              been to a city where they got to see the airport, shipbuilding
              yard, planetarium and above all what surprised them most was the
              sea and that its water was actually salty!
            </p>
            <br />
            <h3 id="higher-education">About the course from a Trainee:</h3>
            <br />
            <p style={{ fontStyle: "italic" }}>
              ‘When I came here I wanted to learn about teaching, but it seems
              that I am learning more about myself and my community. Doing a
              Teacher training course has equipped me with leadership skills and
              now in the village, the same people who earlier saw me only as a
              child now recognize me as a leader and come to me for any of their
              problems.’
            </p>
          </TextContainer>
        </div>
      </EducationContainer>
    </Container>
  );
};

export default TeacherTraining2014;
