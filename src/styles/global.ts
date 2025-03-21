import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;

    background: ${({ theme }) => theme.COLOR.DARK_400};
    color: ${({ theme }) => theme.COLOR.LIGHT_100};
  }
`;