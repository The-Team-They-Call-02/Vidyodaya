import React from "react";
import { useHistory, Link } from "react-router-dom";
import savings from "../../../../../Assets/Programs/savings-e1454394256428.jpg";

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

const ChildrensBank = (props) => {
  const history = useHistory();

  const goBack = () => {
    history.push("/programs/education-program");
  };

  return (
    <Container>
      <HeadingContainer>
        <Heading id="education-program">Children's Bank</Heading>
        <BackBtn onClick={goBack}>Back</BackBtn>
      </HeadingContainer>

      <EducationContainer>
        <div className="education-program-inner-container">
          <TextContainer>
            <br />
            <p>
              In the adivasi context in particular and in any case the way we do
              it at Vidyodaya, the program has a special significance. First of
              all, one must remember that adivasis have never felt the need to
              save for tomorrow. Given their environment of plenty they lived
              in, they were well provided for. The idea of saving money has come
              with the use of money itself (this generation) which is a rather
              new experience for them. So when the parent actually decides to
              put aside money for their child then it is to be seen as a
              transformative step into the future itself. Also it means that the
              parent has decided that the education is important enough for them
              to invest in it. It is also their way of expressing their
              appreciation.
            </p>
            <br />
            <h3 id="higher-education">How do we do this?</h3>
            <br />
            <p>
              We encourage children to bring one or two rupees whenever they can
              and this is collected by a teacher during the school assembly.
              Each child has a passbook wherein the teacher enters the amount
              collected. This way, both the child and their parents are aware of
              the savings they are making. In addition to this there is a
              regular income from the handwork the children make and we sell. In
              2014, our 100 students collectively saved Rs 37, 000.
            </p>
            <br />
            <p>
              Seeing the impact of the program in the school, we decided to
              extend it to the village. We handed a small wooden box which was
              locked to each child. The key rested with our Coordinator. The
              idea was to open it once a month and calculate the entire savings.
              Much to our delight, the program spread to over 200 villages with
              more than 500 children saving close to Rs 2, 50, 000!
            </p>
            <br />
            <h3 id="higher-education">Learning to use the money</h3>
            <br />
            <p>
              From the very beginning, we focused on utilising the money only
              for educational purposes and nothing else, even if it was urgent.
              So the children now had the responsibility to use their money
              wisely. And they did! From buying their school stationeries to
              clothes and funding their excursions, children used their savings
              for a variety of purposes. During times, when children needed more
              than what they had accumulated, we allowed them to borrow money,
              and sign an undertaking that they would repay the same over a
              fixed period of time. This made them feel important and even more
              responsible. So loans to buy books, umbrellas, clothes, slippers
              or to pay for some fees were taken. Sometimes the loan was 50
              rupees, but never more than 500 rupees. All these were repaid at
              the rate they fixed, usually Rs 5 or 10 rupees a month which could
              be deducted from their account. Even if the saving was more than
              10 rupees the amount deducted would remain only Rs 10.
            </p>
            <br />
            <p>
              This further encouraged children to save. For the parents, they
              remained out of this and only had to make their regular
              contributions to the child. During school meetings, teachers show
              parents how the savings money has been utilized by the child.
              These remain moments of pride for every parent involved.
            </p>
            <br />
            <p>
              To sum it up, not only did the savings program helped children to
              take responsibility of their educational lives but also instilled
              confidence and gave them strength to make responsible decision
              about their futures.
            </p>
            <br />
            <p>
              This article also published in
              <a
                href="http://india.ashoka.org/benefits-children%E2%80%99s-savings-program"
                alt=""
                target="_blank"
              >
                Ashoka India website
              </a>
            </p>
            <br />
          </TextContainer>

          <img src={savings} alt="" />

          <TextContainer>
            <br />
            <p>
              The Savings programme which was started in 2007 has caught on like
              wild fire and we are progressing slowly only because we do not
              have the personnel to manage this. The programme consists of
              giving each child a box which is locked, the key being with the
              Area Accountant. The child has a pass book and every time the box
              is opened the money is counted in front of the child and entered
              in the pass book. So far over 500 children are part of the Savings
              scheme and we have a collection of over 80,000.
            </p>
            <br />
            <p>
              We have planned to approach this programme more systematically:
            </p>
            <ul style={{ margin: "2% 10%" }}>
              <li>Each Area to have 200 children enrolled in the scheme</li>
              <li>
                To have meetings with the children and parents in each Area to
                inform them of the progress
              </li>
              <li>To increase the overall savings to Rs. 3 lakhs</li>
              <li>Higher education possibility is financially secured</li>
              <li>To have a coordinator to follow up this programme</li>
              <li>
                To develop a good system of accounting both at the Area level
                and for the children
              </li>
              <li>
                Children encouraged to use the money to purchase stationery from
                the Area office
              </li>
            </ul>
          </TextContainer>
        </div>
      </EducationContainer>
    </Container>
  );
};

export default ChildrensBank;
