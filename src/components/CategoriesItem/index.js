import React from 'react';
import { View, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animals from '../../assets/Icons/Animals';

interface ICategoriesItemProps {
  iconName: String;
  title: String;
  selected: Boolean;
  onPressItem: (index: Number) => void;
  index: Number;
}
export default function CategoriesItem(props: ICategoriesItemProps) {
  const { iconName, title, selected, onPressItem, index } = props;

  onPress = () => {
    onPressItem(index);
  };

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
      <View style={[styles.iconContainer, selected && styles.selectedIconContainer]}>
        <Animals name={iconName} color={selected ? '#f2f5f5' : '#a3a3a3'} size={52} />
      </View>
      <Text style={[styles.title]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'baseline',
  },
  iconContainer: {
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 16,

    shadowOffset: { height: 5, width: 0 },
    shadowColor: '#a3a3a3',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  selectedIconContainer: {
    backgroundColor: '#306060',
  },

  title: {
    color: '#a3a3a3',
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: '500',
  },
});
