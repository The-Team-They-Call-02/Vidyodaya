import styled from "styled-components";
import { colorObj } from './GlobalStyles.js';

export const FooterStyle = styled.div`
height: 40vh;
background-color: ${colorObj.dark};
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: flex-end;

bottom: 0;
width: 100%;
`;

export const H2Styled = styled.h2`
text-transform: uppercase;
color: ${colorObj.light};
font-size: 2rem;
`;

export const PStyled = styled.p`
color: ${colorObj.light};
font-size: 1.2rem;
`;

export const Links = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const Social = styled.div`
`;