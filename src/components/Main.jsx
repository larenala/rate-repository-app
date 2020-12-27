import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import AppBar from './AppBar'
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
        <AppBar />
      </TouchableWithoutFeedback>
      <RepositoryList />
    </View>
  );
};

export default Main;