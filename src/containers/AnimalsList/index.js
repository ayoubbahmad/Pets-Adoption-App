import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AnimalCardItem from '../../components/AnimalCardItem';

export default function AnimalsList() {
  return (
    <TouchableOpacity activeOpacity={0.8} style={{ paddingVertical: 12, paddingHorizontal: 16 }}>
      <AnimalCardItem />
    </TouchableOpacity>
  );
}
