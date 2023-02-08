import Color from './Color';
import type TypeColor from './Color';
import { ThemeProvider } from 'styled-components/native';

export interface Theme {
  color: typeof TypeColor;
}

export const themeDefault: Theme = {
  color: Color,
};

export const createTheme = (themeOptions = themeDefault) => themeOptions;

export default ThemeProvider;
