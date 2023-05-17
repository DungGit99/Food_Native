/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { Fonts } from '../constants/Fonts';
import { Images } from '../constants/Images';

interface props {
  logo: any
  name: string
  activeCategory: any
  setActiveCategory: any
}

const CategoryMenu = ({ name, logo, activeCategory, setActiveCategory }: props) => {
  return (
    <TouchableOpacity
      onPress={() => setActiveCategory(name)}
      style={styles.category()}>
      <Image
        source={Images[logo]}
        style={styles.categoryIcon(activeCategory === name)}
      />
      <Text style={styles.categoryText(activeCategory === name)}>{name}</Text>
    </TouchableOpacity>
  );
};
type Style = {
  category: any
  categoryIcon: any
  categoryText: any
}
const styles = StyleSheet.create<Style>({
  category: (marginTop = 0) => ({
    alignItems: 'center',
    marginTop,
  }),
  categoryIcon: (isActive: boolean) => ({
    height: 40,
    width: 40,
    // opacity: isActive ? 1 : 0.5,
  }),
  categoryText: (isActive: boolean) => ({
    fontSize: 10,
    lineHeight: 10 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: Colors.DEFAULT_WHITE,
    marginTop: 5,
    // opacity: isActive ? 1 : 0.5,
  }),
});
export default CategoryMenu;
