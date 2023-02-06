import * as React from 'react';

import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Text } from 'libertify-ui-kit';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
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
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
