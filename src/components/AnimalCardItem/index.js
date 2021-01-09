import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AnimalCardItem() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          height={150}
          width={150}
          source={require('../../assets/images/animals/cats/cat1.png')}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.contentHeader}>
          <Text style={styles.animalName}>Sola</Text>
          <Ionicons name="female" size={24} color="#ababab" />
        </View>

        <Text style={styles.animalType}>Abyssinian cat</Text>
        <Text style={styles.animalAge}>2 years old</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="md-location-sharp" size={20} color="#306060" style={{ marginRight: 8 }} />

          <Text style={styles.location}>Distance: 3.6 Km</Text>
        </View>
      </View>
    </View>
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
    backgroundColor: '#ced7d9',
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
    height: 200,
    width: 170,
    borderRadius: 20,
    overflow: 'visible',
    resizeMode: 'cover',
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
