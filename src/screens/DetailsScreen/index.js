import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DetailsScreen(props) {
  const { navigation } = props;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ padding: 20 }}>DetailsScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{ backgroundColor: 'blue', padding: 8, borderRadius: 4 }}>
        <Text style={{ color: 'white' }}>Toggle Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}
