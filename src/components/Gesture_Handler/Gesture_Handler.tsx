import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const Gesture_Handler = () => {
    const translateX = useSharedValue(0);
    const gesture = Gesture.Pan().onUpdate((e) => {
        console.log(e);
        translateX.value = e.translationX;
    });
    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });
    return (
        <View style={styles.container}>
            <GestureDetector gesture={gesture}>
                <Animated.View style={[rStyle, styles.circle]} />
            </GestureDetector>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        aspectRatio: 1,
        height: 80,
        backgroundColor: 'blue',
        borderRadius: 40,
        opacity: 0.8,
    },
});

export default Gesture_Handler;
