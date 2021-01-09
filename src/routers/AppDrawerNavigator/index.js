import React, { useContext } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';
import AppStackNavigator from '../AppStackNavigator';
import { SafeAreaView, Text, View } from 'react-native';
import { DrawerAnimationContext } from '../../contexts/DrawerAnimationContext';
import Animated from 'react-native-reanimated';
import CustomDrawerItem from '../../components/CustomDrawerItem';
const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  const { progress } = useContext(DrawerAnimationContext);

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-200, 0],
  });

  const opacity = Animated.interpolate(progress, {
    inputRange: [0, 0.78, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <>
      <SafeAreaView
        style={{
          position: 'absolute',
          elevation: 1,
          zIndex: 2,
          top: 0,
          left: 0,
        }}>
        <Animated.View
          style={{
            opacity: opacity,
            flexDirection: 'row',
            alignItems: 'center',
            transform: [{ translateX: translateX }],
          }}>
          <View
            style={{
              height: 44,
              width: 44,
              borderRadius: 22,
              backgroundColor: 'white',
              marginHorizontal: 24,
            }}
          />
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 24,
                fontWeight: '600',
                color: '#ffffffC0',
              }}>
              Ayoub bahmad
            </Text>
            <Text style={{ color: 'white', opacity: 0.5 }}>Active status</Text>
          </View>
        </Animated.View>
      </SafeAreaView>

      <View
        style={{
          backgroundColor: '#306060',
          flex: 1,
        }}>
        <Drawer.Navigator
          initialRouteName="Screens"
          drawerType={'slide'}
          overlayColor="transparent"
          drawerContentOptions={{
            // activeBackgroundColor: 'blue',
            style: { overflow: 'visible' },
          }}
          drawerStyle={{
            width: '65%',
            // overflow: 'visible',
            backgroundColor: 'transparent',
            marginRight: -30,
          }}
          sceneContainerStyle={{
            backgroundColor: 'transparent',
            overflow: 'visible',
            // paddingVertical: '20%',
            alignSelf: 'center',
            // transform: [],
            zIndex: 1,
          }}
          drawerContent={(props) => {
            // setProgress(props.progress);
            return <CustomDrawerContent {...props} />;
          }}>
          <Drawer.Screen name="Screens">
            {(props) => {
              return <AppStackNavigator {...props} progress={progress} />;
            }}
          </Drawer.Screen>
          {/* <Drawer.Screen name="DetailsScreen" component={DetailsScreen} /> */}
        </Drawer.Navigator>
      </View>

      <SafeAreaView
        style={{ position: 'absolute', zIndex: 2, bottom: 0, left: 0 }}>
        <Animated.View
          style={{
            opacity: opacity,
            flexDirection: 'row',
            alignItems: 'center',
            transform: [{ translateX: translateX }],
          }}>
          <CustomDrawerItem
            title={`Settings    |    Log Out`}
            icon={{ name: 'settings-sharp', type: 'Ionicons' }}
          />
          {/* <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: 'grey',
              margin: 12,
            }}
          /> */}
          {/* <Text style={{ color: 'blue' }}>
            Settings | Log Out ................. ........
          </Text>
					<CustomDrawerItem
          title="Home"
          icon={{ name: 'settings-sharp', type: 'Ionicons' }}
        /> */}
        </Animated.View>
      </SafeAreaView>
    </>
  );
};

export default AppDrawerNavigator;
