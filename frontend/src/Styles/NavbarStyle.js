import styled from "styled-components";
import { colorObj } from './GlobalStyles.js';

export const NavbarStyle = styled.div`
height: 150px;
width: 100%;
position: fixed;
background-color: ${colorObj.light};
box-shadow: 0px 1px 10px 0px ${colorObj.dark};
display: flex;
justify-content: space-evenly;
flex-direction: row;
align-items: center;
`;

export const NavText = styled.p`
color: ${colorObj.green};
`;
