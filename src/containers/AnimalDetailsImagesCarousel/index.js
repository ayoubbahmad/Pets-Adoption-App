import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window');
export default function AnimalDetailsImagesCarousel(props) {
  const { animal } = props;

  return (
    <View style={{ flex: 1 }}>
      <Image
        width={100}
        height={100}
        resizeMode="contain"
        source={animal.imageSource}
        style={{ flex: 1, width: WIDTH * 0.6 }}
      />
    </View>
  );
}
