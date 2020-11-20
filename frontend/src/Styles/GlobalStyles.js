import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

////////////////////////////
//     PRIMARY COLORS    //
////////////////////////////
export const colorObj = {
  green: "#77CC6D",
  yellow: '#FFB800',  
  lightblue: '#08BDBD',
  orange: '#FF5714',
  light: '#FFFFFF',
  dark: '#27313D'
}

export const CenteredDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const TempNav = styled.div`
height: 150px;
width: 100%;
position: fixed;
background-color: ${colorObj.light};
box-shadow: 0px 1px 10px 0px ${colorObj.dark};
`;

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body, #root, #app{
  height: 100%;
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
  font-color: ${colorObj.dark};
  font-size: 1.2rem;
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
font-size: 40px;
}

`
export default GlobalStyle;