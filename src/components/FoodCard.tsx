import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import { Fonts } from '../constants/Fonts';



const FoodCard = ({ navigate }: any) => {

    // const addToCart = foodId => dispatch(CartAction.addToCart({ foodId }));
    const addToCart = (foodId: string) => {
        return foodId;
    };
    const removeFromCart = (foodId: string) => {
        return foodId;
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate()} activeOpacity={0.8}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/tea.jpg')}
                />
            </TouchableOpacity>
            <View style={styles.detailsContainer}>
                <TouchableOpacity onPress={() => navigate()} activeOpacity={0.8}>
                    <Text numberOfLines={1} style={styles.titleText}>
                        Trà Sen Brulee Trứng

                    </Text>
                    <Text numberOfLines={2} style={styles.descriptionText}>
                        {/* {description} */}
                    </Text>
                </TouchableOpacity>
                <View style={styles.footerContainer}>
                    <Text style={styles.priceText}>
                        20,000 đ
                    </Text>
                    <View style={styles.itemAddContainer}>
                        <Ionicons name="remove-circle-outline" size={23} />
                        <Text style={styles.itemCountText}>{2}</Text>
                        {/* {itemCount > 0 ? (
                            <>
                                <AntDesign
                                    name="minus"
                                    color={Colors.DEFAULT_YELLOW}
                                    size={18}
                                    onPress={() => removeFromCart(id)}
                                />
                                <Text style={styles.itemCountText}>{itemCount}</Text>
                            </>
                        ) : null} */}

                        {/* <AntDesign
                            name="plus"
                            color={Colors.DEFAULT_YELLOW}
                            size={18}
                        // onPress={() => addToCart(1)}
                        /> */}
                        <Ionicons name="add-circle-outline" size={23} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 10,
        elevation: 2,
        backgroundColor: Colors.LIGHT_GREY,
    },
    image: {
        height: 100,
        width: 100,
        margin: 6,
        borderRadius: 8,
    },
    detailsContainer: {
        marginHorizontal: 5,
    },
    titleText: {
        width: Dimensions.setWidth(60),
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_BOLD,
        fontSize: 13,
        lineHeight: 13 * 1.4,
        marginBottom: 8,
    },
    descriptionText: {
        width: Dimensions.setWidth(60),
        color: Colors.DEFAULT_GREY,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        fontSize: 10,
        lineHeight: 10 * 1.4,
        marginBottom: 8,
    },
    priceText: {
        color: Colors.DEFAULT_YELLOW,
        fontFamily: Fonts.POPPINS_BOLD,
        fontSize: 14,
        lineHeight: 14 * 1.4,
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    itemAddContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.LIGHT_GREY2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    itemCountText: {
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM,
        fontSize: 14,
        lineHeight: 14 * 1.4,
        marginHorizontal: 8,
    },
});

export default FoodCard;
