import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Linking, Text, View, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CustomDrawerContent = (props) => {
  const { progress, navigation } = props;
  // const translateX = Animated.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [-100, 0],
  // });

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: 'blue',
        paddingBottom: 25,
        overflow: 'visible',
      }}>
      {/* <DrawerItemList {...props} /> */}

      <View style={{ flexGrow: 1 }} />

      <DrawerItem
        label="Details"
        // labelStyle={styles.drawerLabel}
        // style={styles.drawerItem}
        style={{
          marginVertical: 0,

          backgroundColor: 'red',
        }}
        onPress={() => navigation.navigate('Details')}
      />
      <DrawerItem
        label="Home"
        // labelStyle={{ color: 'white', marginLeft: -16 }}
        style={{
          // alignItems: 'flex-start',
          marginVertical: 0,

          backgroundColor: 'red',
        }}
        onPress={() => navigation.navigate('Home')}
        // icon={() => <AntDesign name="message1" color="white" size={16} />}
      />
      <View style={{ flexGrow: 1 }} />
      <DrawerItem
        label={({ focused, color }) => (
          <Text style={{ color }}>
            {focused ? 'Focused text' : 'Unfocused text'}
          </Text>
        )}
        // "Contact us"

        // labelStyle={{ color: 'white', marginLeft: -16 }}
        style={{
          marginVertical: 0,
          backgroundColor: 'red',
        }}
        labelStyle={{ color: 'black', flex: 1 }}
        onPress={() => navigation.navigate('Details')}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
