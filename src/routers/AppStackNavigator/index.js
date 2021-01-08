import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import DetailsScreen from '../../screens/DetailsScreen';
import HomeScreen from '../../screens/HomeScreen';
import { Text, TouchableOpacity, View } from 'react-native';

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
  const { navigation } = props;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        transform: [{ scale: 0.8 }, { rotate: '-5deg' }, { translateX: '50%' }],
      }}>
      <View
        style={{
          position: 'absolute',
          height: '100%',
          borderRadius: 30,
          overflow: 'hidden',
          backgroundColor: 'white',
          opacity: 0.4,
          transform: [{ translateX: '-50%' }, { scale: 0.8 }],
          zIndex: 0,
        }}>
        <HomeScreen />
      </View>
      <View
        style={{
          flex: 1,
          borderRadius: 30,
          overflow: 'hidden',
        }}>
        <Stack.Navigator
          screenOptions={{
            headerLeft: () => (
              <TouchableOpacity
                transparent
                onPress={() => navigation.openDrawer()}>
                <Text>Toggle</Text>
              </TouchableOpacity>
            ),
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
      </View>
    </View>
  );
};

export default AppStackNavigator;
