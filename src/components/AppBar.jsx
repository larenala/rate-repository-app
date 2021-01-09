import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
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
  scrollBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal contentContainerStyle={styles.scrollBar}>
      <AppBarTab text="Repositories" path="/" />
      <AppBarTab text="Sign in" path="/login" />
    </ScrollView>
  </View>;
};

export default AppBar;

