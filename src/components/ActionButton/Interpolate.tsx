import React, { useState } from 'react';
import { StyleSheet, Switch } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';

const Colors = {
    dark: {
        background: '#1E1E1E',
        circle: '#252525',
        text: '#F8F8F8',
    },
    light: {
        background: '#F8F8F8',
        circle: '#FFF',
        text: '#1E1E1E',
    },
};


const Interpolate = () => {
    const [theme, setTheme] = useState('light');
    const progress = useDerivedValue(() => {
        return theme === 'dark' ? withTiming(1) : withTiming(0);
    }, [theme]);
    const rStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(progress.value, [0, 1], [Colors.light.background, Colors.dark.background]);
        return { backgroundColor };
    });


    return (
        <Animated.View style={[styles.container, rStyle]}>
            <Switch value={theme === 'dark'} onValueChange={(toggled) => {
                setTheme(toggled ? 'dark' : 'light');
            }} />
        </Animated.View>
    );
};

export default Interpolate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
