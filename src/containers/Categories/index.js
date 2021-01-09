import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CategoriesItem from '../../components/CategoriesItem';
import { data } from './mock';

export default function Categories() {
  const [selectedItem, setSelectedItem] = useState(0);
  const onPressItem = (index) => setSelectedItem(index);
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={data.slice(0, 10)}
      keyExtractor={(item) => `${item.iconName}`}
      renderItem={({ item, index }) => {
        return (
          <CategoriesItem
            selected={index === selectedItem}
            index={index}
            iconName={item.iconName}
            title={item.title}
            onPressItem={onPressItem}
          />
        );
      }}
      horizontal
      contentContainerStyle={styles.contentContainerStyle}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
    />
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 24,
    alignSelf: 'baseline',
  },
  seperator: {
    width: 24,
  },
});
