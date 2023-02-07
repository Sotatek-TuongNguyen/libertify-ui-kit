import React from 'react';
import Color from './Color';

export const themeDefault = {
  color: Color,
};

export const createTheme = (themeOptions = themeDefault) => themeOptions;

export const ThemeContext = React.createContext(themeDefault);

interface ThemeProviderProps {
  value: any;
  children?: JSX.Element | JSX.Element[] | undefined;
}

const ThemeProvider = ({ value, children }: ThemeProviderProps) => (
  <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
);

export default ThemeProvider;
