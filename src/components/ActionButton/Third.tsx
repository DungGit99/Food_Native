
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, {
    useAnimatedProps,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { Circle, Svg } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Third = () => {
    const r = useSharedValue(20);

    const handlePress = () => {
        r.value += 10;
    };

    const animatedProps = useAnimatedProps(() => ({
        r: withTiming(r.value),
    }));

    return (
        <View style={styles.container}>
            <Svg style={styles.svg}>
                <AnimatedCircle
                    cx="50%"
                    cy="50%"
                    fill="#b58df1"
                    animatedProps={animatedProps}
                />
            </Svg>
            <Button onPress={handlePress} title="Click me" />
        </View>
    );
};

export default Third;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    svg: {
        height: 250,
        width: '100%',
    },
});
