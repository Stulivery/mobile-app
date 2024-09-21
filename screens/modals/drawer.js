import { useNavigation } from "@react-navigation/native";
import {
  greycolortwo,
  primarycolor,
  primarycolortwo,
  whitecolor,
} from "../../constants/color";
import { CustomTextInput } from "../mycomponents/mycomponent";
import { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Textstyles } from "../../constants/fontsize";
import { CustomButton } from "../mycomponents/mycomponent";
import { Avatar } from "react-native-paper";
import { IconButton } from "react-native-paper";
import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { Feather } from "@expo/vector-icons"; // Importing Feather icons

export const Drawer = ({ navigateTo, buttonText, text, title }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    console.log("to " + navigateTo);
    navigation.navigate(navigateTo);
  };
  return (
    <>
      <View className="w-screen h-screen">
        <View
          style={{ backgroundColor: whitecolor }}
          className="absolute top-[14.5vh] w-full px-6 py-0 rounded-t-[24px] h-1/2 shadow-lg"
        >
          <View className="h-2" />
          <View
            style={{ backgroundColor: greycolortwo }}
            className="h-1 w-[67px] rounded-[11px] mx-auto"
          />
          <View className="h-10" />
          <Image
            source={require("../../assets/images/success-svg.png")}
            resizeMode="contain"
            className="w-20 h-20 mx-auto"
          />
          <View className="h-10" />
          <View className="items-center">
            <Text style={[Textstyles.text_medium, { color: primarycolortwo }]}>
              {title}
            </Text>
            <View className="h-3" />
            <Text
              style={[Textstyles.text_xsmall, { color: primarycolortwo }]}
              className="text-center"
            >
              {text}
            </Text>
          </View>
          <View className="h-10" />
          <CustomButton
            backgroundColor={primarycolor}
            Textname={buttonText}
            TextColor={whitecolor}
            onPress={handlePress}
          />
          <View className="h-11" />
          <View className="w-screen absolute bottom-0">
            <View className="w-[134px] h-[5px] rounded-[100px] bg-[#101010] mx-auto" />
          </View>
        </View>
      </View>
    </>
  );
};

export const MapDrawer = ({ navigateTo, buttonText, text, title }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    console.log("to " + navigateTo);
    // navigation.navigate(navigateTo);
  };
  return (
    <>
      <View className="w-screen h-screen">
        <View
          style={{ backgroundColor: whitecolor }}
          className="absolute top-[14.5vh] w-full px-6 py-0 rounded-t-[24px] h-1/2 shadow-lg"
        >
          <View className="h-2" />
          <View
            style={{ backgroundColor: greycolortwo }}
            className="h-1 w-[67px] rounded-[11px] mx-auto"
          />
          <View className="h-10" />
          <Text style={[Textstyles.text_xmedium]}>Your Package on The Way</Text>
          <Text style={[Textstyles.text_xsma]} className=" font-medium">
            Arriving at pick up point in 2 mins
          </Text>
          <View className="h-10" />

          <View className=" bg-white flex-1 -mt-4">
            {/* User Info Section */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Avatar.Image
                size={50}
                source={{ uri: "https://placekitten.com/200/200" }}
                className=" mr-4"
              />
              {/* User Name and Rating */}
              <View className=" flex-1">
                <Text>John Daniel</Text>
                <View className=" flex-row items-center">
                  <MaterialIcons name="star" size={16} color="gold" />
                  <View>
                    <Text className=" ml-1">4.9</Text>
                  </View>
                </View>
              </View>
              <View className=" flex-row items-center">
                <IconButton
                  icon="phone"
                  size={24}
                  color={primarycolor}
                  onPress={() => console.log("Call User")}
                />
                <IconButton
                  icon="message"
                  size={24}
                  color={primarycolor}
                  onPress={() => console.log("Message User")}
                />
              </View>
            </View>
            <View>
              <View className=" flex-row items-center mb-4">
                <FontAwesome
                  name="dot-circle-o"
                  size={20}
                  color={primarycolor}
                />
                <Text className=" ml-4">Hall 1 Uniben</Text>
              </View>
              <View className=" flex-row items-center ">
                <Feather name="map-pin" size={20} color="black" />
                <Text className=" ml-4">Lecture theater 1 Uniben</Text>
              </View>
            </View>
          </View>

          <View className="h-10" />

          <View className="h-11" />
          <View className="w-screen absolute bottom-0">
            <View className="w-[134px] h-[5px] rounded-[100px] bg-[#101010] mx-auto" />
          </View>
        </View>
      </View>
    </>
  );
};

