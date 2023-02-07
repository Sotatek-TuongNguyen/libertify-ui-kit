import React from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity as RNButton,
  TouchableOpacityProps as RNButtonProps,
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
  const wrapStyles = Array.isArray(style) ? [...style] : [style];
  const textStyles = Array.isArray(textStyle) ? [...textStyle] : [textStyle];

  wrapStyles.unshift(styles.container);
  if (type === 'danger') {
    wrapStyles.unshift({
      borderColor: theme.color.Alert,
      backgroundColor: theme.color.Alert + 20,
    });
    textStyles.unshift({ color: theme.color.Alert });
  }
  if (type === 'warning') {
    wrapStyles.unshift({
      borderColor: theme.color.Warning,
      backgroundColor: theme.color.Warning + 20,
    });
    textStyles.unshift({ color: theme.color.Warning });
  }
  if (type === 'success') {
    wrapStyles.unshift({
      borderColor: theme.color.Success,
      backgroundColor: theme.color.Warning + 20,
    });
    textStyles.unshift({ color: theme.color.Success });
  }
  if (type === 'secondary') {
    wrapStyles.unshift({
      borderColor: theme.color.White,
      backgroundColor: theme.color.White + 20,
    });
    textStyles.unshift({ color: theme.color.White });
  }
  if (type === 'info') {
    wrapStyles.unshift({
      borderColor: theme.color.Turquoise,
      backgroundColor: theme.color.Turquoise + 20,
    });
    textStyles.unshift({ color: theme.color.Turquoise });
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
