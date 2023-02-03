import Color from './Color';
import Text from './Text';
import Button from './Button';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export { Color, Text, Button };
