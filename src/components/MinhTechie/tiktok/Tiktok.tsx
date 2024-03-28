/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
const Tab = createBottomTabNavigator();

export default function Tiktok() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../../../assets/images/images_tiktok/home.png')}
            style={[
              styles.bottomTabIcon,
              focused && styles.bottomTabIconFocused,
            ]}
          />
        ),
      }} />
      <Tab.Screen name="Discover" component={SearchScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../../../assets/images/images_tiktok/search.png')}
            style={[
              styles.bottomTabIcon,
              focused && styles.bottomTabIconFocused,
            ]}
          />
        ),
      }} />
      <Tab.Screen name="NewVideo" component={SearchScreen} options={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../../../assets/images/images_tiktok/new-video.png')}
            style={[
              styles.newVideoButton,
              focused && styles.bottomTabIconFocused,
            ]}
          />
        ),
      }} />
      <Tab.Screen name="Inbox" component={SearchScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('../../../assets/images/images_tiktok/message.png')}
            style={[
              styles.bottomTabIcon,
              focused && styles.bottomTabIconFocused,
            ]}
          />
        ),
      }} />
      <Tab.Screen name="Profile" component={SearchScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Image source={require('../../../assets/images/images_tiktok/user.png')} style={[styles.bottomTabIcon, focused && styles.bottomTabIconFocused]} />
        ),
      }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20,
    tintColor: 'grey',
  },
  bottomTabIconFocused: {
    tintColor: 'white',
  },
  newVideoButton: {
    width: 48,
    height: 24,
  },
});
function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}
