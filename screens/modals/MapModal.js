import MapView, { Marker, Circle } from "react-native-maps";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Entypo, Feather } from "@expo/vector-icons";
import { height } from "../../constants/mobileDimensions";
import { View, Text } from 'react-native';
import CustomLoader from "../../preloader/preloader";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MapStyle } from "../../constants/mapStyle";

export const MapModal = ({ onClose, setSelectedLocationprops }) => {
    const [location, setLocation] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [address, setAddress] = useState(null);
    const [places, setPlaces] = useState([]);
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const radius = 750;


    // Fetch user location
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
                return;
            }

            let loc = await Location.getCurrentPositionAsync({});
            if (loc && loc.coords) {
                setLocation(loc.coords);
            }
        })();
    }, []);

    // Function to handle selecting a location on the map
    const handlePress = async (event) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        setSelectedLocation({ latitude, longitude });
        setSelectedLocationprops({ latitude, longitude });

        const reverseGeocode = await Location.reverseGeocodeAsync({ latitude, longitude });
        if (reverseGeocode.length > 0) {
            const { name, street, city, region, country } = reverseGeocode[0];
            const fullAddress = `${name}, ${street}, ${city}, ${region}, ${country}`;
            setAddress(fullAddress);
        }
    };

    // Render the Map only if the location is available
    return (
        <>
            <View style={{ height: height }} className="opacity-70 absolute bg-slate-200 w-full" />
            <View className="relative z-50 w-5/6 h-1/3 bg-white rounded-2xl px-2 pt-3">
                <View className="items-end w-full">
                    <TouchableOpacity onPress={onClose}>
                        <Feather name="x" size={24} />
                    </TouchableOpacity>
                </View>
                {location ? (  // Check if location is available
                    <MapView
                    
                        className="w-full rounded-2xl h-full"
                        customMapStyle={MapStyle}
                        mapType="standard" // options: standard, satellite, hybrid
                        onPress={handlePress}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                           
                          }}
                        
                    >
                      
                        {selectedLocation && (
                            <Marker
                                coordinate={selectedLocation}
                                title="Selected Location"
                                description={address}
                            >
                                <Entypo name="location-pin" size={30} color="black" />
                            </Marker>
                        )}
                    </MapView>
                ) : (
                    <CustomLoader />
                )}
            </View>
        </>
    );
};
