import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import Page from './Page';

const WORDS = ["What's", 'up', 'mobile', 'devs?'];

const Interpolate = () => {
    const translateX = useSharedValue(0);
    return (
        <Animated.ScrollView horizontal style={styles.container}>
            {WORDS.map((title, index) => {
                return (
                    <Page
                        key={index.toString()}
                        title={title}
                        translateX={translateX}
                        index={index}
                    />
                );
            })}
        </Animated.ScrollView>
    );
};

export default Interpolate;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
