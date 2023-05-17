/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import { Colors } from '../constants/Colors';

const SplashScreens = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.DEFAULT_ORANGE} translucent/>
            <Image source={require('../assets/images/foodSplash.jpg')} style={styles.image} resizeMode="contain"/>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DEFAULT_ORANGE,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    height: 200,
    width: 400,
  },
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 22,
    fontStyle: 'italic',
  },
});

export default SplashScreens;
