import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import AnimalDetailsCard from '../../components/AnimalDetailsCard';
import AnimalDetailsFooter from '../../components/AnimalDetailsFooter';
import DetailsScreenHeader from '../../components/DetailsScreenHeader';
import AnimalDetailsImagesCarousel from '../../containers/AnimalDetailsImagesCarousel';
import { data } from '../../containers/AnimalsList/mock';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
export default function DetailsScreen(props) {
  const route = useRoute();

  const { itemId } = route.params || {};

  const animal = data.filter((item) => item.id === itemId)[0] || {};

  return (
    <View style={styles.container}>
      <View
        style={[styles.headerContaier, { backgroundColor: animal.backgroundColor || '#bfcbce' }]}
      >
        <View style={styles.navigationHeader}>
          <DetailsScreenHeader />
        </View>
        <View style={styles.imagesCarouselContainer}>
          <AnimalDetailsImagesCarousel animal={animal} />
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#ffffff', width: '100%' }}>
        <View
          style={{
            marginTop: -70,
            marginHorizontal: 32,
          }}
        >
          <AnimalDetailsCard animal={animal} />
        </View>

        <View style={styles.ownerSectionContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <View
              style={{
                height: 45,
                width: 45,
                backgroundColor: animal.backgroundColor || '#bfcbce',
                borderRadius: 23,
              }}
            />
            <View style={{ flex: 1, paddingLeft: 8, paddingVertical: 4 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ flex: 1, color: '#636363', fontWeight: '700' }}>
                  Maya Berkovskaya
                </Text>
                <Text style={{ color: '#a3a3a3' }}>May 25, 2019</Text>
              </View>
              <Text style={{ color: '#a3a3a3' }}>Owner</Text>
            </View>
          </View>

          <Text style={{ color: '#969696', fontWeight: '500', lineHeight: 20 }}>
            My job requires moving to another country. I dont have the opportunity to take cat with
            me. I am looking for good people who will shelter my {animal.animalName}.
          </Text>
        </View>
        <AnimalDetailsFooter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#debd8a',
    width: WIDTH,
    height: HEIGHT,
  },
  headerContaier: { flex: 1.2, backgroundColor: '#bfcbce' },
  navigationHeader: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 8,
    zIndex: 1,
  },
  imagesCarouselContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  ownerSectionContainer: { flex: 1, padding: 32 },
});
