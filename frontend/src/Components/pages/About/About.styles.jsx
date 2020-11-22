import styled from "styled-components";
// import { colorObj } from '../Styles/GlobalStyles';

export const MainContainer = styled.div`
  background: #f8f7f7;
  padding: 150px 0 0 0;
`;

export const Header = styled.h1`
font-family: Arizonia, cursive;
font-size: 60px;
font-style: normal;<br/
font-weight: 400;
line-height: 90px;
letter-spacing: 0em;
text-align: center;
`;

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 50px;
  min-height: calc(100vh - (40vh + 150px));
`;

export const TextContainer = styled.div`
text-align: left;
`;

export const Image = styled.img`
border-radius: 10px;
width: 500px;
margin: 2%;
`;