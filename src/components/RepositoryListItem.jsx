import React from 'react';
import ItemDetails from './ItemDetails';
import { View, StyleSheet } from 'react-native';
import Stats from './Stats';

const RepositoryListItem = ( { item }) => {
  const styles = StyleSheet.create({
    itemContainer: {
      backgroundColor: 'white',
      paddingTop: 15,
      paddingBottom: 15, 
    },
  });

  return (
    <View style={styles.itemContainer}>
      <ItemDetails item={item} />
      <Stats item={item} />
    </View>
  );
};

export default RepositoryListItem;