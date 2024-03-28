import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

const SearchBar = () => {
  const [keyword, setKeyWord] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const input_box_translate_x = useSharedValue(WINDOW_WIDTH);
  const back_button = useSharedValue(0);
  const content_translate_y = useSharedValue(WINDOW_HEIGHT);
  const content_opacity = useSharedValue(0);

  const onBlur = () => { };
  const onFocus = () => {
    setIsFocused(true);
    input_box_translate_x.value = withTiming(0, {
      duration: 200,
      easing: Easing.inOut(Easing.ease),
    });
    back_button.value = withTiming(1, {
      duration: 200,
      easing: Easing.inOut(Easing.ease),
    });
    content_translate_y.value = withTiming(0, {
      duration: 200,
      easing: Easing.inOut(Easing.ease),
    });
    content_opacity.value = withTiming(1, {
      duration: 200,
      easing: Easing.inOut(Easing.ease),
    });
  };

  return (
    <>

      <SafeAreaView style={styles.header_safe_area}>
        <View style={styles.header}>
          <View style={styles.header_inner}>
            <View>
              <Image style={styles.imageFace} source={require('../../assets/images/Facebook_Logo.png')} />
            </View>
            <TouchableHighlight activeOpacity={1} underlayColor={'#ccd0d5'} style={styles.search_icon}>
              <Ionicons
                name="search-outline"
                size={22}
                color={Colors.DEFAULT_BLACK}
                onPress={onFocus}
              />
            </TouchableHighlight>
            <Animated.View style={[styles.input_box, { transform: [{ translateX: input_box_translate_x }] }]}>
              <Animated.View style={{ opacity: back_button }}>
                <TouchableHighlight activeOpacity={1} underlayColor={'#ccd0d5'} style={styles.back_button}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={22}
                    color={Colors.DEFAULT_BLACK}
                    onPress={onBlur}
                  />
                </TouchableHighlight>
              </Animated.View>
              <TextInput
                style={styles.input}
                placeholder="Search"
                clearButtonMode="always"
                value={keyword}
                onChangeText={(value) => setKeyWord(value)}
              />
            </Animated.View>
          </View>
        </View>
      </SafeAreaView >
      <Animated.View style={[styles.content, { opacity: content_opacity, translateY: content_translate_y }]}>
        <SafeAreaView style={styles.content_safe_area} >
          <View style={styles.content_inner}>
            <View style={styles.separator} />
            {keyword === '' ? <View  >
              <Text>Enter a few words {'\n'}
                to search on Face
              </Text>
            </View> : <ScrollView >
              <View style={styles.search_item} >
                <Text >1</Text>
              </View>
            </ScrollView>}
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  header_safe_area: {
    zIndex: 1000,
  },
  header: {
    height: 50,
    paddingHorizontal: 16,
  },
  header_inner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageFace: { width: 150, height: 30, resizeMode: 'contain' },
  search_icon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#e4e6eb',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_box: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: WINDOW_WIDTH - 32,
    backgroundColor: 'white',
  },
  back_button: {
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#e4e6eb',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15,
  },
  content: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 999,
  },
  content_safe_area: {
    flex: 1,
    backgroundColor: 'white',
  },
  content_inner: {
    flex: 1,
    paddingTop: 50,
  },
  separator: {
    marginTop: 5,
    height: 1,
    backgroundColor: '#e6e4eb',
  },
  image_placeholder_container: {},

  search_item: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomColor: '#e6e4e',
  },
});
