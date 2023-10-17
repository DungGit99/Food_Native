import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants/Colors';
import { Fonts } from '../constants/Fonts';
// import { useDispatch } from 'react-redux';
// import { BookmarkAction } from '../actions';
// import { Colors, Fonts } from '../contants';
// import { StaticImageService } from '../services';

const RestaurantCard = ({
    id,
    name,
    // images: { poster },
    tags,
    distance,
    time,
    navigate,
}: any) => {

    const isBookmarked = '';
    const addBookmark = () => {

    };

    const removeBookmark = () => {

    };
    console.log('123');
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            onPress={() => navigate(id)}>
            <Ionicons
                // name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
                name={'bookmark'}
                color={Colors.DEFAULT_YELLOW}
                size={24}
                style={styles.bookmark}
                onPress={() => (isBookmarked ? removeBookmark() : addBookmark())}
            />
            <Image
                style={styles.posterStyle}
                source={require('../assets/images/tea.jpg')}
            />
            <Text style={styles.titleText}>{name}</Text>
            <Text style={styles.tagText}>{tags?.join(' • ')}</Text>
            {/* <View style={styles.footerContainer}>
                <View style={styles.rowAndCenter}>
                    <FontAwesome name="star" size={14} color={Colors.DEFAULT_YELLOW} />
                    <Text style={styles.ratingText}>4</Text>
                    <Text style={styles.reviewsText}>({10})</Text>
                </View>
                <View style={styles.rowAndCenter}>
                    <View style={styles.timeAndDistanceContainer}>
                        <Ionicons
                            name="location-outline"
                            color={Colors.DEFAULT_YELLOW}
                            size={15}
                        />
                        <Text style={styles.timeAndDistanceText}>{distance}</Text>
                    </View>
                    <View style={styles.timeAndDistanceContainer}>
                        <Ionicons
                            name="ios-time-outline"
                            color={Colors.DEFAULT_YELLOW}
                            size={15}
                        />
                        <Text style={styles.timeAndDistanceText}>{time}</Text>
                    </View>
                </View>
            </View> */}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.DEFAULT_WHITE,
        borderRadius: 10,
        elevation: 3,
        marginBottom: 5,
    },
    posterStyle: {
        width: 1920 * 0.15,
        height: 1080 * 0.15,
        borderRadius: 10,
        margin: 5,
    },
    titleText: {
        marginLeft: 8,
        fontSize: 15,
        lineHeight: 15 * 1.4,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_BLACK,
    },
    tagText: {
        marginLeft: 8,
        fontSize: 11,
        lineHeight: 11 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_GREY,
        marginBottom: 5,
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 8,
        marginBottom: 6,
        justifyContent: 'space-between',
    },
    rowAndCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeAndDistanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 3,
        backgroundColor: Colors.LIGHT_YELLOW,
        borderRadius: 12,
        marginHorizontal: 3,
    },
    timeAndDistanceText: {
        fontSize: 10,
        lineHeight: 10 * 1.4,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_YELLOW,
    },
    ratingText: {
        marginLeft: 5,
        fontSize: 10,
        lineHeight: 10 * 1.4,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_BLACK,
    },
    reviewsText: {
        fontSize: 10,
        lineHeight: 10 * 1.4,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_BLACK,
    },
    bookmark: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
    },
});

export default RestaurantCard;
