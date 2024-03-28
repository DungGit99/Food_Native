
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import { Fonts } from '../constants/Fonts';
type Props = {
	name: string,
	image: string,
	time: string,
	distance: number,
	tags: []
}

const RestaurantMediumCard = (props: Props) => {
	const { name, image, time, distance, tags } = props;
	return (
		<View style={styles.container}>
			<View>
				<Image
					source={require('../assets/images/food7.png')}
					style={styles.posterStyle}
				/>
			</View>
			<View style={styles.labelContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>{name}</Text>
					<View style={styles.rowAndCenter}>
						<FontAwesome name="star" size={14} color={Colors.DEFAULT_YELLOW} />
						<Text style={styles.ratingText}>4.2</Text>
						<Text style={styles.reviewsText}>({233})</Text>
					</View>
				</View>
				<Text style={styles.tagsText}>{tags?.join(' • ')}</Text>
				<View style={styles.deliveryDetailsContainer}>
					<View style={styles.rowAndCenter}>
						{/* <Image
							source={Images.DELIVERY_CHARGE}
							style={styles.deliveryDetailsIcon}
						/> */}
						<Text style={styles.deliveryDetailsText}>Free Delivery</Text>
					</View>
					<View style={styles.rowAndCenter}>
						<Ionicons
							name="time-outline"
							size={14}
							color={Colors.DARK_THREE}
						/>
						<Text style={styles.deliveryDetailsText}>{time} min</Text>
					</View>
					<View style={styles.rowAndCenter}>
						<Ionicons
							name="location-outline"
							size={14}
							color={Colors.DARK_THREE}
						/>
						<Text style={styles.deliveryDetailsText}>{distance}</Text>
					</View>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 15,
		elevation: 1,
		borderRadius: 8,
		backgroundColor: Colors.DEFAULT_WHITE,
		marginTop: 8,
	},
	posterStyle: {
		width: Dimensions.setWidth(20),
		height: Dimensions.setWidth(20),
		borderRadius: 10,
		margin: 5,
	},
	labelContainer: {
		flex: 1,
		marginHorizontal: 8,
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	deliveryDetailsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	titleText: {
		fontSize: 14,
		lineHeight: 14 * 1.4,
		fontFamily: Fonts.POPPINS_BOLD,
		color: Colors.DEFAULT_BLACK,
		marginBottom: 5,
	},
	tagsText: {
		fontSize: 11,
		lineHeight: 11 * 1.4,
		fontFamily: Fonts.POPPINS_MEDIUM,
		color: Colors.DEFAULT_GREY,
		marginBottom: 7,
	},
	deliveryDetailsText: {
		marginLeft: 3,
		fontSize: 12,
		lineHeight: 12 * 1.4,
		fontFamily: Fonts.POPPINS_SEMI_BOLD,
		color: Colors.DEFAULT_BLACK,
	},
	deliveryDetailsIcon: {
		height: 16,
		width: 16,
	},
	rowAndCenter: {
		flexDirection: 'row',
		alignItems: 'center',
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
		fontFamily: Fonts.POPPINS_MEDIUM,
		color: Colors.DEFAULT_BLACK,
	},
});
export default RestaurantMediumCard;
