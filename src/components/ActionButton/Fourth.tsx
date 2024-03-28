import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const Fourth = () => {
    const scale = useSharedValue(1);
    const rotate = useDerivedValue(() => {
        return `${scale.value * 2}rad`;
    });
    const scaleStyles = useAnimatedStyle(() => ({
        transform: [{
            scale: scale.value,
        }],
    }));
    const rotateStyles = useAnimatedStyle(() => ({
        transform: [{
            rotate: rotate.value,
        }],
    }));
    useEffect(() => {
        scale.value = withRepeat(withTiming(scale.value * 2, { duration: 1000 }), -1, true);
    }, []);

    return (
        <View style={styles.container} >
            <Animated.View style={[styles.ball, scaleStyles]} />
            <Animated.View style={[styles.box, rotateStyles]} />
        </View>
    );
};

export default Fourth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: '100%',
    },
    ball: {
        height: 50,
        width: 50,
        backgroundColor: '#b58df1',
        borderRadius: 50,
        marginRight: 80,
    },
    box: {
        height: 100,
        width: 100,
        backgroundColor: '#b58df1',
        borderRadius: 15,
    },
});
