import styled from "styled-components";
import { colorObj } from "../../../Styles/GlobalStyles";

export const MainContainer = styled.div`
  background: #f8f7f7;
  padding: 150px 0 0 0;
`;

export const Heading = styled.h2`
  font-size: 6.4rem;
  font-family: "Roboto", sans-serif;
  color: ${colorObj.dark};
  font-weight: 700;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 50px;
  min-height: calc(100vh - (40vh + 150px));
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 150px;
`;

export const ViewDashboard = styled.button`
  display: ${(props) => (props.isAdmin ? "inline" : "none")};
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
  height: auto;
  width: auto;
`;

export const BackBtn = styled.div`
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
