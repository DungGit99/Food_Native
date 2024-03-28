import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const DraggableComponent = () => {
    const animation = useSharedValue({ x: 0, y: 0 });
    const gesture = Gesture.Pan()
        .onStart((e) => {
            animation.value = {
                x: e.translationX,
                y: e.translationY,
            };
        })
        .onUpdate((e) => {
            animation.value = {
                x: e.translationX,
                y: e.translationY,
            };
        })
        .onEnd((e) => {
            animation.value = {
                x: withTiming(0, { duration: 1000 }),
                y: withSpring(0),
            };
        });
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: animation.value.x },
                { translateY: animation.value.y },
            ],
        };
    });

    return (
        <GestureDetector gesture={gesture}>
            <View style={styles.container}>
                <Animated.View style={[styles.box, animatedStyle]} />
            </View>
        </GestureDetector>

    );
};

export default DraggableComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
    },
});
