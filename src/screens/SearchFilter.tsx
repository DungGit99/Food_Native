import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';
const API = 'https://randomuser.me/api/?results=30';

const SearchFilter = () => {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);


    const handleInputChange = (text) => {
        if (text) {
            setData(data.filter((user) => user?.email.toUpperCase().includes(text.toUpperCase())));
        } else {
            setData(fullData);
        }

    };
    const fecthData = async (url) => {
        try {
            const res = await fetch(url);
            const json = await res.json();
            setData(json.results);
            setFullData(json.results);
            setIsLoading(false);

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        setIsLoading(true);
        fecthData(API);
    }, []);
    console.log(data);
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                < ActivityIndicator size="large" color="#5500dc" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput placeholder="Search" clearButtonMode="always" style={styles.searchBox} autoCapitalize="none" onChangeText={handleInputChange} />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(item) => item?.login.username}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item?.picture.medium }} style={{ width: 50, height: 50, borderRadius: 25 }} />
                        <View>
                            <Text>{item?.name.first}</Text>
                            <Text>{item?.email}</Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default SearchFilter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        // justifyContent: 'center',
    },
    searchBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        // marginHorizontal: 2,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
    },
    itemContainer: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 10,
    },
});
