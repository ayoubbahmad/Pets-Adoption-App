/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './src/containers/App';
import { DrawerAnimationProvider } from './src/contexts/DrawerAnimationContext';

const app: () => React$Node = () => {
  return (
    <DrawerAnimationProvider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </DrawerAnimationProvider>
  );
};

export default app;
