import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  backgroundColor: 'white',
  textColor: 'black',
};

export const darkTheme = {
  backgroundColor: 'black',
  textColor: 'white',
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }
`;
