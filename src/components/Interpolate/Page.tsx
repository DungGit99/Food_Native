import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';

interface PageProps {
    index: number;
    translateX: Animated.SharedValue<number>;
    title: string;
}
const { height, width } = Dimensions.get('window');
const Page: React.FC<PageProps> = () => {
    return (
        <View style={{ height, width, backgroundColor: 'blue' }} />
    );
};

export default Page;

const styles = StyleSheet.create({});
