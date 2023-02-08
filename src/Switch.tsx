import { View, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import React from 'react';
import withTheme from './withTheme';
import { Theme, themeDefault } from './ThemeProvider';
import Text from './Text';

interface ItemSwitch {
  title: string;
  value: any;
}
interface SwitchProps {
  data: ItemSwitch[];
  selected: ItemSwitch;
  onChange?: (item: ItemSwitch) => void;
  theme?: Theme;
  size?: 'small' | 'big';
}

export default withTheme(
  ({
    data,
    selected,
    onChange,
    theme = themeDefault,
    size = 'small',
  }: SwitchProps) => {
    const styleActive: ViewStyle = {
      backgroundColor: theme?.color.TURQUOISE,
    };
    const styleInActive: ViewStyle = {};
    const textActive: TextStyle = {
      color: theme.color.DARK_PRIMARY,
    };
    const textInActive: TextStyle = {
      color: size === 'small' ? theme.color.DisableContent : theme.color.WHITE,
    };

    const itemStyle: ViewStyle = {
      paddingHorizontal: size === 'small' ? 10 : 15,
      paddingVertical: size === 'small' ? 4 : 15,
      borderRadius: size === 'small' ? 40 : 10,
    };

    const containerStyle: ViewStyle = {
      flexDirection: 'row',
      alignSelf: 'flex-start',
      backgroundColor: theme.color.DARK_SECONDARY,
      padding: size === 'small' ? 2 : 10,
      borderRadius: size === 'small' ? 100 : 15,
      borderWidth: 1,
      borderColor:
        size === 'small' ? theme.color.DisableContent : theme.color.GreyPrimary,
    };

    const _onChange = (e: ItemSwitch) => onChange && onChange(e);

    return (
      <View style={containerStyle}>
        {data.map((e) => (
          <TouchableOpacity
            key={e.value}
            onPress={() => _onChange(e)}
            style={[
              itemStyle,
              selected && selected.value === e.value
                ? styleActive
                : styleInActive,
            ]}
          >
            <Text
              variant={size === 'small' ? 'body3' : 'body1'}
              style={[
                selected && selected.value === e.value
                  ? textActive
                  : textInActive,
              ]}
            >
              {e.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
);
