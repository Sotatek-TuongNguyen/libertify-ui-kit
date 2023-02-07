import React from 'react';
import Color from './Color';
import type TypeColor from './Color';

export interface Theme {
  color: typeof TypeColor;
}

export const themeDefault: Theme = {
  color: Color,
};

export const createTheme = (themeOptions = themeDefault) => themeOptions;

export const ThemeContext = React.createContext(themeDefault);

interface ThemeProviderProps {
  value: any;
  children?: JSX.Element | JSX.Element[] | undefined;
}

const ThemeProvider = ({ value, children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
