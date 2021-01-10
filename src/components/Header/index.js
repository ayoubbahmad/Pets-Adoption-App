import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IHeaderProps {
  onToggleDrawerButton: (event: GestureResponderEvent) => void;
}

export default function Header(props: IHeaderProps) {
  const { onToggleDrawerButton } = props;

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.headerContainer, { paddingTop: Math.max(insets.top, 16) }]}>
      <TouchableOpacity style={styles.menuButton} onPress={onToggleDrawerButton}>
        <Feather name="menu" size={24} color="#6b6b6b" />
      </TouchableOpacity>
      <View>
        <Text style={styles.locationTitle}>Location</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="md-location-sharp" size={24} color="#306060" />
          <Text style={styles.locationValue}>Casablanca, Morocco</Text>
        </View>
      </View>
      <View style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
  },
  menuButton: { padding: 12 },
  locationTitle: { color: '#cfcfcf', textAlign: 'center', fontWeight: '500' },
  locationContainer: { flexDirection: 'row', alignItems: 'center' },
  locationValue: { color: '#306060', fontWeight: '600', fontSize: 16 },
  avatar: {
    height: 45,
    width: 45,
    backgroundColor: 'grey',
    borderRadius: 25,
    margin: 12,
  },
});
