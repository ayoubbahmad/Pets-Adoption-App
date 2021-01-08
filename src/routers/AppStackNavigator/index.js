import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import DetailsScreen from '../../screens/DetailsScreen';
import HomeScreen from '../../screens/HomeScreen';
import { Text, View } from 'react-native';
import { DrawerAnimationContext } from '../../contexts/DrawerAnimationContext';
import Animated from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

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

const AppStackNavigator = (props) => {
  const { progress, navigation } = props;

  // const { progress } = React.useContext(DrawerAnimationContext);

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.75],
  });
  const backgroundScreen = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.85],
  });
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, -90],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        transform: [
          { scale: scale },
          // { rotate: '-5deg' },
          // { translateX: '50%' },
          // { translateX: translateX },
        ],
      }}>
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
        }}>
        <HomeScreen />
      </Animated.View>

      <Animated.View
        style={{
          flex: 1,
          borderRadius: borderRadius,
          overflow: 'hidden',
        }}>
        <Stack.Navigator
          screenOptions={{
            // headerLeft: () => (
            //   <TouchableOpacity onPress={() => navigation.openDrawer()}>
            //     <Text>Toggle</Text>
            //   </TouchableOpacity>
            // ),
            header: () => null,
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            // options={
            //   {
            // header: (props) => {
            //   // console.log(props);
            //   return null;
            // },
            //   }
            // }
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </Animated.View>
    </Animated.View>
  );
};

export default AppStackNavigator;
