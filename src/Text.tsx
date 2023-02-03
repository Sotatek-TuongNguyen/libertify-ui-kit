import { TextProps as RNTextProps, Text } from 'react-native';
import React from 'react';

interface TextProps extends RNTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
}

export default ({ children }: TextProps) => {
  // eslint-disable-next-line react-native/no-inline-styles
  return <Text style={{ fontSize: 42 }}>{children}</Text>;
};
