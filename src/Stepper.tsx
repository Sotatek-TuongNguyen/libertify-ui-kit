import { View, ViewStyle } from 'react-native';
import React, { Fragment } from 'react';
import withTheme from './withTheme';
import { Theme, themeDefault } from './ThemeProvider';

interface StepperProps {
  total: number;
  value: number;
  separator?: number;
  activeColor?: string;
  theme?: Theme;
  itemStyle?: ViewStyle;
  style?: ViewStyle;
}

export default withTheme(
  ({
    value,
    total,
    separator,
    theme = themeDefault,
    activeColor = theme.color.TURQUOISE,
    itemStyle,
    style,
  }: StepperProps) => {
    const containerStyles = Array.isArray(style) ? [...style] : [style];
    containerStyles.unshift({
      flexDirection: 'row',
      height: 6,
      borderRadius: 10,
      overflow: 'hidden',
    });

    const itemStyles = Array.isArray(itemStyle) ? [...itemStyle] : [itemStyle];
    itemStyles.unshift({ flex: 1 });

    return (
      <View style={containerStyles}>
        {new Array(total).fill('').map((v, i) => (
          <Fragment key={v + i}>
            <View
              style={[
                ...itemStyles,
                {
                  backgroundColor:
                    i < value ? activeColor : theme.color.WHITE_OPACITY_15,
                },
              ]}
            />
            {i < total - 1 && <View style={{ width: separator }} />}
          </Fragment>
        ))}
      </View>
    );
  }
);
