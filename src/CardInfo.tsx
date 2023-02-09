import { View, TextStyle, ViewStyle, StyleSheet } from 'react-native';
import React from 'react';
import withTheme from './withTheme';
import { Theme, themeDefault } from './ThemeProvider';
import Text from './Text';

interface CardInfoProps {
  theme?: Theme;
  title?: string | JSX.Element | JSX.Element[];
  type?: 'solid' | 'clear' | 'outline';
  color?: string;
  children?: string | JSX.Element | JSX.Element[];
  iconContent?: JSX.Element;
  style?: ViewStyle | ViewStyle[];
  leftHeader?: JSX.Element;
  rightHeader?: JSX.Element;
  footer?: JSX.Element | JSX.Element[];
  contentStyle?: ViewStyle;
}

export default withTheme(
  ({
    title,
    theme = themeDefault,
    type = 'solid',
    color = theme.color.WHITE,
    children,
    iconContent,
    leftHeader,
    style = {},
    rightHeader,
    footer,
    contentStyle = {},
  }: CardInfoProps) => {
    const containerStyles: { [key: string]: ViewStyle } = {
      solid: {
        backgroundColor: theme.color.DARK_TURQUOISE,
      },
      clear: {
        backgroundColor: theme.color.TRANSPARENT,
      },
      outline: {
        backgroundColor: theme.color.DARK_SECONDARY,
        borderBottomColor: color,
        borderRightColor: color,
        borderBottomWidth: 1,
        borderRightWidth: 1,
      },
    };
    const textStyles: { [key: string]: TextStyle } = {
      solid: {
        color,
      },
      clear: {
        color,
      },
      outline: {
        color: theme.color.WHITE,
      },
    };
    const containerStyle: ViewStyle = {
      borderRadius: 15,
      padding: 20,
      ...containerStyles[type],
    };
    const wrapStyles = Array.isArray(style) ? [...style] : [style];
    wrapStyles.unshift(containerStyle);
    const wrapContentStyle: ViewStyle[] = Array.isArray(contentStyle)
      ? [...contentStyle]
      : [contentStyle];
    wrapContentStyle.unshift({
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: title ? 10 : 0,
    });

    return (
      <View style={wrapStyles}>
        <View style={styles.row}>
          {leftHeader && <View style={styles.wrapIcon}>{leftHeader}</View>}
          {title && (
            <Text variant="h4" style={[styles.flex1, textStyles[type]]}>
              {title}
            </Text>
          )}
          {rightHeader}
        </View>
        <View style={wrapContentStyle}>
          {iconContent && <View style={styles.wrapIcon}>{iconContent}</View>}
          <View style={styles.flex1}>
            {React.Children.toArray(children).map((child, index) => (
              <React.Fragment key={index}>
                {typeof child === 'string' ? (
                  <Text variant="body3" style={textStyles[type]}>
                    {child}
                  </Text>
                ) : (
                  child
                )}
              </React.Fragment>
            ))}
          </View>
        </View>
        {footer}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapIcon: {
    marginRight: 15,
  },
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
