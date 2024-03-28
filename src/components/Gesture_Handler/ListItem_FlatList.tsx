import React from 'react';
import { StyleSheet, ViewToken } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

type ListItemProps = {
    viewableItems: Animated.SharedValue<ViewToken[]>
    item: {
        id: number
    }
}

const ListItem_FlatList: React.FC<ListItemProps> = React.memo(({ item, viewableItems }) => {

    const rStyle = useAnimatedStyle(() => {
        const isVisible = Boolean(
            viewableItems.value
                .filter((item) => item.isViewable)
                .find((viewableItem) => viewableItem.item.id === item.id)
        );

        return {
            opacity: withTiming(isVisible ? 1 : 0),
            transform: [
                {
                    scale: withTiming(isVisible ? 1 : 0.6),
                },
            ],
        };
    }, []);

    return <Animated.View style={[styles.flat, rStyle]} />;
});

export default ListItem_FlatList;

const styles = StyleSheet.create({
    container: {

    },
    flat: {
        height: 80,
        width: '90%',
        backgroundColor: 'pink',
        marginTop: 20,
        borderRadius: 15,
        alignSelf: 'center',
    },
});
