import React from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity as RNButton,
  TouchableOpacityProps as RNButtonProps,
} from 'react-native';
import Color from './Color';
import Text from './Text';

interface ButtonProps extends RNButtonProps {
  textStyle?: TextStyle;
  type?: 'danger' | 'warning' | 'success' | 'secondary' | 'info';
}

export default ({
  children = '',
  type = 'danger',
  textStyle = {},
  style,
  ...props
}: ButtonProps) => {
  const wrapStyles = Array.isArray(style) ? [...style] : [style];
  const textStyles = Array.isArray(textStyle) ? [...textStyle] : [textStyle];

  wrapStyles.unshift(styles.container);
  if (type === 'danger') {
    wrapStyles.unshift({
      borderColor: Color.Alert,
      backgroundColor: Color.Alert + 20,
    });
    textStyles.unshift({ color: Color.Alert });
  }
  if (type === 'warning') {
    wrapStyles.unshift({
      borderColor: Color.Warning,
      backgroundColor: Color.Warning + 20,
    });
    textStyles.unshift({ color: Color.Warning });
  }
  if (type === 'success') {
    wrapStyles.unshift({
      borderColor: Color.Success,
      backgroundColor: Color.Warning + 20,
    });
    textStyles.unshift({ color: Color.Success });
  }
  if (type === 'secondary') {
    wrapStyles.unshift({
      borderColor: Color.White,
      backgroundColor: Color.White + 20,
    });
    textStyles.unshift({ color: Color.White });
  }
  if (type === 'info') {
    wrapStyles.unshift({
      borderColor: Color.Turquoise,
      backgroundColor: Color.Turquoise + 20,
    });
    textStyles.unshift({ color: Color.Turquoise });
  }
  return (
    <RNButton style={wrapStyles} {...props}>
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
