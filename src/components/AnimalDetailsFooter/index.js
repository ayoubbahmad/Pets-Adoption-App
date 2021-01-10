import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AnimalDetailsFooter() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 32,
        paddingBottom: Math.max(insets.bottom + 4, 32),
        backgroundColor: '#f4f4f4',
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          padding: 20,
          paddingHorizontal: 24,
          backgroundColor: '#306060',
          borderRadius: 16,
        }}
      >
        <MaterialCommunityIcons name="heart-outline" color="#fff" size={24} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
          marginLeft: 32,
          backgroundColor: '#306060',
        }}
      >
        <Text style={{ color: '#ffffff', fontWeight: '600', fontSize: 20 }}>Adoption</Text>
      </TouchableOpacity>
    </View>
  );
}
