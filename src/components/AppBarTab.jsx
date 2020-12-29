import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  header: {
    color: theme.colors.headerColor,
    fontSize: theme.fontSizes.header,
    paddingTop: 30,
    paddingLeft: 15, 
    fontWeight: '600',
  }
});

const AppBarTab = ({ text }) => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <Text style={styles.header}>{text}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;