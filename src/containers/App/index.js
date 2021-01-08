import React from 'react';
// import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppDrawerNavigator from '../../routers/AppDrawerNavigator';
import { View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <AppDrawerNavigator />
    </NavigationContainer>
  );
}
