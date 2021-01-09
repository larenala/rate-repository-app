import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
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

const AppBarTab = ({ text, path }) => {
  return (
    <Link to={path} component={TouchableOpacity} activeOpacity={0.5}>
      <Text style={styles.header}>{text}</Text>
    </Link>
  );
};

export default AppBarTab;