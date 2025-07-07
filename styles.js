import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 0.21px;
    background-color: #fafafa;
    color: #222;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
