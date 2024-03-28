/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useRef } from 'react';
import { Animated, Image, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Dimensions, { width } from '../../../constants/Dimensions';
import MomoHeader from './MomoHeader';
const Tab = createBottomTabNavigator();
export default function TabMono() {
  const getWidth = () => {
    // Horizontal padding = 20
    let widthTab = width;
    // Total five tab ...
    return widthTab / 5;
  };
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,

          tabBarStyle: {
            height: Dimensions.setHeight(10),

          },
          tabBarLabelStyle: {
            fontSize: 12,
            paddingBottom: 5,
            // marginBottom: 10,
          },
          tabBarActiveTintColor: '#AF0C6E',
          tabBarInactiveTintColor: Colors.INACTIVE_GREY,
        }}
      >
        <Tab.Screen name="Momo" component={MomoHeader} options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../../assets/images/momo/logomomo.png')}
              style={{ height: 22, width: 22 }}
            />


          ),
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          },
        })} />
        <Tab.Screen name="Ưu đãi" component={NotificationScreen} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gift" size={24} color={color} />
          ),
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true,
            }).start();
          },
        })} />
        <Tab.Screen name="Mã QR MoMo" component={SearchScreen} options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                backgroundColor: '#AF0C6E', width: 44,
                height: 44,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 40,
              }}
            >
              <FontAwesome name="qrcode" size={25} color="#fff" />

            </View>

          ),
          tabBarLabelStyle: {
            backgroundColor: '#AF0C6E',
            color: '#fff',
            paddingHorizontal: 10,
            borderRadius: 10,
            marginBottom: 5,
          },

        }} />
        <Tab.Screen name="Lịch sử GD" component={SearchScreen1} options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="history" size={24} color={color} />
          ),
        }} />
        <Tab.Screen name="Tôi" component={SearchScreen2} options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={24} color={color} />
          ),
        }} />
      </Tab.Navigator>
      <Animated.View
        style={{
          height: 2,
          width: getWidth() - 40,
          backgroundColor: '#AF0C6E',
          position: 'absolute',
          bottom: 68,
          left: 20,
          borderBottomEndRadius: 40,
          borderBottomStartRadius: 40,
          // borderRadius: '50%',
          transform: [
            { translateX: tabOffsetValue },
          ],
        }}
      />
    </>
  );
}



function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}
function SearchScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}
function SearchScreen2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}
