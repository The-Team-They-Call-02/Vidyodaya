import styled, { createGlobalStyle } from "styled-components";
import image from "../Assets/Tribal-Art/tribalProgramsPage.svg";

////////////////////////////
//     PRIMARY COLORS    //
////////////////////////////
const colorObj = {
  green: "#77CC6D",
  yellow: "#FFB800",
  lightblue: "#08BDBD",
  orange: "#FF5714",
  light: "#FFFFFF",
  dark: "#27313D",
};

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BackgroundImageContainer = styled.div`
  position: absolute;
  height: 250%;
  width: 100%;
  z-index: -1;
  top: 0;
  left: 0;
  background-image: url(${image});
  ${"" /* background-size: cover	; */}
  background-repeat: no-repeat;
  overflow: hidden;
`;

const GlobalStyle = createGlobalStyle`


html{
  height: 100%;
  font-size: 62.5%;
  } 

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${colorObj.light};
  color: ${colorObj.dark};
  font-size: 2.4rem;
}

button {
  background-color: ${colorObj.green};
  border-radius: 10px;
  border: none;
  width: 10rem;
  height: 3rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.5rem;
}

h1 {
font-weight: 700;
font-size: 4rem;
}

a{
  text-decoration: none;
  color: inherit;
}

h2 {
  font-size: 4rem;
}

table, td, th {
  border: 1px solid black;
}

table {
  width: 80%;
  border-collapse: collapse;
  margin: 2% 0;
  margin-left: 10%;
}


`;
export { GlobalStyle as default, CenteredDiv, colorObj };
