import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { height, width } from "../../../constants/mobileDimensions";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Header } from "../../mycomponents/verification";
import { Lines } from "../../mycomponents/verification";
import {
  CustomButton,
  CustomTextInput,
  CustomTextInputshort,
  CustomTextInputTall,
} from "../../mycomponents/mycomponent";
import { Textstyles } from "../../../constants/fontsize";
import {
  greycolortwo,
  primarycolor,
  primarycolortwo,
  whitecolor,
} from "../../../constants/color";
import { PaymentDrawer } from "../../modals/drawer";
import { Feather, FontAwesome } from "@expo/vector-icons";
import Footer from "../footer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MapModal } from "../../modals/MapModal";

const Neworder = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showmap,setshowmap]=useState(false)
  const [showmappickaddress ,setshowmappickaddress ]=useState(false)
  const [addressCoord,setAddressCoord]=useState({latitude:'',longitude:''})
  const [addressCoordPickup,setAddressCoordPickup]=useState({latitude:'',longitude:''})


  const handleContinue = () => {
      setShowDrawer(true);
      translateY.value = withSpring(0);
    
  };



  const handleCloseDrawer = () => {
    setShowDrawer(false);
    translateY.value = withSpring(300); // Move drawer out of view
  };

  const translateY = useSharedValue(300);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <>
      {showDrawer && (
        <View style={{ zIndex: 12000 }} className="bottom-0 h-full absolute">
          <Animated.View
            style={[animatedStyles]} // Adjust height as needed
          >
            <PaymentDrawer
              title="Payment Method"
              buttonText="Submit"
              navigateTo="orderconfirm"
              onClose={handleCloseDrawer} // Pass handleCloseDrawer as a prop
            />
          </Animated.View>
        </View>
      )}
      {showmap &&
      <View className="z-50 w-full justify-center items-center h-full absolute">
        <MapModal
        onClose={()=>setshowmap(false)}
        setSelectedLocationprops={({latitude,longitude})=>setAddressCoord({latitude,longitude})}
        />

      </View>
        
      }
        {showmappickaddress &&
      <View className="z-50 w-full justify-center items-center h-full absolute">
        <MapModal
        onClose={()=>setshowmappickaddress(false)}
        setSelectedLocationprops={({latitude,longitude})=>setAddressCoordPickup({latitude,longitude})}
        />

      </View>
        
      }
      <View style={{ height: height, width: width }} className="bg-white px-5 pb-[20px] pt-[40px]">
          <Header
            title={<Text className="" style={[Textstyles.text_cmedium]}>New Order</Text>}
          />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      >
          <ScrollView
          showsVerticalScrollIndicator={false}
           className="flex-1">
            <View className="w-full ">
              <View className="h-3" />
              <Text className="w-64" style={[Textstyles.text_small]}>
                Create a new delivery request and get it delivered!
              </Text>
              <View className="h-8" />
              <CustomTextInput
                placeholder="Enter the package to be delivered"
                placeholderTextColor={greycolortwo}
                sideicon={<Feather name="box" size={20} color={primarycolortwo} />}
              />
              <View className="h-4" />
              <CustomTextInput
                placeholder="Enter the recipient's name"
                placeholderTextColor={greycolortwo}
                sideicon={<Feather name="user" size={20} color={primarycolortwo} />}
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
                  sideicon={<Feather name="map-pin" size={20} color={primarycolortwo} />}
                />
              <View className="h-4" />
              <View className="items-start w-full">
              <TouchableOpacity onPress={()=>setshowmappickaddress(true)} className=" bg-white px-3 py-2 rounded-2xl border-1">
                <Text>Locate Position on Map</Text>
              </TouchableOpacity>
              <Text>{addressCoord.latitude}</Text>
              </View>
                <View className="h-4" />
                <CustomTextInputshort
                  placeholder="Name"
                  placeholderTextColor={greycolortwo}
                  sideicon={<Feather name="user" size={20} color={primarycolortwo} />}
                />
                <View className="h-4" />
                <CustomTextInputshort
                  placeholder="Phone Number"
                  placeholderTextColor={greycolortwo}
                  sideicon={<Feather name="phone" size={20} color={primarycolortwo} />}
                />
                <View className="h-4" />
                <CustomTextInputTall
                  placeholder="Additional info"
                  placeholderTextColor={greycolortwo}
                  sideicon={<Feather name="message-circle" size={20} color={primarycolortwo} />}
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
                sideicon={<Feather name="map-pin" size={20} color={primarycolortwo} />}
              />
              <View className="h-4" />
              <View className="items-center w-full">
              <TouchableOpacity onPress={()=>setshowmap(true)} className=" bg-white px-3 py-2 rounded-2xl border-1">
                <Text>Locate Position on Map</Text>
              </TouchableOpacity>
              <Text>{addressCoord.latitude}</Text>

              </View>
              <CustomTextInputshort
                placeholder="Contact Name"
                placeholderTextColor={greycolortwo}
                sideicon={<Feather name="user" size={20} color={primarycolortwo} />}
              />
              <View className="h-4" />
              <CustomTextInputshort
                placeholder="Phone Number"
                placeholderTextColor={greycolortwo}
                sideicon={<Feather name="smartphone" size={20} color={primarycolortwo} />}
              />
              <View className="h-4" />
            </View>
            <View className="w-full">
              <CustomButton
                backgroundColor={primarycolor}
                Textname="Create Order"
                TextColor={whitecolor}
                onPress={handleContinue}
              />
            </View>
          </ScrollView>
          </KeyboardAvoidingView>
        </View>
    </>
  );
};

export default Neworder;
