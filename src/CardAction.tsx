import type { ViewStyle } from 'react-native';
import React from 'react';
import withTheme from './withTheme';
import { Theme, themeDefault } from './ThemeProvider';
import CardInfo from './CardInfo';

interface CardActionProps {
  theme?: Theme;
  children?: JSX.Element | JSX.Element[];
  title?: string;
  content?: string;
}

export default withTheme(
  ({ theme = themeDefault, children, title, content }: CardActionProps) => {
    const cardStyle: ViewStyle = {
      backgroundColor: theme.color.DARK_SECONDARY,
      borderRadius: 20,
      padding: 15,
    };
    return (
      <CardInfo style={cardStyle} title={title} footer={children}>
        {content}
      </CardInfo>
    );
  }
);
