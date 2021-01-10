import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AnimalCardItem(props) {
  const {
    animalName,
    animalType,
    animalGender = 'male',
    imageSource,
    animalAge,
    distance,
    backgroundColor = '#ced7d9',
    onPressItem,
    id,
  } = props;

  onPress = () => {
    onPressItem(id);
  };

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={onPress}>
      <View style={[styles.imageContainer, { backgroundColor }]}>
        <Image height={100} width={100} source={imageSource} style={styles.imageStyle} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.contentHeader}>
          <Text style={styles.animalName}>{animalName}</Text>
          <Ionicons name={animalGender} size={24} color="#ababab" />
        </View>

        <Text style={styles.animalType}>{animalType}</Text>
        <Text style={styles.animalAge}>{animalAge}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="md-location-sharp" size={20} color="#306060" style={{ marginRight: 8 }} />
          <Text style={styles.location}>{distance}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32,
  },
  imageContainer: {
    borderRadius: 20,
    height: 210,
    width: 180,

    overflow: 'visible',
    paddingBottom: 30,

    zIndex: 2,

    shadowOffset: { height: 5, width: 0 },
    shadowColor: '#a3a3a3',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 2,
  },
  imageStyle: {
    height: 230,
    width: 180,
    borderRadius: 20,
    overflow: 'visible',
    resizeMode: 'contain',
    bottom: 20,
  },
  contentContainer: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
    height: '70%',
    backgroundColor: 'white',
    shadowOffset: { height: 5, width: 0 },
    shadowColor: '#a3a3a3',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 16,
  },
  contentHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  animalName: {
    color: '#636363',
    fontSize: 24,
    fontWeight: '600',
  },
  animalType: {
    color: '#636363',
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 8,
  },
  animalAge: {
    color: '#a3a3a3',
    fontSize: 12,
    fontWeight: '500',
    paddingVertical: 4,
  },
  location: {
    color: '#a3a3a3',
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 4,
  },
});

// #636363
// female
// male
