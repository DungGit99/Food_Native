import React, { useState } from 'react';

import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Separator, ToggleButton } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';
import Separator from '../components/Separator';
import { Colors } from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import { Fonts } from '../constants/Fonts';
import { Images } from '../constants/Images';
const ProfileScreens = ({ navigation }: any) => {
  const [selectImage, setSelectImage] = useState('');
  const uploadImage = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    } as any;
    launchImageLibrary(options, res => {
      setSelectImage(res.assets[0].uri);
    });
  };
  console.log(selectImage);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_ORANGE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View>
        <View style={styles.backgroundCurvedContainer} />
        {/* title  */}
        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={20}
            color={Colors.DEFAULT_WHITE}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Sửa thông tin 1</Text>
          <View>
            <View >
              <Text style={styles.saveProfileText}>Lưu</Text>
            </View>
          </View>
        </View>
        <Separator height={StatusBar.currentHeight} />
        <View style={styles.profileHeaderContainer}>
          <View style={styles.profileImageContainer}>
            <Image style={styles.profileImage} source={selectImage === '' ? Images.AVATAR : { uri: selectImage }} />
            <TouchableOpacity onPress={uploadImage} style={styles.uploadImage} activeOpacity={0.8}>
              <View style={{ ...styles.menuIcon, backgroundColor: Colors.DARK_THREE }}>
                <MaterialCommunityIcons
                  name="camera"
                  size={18}
                  color={Colors.SECONDARY_WHITE}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.mainContainer}>
        {/* <Text style={styles.sectionHeaderText}>My Account</Text> */}
        <TouchableOpacity style={styles.sectionContainer} activeOpacity={0.8}>
          <View style={styles.sectionTextContainer}>
            <Ionicons
              name="person-outline"
              size={18}
              color={Colors.DEFAULT_ORANGE}
            />
            <Text style={styles.sectionText}>Dũng</Text>
          </View>
          <Feather
            name="chevron-right"
            color={Colors.INACTIVE_GREY}
            size={20}
            onPress={() => navigation.navigate('profile')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer} activeOpacity={0.8}>
          <View style={styles.sectionTextContainer}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={18}
              color={Colors.DEFAULT_ORANGE}
            />
            <Text style={styles.sectionText}>Mật khẩu</Text>
          </View>
          <Feather
            name="chevron-right"
            color={Colors.INACTIVE_GREY}
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionContainer} activeOpacity={0.8}>
          <View style={styles.sectionTextContainer}>
            <MaterialCommunityIcons
              name="email-outline"
              size={18}
              color={Colors.DEFAULT_ORANGE}
            />
            <Text style={styles.sectionText}>vandungcode@gmail.com</Text>
          </View>
          <Feather
            name="chevron-right"
            color={Colors.INACTIVE_GREY}
            size={20}
          />
        </TouchableOpacity>

        {/* <Text style={styles.sectionHeaderText}>Notification</Text> */}
        <View style={styles.sectionContainer} >
          <View style={styles.sectionTextContainer}>
            <Feather name="phone-call" size={18} color={Colors.DEFAULT_ORANGE} />
            <Text style={styles.sectionText}>0929588983</Text>
          </View>
          {/* <ToggleButton size={0.5} /> */}
        </View>
        {/* <View style={styles.sectionContainer} >
          <View style={styles.sectionTextContainer}>
            <Feather name="bell" size={18} color={Colors.DEFAULT_ORANGE} />
            <Text style={styles.sectionText}>Promos & Offers Notification</Text>
          </View>
          <ToggleButton size={0.5} />
        </View> */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionTextContainer}>
            <MaterialCommunityIcons
              name="map-marker"
              size={18}
              color={Colors.DEFAULT_ORANGE}
            />
            <Text style={styles.sectionText}>106 Hồ Quý Ly</Text>
          </View>
          {/* <ToggleButton size={0.5} /> */}
        </View>
        {/* <Text style={styles.sectionHeaderText}>More</Text> */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionTextContainer}>
            <MaterialCommunityIcons
              name="cake-variant-outline"
              size={18}
              color={Colors.DEFAULT_ORANGE}
            />
            <Text style={styles.sectionText}>09/09/1997</Text>
          </View>
          {/* <ToggleButton size={0.5} /> */}
        </View>
        <View style={styles.sectionContainer}>
          <TouchableOpacity
            style={styles.sectionTextContainer}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons
              name="human-male-female"
              size={18}
              color={Colors.DEFAULT_ORANGE}
            />
            <Text style={styles.sectionText}>Giới tính</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_WHITE,
  },
  backgroundCurvedContainer: {
    backgroundColor: Colors.DEFAULT_ORANGE,
    height: 2000,
    position: 'absolute',
    top: -1 * (2000 - 230),
    width: 2000,
    // borderRadius: 2000,
    alignSelf: 'center',
    zIndex: -1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Dimensions.setWidth(80),
    textAlign: 'center',
    color: Colors.DEFAULT_WHITE,
  },
  saveProfileText: {
    color: Colors.DEFAULT_WHITE,
  },
  profileHeaderContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
    // marginTop: 30,
  },
  profileImageContainer: {
    // position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    // padding: 1,
  },
  profileImage: {
    position: 'absolute',
    width: Dimensions.setWidth(24),
    height: Dimensions.setWidth(24),
    borderRadius: 50,
    borderColor: Colors.DARK_FIVE,
  },
  uploadImage: {
    marginLeft: 100,
    marginTop: 20,
  },
  menuIcon: {
    // position: 'absolute',
    backgroundColor: Colors.LIGHT_GREEN,
    height: Dimensions.setWidth(8),
    width: Dimensions.setWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    // marginRight: 0,
  },
  //
  mainContainer: {
    marginHorizontal: 20,
    marginTop: 120,
    backgroundColor: Colors.DEFAULT_WHITE,
    elevation: 3,
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingBottom: 20,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    lineHeight: 14 * 1.4,
    color: Colors.DEFAULT_BLACK,
    marginTop: 25,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  sectionTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 13,
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 13 * 1.4,
    color: Colors.INACTIVE_GREY,
    marginLeft: 10,
  },
});

export default ProfileScreens;
