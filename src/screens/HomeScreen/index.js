import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen(props) {
  const { navigation } = props;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ padding: 20 }}>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{ backgroundColor: 'blue', padding: 8, borderRadius: 4 }}>
        <Text style={{ color: 'white' }}>Toggle Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}
