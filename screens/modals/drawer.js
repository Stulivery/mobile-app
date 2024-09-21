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
import { Avatar, Title } from "react-native-paper";
import { IconButton } from "react-native-paper";
import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { Feather } from "@expo/vector-icons"; // Importing Feather icons
import { BankIcon, Cash2icon, Walleticon } from "../../utilities/Svgfiles";

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
       style={{backgroundColor:greycolortwo}} className="opacity-70 h-full w-full"/>
        <View
          style={{ backgroundColor: whitecolor }}
          className="absolute bottom-0 w-full px-6 py-0 rounded-t-[24px] h-1/2 shadow-lg"
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
  const [walletchecked, setWalletChecked] = useState(false);
  const [bankchecked, setBankChecked] = useState(false);
  const [cashchecked, setCashChecked] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    console.log("to " + navigateTo);
    navigation.navigate(navigateTo);
  };
  const handleclose=()=>{
    onClose()
  }
  const handlepickpayment=(value)=>{
    
    if(value==='wallet'){
      setWalletChecked(true)
      setBankChecked(false)
      setCashChecked(false)

    }
    else if(value==='cash'){
      setWalletChecked(false)
      setBankChecked(false)
      setCashChecked(true)


    }
    else{
      setWalletChecked(false)
      setBankChecked(true)
      setCashChecked(false)

    }
  }

  return (
    <View className="w-screen h-screen">
      <View
       onStartShouldSetResponder={() => true}
       onResponderRelease={handleclose}
       style={{backgroundColor:greycolortwo}} className="opacity-70 h-full w-full"/>
      <View style={{elevation:4}} className="absolute shadow-sm shadow-black bottom-0 z-50 h-1/2 w-full bg-white rounded-t-2xl items-center px-5">
      <View className="h-1 bg-slate-400 w-16 rounded-2xl mt-2"/>
      <View className="h-3"/>
      <View>
        <Text style={[Textstyles.text_medium]}>{title}</Text>

      </View>
      <View className="h-5"/>
      <TouchableOpacity onPress={() =>handlepickpayment('wallet')} style={{borderColor:primarycolortwo,borderWidth:1,borderRadius:12,height:70}} className="w-full items-center flex-row justify-between px-3">
      <View className="flex-row items-center">
       <View style={{height:50, width:50}} className="bg-slate-100 rounded-2xl flex justify-center items-center">
        <Walleticon
        fill={primarycolortwo}
        stroke={primarycolortwo}
        height={24}
        width={24}
        
        />
       
       </View>
       <View className="w-2"/>
       <View>
       <Text style={[Textstyles.text_x16small]}>Wallet</Text>
       <Text style={[Textstyles.text_x16small]} className="text-slate-400">&#x20A6; 10,500</Text>

       </View>
       </View>
       <View>
        <RadioButton
        value={walletchecked}
        status={walletchecked === true ? 'checked' : 'unchecked' }
        
        />
       </View>
      </TouchableOpacity>
      <View className="h-3" />
      <TouchableOpacity onPress={() => handlepickpayment('cash')} style={{borderColor:primarycolortwo,borderWidth:1,borderRadius:12,height:70}} className="w-full items-center flex-row justify-between px-3">
      <View className="flex-row items-center">
       <View style={{height:50, width:50}} className="bg-slate-100 rounded-2xl flex justify-center items-center">
        <Cash2icon/>
       </View>
       <View className="w-2"/>
       <View>
       <Text style={[Textstyles.text_x16small]}>Cash</Text>
       </View>
       </View>
       <View>
        <RadioButton
        value={cashchecked}
        status={ cashchecked === true ? 'checked' : 'unchecked' }
        
        />
       </View>
      </TouchableOpacity>
      <View className="h-3" />
      <TouchableOpacity onPress={() => handlepickpayment('bank')} style={{borderColor:primarycolortwo,borderWidth:1,borderRadius:12,height:70}} className="w-full items-center flex-row justify-between px-3">
      <View className="flex-row items-center">
       <View style={{height:50, width:50}} className="bg-slate-100 rounded-2xl flex justify-center items-center">
        <BankIcon/>
       </View>
       <View className="w-2"/>
       <View>
       <Text style={[Textstyles.text_x16small]}>Bank Transfer</Text>
       </View>
       </View>
       <View>
        <RadioButton
        value={bankchecked}
        status={ bankchecked === true ? 'checked' : 'unchecked' }
        
        />
       </View>
       
      </TouchableOpacity>
      <View className="h-5"/>
      <CustomButton
        backgroundColor={primarycolor}
        Textname={'Submit'}
        TextColor={whitecolor}
        width={'100%'}
        onPress={handlePress}
        />
      


      </View>
    </View> 
  );
};
export const successmodal=()=>{

}