import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView, PinchGestureHandler, PinchGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const imageUri =
    'https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80';
const Pinch = () => {
    const scale = useSharedValue(1);
    const pinchHandler = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
        onActive: (e) => {
            scale.value = e.scale;
        },
        onEnd: () => {
            scale.value = withTiming(1);
        },
    });
    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });


    return (
        <GestureHandlerRootView style={styles.rootGesture}>
            <PinchGestureHandler onGestureEvent={pinchHandler}>
                <Animated.Image style={[{ flex: 1 }, rStyle]} source={{ uri: imageUri }} />
            </PinchGestureHandler>
        </GestureHandlerRootView>
    );
};

export default Pinch;

const styles = StyleSheet.create({
    rootGesture: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
