import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AnimalCardItem from '../../components/AnimalCardItem';
import { data } from './mock';

export default function AnimalsList() {
  const navigation = useNavigation();

  const onPressItem = (id) => {
    navigation.navigate('Details', { itemId: id });
  };

  return (
    <View style={{ paddingVertical: 12, paddingHorizontal: 16 }}>
      <AnimalCardItem {...data[0]} onPressItem={onPressItem} id={data[0].id} />
      <AnimalCardItem {...data[1]} onPressItem={onPressItem} id={data[1].id} />
    </View>
  );
}
