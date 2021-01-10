import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AnimalDetailsCard(props) {
  const { animal } = props;

  return (
    <View style={styles.container}>
      <View style={styles.contentHeader}>
        <Text style={styles.animalName}>{animal.animalName}</Text>
        <Ionicons name={animal.animalGender} size={24} color="#ababab" />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.animalType}>{animal.animalType}</Text>
        <Text style={styles.animalAge}>{animal.animalAge}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="md-location-sharp" size={20} color="#306060" style={{ marginRight: 8 }} />
        <Text style={styles.location}>{animal.address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    minHeight: 100,
    borderRadius: 32,
    paddingVertical: 24,
    paddingHorizontal: 28,
    justifyContent: 'center',

    shadowOffset: { height: 5, width: 0 },
    shadowColor: '#a3a3a3',
    shadowOpacity: 0.3,
    shadowRadius: 10,
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
    fontSize: 28,
    fontWeight: '700',
  },
  animalType: {
    color: '#636363',
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 8,
  },
  animalAge: {
    color: '#636363',
    fontSize: 14,
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
