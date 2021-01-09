import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'lightgrey',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;