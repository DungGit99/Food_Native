import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { Dimensions, FlatList, StyleSheet } from 'react-native';
import VideoPlayer from './VideoPlayer';

const { height: WINDOW_HEIGHT } = Dimensions.get('window');
const HomeScreen = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const bottomTabHeight = useBottomTabBarHeight();

  return (
    <FlatList
      data={videoData}
      pagingEnabled
      renderItem={({ item, index }) => {
        return <VideoPlayer data={item} isActive={activeVideoIndex === index} />;
      }
      }
      onScroll={e => {
        console.log(e.nativeEvent.contentOffset);
        const index = Math.round(
          e.nativeEvent.contentOffset.y / (WINDOW_HEIGHT - bottomTabHeight),
        );
        setActiveVideoIndex(index);
      }}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});


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

export const videoData = [
  {
    id: 1,
    channelName: 'cutedog',
    uri: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4',
    caption: 'Cute dog shaking hands #cute #puppy',
    musicName: 'Song #1',
    likes: 4321,
    comments: 2841,
    avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
  },
  {
    id: 2,
    channelName: 'meow',
    uri: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
    caption: 'Doggies eating candy #cute #puppy',
    musicName: 'Song #2',
    likes: 2411,
    comments: 1222,
    avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
  },
  {
    id: 3,
    channelName: 'yummy',
    uri: 'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
    caption: 'Brown little puppy #cute #puppy',
    musicName: 'Song #3',
    likes: 3100,
    comments: 801,
    avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
  },
];
