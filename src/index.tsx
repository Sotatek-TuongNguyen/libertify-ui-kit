import Color from './Color';
import Text from './Text';
import Button from './Button';
import Tag from './Tag';
import Icon from './Icon';
import CheckBox from './CheckBox';
import RadioButton from './RadioButton';
import Switch from './Switch';
import Toggle from './Toggle';
import Advice from './Advice';
import CardAction from './CardAction';
import CardInfo from './CardInfo';
import DiaLog from './DiaLog';
import ThemeProvider, { createTheme } from './ThemeProvider';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export {
  Color,
  Text,
  Button,
  Tag,
  Icon,
  CheckBox,
  RadioButton,
  ThemeProvider,
  createTheme,
  Switch,
  Toggle,
  Advice,
  CardAction,
  CardInfo,
  DiaLog,
};
