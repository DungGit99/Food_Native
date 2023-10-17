import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = () => {
    return AsyncStorage.getItem('token');
};
const setToken = (token: string) => {
    return AsyncStorage.setItem('token', token);
};

export default {setToken, getToken};
