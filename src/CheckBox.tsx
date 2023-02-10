import React from 'react';
import { TouchableOpacity } from 'react-native';
import type { icons } from './Icon';
import Icon from './Icon';
import { Theme, themeDefault } from './ThemeProvider';
import withTheme from './withTheme';

export interface CheckBoxProps {
  checkedIcon?: keyof typeof icons;
  uncheckedIcon?: keyof typeof icons;
  checked?: boolean;
  size?: number;
  checkedColor?: string;
  uncheckedColor?: string;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  theme?: Theme;
}

export default withTheme(
  ({
    checked,
    size,
    disabled,
    checkedIcon = 'box-checked',
    uncheckedIcon = 'box-unchecked',
    theme = themeDefault,
    checkedColor = theme.color.TURQUOISE,
    uncheckedColor = theme.color.DisableContent,
    onChange,
  }: CheckBoxProps) => {
    const _onChange = () => {
      onChange && onChange(!checked);
    };
    return (
      <TouchableOpacity onPress={_onChange} disabled={disabled}>
        <Icon
          size={size}
          name={checked ? checkedIcon : uncheckedIcon}
          color={checked ? checkedColor : uncheckedColor}
        />
      </TouchableOpacity>
    );
  }
);
