import React, { useRef } from 'react';
import { Animated, Dimensions, PanResponder, StyleSheet, View } from 'react-native';

const BOTTOM_SHEET_MAX_HEIGHT = Dimensions.get('window').height * 0.6;
const BOTTOM_SHEET_MIN_HEIGHT = Dimensions.get('window').height * 0.1;

const DraggableBottomSheet = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {

      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: () => { },
    })
  ).current;
  const bottomSheetAnimation = {
    transform: [{ translateY: animatedValue }],
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]} >
        <View style={styles.draggableArea}{...panResponder.panHandlers}>
          <View style={styles.dragHandle} />
        </View>
      </Animated.View>
    </View >
  );
};

export default DraggableBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'White',
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT, //0
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    elevation: 3, // android
  },
  draggableArea: {
    width: 100,
    height: 32,
    // backgroundColor: 'red',
    justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
  },
});
