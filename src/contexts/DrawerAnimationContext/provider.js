import React, { useState } from 'react';
import Animated from 'react-native-reanimated';
// import { Animated } from 'react-native';

import DrawerAnimationContext from './context';

const DrawerAnimationProvider = (props) => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <DrawerAnimationContext.Provider
      value={{
        progress: progress,
        setProgress: (newProgress) => setProgress(newProgress),
        // isDrawerOpen: isDrawerOpen,
        // setIsDrawerOpen: (isToggled) => setIsDrawerOpen(isToggled),
      }}
    >
      {props.children}
    </DrawerAnimationContext.Provider>
  );
};

export { DrawerAnimationProvider };
export default DrawerAnimationProvider;
