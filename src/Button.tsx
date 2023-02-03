import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity as RNButton,
  TouchableOpacityProps as RNButtonProps,
} from 'react-native';
import Color from './Color';

interface ButtonProps extends RNButtonProps {
  loading?: boolean;
  backgroundColor?: string;
}

export default ({ children, loading, style, ...props }: ButtonProps) => {
  const wrapStyles = Array.isArray(style) ? style : [style];
  wrapStyles.unshift({
    backgroundColor: Color.Turquoise,
    padding: 10,
    borderRadius: 5,
  });
  return (
    <RNButton style={wrapStyles} {...props}>
      {loading ? <ActivityIndicator /> : children}
    </RNButton>
  );
};
