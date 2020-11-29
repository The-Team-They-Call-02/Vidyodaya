import React from "react";
import { useHistory } from "react-router-dom";
import image from "../../../../../Assets/Programs/tutorials1-e1454394356776.jpg";

import {
  Container,
  HeadingContainer,
  Heading,
  BackBtn,
  TextContainer,
} from "../../Programs.styles";
import { EducationContainer } from "../EducationProgram.styles";

const StudyCenters = (props) => {
  const history = useHistory();

  const goBack = () => {
    history.push("/programs/education-program");
  };

  return (
    <Container>
      <HeadingContainer>
        <Heading id="education-program">Study Centers</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <EducationContainer>
        <div className="education-program-inner-container">
          <img src={image} alt="" />
          <TextContainer>
            <p>
              As the children who complete from the government schools may not
              be having a good academic background it is necessary that they
              attend tutorials when they come to the Higher secondary level. So
              wherever they require such support they need to be given the
              financial assistance for this. The group that is eligible for this
              support are students between class 8 and class 12 who already
              number over 450 and in fact by Year three the number of children
              in this group may be as high 600 as we continue to stem the drop
              outs. In the current year 96 children will complete class 10 and
              class 12. In the n ext years these numbers will increase to at
              least 200 children completing their education annually. This is
              definitely going to require us to set aside a substantial sum in
              the years to come as the numbers increase.
            </p>
            <br />
            <p>
              Prasath, a teacher trained by the trust decided that he would make
              sure all the children from his village would complete school. In
              order to achieve this, he started a study centre where the
              children could come and follow up on their school work. He helps
              them with any subject they don’t understand at school. He also
              uses sometime to conduct activities like story reading, games –
              indoor & outdoor, learning to use computer etc. In this way he
              ensures that there is a learning environment created in the study
              centre.
            </p>
            <br />
            <p>
              Realizing that having an environment which is conducive to
              learning, 2 more study centres have been started on request by
              children. These new centres function over weekends.
            </p>
          </TextContainer>
        </div>
      </EducationContainer>
    </Container>
  );
};

export default StudyCenters;
