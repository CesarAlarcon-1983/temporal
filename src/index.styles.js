import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 
  body {
    font-family: 'Maven Pro', sans-serif;
    height: 100%;
    padding: 0;
    margin: 0;
    color: #fff;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'DM Serif Display', serif;
    font-weight: normal;
  }

  html, #root {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`

