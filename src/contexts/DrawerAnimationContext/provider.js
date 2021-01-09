import React, { useState } from 'react';
import Animated from 'react-native-reanimated';
// import { Animated } from 'react-native';

import DrawerAnimationContext from './context';

const DrawerAnimationProvider = (props) => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  return (
    <DrawerAnimationContext.Provider
      value={{
        progress: progress,
        setProgress: (newProgress) => setProgress(newProgress),
      }}>
      {props.children}
    </DrawerAnimationContext.Provider>
  );
};

export { DrawerAnimationProvider };
export default DrawerAnimationProvider;
