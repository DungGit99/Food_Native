import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Colors } from '../constants/Colors';

const { width } = Dimensions.get('window');

export default function SplashScreens({ navigation }: any) {
  // const navigation = useNavigation();
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, []);
  const handleDone = () => {
    navigation.navigate('HomeTabs');
    // setItem('onboarded', '1');
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.SECONDARY_RED}
        translucent
      />
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        // containerStyles={{paddingHorizontal: 15}}
        pages={[
          {
            backgroundColor: '#FF6F59',
            image: (
              <View >
                <LottieView style={styles.lottie} source={require('../assets/animations/food_text.json')} autoPlay loop />
              </View>
            ),
            title: '',
            subtitle: '',
          },
          {
            backgroundColor: '#FF6F59',
            image: (
              <View style={styles.lottie}>
                <LottieView style={styles.lottie} source={require('../assets/animations/food_market.json')} autoPlay loop />
              </View>
            ),
            title: '',
            subtitle: '',
          },
          {
            backgroundColor: '#FF6F59',
            image: (
              <View style={styles.lottie}>
                <LottieView style={styles.lottie} source={require('../assets/animations/food_delivery.json')} autoPlay loop />
              </View>
            ),
            title: '',
            subtitle: '',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
  },
});
