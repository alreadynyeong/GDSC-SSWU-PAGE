import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  backgroundColor: 'white',
  textColor: 'black',
  red: '#FEF5F5',
  textRed: '#EA4335',
  green: '#F3FAF6',
  textGreen: '#0F9D58',

};

export const darkTheme = {
  backgroundColor: 'black',
  textColor: 'white',
  red: '#EA4335',
  textRed: '#FEF5F5',
  green: '#0F9D58',
  textGreen: '#F3FAF6',
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
  }
`;
