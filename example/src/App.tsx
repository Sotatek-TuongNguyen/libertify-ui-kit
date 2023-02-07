import * as React from 'react';

import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
  Button,
  CheckBox,
  Color,
  Icon,
  RadioButton,
  Tag,
  Text,
} from 'libertify-ui-kit';

export default function App() {
  const [checked, setChecked] = React.useState(true);
  const [indexSelected, setIndexSelected] = React.useState(0);

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
            <Icon size={18} name="arrow-right" color={Color.White} />
          </Button>
          <Button type="outline">Go to portfolio</Button>
          <Button type="outline" style={styles.roundedButton}>
            <Icon size={18} name="arrow-right" color={Color.Turquoise} />
          </Button>
          <Button type="outline" loading />
          <Button type="clear" color={Color.Turquoise}>
            Go to portfolio
          </Button>
        </View>
        {/* Tag */}
        <View style={styles.section}>
          <Tag>
            <Icon size={11} name="arrow-right" color={Color.Alert} />
            {` `} Mon tag
          </Tag>
          <Tag type="warning">Mon tag</Tag>
          <Tag type="secondary">Mon tag</Tag>
          <Tag type="success">Mon tag</Tag>
          <Tag type="info">Mon tag</Tag>
        </View>
        <View style={styles.section}>
          <CheckBox checked={checked} size={30} onChange={setChecked} />
        </View>
        <View style={styles.section}>
          {new Array(5).fill('').map((t, i) => (
            <RadioButton
              key={i + t}
              checked={indexSelected === i}
              size={30}
              onChange={() => setIndexSelected(i)}
            />
          ))}
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
  roundedButton: {
    borderRadius: 40,
  },
});
