import styled from "styled-components";
import { colorObj } from "../../../Styles/GlobalStyles";

const MainContainer = styled.div`
  background: #f8f7f7;
  padding: 150px 0 100px 0;
  position: relative;
`;

const SocialIconsContainer = styled.div`
  width: 50px;
  text-align: center;
  position: absolute;
  top: 250px;
  right: 20px;
`;

const SocialIcons = styled.a`
  text-decoration: none;
  font-size: 4rem;
  color: ${(props) => (props.color ? props.color : "")};
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

const Heading = styled.h2`
  font-size: 6.4rem;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: ${colorObj.dark};
`;

export {
  MainContainer,
  Container,
  SocialIconsContainer,
  SocialIcons,
  HeadingContainer,
  Heading,
};
