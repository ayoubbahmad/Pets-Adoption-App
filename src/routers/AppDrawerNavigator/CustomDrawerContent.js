import { DrawerContentScrollView } from '@react-navigation/drawer';
import React, { useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import CustomDrawerItem from '../../components/CustomDrawerItem';
import { DrawerAnimationContext } from '../../contexts/DrawerAnimationContext';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawerContent = (props) => {
  const { progress, navigation } = props;

  const { setProgress } = useContext(DrawerAnimationContext);

  useEffect(() => {
    progress && setProgress(progress);
  }, [progress]);

  const opacity = Animated.interpolate(progress, {
    inputRange: [0, 0.7, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: 'transparent',
        paddingBottom: 25,
        overflow: 'visible',
      }}
    >
      <View style={{ flexGrow: 1 }} />
      {/* <Animated.View style={{ opacity: opacity }}> */}
      <CustomDrawerItem
        title="Adoption"
        icon={<MaterialIcons name="pets" color="#ebf5f5" size={24} />}
        onPress={() => navigation.navigate('Home')}
        titleStyle={{ color: '#ebf5f5' }}
      />
      <CustomDrawerItem
        title="Add pet"
        icon={<FontAwesome name="plus" color="#82afaf" size={24} />}
        onPress={() => navigation.navigate('Details')}
      />
      <CustomDrawerItem
        title="Favorites"
        icon={<FontAwesome name="heart" color="#82afaf" size={24} />}
      />
      <CustomDrawerItem
        title="Messages"
        icon={<FontAwesome name="envelope" color="#82afaf" size={24} />}
      />
      <CustomDrawerItem
        title="Profile"
        icon={<Ionicons name="person" color="#82afaf" size={24} />}
      />
      {/* </Animated.View> */}

      <View style={{ flexGrow: 1 }} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
