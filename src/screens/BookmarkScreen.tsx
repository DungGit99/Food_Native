import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
const BookmarkScreen = () => {
	const width = useSharedValue(100);
	const handlePress = () => {
		width.value = withSpring(width.value + 50);
	};
	return (
		<View style={styles.container}>
			<Animated.View
				style={{
					width,
					height: 100,
					backgroundColor: 'violet',
				}}
			/>
			<Button onPress={handlePress} title="Click me" />
		</View>
	);
};

export default BookmarkScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1, alignItems: 'center', justifyContent: 'center',
	},

});
