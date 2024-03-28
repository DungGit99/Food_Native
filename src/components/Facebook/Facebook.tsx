import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBar from './SearchBar';

const Facebook = () => {
  return (
    <View>
      <SearchBar />
      <View style={styles.fake_post} />
      <View style={styles.fake_post} />
      <View style={styles.fake_post} />
    </View>
  );
};

export default Facebook;

const styles = StyleSheet.create({
  fake_post: {
    backgroundColor: '#e4e6eb',
    height: 200,
    margin: 16,
    borderRadius: 16,
  },
});
