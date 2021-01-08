import React, { useContext, useState } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';
import AppStackNavigator from '../AppStackNavigator';
import { Text, View } from 'react-native';
import { DrawerAnimationContext } from '../../contexts/DrawerAnimationContext';
import Animated from 'react-native-reanimated';
const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  // const drawerAnimationContext = useContext(DrawerAnimationContext);
  const [progress, setProgress] = useState(new Animated.Value(0));
  // console.log(drawerAnimationContext);
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-200, 0],
  });
  const opacity = Animated.interpolate(progress, {
    inputRange: [0, 0.75, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <>
      <Animated.View
        style={{
          overflow: 'visible',
          width: '100%',
          position: 'absolute',
          top: 50,
          left: 0,
          zIndex: 2,
          opacity: opacity,
          flexDirection: 'row',
          alignItems: 'center',
          transform: [{ translateX: translateX }],
        }}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: 'white',
            margin: 12,
          }}
        />
        <Text style={{ color: 'white' }}>User Name</Text>
      </Animated.View>
      <Drawer.Navigator
        initialRouteName="Screens"
        drawerType={'slide'}
        overlayColor="transparent"
        // activeTintColor={'red'}
        // inactiveTintColor={'red'}
        // activeBackgroundColor={'red'}
        // inactiveBackgroundColor={'red'}
        drawerStyle={{
          width: '60%',
          overflow: 'visible',
          // backgroundColor: 'red',
          marginRight: -30,
        }}
        sceneContainerStyle={{
          backgroundColor: '#456f6f',
          overflow: 'visible',
          // paddingVertical: '20%',
          alignSelf: 'center',
          // transform: [],
          zIndex: 2,
        }}
        drawerContent={(props) => {
          return <CustomDrawerContent {...props} setProgress={setProgress} />;
        }}>
        <Drawer.Screen name="Screens">
          {(props) => {
            return <AppStackNavigator {...props} progress={progress} />;
          }}
        </Drawer.Screen>
        {/* <Drawer.Screen name="DetailsScreen" component={DetailsScreen} /> */}
      </Drawer.Navigator>

      <Animated.View
        style={{
          overflow: 'visible',
          width: '100%',
          opacity: opacity,
          position: 'absolute',
          bottom: 40,
          left: 0,

          flexDirection: 'row',
          alignItems: 'center',
          transform: [{ translateX: translateX }],
        }}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: 'grey',
            margin: 12,
          }}
        />
        <Text style={{ color: 'blue' }}>
          Settings | Log Out ................. ........
        </Text>
      </Animated.View>
    </>
  );
};

export default AppDrawerNavigator;
