import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Text } from 'react-native';

export interface IconIProps {
  name: String;
  type: String;
}

const IconeAdapter = (props) => {
  const { type, ...iconProps } = props;
  return {
    MaterialIcons: <MaterialIcons {...iconProps} />,
    AntDesign: <AntDesign {...iconProps} />,
    Entypo: <Entypo {...iconProps} />,
    EvilIcons: <EvilIcons {...iconProps} />,
    Feather: <Feather {...iconProps} />,
    FontAwesome: <FontAwesome {...iconProps} />,
    Foundation: <Foundation {...iconProps} />,
    Ionicons: <Ionicons {...iconProps} />,
    MaterialCommunityIcons: <MaterialCommunityIcons {...iconProps} />,
    SimpleLineIcons: <SimpleLineIcons {...iconProps} />,
    Octicons: <Octicons {...iconProps} />,
    Zocial: <Zocial {...iconProps} />,
    Fontisto: <Fontisto {...iconProps} />,
  }[type];
};

export default function Icon(props: IconIProps) {
  return <Text>hello</Text>;
  // <IconeAdapter size={24} color="#ffffffA0" {...props} />;
}
