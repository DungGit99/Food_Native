/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Separator from '../components/Separator';
import { Colors } from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
// import AntDesign from 'react-native-vector-icons/AntDesign';
export default function SignupScreen({ navigation }: any) {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const inputStyle = (state: string) => {
    // switch (state) {
    //   case 'valid':
    //     return {
    //       ...styles.inputContainer,
    //       borderWidth: 1,
    //       borderColor: Colors.SECONDARY_GREEN,
    //     };
    //   case 'invalid':
    //     return {
    //       ...styles.inputContainer,
    //       borderWidth: 1,
    //       borderColor: Colors.DEFAULT_RED,
    //     };
    //   default:
    //     return styles.inputContainer;
    // }
  };

  const showMarker = (state: string) => {
    // switch (state) {
    //   case 'valid':
    //     return (
    //       <AntDesign
    //         name="checkcircleo"
    //         color={Colors.SECONDARY_GREEN}
    //         size={18}
    //         style={{ marginLeft: 5 }}
    //       />
    //     );
    //   case 'invalid':
    //     return (
    //       <AntDesign
    //         name="closecircleo"
    //         color={Colors.DEFAULT_RED}
    //         size={18}
    //         style={{ marginLeft: 5 }}
    //       />
    //     );
    //   default:
    //     return null;
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      {/*  */}
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Đăng Ký</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="user"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
            onChangeText={text => setUsername(text)}
          // onEndEditing={({ nativeEvent: { text } }) =>
          //   checkUserExist('username', text)
          // }
          />
          {/* {showMarker(usernameState)} */}
        </View>
      </View>
      <Text style={styles.errorMessage} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="mail"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
            onChangeText={text => setEmail(text)}
          // onEndEditing={({ nativeEvent: { text } }) =>
          //   checkUserExist('email', text)
          // }
          />
          {/* {showMarker(emailState)} */}
        </View>
      </View>
      <Text style={styles.errorMessage} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="lock"
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
          />
          <TextInput
            secureTextEntry={isPasswordShow ? false : true}
            placeholder="Password"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            style={styles.inputText}
            onChangeText={text => setPassword(text)}
          />
          <Feather
            name={isPasswordShow ? 'eye' : 'eye-off'}
            size={22}
            color={Colors.DEFAULT_GREY}
            style={{ marginRight: 10 }}
            onPress={() => setIsPasswordShow(!isPasswordShow)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.signinButton} onPress={() => navigation.navigate('registerPhone')}>
        <Text style={styles.signinButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    // fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Dimensions.setWidth(80),
    textAlign: 'center',
  },

  inputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    marginHorizontal: 30,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: Dimensions.setHeight(6),
    color: Colors.DEFAULT_BLACK,
    flex: 1,
  },

  signinButton: {
    backgroundColor: Colors.DEFAULT_ORANGE,
    borderRadius: 8,
    marginHorizontal: 30,
    height: Dimensions.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {

  },
  errorMessage: {},
});
