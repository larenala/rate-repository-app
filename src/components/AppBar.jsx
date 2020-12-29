import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 20,
    height: 110,
    backgroundColor: theme.colors.appBarColor,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab text="Repositories" />
  </View>;
};

export default AppBar;

