/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Colors } from '../constants/Colors';

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_ORANGE}
        translucent
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
