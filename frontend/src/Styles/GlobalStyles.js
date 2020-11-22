import styled, { createGlobalStyle } from "styled-components";

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

const GlobalStyle = createGlobalStyle`


html, body, #root, #app{
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






`;
export { GlobalStyle as default, CenteredDiv, colorObj };
