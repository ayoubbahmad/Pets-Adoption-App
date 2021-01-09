import React, { useContext } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from './CustomDrawerContent';
import AppStackNavigator from '../AppStackNavigator';
import { Dimensions, Text, View } from 'react-native';
import { DrawerAnimationContext } from '../../contexts/DrawerAnimationContext';
import Animated from 'react-native-reanimated';
import CustomDrawerItem from '../../components/CustomDrawerItem';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DetailsScreen from '../../screens/DetailsScreen';
import HomeScreen from '../../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const { width: WIDTH } = Dimensions.get('window');

const AppDrawerNavigator = () => {
  const { progress } = useContext(DrawerAnimationContext);

  const insets = useSafeAreaInsets();

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, WIDTH],
  });

  const opacity = Animated.interpolate(progress, {
    inputRange: [0, 0.7, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <>
      <View
        style={{
          position: 'absolute',
          elevation: 1,
          zIndex: 2,
          top: Math.max(insets.top, 16),
          left: -WIDTH,
        }}
      >
        <Animated.View
          style={{
            opacity: opacity,
            flexDirection: 'row',
            alignItems: 'center',
            transform: [{ translateX: translateX }],
          }}
        >
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
                color: '#ebf5f5',
              }}
            >
              Ayoub bahmad
            </Text>
            <Text style={{ color: '#7ea9a9' }}>Active status</Text>
          </View>
        </Animated.View>
      </View>

      <View
        style={{
          backgroundColor: '#306060',
          flex: 1,
        }}
      >
        <Drawer.Navigator
          initialRouteName="Screens"
          drawerType={'slide'}
          overlayColor="transparent"
          drawerStyle={{
            width: '65%',
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
            return <CustomDrawerContent {...props} />;
          }}
        >
          <Drawer.Screen name="Screens">
            {(props) => {
              return <AppStackNavigator {...props} progress={progress} />;
            }}
          </Drawer.Screen>
          {/* <Drawer.Screen name="HomeScreen" component={HomeScreen} />
          <Drawer.Screen name="DetailsScreen" component={DetailsScreen} /> */}
        </Drawer.Navigator>
      </View>

      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          bottom: Math.max(insets.bottom, 16),
          left: -WIDTH,
        }}
      >
        <Animated.View
          style={{
            opacity: opacity,
            flexDirection: 'row',
            alignItems: 'center',
            transform: [{ translateX: translateX }],
          }}
        >
          <CustomDrawerItem
            title={`Settings    |    Log Out`}
            icon={<Ionicons name="settings-sharp" color="#82afaf" size={24} />}
            titleStyle={{ color: '#82afaf' }}
          />
        </Animated.View>
      </View>
    </>
  );
};

export default AppDrawerNavigator;
