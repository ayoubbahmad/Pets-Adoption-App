import React from 'react';
import { View, Text } from 'react-native';
import Animals from '../../assets/Icons/Animals';

export default function CategoriesItem() {
  return (
    <View>
      <Text>CategoriesItem</Text>
      <Animals name="mouse" />
    </View>
  );
}
