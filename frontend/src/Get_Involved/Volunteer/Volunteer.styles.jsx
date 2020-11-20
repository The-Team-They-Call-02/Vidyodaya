import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorObj } from "../../Styles/GlobalStyles";

const BodyContainer = styled.div`
  min-height: 80%;
  padding: 50px 0;
  background: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
`;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  color: ${colorObj.dark};
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
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CtaBtn = styled(Link)`
  font-size: 2rem;
  color: white;
  font-weight: 900;
  background: ${colorObj.green};
  padding: 10px;
  width: 150px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:focus {
    outline: none;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export { BodyContainer, Content, Question, Answer, CtaContainer, CtaBtn };
