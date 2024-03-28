import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

export default function HomeReanimated() {
    const navigation = useNavigation();
    const widthR = useSharedValue(100);
    const animation = useSharedValue(0);
    const animationStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: animation.value }],
        };
    });
    const handlePress = () => {
        widthR.value = widthR.value + 50;
        animation.value = 200;
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[{ ...styles.box, width: widthR }, animationStyle]} />
            <Button onPress={handlePress} title="Click me" />
            {/*  --- */}
            <Text onPress={() => navigation.navigate('RInterpolate')}>Interpolate</Text>
            <Text onPress={() => navigation.navigate('DraggableComponent')}>DraggableComponent</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        height: 100,
        // width: 100,
        backgroundColor: '#b58df1',
        borderRadius: 20,
        marginVertical: 64,
    },
});
