import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import withTheme from './withTheme';
import { Theme, themeDefault } from './ThemeProvider';
import Text from './Text';

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
      <View style={cardStyle}>
        <Text variant="h4" style={[styles.title, { color: theme.color.WHITE }]}>
          {title}
        </Text>
        <Text
          variant="body3"
          style={[styles.content, { color: theme.color.WHITE }]}
        >
          {content}
        </Text>
        <View style={styles.body}>{children}</View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  title: {
    paddingBottom: 10,
  },
  content: {
    paddingBottom: 10,
  },
  body: {
    paddingTop: 5,
  },
});
