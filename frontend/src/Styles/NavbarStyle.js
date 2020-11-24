import styled from "styled-components";
import { colorObj } from "./GlobalStyles.js";

export const NavbarStyle = styled.div`
  height: 150px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${colorObj.light};
  box-shadow: 0px 1px 10px 0px ${colorObj.dark};
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  z-index: 10;
`;

export const NavText = styled.p`
  color: ${colorObj.green};
  font-size: 2rem;
`;

export const SocialIconsContainer = styled.div`
  width: 50px;
  text-align: center;
  position: fixed;
  top: 250px;
  right: 20px;
`;

export const SocialIcons = styled.a`
  text-decoration: none;
  font-size: 4rem;
  color: ${(props) => (props.color ? props.color : "")};
`;
