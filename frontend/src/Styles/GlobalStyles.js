import { createGlobalStyle } from "styled-components";

////////////////////////////
//     PRIMARY COLORS    //
////////////////////////////
const colorObj = {
  green: "#77CC6D",
  yellow: "#FFB800",
  lightblue: "#08BDBD",
  orange: "#FF5714",
  light: "#E5E5E5",
  dark: "#27313D",
};

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
  font-family: 'Montserrat', sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 background-color: ${colorObj.light};
 font-color: ${colorObj.dark};

}


`;
export { GlobalStyle as default, colorObj };
