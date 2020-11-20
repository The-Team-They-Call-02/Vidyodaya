import styled from "styled-components";
import { colorObj } from './GlobalStyles.js';

export const FooterStyle = styled.div`
height: 40vh;
background-color: ${colorObj.dark};
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`;

export const H2Styled = styled.h2`
text-transform: uppercase;
color: ${colorObj.light};
font-size: 1rem;
`;

export const PStyled = styled.p`
color: ${colorObj.light};
font-size: 0.9rem;
`;

export const Links = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const Social = styled.div`
`;