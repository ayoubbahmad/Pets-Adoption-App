import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';
import AppStackNavigator from '../AppStackNavigator';
import { Text, View } from 'react-native';
const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  return (
    <>
      <View
        style={{
          overflow: 'visible',
          width: '100%',

          position: 'absolute',
          top: 50,
          left: 0,
          zIndex: 2,
          flexDirection: 'row',
          alignItems: 'center',
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
      </View>
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
          backgroundColor: 'blue',
          overflow: 'visible',
          // paddingVertical: '20%',
          alignSelf: 'center',
          // transform: [],
        }}
        drawerContent={(props) => {
          return <CustomDrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {(props) => {
            return <AppStackNavigator {...props} />;
          }}
        </Drawer.Screen>
        {/* <Drawer.Screen name="DetailsScreen" component={DetailsScreen} /> */}
      </Drawer.Navigator>
    </>
  );
};

export default AppDrawerNavigator;
