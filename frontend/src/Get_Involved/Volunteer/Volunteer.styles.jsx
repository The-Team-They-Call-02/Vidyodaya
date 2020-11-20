import styled from "styled-components";
import { colorObj } from "../../Styles/GlobalStyles";

const BodyContainer = styled.div`
  min-height: 80%;
  padding: 50px 0;
`;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Question = styled.h3`
  font-size: 2.5rem;
  text-align: left;
  margin-bottom: 20px;
`;

const Answer = styled.p`
  font-size: 2rem;
  text-align: left;
`;

const CtaContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CtaBtn = styled.button`
  font-size: 2rem;
  color: white;
  font-weight: 900;
  background: ${colorObj.green};
  padding: 10px;
  width: 150px;
  border: none;
  border-radius: 10px;
`;

export { BodyContainer, Content, Question, Answer, CtaContainer, CtaBtn };