export const Nearlocation = ({ navigateTo, buttonText, text, title }) => {
  const handlePress = () => {
    console.log("to " + navigateTo);
  };

  return (
    <View className="w-screen h-screen">
      <View className="absolute  top-[14.5vh] w-full px-6 py-0 rounded-t-[24px] h-1/2 shadow-lg bg-white">
        <View className=" mt-5">
          <CustomTextInput
            placeholder={"Search"}
            placeholderTextColor={greycolortwo}
            sideicon={
              <Feather name="magnify" size={20} color={primarycolortwo} />
            }
          />
        </View>
        {/* Delivery options */}
        <View className="bg-white flex-1 mt-4">
          <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-gray-200">
            <View className=" w-10 h-10 bg-gray-200 rounded-xl flex justify-center items-center">
              <MaterialCommunityIcons
                color="grey"
                name="map-marker"
                size={28}
              />
            </View>
            <View className="flex-1 ml-3 -mt-1">
              <Text style={[Textstyles.text_xxmedium]}>Hall 1 Uniben</Text>
              <Text className="text-xs -mt-1 text-gray-600">
                Delivery to Lecture theater 1
              </Text>
            </View>
            <Text className="text-primarycolor text-sm">5 mins away</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-gray-200">
            <View className=" w-10 h-10 bg-gray-200 rounded-xl flex justify-center items-center">
              <MaterialCommunityIcons
                name="map-marker"
                color="grey"
                size={28}
              />
            </View>
            <View className="flex-1 ml-3 -mt-1">
              <Text style={[Textstyles.text_xxmedium]}>Hall 1 Uniben</Text>
              <Text className="text-xs -mt-1 text-gray-600">
                Delivery to Lecture theater 1
              </Text>
            </View>
            <Text className="text-primarycolor text-sm">5 mins away</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between py-4 border-b border-gray-200">
            <View className=" w-10 h-10 bg-gray-200 rounded-xl flex justify-center items-center">
              <MaterialCommunityIcons
                color="grey"
                name="map-marker"
                size={28}
              />
            </View>
            <View className="flex-1 ml-3 -mt-1">
              <Text style={[Textstyles.text_xxmedium]}>Hall 1 Uniben</Text>
              <Text className=" text-xs -mt-1 text-gray-600">
                Delivery to Lecture theater 1
              </Text>
            </View>
            <Text className="text-primarycolor text-sm">5 mins away</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom draggable bar */}
        <View className="w-full absolute bottom-0">
          <View className="w-[134px] h-[5px] rounded-full bg-black mx-auto" />
        </View>
      </View>
    </View>
  );
};

