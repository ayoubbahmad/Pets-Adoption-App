/**
 * borderRadius: new Animated.Value(100)
 *
 * Animated.timing(this.state.borderRadius, {
      toValue: 16,
      duration: 1200,
      useNativeDriver: true
    }).start();
 *
 *
 * <Animated.View
          style={{
    borderRadius: this.state.borderRadius,
*/
// import { Text, View } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import DetailsScreen from '../../screens/DetailsScreen';
import HomeScreen from '../../screens/HomeScreen';
import { DrawerAnimationContext } from '../../contexts/DrawerAnimationContext';
import Animated from 'react-native-reanimated';
import { useIsDrawerOpen } from '@react-navigation/drawer';

const Stack = createStackNavigator();

const AppStackNavigator = (props) => {
  const { progress } = React.useContext(DrawerAnimationContext);

  const isDraweOpen = useIsDrawerOpen();

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.73],
  });

  const backgroundScreen = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.85],
  });

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, -85],
  });

  const translateXContainer = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 0],
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  // const opacity = Animated.interpolate(progress, {
  //   inputRange: [0, 0.5, 1],
  //   outputRange: [0, 0, 0.4],
  // });

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        transform: [
          { scale: scale },
          // { rotate: '-5deg' },
          { translateX: translateXContainer },
          // { translateX: translateX },
        ],
      }}
    >
      <Animated.View
        style={{
          position: 'absolute',
          height: '100%',
          borderRadius: borderRadius,
          overflow: 'hidden',
          backgroundColor: 'white',
          opacity: 0.4,
          transform: [
            // { translateX: translateX },
            { translateX: translateX },
            { scale: backgroundScreen },
          ],
          zIndex: 0,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* {isDraweOpen && props.route.name === 'HomeScreen' && <HomeScreen />} */}
        {isDraweOpen && <HomeScreen />}
      </Animated.View>

      <Animated.View
        style={{
          flex: 1,
          borderRadius: borderRadius,
          overflow: 'hidden',
        }}
      >
        <Stack.Navigator
          screenOptions={{
            header: () => null,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </Animated.View>
    </Animated.View>
  );
};

export default AppStackNavigator;
