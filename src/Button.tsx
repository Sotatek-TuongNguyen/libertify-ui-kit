import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextStyle,
  TouchableOpacity as RNButton,
  TouchableOpacityProps as RNButtonProps,
} from 'react-native';
import Text from './Text';
import { themeDefault } from './ThemeProvider';
import withTheme from './withTheme';

export interface ButtonProps extends RNButtonProps {
  title?: string | JSX.Element;
  titleStyle?: TextStyle;
  loading?: boolean;
  color?: string;
  type?: 'solid' | 'clear' | 'outline';
  theme?: typeof themeDefault;
}

export default withTheme<ButtonProps>(
  ({
    title = '',
    children = title,
    theme = themeDefault,
    color = theme.color.TURQUOISE,
    type = 'solid',
    titleStyle = {},
    loading,
    style,
    ...props
  }: ButtonProps) => {
    const wrapStyles = Array.isArray(style) ? [...style] : [style];
    const titleStyles = Array.isArray(titleStyle)
      ? [...titleStyle]
      : [titleStyle];
    const indicatorStyle = [] as TextStyle[];

    wrapStyles.unshift(styles.container);
    if (type === 'solid') {
      wrapStyles.unshift({ backgroundColor: color });
      titleStyles.unshift({ color: theme.color.DARK_SECONDARY });
    }
    if (type === 'outline') {
      wrapStyles.unshift({ borderWidth: 1, borderColor: color });
      titleStyles.unshift({ color });
      indicatorStyle.push({ color: theme.color.TURQUOISE });
    }
    if (type === 'clear') {
      titleStyles.unshift({ color });
      indicatorStyle.push({ color: theme.color.TURQUOISE });
    }
    return (
      <RNButton style={wrapStyles} {...props}>
        {loading ? (
          <ActivityIndicator color={type === 'solid' ? undefined : color} />
        ) : (
          React.Children.toArray(children).map((child, index) => (
            <React.Fragment key={index}>
              {typeof child === 'string' ? (
                <Text style={titleStyles}>{child}</Text>
              ) : (
                child
              )}
            </React.Fragment>
          ))
        )}
      </RNButton>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
  },
});
