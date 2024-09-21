import { height, width } from "../../../constants/mobileDimensions";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Textstyles } from "../../../constants/fontsize";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { MapDrawer } from "../../modals/drawer";
import { Header } from "../../mycomponents/verification";
import { greycolorfive, primarycolor, whitecolor } from "../../../constants/color";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import MapView, { Marker, Polyline } from "react-native-maps";

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

const Order = () => {
  const [location, setLocation] = useState(null);
  const [randomLocation, setRandomLocation] = useState(null);
  const [currentStep, setCurrentStep] = useState(0); // 0, 1, 2 for step progress
  const [showDrawer, setShowDrawer] = useState(false);

  // Helper to get a farther random location
  const getFartherRandomLocation = (location) => {
    const latOffset = (Math.random() - 0.5) * 0.2; // Increase offset range for latitude
    const lonOffset = (Math.random() - 0.5) * 0.2; // Increase offset range for longitude
    return {
      latitude: location.latitude + latOffset,
      longitude: location.longitude + lonOffset,
    };
  };

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

        // Set random location farther from current location
        const randomLoc = getFartherRandomLocation(loc.coords);
        setRandomLocation(randomLoc);

        console.log("User Location: ", loc.coords);
        console.log("Random Location: ", randomLoc);
      }
    })();
  }, []);

  // Function to handle step continuation and showing the drawer
  const handleContinue = () => {
    if (currentStep < 2) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
    if (currentStep === 2) {
      setShowDrawer(true);
      translateY.value = withSpring(300); // Open drawer animation
    }
  };

  // Handle drawer close
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
              <MapDrawer
                title="Successful"
                text={
                  <Text>
                    Your <Text style={{ color: primarycolor }}>stulivery</Text>{" "}
                    account has been registered successfully
                  </Text>
                }
                buttonText="Go to dashboard"
                navigateTo="dashboard"
              />

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
        <Header
          title={
            <Text className="" style={[Textstyles.text_cmedium]}>
              Order Location
            </Text>
          }
        />

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
                onPress={handleContinue} // Move to the next step when pressed
              >
                <CustomMarker icon="map-marker" color="white" />
              </Marker>

              {/* Marker for Farther Random Location */}
              <Marker
                coordinate={randomLocation}
                title="Farther Location"
                description="Random location generated farther away"
                onPress={handleContinue} // Move to the next step when pressed
              >
                <CustomMarker icon="send-circle-outline" color="white" />
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
            <Text>Loading map...</Text>
          )}
        </View>
      </View>
    </>
  );
};

export default Order;

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