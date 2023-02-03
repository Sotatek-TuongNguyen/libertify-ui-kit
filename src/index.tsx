export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

import Text from './Text';

export { Text };
