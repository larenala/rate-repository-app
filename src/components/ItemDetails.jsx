import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const ItemDetails = ({ item }) => {
  const styles = StyleSheet.create({
    flexRowContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginTop: 10,
      marginBottom: 20,
    },
    image: {
      width: 60,
      height: 60,
      flexGrow: 0,
      margin: 15,
      marginTop: 0,
      borderRadius: 5,
    },
    itemContent: {
      maxWidth: '70%',
      width: '100%',
      height: '100%',
    },
    language: {
      backgroundColor: theme.colors.primary,
      color: '#fff',
      fontSize: theme.fontSizes.bolder,
      borderRadius: 5,
      padding: 10,
      overflow: 'hidden',
    },
    bolder: {
      fontWeight: 'bold',
      fontSize: theme.fontSizes.bolder,
    },
    text: {
      fontSize: theme.fontSizes.body,
      padding: 10,
      paddingLeft: 0,
      color: theme.colors.primaryTextColor,
    }
  });

  return (
    <View style={styles.flexRowContainer}>
        <Image style={styles.image} source={{uri: item .ownerAvatarUrl}} />
        <View style={styles.itemContent}>
          <Text style={styles.bolder}>{item. fullName}</Text>
          <Text style={styles.text}>{item. description}</Text>
          <View style={{ alignSelf: 'flex-start', padding: 10}} >
            <Text style={styles.language}>{item. language}</Text>
          </View>
        </View>
      </View>
  );
};

export default ItemDetails;
