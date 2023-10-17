
import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, StatusBar, StyleSheet, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker } from 'react-native-maps';
import { Colors } from '../constants/Colors';

const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Cho phép truy cập vị trí',
                message: 'Vui lòng cho phép ứng dụng truy cập vị trí ?',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        // console.log('granted', granted);
        if (granted === 'granted') {
            // console.log('You can use Geolocation');
            return true;
        } else {
            console.log('You cannot use Geolocation');
            return false;
        }
    } catch (err) {
        return false;
    }
};
export default function MapScreen() {

    const [location, setLocation] = useState<any>(false);
    // function to check permissions and get Location
    const getLocation = () => {
        const result = requestLocationPermission();
        result.then(res => {
            // console.log('res is:', res);
            if (res) {
                Geolocation.getCurrentPosition(
                    position => {
                        // console.log({ position });
                        setLocation(position);
                    },
                    error => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                        setLocation(false);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
                );
            }
        });

    };
    useEffect(() => {
        getLocation();
    }, []);

    console.log(location);

    return (
        location &&
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={Colors.DEFAULT_WHITE}
                translucent
            />
            <View>
                <MapView
                    style={{ width: '100%', height: '100%' }}
                    initialRegion={{
                        latitude: 16.0755017,
                        longitude: 108.2222083,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: 16.0755017,
                            longitude: 108.2222083,
                        }}
                        image={require('../assets/images/placeholder.png')}
                    />
                </MapView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
});
