import { createGlobalStyle } from "styled-components";

////////////////////////////
//     PRIMARY COLORS    //
////////////////////////////
export const colorObj = {
  green: "#77CC6D",
  yellow: '#FFB800',  
  lightblue: '#08BDBD',
  orange: '#FF5714',
  light: '#E5E5E5',
  dark: '#27313D'
}

const GlobalStyle = createGlobalStyle`

html, body, #root, #app{
  height: 100%;
  } 

body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 background-color: #FFFFFF;

}`

export default GlobalStyle;