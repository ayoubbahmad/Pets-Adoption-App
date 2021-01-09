import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Header from '../../components/Header';
import Search from '../../components/Search';
import Categories from '../../containers/Categories';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

export default function HomeScreen(props) {
  const { navigation } = props;
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Header onToggleDrawerButton={() => navigation.openDrawer()} />
      <View style={styles.contentContainer}>
        <View style={styles.searchContainer}>
          <Search />
        </View>

        <Categories />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: WIDTH, height: HEIGHT, backgroundColor: '#ffffff' },
  contentContainer: {
    backgroundColor: '#f6f6f6',
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  searchContainer: {
    padding: 32,
  },
});
