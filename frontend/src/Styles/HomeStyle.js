import styled from "styled-components";
import { colorObj } from './GlobalStyles.js';
import bkgimg from "../Assets/Home/slide5-2za8tima4ci25wo4wwkpvu.jpg";

export const BannerGray = styled.div`
box-sizing: border-box;
width: 100vw;
height: 100vh;
background-color: #C4C4C4;
display: flex;
justify-content: center;
padding-right: 4%;
align-items: center;
color: ${colorObj.light};
`;

export const BannerGreen = styled.div`
background-color: ${colorObj.green};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const BannerImg = styled.div`
background-image: url(${bkgimg});
background-repeat: no-repeat;
background-size: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 100px 0;
`;

export const HeroText = styled.h1`
color: ${colorObj.light};
text-transform: uppercase;
font-weight: 900;
font-size: 96px;
text-align: center;
`;

export const GreenHeader = styled.h1`
color: ${colorObj.green};
text-transform: uppercase;
font-weight: 900;
font-size: 50px;
text-align: center;
`;

export const GreenBkg = styled.div`
background-color: ${colorObj.green};
color: ${colorObj.dark};
padding: 20px 60px;
`;

export const WhiteBkg = styled.div`
padding: 20px 100px;
background-color: ${colorObj.light};
display: flex;
flex-direction: row;
`;

export const Spacer = styled.div`
padding: 1%;
`;

export const VerticalLine = styled.div`
border: 2px solid ${colorObj.dark};
height: 200px;
margin: 0 5%;
`;


