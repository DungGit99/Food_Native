import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';

const RInterpolate = () => {
    const [clicked, setclicked] = useState<Boolean>(false);
    const animation = useSharedValue(1);
    const animationStyle = useAnimatedStyle(() => {
        const width = interpolate(animation.value, [1, 0], [100, 200]);
        const bgColor = interpolateColor(animation.value, [1, 0], ['orange', 'purple']);
        const bdradius = interpolate(animation.value, [1, 0], [0, 100]);
        return {
            width: width,
            height: width,
            backgroundColor: bgColor,
            borderRadius: bdradius,
            // width: animation.value === 1 ? 100 : 200,
            // height: animation.value === 1 ? 100 : 200,
        };
    });
    const onStart = () => {
        if (clicked) {
            animation.value = withSpring(1);
        } else {
            animation.value = withSpring(0);
        }
        setclicked(!clicked);
    };
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, animationStyle]} />
            <TouchableOpacity style={styles.btn} onPress={onStart}>
                <Text>Start Animation</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RInterpolate;

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
    btn: {
        width: 200,
        height: 50,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});
