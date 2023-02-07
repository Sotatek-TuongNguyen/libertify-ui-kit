import React from 'react';
import CheckBox, { CheckBoxProps } from './CheckBox';

export default (props: CheckBoxProps) => {
  return (
    <CheckBox
      {...props}
      checkedIcon="radio-checked"
      uncheckedIcon="radio-unchecked"
    />
  );
};
