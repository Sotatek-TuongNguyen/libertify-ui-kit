import { View, Image, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import React from 'react';
import withTheme from './withTheme';
import Text from './Text';
import Icon from './Icon';
import { Theme, themeDefault } from './ThemeProvider';

interface EmptyGraphProps {
  theme?: Theme;
  style?: ViewStyle | ViewStyle[];
  title?: string;
  day?: string;
}

export default withTheme(
  ({ title, style = {}, day, theme = themeDefault }: EmptyGraphProps) => {
    const dayStyle: TextStyle = {
      color: theme.color.Warning,
      marginTop: 10,
    };

    const containerStyles = Array.isArray(style) ? [...style] : [style];

    containerStyles.unshift({
      minHeight: 200,
      position: 'relative',
      borderRadius: 20,
      backgroundColor: theme.color.DARK_PRIMARY,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: theme.color.WHITE_OPACITY_15,
    });

    return (
      <View style={containerStyles}>
        <View style={styles.content}>
          <View style={styles.row}>
            <Text
              variant="smallContent"
              style={[styles.flex1, { color: theme.color.WHITE }]}
            >
              {title}
            </Text>
            <Icon name="alert" color={theme.color.Warning} />
          </View>
          <Text variant="body2" style={dayStyle}>
            {day}
          </Text>
        </View>
        <Image
          style={styles.imageGraph}
          source={{
            uri: 'https://static-dev.libertify.com/dev/images/app/story_empty_graph.png',
          }}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  imageGraph: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  content: {
    padding: 20,
  },
});
