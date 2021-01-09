import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Search() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchButton}>
        <Ionicons name="search" color="#d5d5d5" size={24} />
      </TouchableOpacity>
      <TextInput placeholder="Search pet to adopte" style={styles.searchTextInput} />
      <TouchableOpacity style={styles.optionsButton}>
        <Ionicons name="options" color="#d5d5d5" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchButton: {
    padding: 12,
  },
  searchTextInput: {
    flex: 1,
    height: '100%',
  },
  optionsButton: {
    padding: 12,
  },
});
