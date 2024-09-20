import { View, Text, ScrollView } from "react-native";
import { height, width } from "../../constants/mobileDimensions";
import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Header, Lines2 } from "../mycomponents/verification";
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
import { Drawer } from "../modals/drawer";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { CustomInputWithHeader } from "../mycomponents/mycomponent";
const OrderDetails = () => {
  const [currentStep, setCurrentStep] = useState(0); //0 and 1 and 2 and 3
  const [showDrawer, setShowDrawer] = useState(false);
  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
    if (currentStep === 3) {
      setShowDrawer(true);
      translateY.value = setShowDrawer ? withSpring(300) : withSpring(600);
    }
  };
  const handleContinueBackwards = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };
  const translateY = useSharedValue(600);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <>
      {showDrawer && (
        <>
          <View
            style={{ height: height, backgroundColor: greycolorfive }}
            className="w-full absolute z-50 opacity-70"
          />
          <View style={{ zIndex: 12000 }} className="bottom-0 absolute">
            <Animated.View
              style={[
                animatedStyles,
                { height: 800 }, // Adjust height as needed
              ]}
            >
              <Drawer
                title="Order Accepted"
                text={
                  <Text>
                    Congratulation! you have accepted the delivery for package
                    with order number:
                    <Text className=" font-bold"> MM09132005</Text> You’re good
                    to go! Make your way to the pickup spot.
                  </Text>
                }
                buttonText="Go to Pick up"
                navigateTo="login"
              />
            </Animated.View>
          </View>
        </>
      )}
      <View
        style={{ height: height, width: width }}
        className="bg-white  py-[40px]"
      >
        <Header
          title={
            <Text className="" style={[Textstyles.text_cmedium]}>
              Order Details
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
            <CustomInputWithHeader
              headerText="Package"
              normalText="Document"
              value=""
              onChange={(text) => console.log(text)}
            />
            <View className="h-4" />
            <CustomInputWithHeader
              headerText="Price"
              normalText="#4,500"
              value=""
              onChange={(text) => console.log(text)}
            />
            <View className="h-4" />
            <CustomInputWithHeader
              headerText="Payment Method"
              normalText="Document"
              value=""
              onChange={(text) => console.log(text)}
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
          <View className=" h-4"></View>
          <View className="flex-row justify-between">
            <View className="w-[15%] pl-3">
              <Lines2 />
            </View>
            <View className="w-[85%] items-end pl-2 pr-4">
              <CustomInputWithHeader
                headerText="Address"
                normalText="Hall 1 Uniben"
                value=""
                onChange={(text) => console.log(text)}
              />
              <View className="h-4" />
              <CustomInputWithHeader
                headerText="Name"
                normalText="Olamise Glory"
                value=""
                onChange={(text) => console.log(text)}
              />
              <View className="h-4" />
              <CustomInputWithHeader
                headerText="Phone Number"
                normalText="0902344425667"
                value=""
                onChange={(text) => console.log(text)}
              />
              <View className="h-4" />
              <CustomInputWithHeader
                headerText="Additional info"
                normalText="Please treat with care , its confidential"
                value=""
                onChange={(text) => console.log(text)}
              />
            </View>
          </View>
          <View className="flex-row items-center ml-6 ">
            <Feather name="map-pin" size={20} color={primarycolor} />
            <Text style={[Textstyles.text_cmedium]} className="ml-2">
              Delivery Point <Text className="text-red-600">*</Text>
            </Text>
          </View>
          <View />
          <View className=" h-5"></View>
          <View className="w-full items-end pl-14 pr-5">
            <CustomInputWithHeader
              headerText="Address"
              normalText="Lecture 1 theatre"
              value=""
              onChange={(text) => console.log(text)}
            />
            <View className="h-4" />
            <CustomInputWithHeader
              headerText="Name"
              normalText="Olamide Glory"
              value=""
              onChange={(text) => console.log(text)}
            />
            <View className="h-4" />
            <CustomInputWithHeader
              headerText="Phone Number"
              normalText="08110811775"
              value=""
              onChange={(text) => console.log(text)}
            />
            <View className="h-4" />
          </View>
          <View className="h-8" />
          <View className="w-full px-5">
            <CustomButton
              backgroundColor={primarycolor}
              Textname="Accept Order"
              TextColor={whitecolor}
              onPress={handleContinue}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default OrderDetails;
