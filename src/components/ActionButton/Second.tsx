import React, { useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, { cancelAnimation, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const OFFSET = 200;

const Second = () => {
  const offset = useSharedValue(OFFSET);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{
      translateX: offset.value,
    }],
  }));

  const handleCancelAnimation = () => {

    cancelAnimation(offset);
  };
  const startAnimation = () => {
    offset.value = withRepeat(
      withTiming(offset.value > 0 ? -OFFSET : OFFSET, { duration: 1500 }),
      -1,
      true
    );
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
      <View style={styles.row}>
        <Button title="Cancel animation" onPress={handleCancelAnimation} />
        <Button title="Start animation" onPress={startAnimation} />
      </View>
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginBottom: 30,
  },
  row: {
    // flex: 1,
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    gap: 10,
  },
});
