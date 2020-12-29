import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const Stats = ({ item }) => {
  const styles = StyleSheet.create({
    evenlySpaced: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    bolder: {
      fontWeight: 'bold',
      fontSize: theme.fontSizes.bolder,
    },
    numbers: {
      display: 'flex',  
      alignItems: 'center',
      flexGrow: 1,
    },
    text: {
      fontSize: theme.fontSizes.body,
      padding: 10,
      paddingLeft: 0,
      color: theme.colors.primaryTextColor,
    }
  });


  const roundNumbers = (input) => {
    return Math.abs(input) > 999 ? Math.sign(input)*((Math.abs(input)/1000).toFixed(1)) + 'k' : Math.sign(input)*Math.abs(input)
  };

  return (
    <View style={styles.evenlySpaced}>
        <View style={styles.numbers}>
          <Text style={styles.bolder}>{roundNumbers(item. stargazersCount)}</Text>
          <Text style={styles.text}>Stars</Text>
        </View>
        <View style={styles.numbers}>
          <Text style={styles.bolder}>{roundNumbers(item. forksCount)}</Text>
          <Text style={styles.text}>Forks</Text>
        </View>
        <View style={styles.numbers}>
          <Text style={styles.bolder}>{roundNumbers(item. reviewCount)}</Text>
          <Text style={styles.text}>Reviews</Text>
        </View>
        <View style={styles.numbers}>
          <Text style={styles.bolder}>{roundNumbers(item. ratingAverage)}</Text>
          <Text style={styles.text}>Rating</Text>
        </View>
      </View>
  );
};

export default Stats;