import { TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import withTheme from './withTheme';
import { Theme, themeDefault } from './ThemeProvider';

interface ToggleProps {
  value: boolean;
  icon?: JSX.Element;
  onChange?: (value: boolean) => void;
  theme?: Theme;
}

export default withTheme(
  ({ value, icon, onChange, theme = themeDefault }: ToggleProps) => {
    const _onChange = () => {
      onChange && onChange(!value);
    };

    const containerStyle: ViewStyle = {
      width: 61,
      alignItems: value ? 'flex-end' : 'flex-start',
      backgroundColor: value
        ? theme.color.DARK_TURQUOISE
        : theme.color.DisableContent,
      borderWidth: 1,
      borderColor: theme.color.WHITE_OPACITY_1,
      borderRadius: 25,
      padding: 3,
    };

    const circleStyle: ViewStyle = {
      backgroundColor: value
        ? theme.color.TURQUOISE
        : theme.color.WHITE_OPACITY_3,
      width: 25,
      height: 25,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    };

    return (
      <TouchableOpacity style={containerStyle} onPress={_onChange}>
        <View style={circleStyle}>{value && icon}</View>
      </TouchableOpacity>
    );
  }
);
