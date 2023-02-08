import { Text, TextProps as RNTextProps, TextStyle } from 'react-native';
import React from 'react';
import withTheme from './withTheme';
import { themeDefault } from './ThemeProvider';

interface TextProps extends RNTextProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'button'
    | 'caption'
    | 'value1'
    | 'value2'
    | 'smallContent'
    | 'overline';
  theme?: typeof themeDefault;
}

export default withTheme(
  ({
    children,
    variant = 'h4',
    style,
    theme = themeDefault,
    ...props
  }: TextProps) => {
    const variants = {
      h1: { fontSize: 28, lineHeight: 36, fontWeight: 'bold' },
      h2: { fontSize: 24, lineHeight: 28, fontWeight: 'bold' },
      h3: { fontSize: 20, lineHeight: 24, fontWeight: 'bold' },
      h4: { fontSize: 18, lineHeight: 22, fontWeight: 'bold' },
      h5: { fontSize: 16, lineHeight: 20, fontWeight: 'bold' },
      subtitle1: { fontSize: 18, lineHeight: 20, fontWeight: 'bold' },
      subtitle2: { fontSize: 16, lineHeight: 20, fontWeight: '500' },
      body1: { fontSize: 14, lineHeight: 20, fontWeight: 'bold' },
      body2: { fontSize: 14, lineHeight: 20, fontWeight: '500' },
      body3: { fontSize: 14, lineHeight: 20, fontWeight: 'normal' },
      button: { fontSize: 14, lineHeight: 18, fontWeight: '500' },
      caption: { fontSize: 12, lineHeight: 14, fontWeight: 'normal' },
      value1: { fontSize: 13, lineHeight: 16, fontWeight: 'normal' },
      value2: { fontSize: 13, lineHeight: 16, fontWeight: 'bold' },
      smallContent: { fontSize: 13, lineHeight: 16, fontWeight: 'normal' },
      overline: { fontSize: 10, lineHeight: 14, fontWeight: 'normal' },
    } as { [key: string]: TextStyle };

    const getStyles = (v: string): TextStyle | undefined => variants[v];
    const wrapStyles = Array.isArray(style) ? [...style] : [style];
    wrapStyles.unshift({
      color: theme.color.TURQUOISE,
    });
    wrapStyles.unshift(getStyles(variant));

    return (
      <Text {...props} style={wrapStyles}>
        {children}
      </Text>
    );
  }
);
