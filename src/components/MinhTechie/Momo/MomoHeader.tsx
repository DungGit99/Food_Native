/* eslint-disable react/react-in-jsx-scope */
import { useRef } from 'react';
import { Animated, Dimensions, Image, ScrollView, StatusBar, StyleSheet, TextInput, View } from 'react-native';
// import { height } from '../../../constants/Dimensions';


const getFeatureViewAnimation = (animatedValue, outputX: number) => {
  const TRANSLATE_X_INPUT_RANGE = [0, 80];
  const translateY = {
    translateY: animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, -55],
      extrapolate: 'clamp',
    }),
  };
  return {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: TRANSLATE_X_INPUT_RANGE,
          outputRange: [0, outputX],
          extrapolate: 'clamp',
        }),
      },
      translateY,
    ],
  };
};

const { height: WINDOW_HEIGHT } = Dimensions.get('window');
export default function MomoHeader() {
  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');

  const textInputAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const featureNameAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 30],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      }],
    opacity: animatedValue.interpolate({
      inputRange: [0, 30],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const depositViewAnimation = getFeatureViewAnimation(animatedValue, 36);
  const withdrawViewAnimation = getFeatureViewAnimation(animatedValue, -16);
  const qrViewAnimation = getFeatureViewAnimation(animatedValue, -56);
  const scanViewAnimation = getFeatureViewAnimation(animatedValue, -92);
  const featureIconCircleAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const featureIconAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };
  return (
    <View style={styles.container} >
      <StatusBar barStyle="light-content" backgroundColor="#AF0C6E" />
      <View style={styles.upperHeaderPlaceholder} />
      <View style={styles.header}>
        <View style={styles.upperHeader}>
          <View style={styles.searchContainer}>
            <Image
              source={require('../../../assets/images/momo/search.png')}

              style={styles.searchIcon}
            />
            <AnimatedTextInput
              placeholder="Tìm kiếm"
              placeholderTextColor="rgba(255, 255, 255, 0.8)"
              style={[styles.searchInput, textInputAnimation]}
            />
          </View>
          <Image
            source={require('../../../assets/images/momo/bell.png')}
            style={styles.bell}
          />
          <Image
            source={require('../../../assets/images/momo/avatar.png')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.lowerHeader}>
          <Animated.View style={[styles.feature, depositViewAnimation]}>
            <Animated.Image
              source={require('../../../assets/images/momo/deposit-circle.png')}
              style={[styles.featureIconCircle, featureIconCircleAnimation]}
            />
            <Animated.Image
              source={require('../../../assets/images/momo/deposit.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />

            <Animated.Text style={[styles.featureName, featureNameAnimation]}>Nạp Tiền</Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, withdrawViewAnimation]}>

            <Animated.Image
              source={require('../../../assets/images/momo/withdraw.png')}
              style={[styles.featureIcon, featureIconAnimation]}
            />
            <Animated.Image
              source={require('../../../assets/images/momo/withdraw-circle.png')}
              style={[styles.featureIconCircle, featureIconCircleAnimation]}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>Nạp Tiền</Animated.Text>
          </Animated.View>
          <View style={styles.feature}>
            <Image
              source={require('../../../assets/images/momo/qr.png')}
              style={styles.featureIcon}
            />
            <Image
              source={require('../../../assets/images/momo/qr-circle.png')}
              style={styles.featureIconCircle}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>Nạp Tiền</Animated.Text>
          </View>
          <View style={styles.feature}>
            <Image
              source={require('../../../assets/images/momo/scan.png')}
              style={styles.featureIcon}
            />
            <Image
              source={require('../../../assets/images/momo/scan-circle.png')}
              style={styles.featureIconCircle}
            />
            <Animated.Text style={[styles.featureName, featureNameAnimation]}>Nạp Tiền</Animated.Text>
          </View>
        </View>
      </View>
      <ScrollView

        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          scrollDirection.current =
            offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
          lastOffsetY.current = offsetY;
          animatedValue.setValue(offsetY);
        }}
        onScrollEndDrag={() => {
          scrollViewRef.current?.scrollTo({
            y: scrollDirection.current === 'down' ? 100 : 0,
            animated: true,
          });
        }}
        scrollEventThrottle={16}>
        <View style={styles.paddingForHeader} />
        <View style={styles.scrollViewContent}>
          {/*  */}
        </View>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperHeaderPlaceholder: {
    height: 40,
  },
  header: {
    position: 'absolute',
    width: '100%',
    height: 136,
    backgroundColor: '#AF0C6E',
  },
  upperHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 16,
  },
  paddingForHeader: {
    height: 96,
  },
  scrollViewContent: {
    height: WINDOW_HEIGHT * 2,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  searchInput: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: 'white',
    borderRadius: 20,
    paddingVertical: 4,
    paddingLeft: 32,
  },
  bell: {
    width: 16,
    height: 16,
    marginHorizontal: 32,
  },
  avatar: {
    width: 28,
    height: 28,
  },
  lowerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    height: 96,
  },
  feature: {
    alignItems: 'center',
  },
  featureName: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    marginTop: 12,
  },
  featureIconCircle: {
    width: 32,
    height: 32,
  },
  featureIcon: {
    width: 16,
    height: 16,
    position: 'absolute',
    top: 8,
  },
});
