import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import First from './First';
import Fourth from './Fourth';
import Interpolate from './Interpolate';
import Second from './Second';
import Third from './Third';


const ActionButton = () => {
    const [type, setType] = useState('first');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Button title="First Type" onPress={() => setType('first')} />
                <Button title="Cancel Animation" onPress={() => setType('second')} />
                <Button title="useAnimatedProps" onPress={() => setType('third')} />
                <Button title="useDerivedValue" onPress={() => setType('fourth')} />
                <Button title="interpolate" onPress={() => setType('interpolate')} />
            </ScrollView>
            {type === 'first' && <First />}
            {type === 'second' && <Second />}
            {type === 'third' && <Third />}
            {type === 'fourth' && <Fourth />}
            {type === 'interpolate' && <Interpolate />}
        </SafeAreaView>
    );
};

export default ActionButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginVertical: 30,
    },
});
