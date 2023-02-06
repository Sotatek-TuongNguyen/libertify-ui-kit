import { Text, TextProps as RNTextProps, ViewStyle } from 'react-native';
import React from 'react';

interface TextProps extends RNTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
}

export default ({ children, variant = 'h4', style, ...props }: TextProps) => {
  const variants = {
    h1: { fontSize: 42 },
    h2: { fontSize: 32 },
    h3: { fontSize: 26 },
    h4: { fontSize: 18 },
  } as { [key: string]: ViewStyle };

  const getStyles = (v: string): ViewStyle | undefined => variants[v];
  const styles = getStyles(variant);
  const wrapStyles = Array.isArray(style) ? style : [style];
  wrapStyles.unshift(styles);

  return (
    <Text {...props} style={wrapStyles}>
      {children}
    </Text>
  );
};
