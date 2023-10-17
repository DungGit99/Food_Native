import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Separator from '../../components/Separator';
import { Colors } from '../../constants/Colors';
// import { Images } from '../constants/Images';
import styles from './ChatFood.style';
const ChatFoodScreen = ({ navigation }: any) => {
	const [messages, setMessages] = useState([]);
	const onSend = useCallback((messages = []) => {
		setMessages(previousMessages =>
			GiftedChat.append(previousMessages, messages),
		);
	}, []);
	useEffect(() => {
		setMessages([
			{
				_id: 1,
				text: 'Food xin chào !',
				createdAt: new Date(),
				user: {
					_id: 2,
					name: 'React Native',
					avatar: 'https://st3.depositphotos.com/8950810/17657/v/450/depositphotos_176577870-stock-illustration-cute-smiling-funny-robot-chat.jpg',
				},
				// video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
			},
		] as any);
		fetch(
			'https://dummyjson.com/products/1')
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				// this.setState({
				// 	items: json,
				// 	DataisLoaded: true,
				// });
			});
	}, []);
	console.log('123');
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
				<Text style={styles.headerTitle}>Chat</Text>
			</View>
			<GiftedChat
				placeholder="Gửi tin nhắn..."
				messages={messages}
				onSend={messages => onSend(messages as any)}
				user={{
					_id: 1,
				}}
				renderInputToolbar={(props) => {
					return (
						<InputToolbar
							{...props}
							containerStyle={styles.customtInputToolbar}
							renderActions={() => (
								<Feather
									name="smile"
									size={24}
									style={styles.customtInputToolbar_smile}
									color={Colors.DEFAULT_WHITE}
								/>)}
						/>);
				}}
				// renderDay={(props) => {
				// 	// console.log(props);
				// 	return props.currentMessage._id === 1 && <Text style={styles.customDay}> {dateFormat(props.currentMessage.createdAt, 'dd/mm/yyyy')}</Text>;
				// }}
				renderSend={(props) => {
					return (
						<Send {...props}>
							<View style={styles.sendButton}>
								<Feather
									name="send"
									size={24}
									color={Colors.DEFAULT_ORANGE}
								/>
							</View>
						</Send>
					);
				}}
			/>
		</View>
	);
};

export default ChatFoodScreen;
