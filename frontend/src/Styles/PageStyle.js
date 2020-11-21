import styled from "styled-components";
import { colorObj } from './GlobalStyles';

export const PageBody = styled.div`
${'' /* position: absolute; */}
height: 100%;
width: 100%;
left: 0px;
border-radius: 0px;
display: flex;
justify-content: center;
`;

export const Card = styled.div`
margin: 0 20%;
padding: 10%;
border-radius: 20px;
${'' /* position: absolute; */}
box-shadow: 0px 4px 20px 0px ${colorObj.dark};
`;

