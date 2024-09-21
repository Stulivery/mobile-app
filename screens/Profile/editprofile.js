import { View, Text, TouchableOpacity } from "react-native";
import { height, width } from "../../constants/mobileDimensions";
import { useState } from "react";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Header } from "../mycomponents/verification";
import { Textstyles } from "../../constants/fontsize";
import { primarycolor, whitecolor } from "../../constants/color";
import { greycolortwo, primarycolortwo } from "../../constants/color";
import { CustomButton, CustomTextInput } from "../mycomponents/mycomponent";
const Editprofile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
      <View
        style={{ height: height, width: width }}
        className="px-3 pt-[35px] flex"
      >
        <Header
          title={
            <Text className="" style={[Textstyles.text_cmedium]}>
              Edit Profile
            </Text>
          }
        />
        <View className=" mt-10">
          <CustomTextInput
            placeholder={"Phone number"}
            placeholderTextColor={greycolortwo}
            sideicon={
              <Feather name="magnify" size={20} color={primarycolortwo} />
            }
          />
          <View className=" h-8" />
          <CustomTextInput
            placeholder={"Residential address"}
            placeholderTextColor={greycolortwo}
            sideicon={
              <Feather name="magnify" size={20} color={primarycolortwo} />
            }
          />
          <View className=" h-8" />
          <CustomTextInput
            placeholder={"Password"}
            placeholderTextColor={greycolortwo}
            sideicon={
              <FontAwesome5 name="lock" size={20} color={primarycolortwo} />
            }
            rightIcon={
              <TouchableOpacity onPress={handleShowPassword}>
                <MaterialCommunityIcons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color={primarycolortwo}
                />
              </TouchableOpacity>
            }
            onChange={(text) => setEmail(text)}
            secureTextEntry={!showPassword}
          />
          <View className="h-8" />
          <CustomTextInput
            placeholder={"Confirm password"}
            placeholderTextColor={greycolortwo}
            sideicon={
              <FontAwesome5 name="lock" size={20} color={primarycolortwo} />
            }
            rightIcon={
              <TouchableOpacity onPress={handleShowConfirmPassword}>
                <MaterialCommunityIcons
                  name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color={primarycolortwo}
                />
              </TouchableOpacity>
            }
            onChange={(text) => setEmail(text)}
            secureTextEntry={!showConfirmPassword}
          />
          <View className=" h-10 " />
          <CustomButton
            backgroundColor={primarycolor}
            Textname="Save changes"
            TextColor={whitecolor}
          />
        </View>
      </View>
    </>
  );
};
export default Editprofile;
