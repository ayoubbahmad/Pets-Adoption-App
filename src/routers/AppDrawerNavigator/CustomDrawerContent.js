import React, { useContext, useEffect } from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  // DrawerItemList,
} from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import { DrawerAnimationContext } from '../../contexts/DrawerAnimationContext';
import Animated from 'react-native-reanimated';
import CustomDrawerItem from '../../components/CustomDrawerItem';

const CustomDrawerContent = (props) => {
  const { progress, navigation } = props;

  const { setProgress } = useContext(DrawerAnimationContext);

  useEffect(() => {
    progress && setProgress(progress);
  }, [progress]);

  const opacity = Animated.interpolate(progress, {
    inputRange: [0, 0.7, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: 'transparent',
        paddingBottom: 25,
        overflow: 'visible',
      }}>
      <View style={{ flexGrow: 1 }} />
      {/* // settings-sharp Ionicons
 // settings MaterialIcons // plus FontAwesome // heart FontAwesome 
			// mail Entypo // envelope FontAwesome // envelope FontAwesome5 //
      hand-holding-heart FontAwesome5 // pets MaterialIcons // person Ionicons
      // paw Foundation // hand-heart MaterialCommunityIcons */}
      {/* <DrawerItemList /> */}

      <Animated.View style={{ opacity: opacity }}>
        <CustomDrawerItem
          title="Adoption"
          icon={{ name: 'pets', type: 'MaterialIcons' }}
          onPress={() => navigation.navigate('Details')}
        />
        <CustomDrawerItem
          title="Add pet"
          icon={{ name: 'plus', type: 'FontAwesome' }}
          onPress={() => navigation.navigate('Home')}
        />
        <CustomDrawerItem
          title="Favorites"
          icon={{ name: 'heart', type: 'FontAwesome' }}
        />
        <CustomDrawerItem
          title="Messages"
          icon={{ name: 'envelope', type: 'FontAwesome' }}
        />
        <CustomDrawerItem
          title="Profile"
          icon={{ name: 'person', type: 'Ionicons' }}
        />
        {/* <CustomDrawerItem
          title="Home"
          icon={{ name: 'settings-sharp', type: 'Ionicons' }}
        /> */}
      </Animated.View>

      {/* <DrawerItem
        label="Messages"
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
        style={{
          marginVertical: 0,
          // backgroundColor: 'red',
          overflow: 'visible',
        }}
        labelStyle={{ fontWeight: '600' }}
        onPress={() => navigation.navigate('Details')}
        icon={() => (
          <View
            style={{
              width: 24,
              height: 24,
              backgroundColor: 'grey',
              borderRadius: 16,
            }}
          />
        )}
      />
      <DrawerItem
        label={({ focused, color }) => (
          <Text
            ellipsizeMode="clip"
            style={{ color, fontSize: 20, fontWeight: '600' }}>
            Homeeee
            {focused ? 'Focused text' : 'Unfocused text'}
          </Text>
        )}
        labelStyle={{ color: 'white', marginLeft: -16 }}
        style={{
          // alignItems: 'flex-start',
          marginVertical: 0,

          // backgroundColor: 'red',
        }}
        onPress={() => navigation.navigate('Home')}
        icon={() => (
          <View
            style={{
              width: 24,
              height: 24,
              backgroundColor: 'grey',
              borderRadius: 16,
            }}
          />
        )}
      /> */}

      <View style={{ flexGrow: 1 }} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
