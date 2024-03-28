import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Dimensions, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';
export interface VideoModel {
    id: number;
    channelName: string;
    uri: string;
    caption: string;
    musicName: string;
    likes: number;
    comments: number;
    avatarUri: string;
}

const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');

const VideoPlayer = ({data, isActive}: {data: VideoModel; isActive: boolean}) => {
    const {uri, caption, channelName, musicName, likes, comments, avatarUri} = data;
    const bottomTabHeight = useBottomTabBarHeight();
    const statusBarHeight = StatusBar.currentHeight || 0;
    return (
        <View style={[styles.container, {height: WINDOW_HEIGHT - bottomTabHeight - statusBarHeight}]}>
            <StatusBar barStyle={'light-content'} />

            <Video source={{uri}} style={styles.video} resizeMode="cover" paused={!isActive} repeat />
            <View style={styles.bottomSection}>
                <View style={styles.bottomLeftSection}>
                    <Text style={styles.channelName}>{channelName}</Text>
                    <Text style={styles.caption}>{caption}</Text>
                    <View style={styles.musicNameContainer}>
                        <Image source={require('../../../assets/images/images_tiktok/music-note.png')} style={styles.musicNameIcon} />
                        <Text style={styles.musicName}>{musicName}</Text>
                    </View>
                </View>
                <View style={styles.bottomRightSection}>
                    <Image source={require('../../../assets/images/images_tiktok/floating-music-note.png')} style={[styles.floatingMusicNote]} />
                    <Image source={require('../../../assets/images/images_tiktok/floating-music-note.png')} style={[styles.floatingMusicNote]} />
                    <Image source={require('../../../assets/images/images_tiktok/disc.png')} style={[styles.musicDisc]} />
                </View>
            </View>
            <View style={styles.verticalBar}>
                <View style={[styles.verticalBarItem, styles.avatarContainer]}>
                    <Image style={styles.avatar} source={{uri: avatarUri}} />
                    <View style={styles.followButton}>
                        <Image source={require('../../../assets/images/images_tiktok/plus-button.png')} style={styles.followIcon} />
                    </View>
                </View>
                <View style={styles.verticalBarItem}>
                    <Image style={styles.verticalBarIcon} source={require('../../../assets/images/images_tiktok/heart.png')} />
                    <Text style={styles.verticalBarText}>{likes}</Text>
                </View>
                <View style={styles.verticalBarItem}>
                    <Image style={styles.verticalBarIcon} source={require('../../../assets/images/images_tiktok/message-circle.png')} />
                    <Text style={styles.verticalBarText}>{comments}</Text>
                </View>
                <View style={styles.verticalBarItem}>
                    <Image style={styles.verticalBarIcon} source={require('../../../assets/images/images_tiktok/reply.png')} />
                    <Text style={styles.verticalBarText}>Share</Text>
                </View>
            </View>
        </View>
    );
};

export default VideoPlayer;

const styles = StyleSheet.create({
    container: {
        width: WINDOW_WIDTH,
    },
    video: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    bottomSection: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 8,
        paddingBottom: 16,
    },
    bottomLeftSection: {
        flex: 4,
    },
    bottomRightSection: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    channelName: {
        color: 'white',
        fontWeight: 'bold',
    },
    caption: {
        color: 'white',
        marginVertical: 8,
    },
    musicNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    musicNameIcon: {
        width: 12,
        height: 12,
        marginRight: 8,
    },
    musicName: {
        color: 'white',
    },
    musicDisc: {
        width: 40,
        height: 40,
    },
    verticalBar: {
        position: 'absolute',
        right: 8,
        bottom: 72,
    },
    verticalBarItem: {
        marginBottom: 24,
        alignItems: 'center',
    },
    verticalBarIcon: {
        width: 32,
        height: 32,
    },
    verticalBarText: {
        color: 'white',
        marginTop: 4,
    },
    avatarContainer: {
        marginBottom: 48,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    followButton: {
        position: 'absolute',
        bottom: -8,
    },
    followIcon: {
        width: 21,
        height: 21,
    },
    floatingMusicNote: {
        position: 'absolute',
        right: 40,
        bottom: 16,
        width: 16,
        height: 16,
        tintColor: 'white',
    },
});
