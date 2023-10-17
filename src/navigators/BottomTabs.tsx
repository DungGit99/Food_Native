/* eslint-disable react/no-unstable-nested-components */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Colors } from '../contants';
import { Colors } from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import AccountScreen from '../screens/AccountScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';

// import { Display } from '../utils';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: Dimensions.setHeight(8),
        backgroundColor: Colors.DEFAULT_WHITE,
        borderTopWidth: 0,
      },
      // tabBarShowLabel: false, => hiển thị name tab
      tabBarActiveTintColor: Colors.DEFAULT_ORANGE,
      tabBarInactiveTintColor: Colors.INACTIVE_GREY,
    }}
  >
    <Tab.Screen
      name="Trang chủ"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="home-outline" size={23} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Bookmark"
      component={BookmarkScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="bookmark-outline" size={23} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Giỏ hàng"
      component={CartScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="cart-outline" size={23} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Tôi"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="person-outline" size={23} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
