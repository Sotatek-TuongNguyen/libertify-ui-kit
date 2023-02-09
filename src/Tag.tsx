import React from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity as RNButton,
  TouchableOpacityProps as RNButtonProps,
  ViewStyle,
} from 'react-native';
import Text from './Text';
import { themeDefault } from './ThemeProvider';

interface ButtonProps extends RNButtonProps {
  textStyle?: TextStyle;
  type?: 'danger' | 'warning' | 'success' | 'secondary' | 'info';
  theme?: typeof themeDefault;
}

export default ({
  children = '',
  type = 'danger',
  textStyle = {},
  style,
  activeOpacity = 1,
  theme = themeDefault,
  ...props
}: ButtonProps) => {
  const containerStyles: { [key: string]: ViewStyle } = {
    danger: {
      borderColor: theme.color.Alert,
      backgroundColor: theme.color.Alert + 20,
    },
    warning: {
      borderColor: theme.color.Warning,
      backgroundColor: theme.color.Warning + 20,
    },
    success: {
      borderColor: theme.color.Success,
      backgroundColor: theme.color.Warning + 20,
    },
    secondary: {
      borderColor: theme.color.WHITE,
      backgroundColor: theme.color.WHITE + 20,
    },
    info: {
      borderColor: theme.color.TURQUOISE,
      backgroundColor: theme.color.TURQUOISE + 20,
    },
  };
  const wrapStyles = Array.isArray(style) ? [...style] : [style];
  const textStyles = Array.isArray(textStyle) ? [...textStyle] : [textStyle];

  wrapStyles.unshift(styles.container);
  wrapStyles.unshift(containerStyles[type]);
  if (type === 'danger') {
    textStyles.unshift({ color: theme.color.Alert });
  }
  if (type === 'warning') {
    textStyles.unshift({ color: theme.color.Warning });
  }
  if (type === 'success') {
    textStyles.unshift({ color: theme.color.Success });
  }
  if (type === 'secondary') {
    textStyles.unshift({ color: theme.color.WHITE });
  }
  if (type === 'info') {
    textStyles.unshift({ color: theme.color.TURQUOISE });
  }
  return (
    <RNButton style={wrapStyles} activeOpacity={activeOpacity} {...props}>
      {React.Children.toArray(children).map((child, index) => (
        <React.Fragment key={index}>
          {typeof child === 'string' ? (
            <Text variant="caption" style={textStyles}>
              {child}
            </Text>
          ) : (
            child
          )}
        </React.Fragment>
      ))}
    </RNButton>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
});
