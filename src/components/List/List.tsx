import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import ListItem from '../ListItem';
import { IListProps } from './types';

const List: React.FC<IListProps> = ({ images, onPress }) => {
  console.log(images);
  
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={[styles.itemContainer, { paddingRight: 8 }]}>
        {images.slice(0, 4).map((image, index) => {
          return (
            <ListItem
              key={image.id}
              image={image}
              index={index}
              onPress={() => onPress(image)}
            />
          );
        })}
      </View>
      <View style={[styles.itemContainer, { paddingLeft: 8 }]}>
        {images.slice(5, 9).map((image, index) => {
          return (
            <ListItem
              key={image.id}
              image={image}
              index={index + 1}
              onPress={() => onPress(image)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#303030',
    flexDirection: 'row',
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
  },
  itemContainer: {
    flex: 1,
  },
});

export default withNavigation(List);
