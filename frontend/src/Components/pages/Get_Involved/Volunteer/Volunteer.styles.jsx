import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorObj } from "../../../../Styles/GlobalStyles";

const BodyContainer = styled.div`
  padding: 50px 0;
  background: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
`;

const ContentContainer = styled.div`
  margin-bottom: ${(props) => (props.questions ? "100px" : "0")};
`;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  color: ${colorObj.dark};
`;

const Headline = styled.h3`
  font-size: 2.5rem;
  text-align: ${(props) => (props.internships ? "center" : "left")};
  margin-bottom: 20px;
`;

const Info = styled.p`
  font-size: 2rem;
  text-align: ${(props) => (props.internships ? "center" : "left")};
  font-weight: ${(props) => (props.internships ? "700" : "500")};
  margin-bottom: ${(props) => (props.policy ? "20px" : "0")};
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
  text-decoration: none;

  &:focus {
    outline: none;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export {
  BodyContainer,
  ContentContainer,
  Content,
  Headline,
  Info,
  CtaContainer,
  CtaBtn,
};
