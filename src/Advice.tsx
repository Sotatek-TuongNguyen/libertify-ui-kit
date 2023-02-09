import { StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import Icon from './Icon';
import Text from './Text';
import withTheme from './withTheme';
import { Theme, themeDefault } from './ThemeProvider';

interface ItemAdvice {
  icon: JSX.Element;
  title: string;
  color: string;
}

interface AdviceProps {
  title: string;
  theme?: Theme;
  data: ItemAdvice[];
}

export default withTheme(
  ({ data, title, theme = themeDefault }: AdviceProps) => {
    const containerStyle: ViewStyle = {
      borderRadius: 15,
      backgroundColor: theme.color.DARK_SECONDARY,
      overflow: 'hidden',
    };

    const bodyStyle: ViewStyle = {
      backgroundColor: theme.color.WHITE,
      padding: 5,
      alignItems: 'center',
      flexDirection: 'row',
    };

    return (
      <View style={containerStyle}>
        <View style={styles.header}>
          <Icon name="alert" size={18} />
          <Text
            variant="body1"
            style={[styles.title, { color: theme.color.WHITE }]}
          >
            {title}
          </Text>
        </View>
        <View style={bodyStyle}>
          <View style={styles.items}>
            {data.map((e, i) => (
              <View
                key={i}
                style={[styles.adviceItem, { backgroundColor: e.color }]}
              >
                <View style={styles.wrapIcon}>{e.icon}</View>
                <Text
                  variant="caption"
                  style={[styles.text, { color: theme.color.DARK_PRIMARY }]}
                >
                  {e.title}
                </Text>
              </View>
            ))}
          </View>
          <Icon
            size={16}
            name="arrow-right"
            color={theme.color.DARK_PRIMARY}
            style={styles.iconNext}
          />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    paddingLeft: 5,
  },
  items: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  adviceItem: {
    margin: 5,
    padding: 5,
    borderRadius: 100,
    alignItems: 'center',
    flexDirection: 'row',
  },
  wrapIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  text: {
    paddingLeft: 2,
  },
  iconNext: {
    marginRight: 10,
  },
});
