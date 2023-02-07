import Color from './Color';
import Text from './Text';
import Button from './Button';
import Tag from './Tag';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export { Color, Text, Button, Tag };
