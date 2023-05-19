
import React, { useState } from 'react';
import { FlatList, Image, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Separator from '../../components/Separator';
import { Colors } from '../../constants/Colors';
import CountryCodes from '../../constants/CountryCodes';
import { getFlagIcon } from '../../helper';
import FlagItem from './FlagItem';
import { styles } from './styles';

interface Country {
  name: string;
  dial_code: string;
  code: string;
}


const getDropdownStyle = (y: any) => ({ ...styles.countryDropdown, top: y + 60 });

export default function RegisterPhoneScreen({ navigation }: any) {
  const [selectedCountry, setSelectedCountry] = useState<any>(
    CountryCodes.find(country => country.name === 'Viet Nam'),
  );
  const [inputsContainerY, setInputsContainerY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownLayout, setDropdownLayout] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Phone</Text>
      </View>
      <View style={styles.inputsContainer}>
        <TouchableOpacity
          style={styles.countryListContainer}
          onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
          <Image
            source={{ uri: getFlagIcon(selectedCountry.code) }}
            style={styles.flatIcon}
          />
          <Text style={styles.countryCodeText}>
            {selectedCountry.dial_code}
          </Text>
          <MaterialIcons name="keyboard-arrow-down" size={18} />
        </TouchableOpacity>
        <View style={styles.phoneInputContainer}>
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            keyboardType="number-pad"
            onFocus={() => setIsDropdownOpen(false)}
            style={styles.inputText}
            onChangeText={text =>
              setPhoneNumber(selectedCountry?.dial_code + text)
            }
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.signinButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('verification', { phoneNumber })}>
        <Text style={styles.signinButtonText} >Tiếp tục</Text>
      </TouchableOpacity>
      {isDropdownOpen && (
        <View
          style={getDropdownStyle(inputsContainerY)}
          onLayout={({
            nativeEvent: {
              layout: { x, y, height, width },
            },
          }) => setDropdownLayout({ x, y, height, width })}>
          <FlatList
            data={CountryCodes}
            keyExtractor={item => item.code}
            renderItem={({ item }) => (
              <FlagItem
                {...item}
                onPress={(country: any) => {
                  setSelectedCountry(country);
                  setIsDropdownOpen(false);
                }}
              />
            )}
          />
        </View>
      )}
    </View>
  );
}
