
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SplashScreens } from '../screens';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import RegisterPhoneScreen from '../screens/RegisterPhoneScreen';
import VerificationScreen from '../screens/RegisterPhoneScreen/VerificationScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator();

const Navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Signin" component={SigninScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="HomeTabs" component={BottomTabs} />
                <Stack.Screen name="Splash" component={SplashScreens} />
                <Stack.Screen name="forgotPass" component={ForgotPasswordScreen} />
                <Stack.Screen name="registerPhone" component={RegisterPhoneScreen} />
                <Stack.Screen name="verification" component={VerificationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigators;
