import { height, width } from "../../../constants/mobileDimensions";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Textstyles } from "../../../constants/fontsize";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { MapDrawer } from "../../modals/drawer";
import { Header } from "../../mycomponents/verification";
import { greycolorfive, primarycolor, primarycolortwo, whitecolor } from "../../../constants/color";
import { MaterialCommunityIcons, Feather, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Avatar } from "react-native-paper";
import CustomLoader from "../../../preloader/preloader";
import { CustomButton } from "../../mycomponents/mycomponent";
import { useNavigation } from "@react-navigation/native";

const CustomMarker = ({ icon, color }) => {
  
  return (
    <View style={styles.markerContainer}>
      <View style={[styles.markerBox, { borderColor: color }]}>
        <MaterialCommunityIcons name={icon} size={30} color="white" />
      </View>
    </View>
  );
};

// Helper function to generate zigzag points using square roots
const generateZigzagPointsWithRoots = (start, end, numberOfPoints = 10) => {
  const points = [];
  const latStep = (end.latitude - start.latitude) / numberOfPoints;
  const lonStep = (end.longitude - start.longitude) / numberOfPoints;

  for (let i = 0; i <= numberOfPoints; i++) {
    const progress = i / numberOfPoints;
    const zigzagOffset = Math.sqrt(progress) * (i % 2 === 0 ? 0.002 : -0.002); // Square root pattern for zigzag
    points.push({
      latitude: start.latitude + i * latStep + zigzagOffset, // Apply square root-based zigzag offset
      longitude: start.longitude + i * lonStep,
    });
  }

  return points;
};

const OrderLocation = () => {
  const navigation=useNavigation()
  const [location, setLocation] = useState(null);
  const [randomLocation, setRandomLocation] = useState(null);
  const [currentStep, setCurrentStep] = useState(0); // 0, 1, 2 for step progress
  const [showDrawer, setShowDrawer] = useState(false);
  const [address,setaddress]=useState('Aule Rd Akure')


  // Helper to get a farther random location
  const getFartherRandomLocation = (location) => {
    const latOffset = (Math.random() - 0.5) * 0.2; // Increase offset range for latitude
    const lonOffset = (Math.random() - 0.5) * 0.2; // Increase offset range for longitude
    return {
      latitude: location.latitude + latOffset,
      longitude: location.longitude + lonOffset,
    };
  };
  function getLatLon(address) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          console.log(`Latitude: ${lat}, Longitude: ${lon}`);
        } else {
          console.log('Location not found');
        }
      })
      .catch(error => console.error('Error:', error));
  }
  
  // Example usage
  getLatLon(address);
  

  // Fetch user location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      console.log(loc)
      if (loc && loc.coords) {
        setLocation(loc.coords);

        // Set random location farther from current location
        const randomLoc = getFartherRandomLocation(loc.coords);
        setRandomLocation(randomLoc);

        console.log("User Location: ", loc.coords);
        console.log("Random Location: ", randomLoc);
      }
    })();
  }, []);
  const handlenavigationchat=()=>{
    navigation.navigate('Chat')

  }


  // Function to handle step continuation and showing the drawer



  return (
    <>
      <View style={{ height: height, width: width }} className="bg-white px-3 py-[40px]">
        <Header
          title={
            <Text className="" style={[Textstyles.text_cmedium]}>
              Order Location
            </Text>
          }
        />
        <View className="px-5 h-1/2 rounded-2xl w-full justify-center items-center bg-white">
          {/* Ensure location is available */}
          {location && randomLocation ? (
            <MapView
              className="w-[100%] rounded-2xl h-full"
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
               
              }}
            
              
            >
             
              {/* Marker for Current Location */}
              <Marker
                coordinate={location}
                title="Your Location"
                description="This is where you are"
              
              >
                <Avatar.Image size={36} source={require('../../../assets/images/avatermale.png')} />
              </Marker>

              {/* Marker for Farther Random Location */}
              <Marker
                coordinate={randomLocation}
                title="Farther Location"
                description="Random location generated farther away"
                
              >
                <Avatar.Image size={36} source={require('../../../assets/images/avatermale.png')} />
              </Marker>

              {/* Polyline with zigzag pattern */}
              <Polyline
                coordinates={generateZigzagPointsWithRoots(
                  location,
                  randomLocation
                )}
                strokeColor={primarycolor} // Line color
                strokeWidth={6} // Line width
              />
            </MapView>
          ) : (
            <View>
              <CustomLoader/>
            </View>
          )}
        </View>
        <View className="h-8" />
        <View className="flex-1  bg-white px-5">
          <Text style={[Textstyles.text_medium]}>Your Package on The Way</Text>
          <Text>Arriving at pick up point soon</Text>
          <View className="flex-row justify-between w-full mt-5">
            <View className="flex-row items-center">
              <Avatar.Image size={50} source={require('../../../assets/images/avatermale.png')} />
              <View className="w-3" />
              <View>
              <Text style={[Textstyles.text_small]}>Jones Dayo</Text>
              <Text>4.2  <FontAwesome name="star" color={primarycolor}/></Text>
              </View>
            </View>
            <View className="flex-row items-center">
           <TouchableOpacity><Ionicons name="call-sharp" size={24} color={primarycolortwo} /></TouchableOpacity> 
            <View className="w-3" />
            <TouchableOpacity onPress={handlenavigationchat}><MaterialIcons name="messenger" size={24}  color={primarycolortwo}/></TouchableOpacity>
            </View>
        


          </View>
          <View className="h-5" />
          <View>
              <View className=" flex-row items-center">
                <FontAwesome
                  name="dot-circle-o"
                  size={20}
                  color={primarycolor}
                />
                <Text className=" ml-4">Hall 1 Uniben</Text>
              </View>
              <View style={{width:1,marginTop:1}} className="h-2 ml-2   bg-black"/>
              <View style={{width:1,marginTop:1}} className="h-2 ml-2   bg-black"/>
              <View style={{width:1,marginTop:1}} className="h-2 ml-2   bg-black"/>
              <View style={{width:1,marginTop:1}} className="h-2 ml-2   bg-black"/>
              <View className=" flex-row items-center ">
                <Feather name="map-pin" size={20} color="black" />
                <Text className=" ml-4">Lecture theater 1 Uniben</Text>
              </View>
            </View>
            <View className="h-5" />
            <CustomButton
            backgroundColor={primarycolor}
            TextColor={whitecolor}
            Textname={'Mark as done'}
            />
        </View>
      </View>
    </>
  );
};

export default OrderLocation;

const styles = StyleSheet.create({
  markerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  markerBox: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 3,
    backgroundColor: "#073945",
    alignItems: "center",
    justifyContent: "center",
  },
});