import * as React from 'react';

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import {
  Button,
  CheckBox,
  Color,
  Icon,
  RadioButton,
  Tag,
  Text,
  ThemeProvider,
  createTheme,
  Switch,
  Toggle,
  Advice,
  CardAction,
  CardInfo,
  DiaLog,
  Stepper,
} from 'libertify-ui-kit';

export default function App() {
  const [isDark, setIsDark] = React.useState(true);
  const [indexSelected, setIndexSelected] = React.useState(0);
  const [visibleDialog, setVisibleDialog] = React.useState(false);

  const themeDefault = createTheme();
  const customTheme = createTheme({
    color: { ...themeDefault.color, TURQUOISE: '#ffffff' },
  });

  return (
    <ThemeProvider theme={isDark ? themeDefault : customTheme}>
      <SafeAreaView />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.section, styles.itemsCenter]}>
          <CheckBox checked={isDark} size={30} onChange={setIsDark} />
          <Text variant="body2">Dark Theme</Text>
        </View>
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
        {/* DiaLog */}
        <DiaLog
          leftHeader={<Tag type="warning">Mon tag</Tag>}
          title="My title"
          visible={visibleDialog}
          onRequestClose={() => setVisibleDialog(false)}
        >
          <Text variant="body3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu diam
            libero.
          </Text>
          <CardInfo
            style={[
              styles.mv10,
              styles.customCardInfo,
              { backgroundColor: themeDefault.color.DARK_TURQUOISE },
            ]}
            iconContent={
              <Icon
                size={16}
                name="arrow-right"
                color={themeDefault.color.TURQUOISE}
              />
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu diam
            libero.
          </CardInfo>
          <Button>Go to portfolio</Button>
          <Button type="clear" style={styles.mt10}>
            Go to portfolio
          </Button>
        </DiaLog>
        <Stepper style={styles.mt10} total={10} value={5} />
        <Stepper
          style={styles.mt10}
          total={5}
          value={2}
          itemStyle={{ borderRadius: 5, height: 4 }}
          activeColor={themeDefault.color.WHITE}
          separator={5}
        />
        {/* Button */}
        <View style={styles.section}>
          <Button onPress={() => setVisibleDialog(true)}>
            Open Dialog{' '}
            <Icon size={18} name="arrow-right" color={Color.DARK_SECONDARY} />
          </Button>
          <Button type="outline">Go to portfolio</Button>
          <Button type="outline" style={styles.roundedButton}>
            <Icon size={18} name="arrow-right" color={Color.TURQUOISE} />
          </Button>
          <Button type="outline" loading />
          <Button type="clear">Go to portfolio</Button>
          <Button type="clear">Go to portfolio with theme</Button>
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
        <View style={[styles.section, styles.itemsCenter]}>
          {new Array(2).fill('').map((t, i) => (
            <React.Fragment key={i + t}>
              <RadioButton
                checked={indexSelected === i}
                size={30}
                onChange={() => setIndexSelected(i)}
              />
              <Text variant="body3">radio button {i}</Text>
            </React.Fragment>
          ))}
        </View>
        <Switch
          onChange={(e) => setIndexSelected(e.value)}
          selected={{ value: indexSelected, title: 'USD' }}
          data={[
            { value: 0, title: 'USD' },
            { value: 1, title: 'ADA' },
          ]}
        />
        <Switch
          size="big"
          onChange={(e) => setIndexSelected(e.value)}
          selected={{ value: indexSelected, title: 'USD' }}
          data={[
            { value: 0, title: 'Manual mode' },
            { value: 1, title: 'Autopilote mode' },
          ]}
        />
        <Toggle
          value={indexSelected === 0}
          onChange={(v) => setIndexSelected(v ? 0 : 1)}
          icon={<Icon size={11} name="arrow-right" />}
        />
        {/* Card Info */}
        <CardInfo
          title="My title"
          leftHeader={<Icon size={16} name="arrow-right" />}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu diam
          libero.
        </CardInfo>
        <CardInfo
          title="My title"
          iconContent={<Icon size={16} name="arrow-right" />}
          rightHeader={<Text variant="body3">SKIP</Text>}
          footer={
            <Button
              color={themeDefault.color.TURQUOISE}
              style={[styles.mt10, { alignSelf: 'flex-start' }]}
              type="clear"
            >
              Next
            </Button>
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu diam
          libero.
        </CardInfo>
        <CardInfo
          title="My title"
          type="outline"
          color={themeDefault.color.Alert}
          rightHeader={<Tag type="danger">Default</Tag>}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu diam
          libero.
        </CardInfo>
        <CardInfo
          type="clear"
          color={themeDefault.color.Alert}
          iconContent={
            <Icon
              size={16}
              name="arrow-right"
              color={themeDefault.color.Alert}
            />
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu diam
          libero.
        </CardInfo>
        {/* Card Action */}
        <CardAction
          title="My title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu diam libero."
        >
          <CardInfo
            style={styles.mv10}
            iconContent={
              <Icon
                size={16}
                name="arrow-right"
                color={themeDefault.color.TURQUOISE}
              />
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu diam
            libero.
          </CardInfo>
          <Toggle
            value={indexSelected === 0}
            onChange={(v) => setIndexSelected(v ? 0 : 1)}
            icon={<Icon size={11} name="arrow-right" />}
          />
          <Button style={styles.mt10}>Button</Button>
        </CardAction>
        <Advice
          title="New Advice Alert"
          data={new Array(4).fill({
            color: themeDefault.color.Success + 50,
            title: 'ADA - BUY 18%',
            icon: <Icon size={20} name="radio-checked" />,
          })}
        />
      </ScrollView>
      <SafeAreaView />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Color.DARK_PRIMARY,
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
  itemsCenter: {
    alignItems: 'center',
  },
  mt10: {
    marginTop: 10,
  },
  mv10: {
    marginVertical: 10,
  },
  customCardInfo: {
    marginHorizontal: -20,
    borderRadius: 0,
  },
});
