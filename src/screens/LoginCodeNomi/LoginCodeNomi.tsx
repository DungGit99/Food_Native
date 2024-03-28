/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { FadeInUp } from 'react-native-reanimated';
// import { Text } from 'react-native-svg';
import { Colors } from '../../constants/Colors';

const LoginCodeNomi = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Image style={styles.imageBackground} source={require('../../assets/images/background.png')} />
            <View style={styles.light}>
                <Animated.Image
                    entering={FadeInUp.delay(200).duration(1000).springify()}
                    source={require('../../assets/images/light.png')}
                    style={styles.light_1}
                />
                <Animated.Image
                    entering={FadeInUp.delay(400).duration(1000).springify()}
                    source={require('../../assets/images/light.png')}
                    style={styles.light_2}
                />
            </View>
            <View style={styles.form} >
                <View style={{ alignItems: 'center' }}>
                    <Animated.Text entering={FadeInUp.duration(1000).springify()} style={{ fontWeight: 'bold', color: '#fff', fontSize: 30 }}> Login</Animated.Text>
                </View>
                <View style={styles.inputContainer}>
                    <Animated.View style={styles.inputSubContainer} entering={FadeInUp.delay(200).duration(1000).springify()}>
                        <TextInput style={styles.inputText} keyboardType="email-address" placeholder="Email" placeholderTextColor={'#fff'} />
                    </Animated.View >
                    <Animated.View style={styles.inputSubContainer} entering={FadeInUp.delay(400).duration(1000).springify()}>
                        <TextInput style={styles.inputText} placeholder="Password" placeholderTextColor={'#fff'} />
                    </Animated.View >
                    <Animated.View style={styles.inputSubmit} entering={FadeInUp.delay(600).duration(1000).springify()}>
                        <TouchableOpacity >
                            <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}> Login</Text>
                        </TouchableOpacity>
                    </Animated.View >
                </View>
            </View>
        </View>
    );
};

export default LoginCodeNomi;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    light: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    light_1: {
        height: 225,
        width: 90,
    },
    light_2: {
        height: 160,
        width: 65,
    },
    form: {
        width: '100%',
        height: '100%',
    },
    inputContainer: {
        width: '100%',
        position: 'absolute',
        bottom: '50%',

    },
    inputSubContainer: {
        backgroundColor: Colors.DEFAULT_GREY,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginHorizontal: 30,
        marginBottom: 10,
    },
    inputText: {
        // margin: 10,

    },
    inputSubmit: {
        backgroundColor: Colors.GOOGLE_BLUE,
        borderRadius: 8,
        marginHorizontal: 30,
        paddingVertical: 10,
    },

});