export const PaymentDrawer = ({
  navigateTo,
  buttonText,
  text,
  title,
  onClose,
}) => {
  const [checked, setChecked] = useState("wallet"); // To handle payment option selection
  const navigation = useNavigation();

  const handlePress = () => {
    console.log("to " + navigateTo);
    navigation.navigate(navigateTo);
  };

  return (
    <View className="w-screen h-screen">
      <TouchableWithoutFeedback onPress={onClose}>
        <View
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        />
      </TouchableWithoutFeedback>
      <View
        style={{ backgroundColor: whitecolor }}
        className="absolute top-[14.5vh] w-full px-6 py-0 rounded-t-[24px] h-[80%] shadow-lg"
      >
        <View className="flex-row justify-between items-center mt-16">
          <Text style={[Textstyles.text_cmedium, { color: primarycolortwo }]}>
            {title}
          </Text>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="h-2" />
        <View
          style={{ backgroundColor: greycolortwo }}
          className="h-1 w-[67px] rounded-[11px] mx-auto"
        />
        <View className="h-2" />
        <View className="items-center">
          <RadioButton.Group
            onValueChange={(value) => setChecked(value)}
            value={checked}
          >
            {/* Payment Options */}
            <TouchableOpacity
              className="flex-row justify-between items-center bg-white rounded-xl p-4 mb-2 w-80 border-1"
              style={{
                borderColor: checked === "wallet" ? "#073945" : "#F9F9F9",
              }}
              onPress={() => setChecked("wallet")}
            >
              <View className="flex-row">
                <View className="w-12 h-12 rounded-xl bg-gray-200 flex justify-center items-center mr-2">
                  <Feather name="credit-card" size={24} color="black" />
                </View>
                <View className="-mt-1">
                  <Text style={[Textstyles.text_small]}>Wallet</Text>
                  <Text style={{ color: greycolortwo }}>₦10,500.00</Text>
                </View>
              </View>
              <RadioButton value="wallet" color="#073945" />
            </TouchableOpacity>

            {/* Cash Option */}
            <TouchableOpacity
              className="flex-row justify-between items-center bg-white rounded-xl p-4 mb-2 w-80 border-1"
              style={{
                borderColor: checked === "cash" ? "#073945" : "#F9F9F9",
              }}
              onPress={() => setChecked("cash")}
            >
              <View className="flex-row">
                <View className="w-12 h-12 rounded-xl bg-gray-200 flex justify-center items-center mr-2">
                  <Feather name="dollar-sign" size={24} color="black" />
                </View>
                <View className="mt-3">
                  <Text style={[Textstyles.text_small]}>Cash</Text>
                </View>
              </View>
              <RadioButton value="cash" color="#073945" />
            </TouchableOpacity>

            {/* Bank Transfer Option */}
            <TouchableOpacity
              className="flex-row justify-between items-center bg-white rounded-xl p-4 mb-2 w-80 border-1"
              style={{
                borderColor: checked === "bank" ? "#073945" : "#F9F9F9",
              }}
              onPress={() => setChecked("bank")}
            >
              <View className="flex-row">
                <View className="w-12 h-12 rounded-xl bg-gray-200 flex justify-center items-center mr-2">
                  <Feather name="briefcase" size={24} color="black" />
                </View>
                <View className="mt-3">
                  <Text style={[Textstyles.text_small]}>Bank</Text>
                </View>
              </View>
              <RadioButton value="bank" color="#073945" />
            </TouchableOpacity>

            {/* Paypal Option */}
            <TouchableOpacity
              className="flex-row justify-between items-center bg-white rounded-xl p-4 mb-2 w-80 border-1"
              style={{
                borderColor: checked === "paypal" ? "#073945" : "#F9F9F9",
              }}
              onPress={() => setChecked("paypal")}
            >
              <View className="flex-row">
                <View className="w-12 h-12 rounded-xl bg-gray-200 flex justify-center items-center mr-2">
                  <Feather name="send" size={24} color="black" />
                </View>
                <View className="mt-3">
                  <Text style={[Textstyles.text_small]}>Paypal</Text>
                </View>
              </View>
              <RadioButton value="paypal" color="#073945" />
            </TouchableOpacity>
          </RadioButton.Group>
        </View>
        <View className="h-5" />
        <CustomButton
          backgroundColor={primarycolor}
          Textname={buttonText}
          TextColor={whitecolor}
          onPress={handlePress}
        />
        <View className="h-11" />
        <View className="w-screen absolute bottom-0">
          <View className="w-[134px] h-[5px] rounded-[100px] bg-[#101010] mx-auto" />
        </View>
      </View>
    </View>
  );
};
