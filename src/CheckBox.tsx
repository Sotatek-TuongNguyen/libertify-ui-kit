import React from 'react';
import { TouchableOpacity } from 'react-native';
import Color from './Color';
import type { icons } from './Icon';
import Icon from './Icon';

export interface CheckBoxProps {
  checkedIcon?: keyof typeof icons;
  uncheckedIcon?: keyof typeof icons;
  checked?: boolean;
  size?: number;
  checkedColor?: string;
  uncheckedColor?: string;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}

export default ({
  checked,
  size,
  disabled,
  checkedIcon = 'checked',
  uncheckedIcon = 'unchecked',
  checkedColor = Color.Turquoise,
  uncheckedColor = Color.DisableContent,
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
};
