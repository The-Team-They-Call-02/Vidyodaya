import styled from "styled-components";
import { colorObj } from "../../../Styles/GlobalStyles";

const MainContainer = styled.div`
  background: #f8f7f7;
  padding: 150px 0 100px 0;
  min-height:  100%;
`;

const Heading = styled.h2`
  font-size: 6.4rem;
  font-family: "Roboto", sans-serif;
  color: ${colorObj.dark};
  font-weight: 700;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  height: 100%;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 150px;
`;

const BodyContainer = styled.div`
  padding: 50px 0;
  margin: 4% 10%;
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

const BackBtn = styled.div`
  position: absolute;
  bottom: 10px;
  color: ${colorObj.dark};
  left: 10px;
  font-weight: 900;
  font-size: 1.5rem;
  cursor: pointer;

  &:before {
    content: "\u00AB";
    font-size: 2rem;
    color: black;
    font-weight: 900;
    margin-right: 3px;
  }
`;

export {
  BackBtn,
  MainContainer,
  Container,
  HeadingContainer,
  Heading,
  BodyContainer,
  ContentContainer,
  Content
};