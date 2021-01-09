import React from 'react';
import { Text, TouchableOpacityProps, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon, { IconIProps } from '../Icon';

interface IProps extends TouchableOpacityProps {
  title: String;
  icon: IconIProps;
}

export default function CustomDrawerItem(props: IProps) {
  const { title, icon, ...touchableProps } = props;
  return (
    <TouchableOpacity style={styles.container} {...touchableProps}>
      <View style={styles.icon}>
        <Icon {...icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginVertical: 8,
  },
  icon: {
    minWidth: 72,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#ffffffA0',
    fontWeight: '600',
  },
});
