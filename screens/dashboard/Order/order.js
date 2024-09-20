import { height, width } from "../../../constants/mobileDimensions";
import { View, Text, TouchableOpacity } from "react-native";
import { Textstyles } from "../../../constants/fontsize";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { greycolorfive, primarycolor, whitecolor } from "../../../constants/color";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import MapView, { Marker, Polyline } from "react-native-maps";

const Order = () => {
  const [location, setLocation] = useState(null);
  const [randomLocation, setRandomLocation] = useState(null);
  const [currentStep, setCurrentStep] = useState(0); // 0, 1, 2 for step progress

  // Helper to get a farther random location
  const getFartherRandomLocation = (location) => {
    const latOffset = (Math.random() - 0.5) * 0.2; // Increase offset range for latitude
    const lonOffset = (Math.random() - 0.5) * 0.2; // Increase offset range for longitude
    return {
      latitude: location.latitude + latOffset,
      longitude: location.longitude + lonOffset,
    };
  };

  // Generate zigzag points between two locations
  const generateZigzagPoints = (
    start,
    end,
    numPoints = 10,
    amplitude = 0.01
  ) => {
    const points = [];
    for (let i = 0; i <= numPoints; i++) {
      const fraction = i / numPoints;
      const lat = start.latitude + (end.latitude - start.latitude) * fraction;
      const lon =
        start.longitude + (end.longitude - start.longitude) * fraction;
      const offset = Math.sin(fraction * Math.PI * 4) * amplitude;
      points.push({
        latitude: lat + offset,
        longitude: lon + offset,
      });
    }
    return points;
  };

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

        // Set random location farther from current location
        const randomLoc = getFartherRandomLocation(loc.coords);
        setRandomLocation(randomLoc);

        // Debugging Info
        console.log("User Location: ", loc.coords);
        console.log("Random Location: ", randomLoc);
      }
    })();
  }, []);

  const [showDrawer, setShowDrawer] = useState(false);

  const handleContinue = () => {
    if (currentStep < 2) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
    if (currentStep === 2) {
      setShowDrawer(true);
      translateY.value = withSpring(300);
    }
  };

  const handleCloseDrawer = () => {
    setShowDrawer(false);
    translateY.value = withSpring(600); // Slide the drawer down when closing
  };

  const translateY = useSharedValue(600);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <>
      {showDrawer && (
        <>
          {/* Background Overlay */}
          <View
            style={{ height: height, backgroundColor: greycolorfive }}
            className="w-full absolute z-50 opacity-70"
          />
          {/* MapDrawer Component with Close Button */}
          <View style={{ zIndex: 12000 }} className="bottom-0 absolute">
            <Animated.View style={[animatedStyles]}>
              {/* <MapDrawer
                                title="Successful"
                                text={
                                    <Text>
                                        Your <Text style={{ color: primarycolor }}>stulivery</Text>{" "}
                                        account has been registered successfully
                                    </Text>
                                }
                                buttonText="Go to dashboard"
                                navigateTo="dashboard"
                            /> */}

              {/* Close Button */}
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 70,
                  right: 10,
                  zIndex: 13000,
                }}
                onPress={handleCloseDrawer}
              >
                <Feather name="x-circle" size={24} color={whitecolor} />
              </TouchableOpacity>
            </Animated.View>
          </View>
        </>
      )}

      <View style={{ height: height, width: width }} className="py-[40px]">
        <View className="w-full h-16 justify-center">
          <View className="w-[75%] flex-row justify-between">
            <TouchableOpacity className="bg-gray-200 w-[50px] h-[50px] rounded-full mt-auto mb-auto ml-4 flex justify-center items-center">
              <MaterialCommunityIcons
                name="arrow-left"
                size={20}
                color="black"
              />
            </TouchableOpacity>
            <View className="w-40 h-16 flex justify-center items-center">
              <Text style={[Textstyles.text_small]} className="font-bold">
                Order Location
              </Text>
            </View>
          </View>
        </View>

        <View className="px-2 mt-1">
          {/* Ensure location is available */}
          {location && randomLocation ? (
            <MapView
              className="w-[100%] h-full"
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
                onPress={handleContinue}
              >
                <MaterialCommunityIcons
                  name="map-marker"
                  size={40}
                  color="red"
                />
              </Marker>

              {/* Marker for Farther Random Location */}
              <Marker
                coordinate={randomLocation}
                title="Farther Location"
                description="Random location generated farther away"
                onPress={handleContinue}
              >
                <MaterialCommunityIcons
                  name="map-marker"
                  size={40}
                  color="blue"
                />
              </Marker>

              {/* Zigzag Polyline between locations */}
              <Polyline
                coordinates={generateZigzagPoints(location, randomLocation)}
                strokeColor="yellow" // Line color
                strokeWidth={6} // Line width
              />
            </MapView>
          ) : (
            <Text>Loading map...</Text>
          )}
        </View>
      </View>
    </>
  );
};

export default Order;
