import { TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import withTheme from './withTheme';
import { Theme, themeDefault } from './ThemeProvider';

interface BulletPointProps {
  total: number;
  value: number;
  style?: ViewStyle | ViewStyle[];
  theme?: Theme;
  activeColor?: string;
  onChange?: (v: number) => void;
}

export default withTheme(
  ({
    total,
    theme = themeDefault,
    style,
    value,
    activeColor = theme.color.TURQUOISE,
    onChange,
  }: BulletPointProps) => {
    const dotStyle: ViewStyle = {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    };

    const containerStyles = Array.isArray(style) ? [...style] : [style];
    containerStyles.unshift({
      flexDirection: 'row',
    });

    const _onChange = (v: number) => {
      onChange && onChange(v);
    };

    return (
      <View style={containerStyles}>
        {new Array(total).fill('').map((e, i) => (
          <TouchableOpacity
            onPress={() => _onChange(i + 1)}
            key={e + i}
            style={[
              dotStyle,
              {
                backgroundColor:
                  i + 1 === value ? activeColor : theme?.color.WHITE_OPACITY_15,
              },
            ]}
          />
        ))}
      </View>
    );
  }
);
