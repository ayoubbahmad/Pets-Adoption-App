import React from 'react';
import { TextProps } from 'react-native';

import { createIconSetFromFontello } from 'react-native-vector-icons';
// import { IconProps } from 'react-native-vector-icons/Icon';
const configs = require('./config.json');
const Icon = createIconSetFromFontello(configs, 'fontello');

export interface IconProps extends TextProps {
  /**
   * Size of the icon, can also be passed as fontSize in the style object.
   * @default 12
   */
  size?: number;

  /**
   * Name of the icon to show
   */
  name: string;

  /**
   * Color of the icon
   */
  color?: string;
}

export default function Animals(props: IconProps) {
  return <Icon {...props} />;
}
