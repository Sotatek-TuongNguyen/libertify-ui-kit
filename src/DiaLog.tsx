import {
  Modal,
  ModalProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import withTheme from './withTheme';
import { Theme, themeDefault } from './ThemeProvider';
import CardInfo from './CardInfo';
import Icon from './Icon';

interface DiaLogProps extends ModalProps {
  title?: string;
  theme?: Theme;
  leftHeader?: JSX.Element;
  footer?: JSX.Element;
  children?: string | JSX.Element | JSX.Element[];
}

export default withTheme(
  ({
    title,
    children,
    leftHeader,
    onRequestClose,
    footer,
    theme = themeDefault,
    animationType = 'fade',
    ...props
  }: DiaLogProps) => {
    return (
      <Modal
        animationType={animationType}
        transparent
        {...props}
        onRequestClose={onRequestClose}
      >
        <View
          style={[
            styles.container,
            { backgroundColor: theme.color.BLACK_OPACITY_3 },
          ]}
        >
          <CardInfo
            style={{ backgroundColor: theme.color.DARK_SECONDARY }}
            title={title}
            leftHeader={leftHeader}
            footer={footer}
            rightHeader={
              <TouchableOpacity onPress={onRequestClose}>
                <Icon size={16} name="close" />
              </TouchableOpacity>
            }
          >
            {children}
          </CardInfo>
        </View>
      </Modal>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
