import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { Textstyles } from "../../constants/fontsize";
import {
  greyColorEight,
  greyColorSeven,
  greyColorSix,
  primarycolor,
  primarycolortwo,
} from "../../constants/color";

// verification header
export const Header = (props) => {
  // props: title,
  const navigation = useNavigation();
  return (
    <>
      <View className="w-full h-16 justify-center">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute left-0 bg-gray-200  w-[50px] h-[50px] rounded-full mt-auto mb-auto  flex justify-center items-center"
        >
          <MaterialCommunityIcons name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <View className="w-[75%] flex-row justify-center mx-auto">
          <View className="w-40 h-16 flex justify-center items-center">
            <Text style={[Textstyles.text_small]} className="font-bold">
              {props.title}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export const Lines = () => {
  return (
    <>
      <View className="w-full h-auto items-center">
        {/* Dashed line */}
        <View className="flex flex-col items-center my-1">
          {[...Array(29)].map((_, index) => (
            <View
              key={index}
              style={{ backgroundColor: "#E0E0E0" }} // Adjust color as needed
              className="h-2 w-[1px] my-0.5" // Height of dash, width of line
            />
          ))}
        </View>
      </View>
    </>
  );
};




export const Lines2 = () => {
  return (
    <>
      <View className="w-full h-auto items-center">
        {/* Dashed line */}
        <View className="flex flex-col items-center my-1">
          {[...Array(37)].map((_, index) => (
            <View
              key={index}
              style={{ backgroundColor: "#E0E0E0" }} // Adjust color as needed
              className="h-2 w-[1px] my-0.5" // Height of dash, width of line
            />
          ))}
        </View>
      </View>
    </>
  );
};



export const VerificationStepChecker = (props) => {
  // props: step1, step2, step3
  return (
    <>
      <View className="w-full h-5 items-center">
        <View className="w-[60%] flex-row justify-between items-center">
          {props.step1 ? (
            <View
              style={{ backgroundColor: primarycolor }}
              className="w-5 h-5 rounded-full flex items-center justify-center"
            >
              <Ionicons name="checkmark" size={12} color="white" />
            </View>
          ) : (
            <View
              style={{ borderColor: greyColorSeven }}
              className="border w-5 h-5 rounded-full flex items-center justify-center"
            >
              <Text style={{ color: greyColorSix }} className="text-xs">
                1
              </Text>
            </View>
          )}
          {[...Array(12)].map((_, index) => (
            <View
              key={index}
              style={{ backgroundColor: greyColorEight }}
              className="h-[0.8px] w-1"
            />
          ))}
          {props.step2 ? (
            <View
              style={{ backgroundColor: primarycolor }}
              className="w-5 h-5 rounded-full flex items-center justify-center"
            >
              <Ionicons name="checkmark" size={12} color="white" />
            </View>
          ) : (
            <View
              style={{ borderColor: greyColorSeven }}
              className="border w-5 h-5 rounded-full flex items-center justify-center"
            >
              <Text style={{ color: greyColorSix }} className="text-xs">
                2
              </Text>
            </View>
          )}
          {[...Array(12)].map((_, index) => (
            <View
              key={index + 5}
              style={{ backgroundColor: greyColorEight }}
              className="h-[0.8px] w-1"
            />
          ))}
          {props.step3 ? (
            <View
              style={{ backgroundColor: primarycolor }}
              className="w-5 h-5 rounded-full flex items-center justify-center"
            >
              <Ionicons name="checkmark" size={12} color="white" />
            </View>
          ) : (
            <View
              style={{ borderColor: greyColorSeven }}
              className="border w-5 h-5 rounded-full flex items-center justify-center"
            >
              <Text style={{ color: greyColorSix }} className="text-xs">
                3
              </Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export const VerificationStep1Button = (props) => {
  // props: icon, title, description
  return (
    <>
      <TouchableOpacity
        style={{ borderColor: greyColorSeven }}
        className="w-full h-[72px] flex-row justify-between items-center border rounded-lg px-4"
        {...props}
      >
        <View className="flex-row items-center gap-x-3">
          <View
            style={{ backgroundColor: primarycolortwo }}
            className="w-10 h-10 rounded-full items-center justify-center"
          >
            {props.icon}
          </View>
          <View className="">
            <Text style={[Textstyles.text_small]}>{props.title}</Text>
            <Text style={[Textstyles.text_xsma]}>{props.description}</Text>
          </View>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={12}
          color={primarycolortwo}
        />
      </TouchableOpacity>
    </>
  );
};
