/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Text>123123</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
