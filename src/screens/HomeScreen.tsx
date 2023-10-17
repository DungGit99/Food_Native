/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CategoryMenu from '../components/CategoryMenu';
import RestaurantCard from '../components/RestaurantCard';
import Separator from '../components/Separator';
import { CATEGORIES } from '../constants/Categories';
import { Colors } from '../constants/Colors';
import { Fonts } from '../constants/Fonts';


interface propsMenu {
  logo: string
  name: string
}

const HomeScreen = ({ navigation }: any) => {
  const [activeCategory, setActiveCategory] = useState<any>();
  const [restaurants, setRestaurants] = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.DEFAULT_ORANGE} barStyle="light-content" translucent />
      <Separator height={StatusBar.currentHeight} />
      {/* header */}
      <View style={styles.backgroundCurvedContainer} />
      <View style={styles.headerContainer}>
        <View style={styles.locationContainer}>
          <Ionicons
            name="location-outline"
            size={15}
            color={Colors.DEFAULT_WHITE}
          />
          <Text style={styles.locationText}>Giao đến</Text>
          <Text style={styles.selectedLocationText}>106 Hồ Quý Ly</Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={16}
            color={Colors.DEFAULT_YELLOW}
          />
          <Feather
            name="bell"
            size={24}
            color={Colors.DEFAULT_WHITE}
            style={{ position: 'absolute', right: 0 }}
          />
          <View style={styles.alertBadge}>
            <Text style={styles.alertBadgeText}>12</Text>
          </View>
        </View>
      </View>
      {/* header */}
      {/* search */}
      <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
          <Ionicons
            name="search-outline"
            size={25}
            color={Colors.DARK_THREE}
          />
          <TextInput style={styles.searchText} placeholder="Tìm kiếm ..." />
        </View>
        <Feather
          name="sliders"
          size={20}
          color={Colors.DARK_THREE}
          style={{ marginRight: 10 }}
        />
      </View>
      {/* menu categories */}
      <View style={styles.categoriesContainer}>
        {CATEGORIES.map(({ name, logo }: propsMenu) => (
          <CategoryMenu
            key={name}
            name={name}
            logo={logo}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </View>
      <ScrollView style={styles.listContainer}>
        <View style={styles.horizontalListContainer} >
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderTitle}>Top Rated</Text>
            <Text style={styles.listHeaderSubtitle}>See All</Text>
          </View>
          <FlatList
            data={restaurants}
            keyExtractor={item => item?.id}
            horizontal
            ListHeaderComponent={() => <Separator width={20} />}
            ListFooterComponent={() => <Separator width={20} />}
            ItemSeparatorComponent={() => <Separator width={10} />}
            renderItem={({ item }) => (
              <RestaurantCard
                {...item}
                navigate={(restaurantId: number) =>
                  navigation.navigate('Restaurant', { restaurantId })
                }
              />
            )}
          />
        </View>
      </ScrollView>
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
    justifyContent: 'space-between',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 20,
  },
  locationText: {
    color: Colors.DEFAULT_WHITE,
    marginLeft: 5,
    fontSize: 13,
    lineHeight: 13 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  selectedLocationText: {
    color: Colors.DEFAULT_WHITE,
    marginLeft: 5,
    fontSize: 12,
    lineHeight: 14 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  alertBadge: {
    borderRadius: 32,
    backgroundColor: Colors.DEFAULT_YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
    height: 16,
    width: 16,
    position: 'absolute',
    right: -2,
    top: -10,
  },
  alertBadgeText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 10,
    lineHeight: 10 * 1.4,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  searchContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    height: 45,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  searchText: {
    color: Colors.DEFAULT_GREY,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginLeft: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  listContainer: {},
  horizontalListContainer: {},
  listHeader: {},
  listHeaderTitle: {},
  listHeaderSubtitle: {},
});


export default HomeScreen;
