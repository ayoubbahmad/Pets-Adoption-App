/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import App from './src/containers/App';
import { DrawerAnimationProvider } from './src/contexts/DrawerAnimationContext';

const app: () => React$Node = () => {
  return (
    <DrawerAnimationProvider>
      <App />
    </DrawerAnimationProvider>
  );
};

export default app;
