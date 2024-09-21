import { View, Text, TouchableOpacity } from "react-native";
import { height, width } from "../../../constants/mobileDimensions";

import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Header } from "../../mycomponents/verification";
import { Textstyles } from "../../../constants/fontsize";
import { primarycolor } from "../../../constants/color";
import { greycolortwo, primarycolortwo } from "../../../constants/color";
import { CustomTextInput } from "../../mycomponents/mycomponent";
import { useNavigation } from "@react-navigation/native";
import Footer from "../footer";
import { ScrollView } from "react-native-gesture-handler";
const Trackorder = () => {
  const navigation = useNavigation();


  const handlenavigatetelocation=()=>{
    navigation.navigate("orderlocation");
  }
  return (
    <>
      <View
        style={{ height: height, width: width }}
        className="px-3 pt-[35px] flex"
      >
        <Header
          title={
            <Text className="" style={[Textstyles.text_cmedium]}>
              Track Order
            </Text>
          }
        />
        <View className=" h-6 " />
        <Text className=" ml-2 mb-1" style={[Textstyles.text_xxmedium]}>
          Order number
        </Text>
        <View className=" px-2">
          <CustomTextInput
            placeholder={"Search"}
            placeholderTextColor={greycolortwo}
            sideicon={
              <Feather name="magnify" size={20} color={primarycolortwo} />
            }
          />
        </View>
        <View className=" w-full flex-row justify-between items-center h-10 px-1 mt-3 mb-4">
          <View>
            <Text style={[Textstyles.text_xxmedium]}>Tracking History</Text>
          </View>
          <TouchableOpacity
            className=" flex items-center justify-center"
          >
            <Text style={[Textstyles.text_xsmall, { color: primarycolor }]}>
              Delete All
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
        <TouchableOpacity onPress={()=>handlenavigatetelocation()} className="w-full justify-between  h-10 flex-row ">
          <View className="mt-auto mb-auto w-44 gap-4 flex-row">
            <View className="mt-auto mb-auto flex justify-center items-center w-8 h-10 ">
              <Feather name="clock" size={20} color={primarycolortwo} />
            </View>
            <View className=" mt-auto mb-auto flex justify-center items-center  h-10">
              <Text style={[Textstyles.text_xxmedium]}>MM09132005</Text>
            </View>
          </View>
          <TouchableOpacity className=" mt-auto mb-auto">
            <Feather name="x" size={20} color={primarycolortwo} />
          </TouchableOpacity>
        </TouchableOpacity>
        <View className=" h-[1px] w-[100%] mt-2 bg-gray-300"></View>
        <TouchableOpacity className=" mt-2  w-full justify-between  h-10 flex-row ">
          <View className="   mt-auto mb-auto w-44 gap-4 flex-row">
            <View className=" mt-auto mb-auto flex justify-center items-center w-8 h-10 ">
              <Feather name="clock" size={20} color={primarycolortwo} />
            </View>
            <View className=" mt-auto mb-auto flex justify-center items-center  h-10">
              <Text style={[Textstyles.text_xxmedium]}>MM09132005</Text>
            </View>
          </View>
          <TouchableOpacity className=" mt-auto mb-auto">
            <Feather name="x" size={20} color={primarycolortwo} />
          </TouchableOpacity>
        </TouchableOpacity>

        </ScrollView>
        
      </View>
      <Footer
      active={'Track Order'}

      />
    </>
  );
};
export default Trackorder;
