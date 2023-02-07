import * as React from 'react';

import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Color, Tag, Text } from 'libertify-ui-kit';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* Text */}
        <Text variant="h1">This is heading 1</Text>
        <Text variant="h2">This is heading 2</Text>
        <Text variant="h3">This is heading 3</Text>
        <Text variant="h4">This is heading 4</Text>
        <Text variant="h5">This is heading 5</Text>
        <Text variant="subtitle1">This is subtitle 1</Text>
        <Text variant="subtitle2">This is subtitle 2</Text>
        <Text variant="body1">This is body 1</Text>
        <Text variant="body2">This is body 2</Text>
        <Text variant="body3">This is body 3</Text>
        <Text variant="button">This is button</Text>
        <Text variant="caption">This is caption</Text>
        <Text variant="value1">This is value 1</Text>
        <Text variant="value2">This is value 2</Text>
        <Text variant="smallContent">This is small content</Text>
        <Text variant="overline">This is overline</Text>
        {/* Button */}
        <View style={styles.section}>
          <Button>
            Go to portfolio{' '}
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/8867/8867464.png',
              }}
              style={styles.iconBtn}
            />
          </Button>
          <Button type="outline">Go to portfolio</Button>
          <Button type="outline" style={styles.roundedButton}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/8867/8867464.png',
              }}
              style={[styles.iconBtn, { tintColor: Color.Turquoise }]}
            />
          </Button>
          <Button type="outline" loading />
          <Button type="clear" color={Color.Turquoise}>
            Go to portfolio
          </Button>
        </View>
        {/* Tag */}
        <View style={styles.section}>
          <Tag>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/8867/8867464.png',
              }}
              style={[styles.iconTag, { tintColor: Color.Alert }]}
            />
            Mon tag
          </Tag>
          <Tag type="warning">Mon tag</Tag>
          <Tag type="secondary">Mon tag</Tag>
          <Tag type="success">Mon tag</Tag>
          <Tag type="info">Mon tag</Tag>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Color.DarkPrimary,
  },
  section: {
    flexDirection: 'row',
    paddingVertical: 10,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  iconBtn: {
    width: 18,
    height: 18,
  },
  iconTag: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  roundedButton: {
    borderRadius: 40,
  },
});
