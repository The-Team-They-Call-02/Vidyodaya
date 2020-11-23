import styled from "styled-components";
import { colorObj } from "../../../Styles/GlobalStyles";

const MainContainer = styled.div`
  ${"" /* background: #f8f7f7; */}
  padding: 150px 0 0 0;
  position: relative;
`;

const SocialIconsContainer = styled.div`
  width: 50px;
  text-align: center;
  position: fixed;
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
  min-height: calc(100vh - (40vh + 150px));
  padding-bottom: 50px;
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

const ViewDashboard = styled.button`
  display: ${localStorage.getItem("token") ? "inline" : "none"};
  border: 2px solid #00703a;
  background: #e5e5e5;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  padding: 10px;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 900;
  color: #00703a;
  width: 20rem;
  height: 5rem;
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
  MainContainer,
  Container,
  SocialIconsContainer,
  SocialIcons,
  HeadingContainer,
  Heading,
  BackBtn,
  ViewDashboard,
};
