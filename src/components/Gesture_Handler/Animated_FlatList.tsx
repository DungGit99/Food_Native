import React from 'react';
import { FlatList, StyleSheet, View, ViewToken } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import ListItem_FlatList from './ListItem_FlatList';
const data = new Array(50).fill(0).map((_, index) => ({ id: index }));

const Animated_FlatList = () => {
    const viewableItems = useSharedValue<ViewToken[]>([]);
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                contentContainerStyle={{ paddingTop: 40 }}
                onViewableItemsChanged={({ viewableItems: vItems }) => {
                    viewableItems.value = vItems;
                }}
                renderItem={({ item }) => {
                    return (
                        <ListItem_FlatList item={item} viewableItems={viewableItems} />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Animated_FlatList;
