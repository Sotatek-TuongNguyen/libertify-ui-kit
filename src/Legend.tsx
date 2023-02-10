import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import withTheme from './withTheme';
import { Theme, themeDefault } from './ThemeProvider';
import Icon from './Icon';
import Text from './Text';

interface LegendProps {
  title?: string;
  color?: string;
  value?: string;
  checked?: boolean;
  theme?: Theme;
  style?: ViewStyle | ViewStyle[];
}

export default withTheme(
  ({
    title,
    theme = themeDefault,
    color = theme.color.WHITE,
    value,
    checked,
    style,
  }: LegendProps) => {
    const checkBoxStyle: ViewStyle = {
      width: 20,
      height: 20,
      borderRadius: 2,
      backgroundColor: theme.color.WHITE_OPACITY_1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.color.WHITE_OPACITY_15,
    };

    const containerStyles = Array.isArray(style) ? [...style] : [style];
    containerStyles.unshift({
      backgroundColor: theme.color.DARK_SECONDARY,
      padding: 5,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.color.WHITE_OPACITY_1,
    });

    return (
      <View style={containerStyles}>
        <Text variant="body1" style={{ color }}>
          {title}
        </Text>
        <View style={styles.row}>
          <View style={checkBoxStyle}>
            {checked && <Icon size={11} name="checked" />}
          </View>
          {value && (
            <Text variant="value1" style={{ color }}>
              {value}
            </Text>
          )}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
});
