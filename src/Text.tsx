import { TextProps as RNTextProps, Text } from 'react-native';
import React from 'react';

interface TextProps extends RNTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
}

export default ({ children, variant = 'h4' }: TextProps) => {
  const getStyles = (v: string): { fontSize: number } => {
    const variants = {
      h1: { fontSize: 42 },
      h2: { fontSize: 32 },
      h3: { fontSize: 26 },
      h4: { fontSize: 18 },
    };
    return variants.h4;
  };
  const styles = getStyles(variant);

  return <Text style={{ fontSize: 42 }}>{children}</Text>;
};
