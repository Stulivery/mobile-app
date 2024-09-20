import { View, Text, ScrollView } from "react-native";
import { height, width } from "../../constants/mobileDimensions";
import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Header } from "../mycomponents/verification";
import { Lines } from "../mycomponents/verification";
import {
  CustomButton,
  CustomTextInput,
  CustomTextInputshort,
  CustomTextInputTall,
} from "../mycomponents/mycomponent";
import { Textstyles } from "../../constants/fontsize";
import {
  greycolorfive,
  greycolortwo,
  primarycolor,
  primarycolortwo,
  whitecolor,
} from "../../constants/color";
import { PaymentDrawer } from "../modals/drawer";
import { Feather, FontAwesome } from "@expo/vector-icons";

const Neworder = () => {
  const [currentStep, setCurrentStep] = useState(0); // Step 0, 1, 2, 3
  const [showDrawer, setShowDrawer] = useState(false);

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else if (currentStep === 3) {
      setShowDrawer(true);
      translateY.value = withSpring(0);
    }
  };

  const handleContinueBackwards = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleCloseDrawer = () => {
    setShowDrawer(false);
    translateY.value = withSpring(600); // Move drawer out of view
  };

  const translateY = useSharedValue(600);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <>
      {showDrawer && (
        <View style={{ zIndex: 12000 }} className="bottom-0 absolute">
          <Animated.View
            style={[
              animatedStyles,
              { height: 508 }, // Adjust height as needed
            ]}
          >
            <PaymentDrawer
              title="Payment Method"
              buttonText="Submit"
              navigateTo=""
              onClose={handleCloseDrawer} // Pass handleCloseDrawer as a prop
            />
          </Animated.View>
        </View>
      )}
      <View
        style={{ height: height, width: width }}
        className="bg-white py-[40px]"
      >
        <Header
          title={
            <Text className="" style={[Textstyles.text_cmedium]}>
              New Order
            </Text>
          }
        />
        <ScrollView>
          <View className="w-full px-5">
            <View className="h-3" />
            <Text className="w-64" style={[Textstyles.text_small]}>
              Create a new delivery request and get it delivered!
            </Text>
            <View className="h-8" />
            <CustomTextInput
              placeholder="Enter the package to be delivered"
              placeholderTextColor={greycolortwo}
              sideicon={
                <Feather name="box" size={20} color={primarycolortwo} />
              }
            />
            <View className="h-4" />
            <CustomTextInput
              placeholder="Enter the recipient's name"
              placeholderTextColor={greycolortwo}
              sideicon={
                <Feather name="user" size={20} color={primarycolortwo} />
              }
            />
          </View>
          <View className="h-6" />
          <View className="flex-row items-center ml-6">
            <FontAwesome name="dot-circle-o" size={20} color={primarycolor} />
            <Text style={[Textstyles.text_cmedium]} className="ml-2">
              Pick Point <Text className="text-red-600">*</Text>
            </Text>
          </View>
          <View />
          <View className="flex-row justify-between">
            <View className="w-[40%] -ml-[38px]">
              <Lines />
            </View>
            <View className="w-[60%] items-end p-4">
              <CustomTextInputshort
                placeholder="Address"
                placeholderTextColor={greycolortwo}
                sideicon={
                  <Feather name="map-pin" size={20} color={primarycolortwo} />
                }
              />
              <View className="h-4" />
              <CustomTextInputshort
                placeholder="Name"
                placeholderTextColor={greycolortwo}
                sideicon={
                  <Feather name="user" size={20} color={primarycolortwo} />
                }
              />
              <View className="h-4" />
              <CustomTextInputshort
                placeholder="Phone Number"
                placeholderTextColor={greycolortwo}
                sideicon={
                  <Feather name="phone" size={20} color={primarycolortwo} />
                }
              />
              <View className="h-4" />
              <CustomTextInputTall
                placeholder="Additional info"
                placeholderTextColor={greycolortwo}
                sideicon={
                  <Feather
                    name="message-circle"
                    size={20}
                    color={primarycolortwo}
                  />
                }
              />
            </View>
          </View>
          <View className="flex-row items-center ml-6">
            <Feather name="map-pin" size={20} color={primarycolor} />
            <Text style={[Textstyles.text_cmedium]} className="ml-2">
              Delivery Point <Text className="text-red-600">*</Text>
            </Text>
          </View>
          <View />
          <View className="w-full items-end p-4">
            <CustomTextInputshort
              placeholder="Address"
              placeholderTextColor={greycolortwo}
              sideicon={
                <Feather name="map-pin" size={20} color={primarycolortwo} />
              }
            />
            <View className="h-4" />
            <CustomTextInputshort
              placeholder="Contact Name"
              placeholderTextColor={greycolortwo}
              sideicon={
                <Feather name="user" size={20} color={primarycolortwo} />
              }
            />
            <View className="h-4" />
            <CustomTextInputshort
              placeholder="Phone Number"
              placeholderTextColor={greycolortwo}
              sideicon={
                <Feather name="smartphone" size={20} color={primarycolortwo} />
              }
            />
            <View className="h-4" />
          </View>
          <View className="h-8" />
          <View className="w-full px-5">
            <CustomButton
              backgroundColor={primarycolor}
              Textname="Create Order"
              TextColor={whitecolor}
              onPress={handleContinue}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Neworder;
