import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  // 전역 스타일 정의
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

export default GlobalStyles;
