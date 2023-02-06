import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextStyle,
  TouchableOpacity as RNButton,
  TouchableOpacityProps as RNButtonProps,
} from 'react-native';
import Color from './Color';
import Text from './Text';

interface ButtonProps extends RNButtonProps {
  title?: string | JSX.Element;
  titleStyle?: TextStyle;
  loading?: boolean;
  color?: string;
  type?: 'solid' | 'clear' | 'outline';
  backgroundColor?: string;
}

export default ({
  title = '',
  children = title,
  color = Color.Turquoise,
  type = 'solid',
  titleStyle = {},
  loading,
  style,
  ...props
}: ButtonProps) => {
  const wrapStyles = Array.isArray(style) ? style : [style];
  const wrapTitleStyles = Array.isArray(titleStyle) ? titleStyle : [titleStyle];
  const indicatorStyle = [] as TextStyle[];

  wrapStyles.unshift(styles.container);
  if (type === 'solid') {
    wrapStyles.unshift({ backgroundColor: color });
  }
  if (type === 'outline') {
    wrapStyles.unshift({ borderWidth: 1, borderColor: color });
    wrapTitleStyles.unshift({ color });
    indicatorStyle.push({ color: Color.Turquoise });
  }
  if (type === 'clear') {
    wrapTitleStyles.unshift({ color });
    indicatorStyle.push({ color: Color.Turquoise });
  }

  return (
    <RNButton style={wrapStyles} {...props}>
      {loading ? (
        <ActivityIndicator color={type === 'solid' ? undefined : color} />
      ) : (
        React.Children.toArray(children).map((child, index) => (
          <React.Fragment key={index}>
            {typeof child === 'string' ? (
              <Text style={wrapTitleStyles}>{child}</Text>
            ) : (
              child
            )}
          </React.Fragment>
        ))
      )}
    </RNButton>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
  },
});
