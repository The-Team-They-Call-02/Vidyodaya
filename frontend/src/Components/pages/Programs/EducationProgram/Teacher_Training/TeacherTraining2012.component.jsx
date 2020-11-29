import React from "react";
import { useHistory } from "react-router-dom";
import image from "../../../../../Assets/Programs/photo2-445x299.jpg";

import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
  TextContainer,
} from "../../Programs.styles";
import { EducationContainer } from "../EducationProgram.styles";

const TeacherTraining2012 = (props) => {
  const history = useHistory();

  const goBack = () => {
    history.push("/programs/education-program");
  };

  return (
    <Container>
      <HeadingContainer>
        <Heading id="education-program">Teacher Training 2012</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <EducationContainer>
        <div className="education-program-inner-container">
          <img src={image} alt="" style={{ width: "800px" }} />
          <TextContainer>
            <br />
            <p>
              The major lacuna that is seen in the government schools is that
              there are few teachers who are motivated and trained to handle
              children. Secondly, when it comes to dealing with adivasi children
              the non-tribal teachers are at a loss as they do not know the
              language or the culture. It is to fill this vacuum that the
              full-time training course is envisaged. These trainees after the
              training can take up posts through the Parent-Teacher associations
              as temporary teachers and later attempt to have them absorbed into
              the system. Already we are pressurised to support such temporary
              teachers but have avoided it for reason of not having trained
              personnel. In the 1992 ACCORD had a programme of Voluntary
              teachers in the 14 GTR schools but it was stopped after 4 years as
              the teachers were not trained and so the teachers were never given
              importance in the school. This is now overcome and the schools are
              asking for teachers. At this juncture we can reach out to having
              these persons placed in the schools. Following this we can compel
              the government to take them on as staff, particularly in the GTR
              schools.
            </p>
            <br />
            <p>
              Three or four of them can also work in the three NIOS sub-centres
              that are planned to be initiated in the Areas in the third year
              catering to around 100 children. As the numbers of these
              sub-centres expand more of these teachers can be placed there.
            </p>
            <br />
            <p>
              We are training 17 teachers in the first batch and of these
              trainees it is planned that 16 of them can be posted in the Areas.
              We expect that 12 will be posted in the GTR and Panchayat primary
              schools. While these 12 teachers may not teach all the children in
              the school they can reach out to all the adivasi children in the
              school. They will be able to have direct contact with over 500
              children as we will try to put them in schools that have majority
              adivasi children.
            </p>
          </TextContainer>
        </div>
      </EducationContainer>
    </Container>
  );
};

export default TeacherTraining2012;
