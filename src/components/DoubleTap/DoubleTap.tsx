import React, { useCallback, useRef } from 'react';
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { Images } from '../../constants/Images';

const { width: SIZE } = Dimensions.get('window');
// const AnimatedImage = Animated.createAnimatedComponent(Image);
const DoubleTap = () => {
    const scale = useSharedValue(0);
    const rStyle = useAnimatedStyle(() => ({
        transform: [
            { scale: scale.value },
        ],
    }));
    const doubleTapRef = useRef();
    const onDoubleTap = useCallback(() => {
        scale.value = withTiming(1, undefined, (isFinished) => {
            if (isFinished) {
                scale.value = withDelay(500, withTiming(0));
            }
        });
    }, []);


    return (
        <GestureHandlerRootView style={styles.rootGesture} >
            <SafeAreaView style={styles.container}>
                {/*  */}
                <TapGestureHandler waitFor={doubleTapRef} onActivated={() => { console.log('single tap'); }}>
                    <TapGestureHandler maxDelayMs={250} ref={doubleTapRef} numberOfTaps={2} onActivated={onDoubleTap}>
                        <Animated.View>
                            {/* image */}
                            <ImageBackground source={Images.FOOD} resizeMode="contain">
                                <Animated.Image source={Images.HEART} style={[styles.image, rStyle]} resizeMode="center" />
                            </ImageBackground>
                            {/* --- */}
                        </Animated.View>

                    </TapGestureHandler>
                </TapGestureHandler>
                {/*  */}
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

export default DoubleTap;

const styles = StyleSheet.create({
    rootGesture: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: SIZE,
        height: SIZE,
        shadowOffset: { width: 0, height: 20 },
    },
});
