import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default function DetailsScreenHeader() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        top: Math.max(insets.top, 16),

        zIndex: 1,
        elevation: 1,

        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
      }}
    >
      <TouchableOpacity
        style={{ paddingVertical: 8, paddingHorizontal: 12 }}
        onPress={() => {
          navigation.canGoBack && navigation.goBack();
        }}
      >
        <AntDesign name="arrowleft" size={32} color="#696a6a" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{ paddingVertical: 8, paddingHorizontal: 12 }}
        onPress={() => alert('share')}
      >
        <Feather name="share" size={32} color="#696a6a" />
      </TouchableOpacity>
    </View>
  );
}
