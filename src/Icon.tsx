import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';
import React from 'react';
import Color from './Color';

export const icons = {
  'arrow-right': 'https://cdn-icons-png.flaticon.com/512/8867/8867464.png',
  'radio-checked': 'https://cdn-icons-png.flaticon.com/512/8509/8509277.png',
  'radio-unchecked': 'https://cdn-icons-png.flaticon.com/512/7613/7613822.png',
  'checked': 'https://cdn-icons-png.flaticon.com/512/2951/2951530.png',
  'unchecked': 'https://cdn-icons-png.flaticon.com/512/8924/8924271.png',
};

interface IconProps extends ImageProps {
  name?: keyof typeof icons;
  source?: ImageSourcePropType;
  size?: number;
  style?: ImageStyle;
  color?: string;
}

export default ({
  name,
  source = {},
  size = 20,
  style,
  color = Color.White,
  ...props
}: IconProps) => {
  const wrapStyles = Array.isArray(style) ? [...style] : [style];
  if (typeof source !== 'number' && name && icons[name]) {
    source.uri = icons[name];
  }
  wrapStyles.unshift({ width: size, height: size, tintColor: color });
  return <Image style={wrapStyles} source={source} {...props} />;
};
