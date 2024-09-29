import { TouchableOpacity, Text, View, Image, ActivityIndicator } from "react-native";
import { customstyle, radioButtonStyles } from "../../constants/customstyle";
import { Textstyles } from "../../constants/fontsize";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { greycolor, greycolorthree } from "../../constants/color";
import { FontAwesome } from "@expo/vector-icons";
import { greycolortwo, primarycolor } from "../../constants/color";
import { height, width } from "../../constants/mobileDimensions";

export const CustomButton = ({
  Textname,
  onPress,
  backgroundColor,
  TextColor,
  borderWidth,
  borderColor,
  leftIcon,
  rightIcon,
  props,
  width,
  Indicatorstatus
}) => {
  return (
    <>
      <TouchableOpacity
        style={[
          {
            backgroundColor: backgroundColor,
            borderWidth: borderWidth || 0,
            borderColor: borderColor || null,
            width: width || "100%",
          },
          customstyle.buttonstyle,
        ]}
        onPress={onPress}
        {...props}
      >
        {leftIcon}
        <Text style={[Textstyles.text_button, { color: TextColor }]}>
          {Indicatorstatus?<ActivityIndicator/>:Textname}
        </Text>
        {rightIcon}
      </TouchableOpacity>
    </>
  );
};

export const TransactionItem = ({
  iconName, // Name of the FontAwesome icon (like "arrow-up" or "arrow-down")
  transferType, // 'Transfer to' or 'Transfer from'
  personName, // Name of the person for the transaction
  amount, // Transaction amount
  status, // Transaction status (Successful, Pending, etc.)
  time, // Time of the transaction
  date, // Date of the transaction
  iconColor = "red", // Default icon color for outgoing\
}) => {
  return (
    <TouchableOpacity className="w-full flex-row justify-between items-center border-b  rounded-lg py-2 border-[#E2E8F0] px-1 my-2">
      <View className="flex-row items-center">
        <View
          className="flex justify-center items-center w-10 h-10 rounded-full mr-4"
          style={{ backgroundColor: iconColor }}
        >
          
          <FontAwesome name={iconName} size={16} color="#FFF" />
        </View>
        <View>
          <Text style={[Textstyles.text_c]}>
            {transferType} {personName}
          </Text>
          <Text style={[Textstyles.text_xsma, { color: greycolorthree }]}>
            {date} @ {time}
          </Text>
        </View>
      </View>

      {/* Right side: Amount and Status */}
      <View className="items-end">
        <Text style={[Textstyles.text_cc]}>{amount}</Text>
        <Text
          className={
            status === "Successful" ? "text-[#049504]" : "text-[#8A0000]"
          }
          style={[Textstyles.text_c]}
        >
          {status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const CustomTextInput = ({
  autoCapitalize,
  placeholder,
  placeholderTextColor,
  sideicon,
  rightIcon,
  onChange,
  secureTextEntry,
  disable,
  value,
}) => {
  const [showicon, seticon] = useState(true); // Initially, show the icon
  const [inputValue, setInputValue] = useState(value); // Track the input value
  return (
    <>
      <View className="w-full relative flex justify-center">
        {/* Show icon only when input is empty and not focused */}
        {showicon && inputValue === "" && (
          <View className="absolute left-2 z-50">{sideicon}</View>
        )}
        <TextInput
          onFocus={() => seticon(false)} // Hide icon when focused
          onBlur={() => inputValue === "" && seticon(true)} // Show icon on blur if input is empty
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          autoCapitalize={autoCapitalize || "none"}
          style={[customstyle.textinputstyle]}
          onChangeText={(text) => {
            setInputValue(text); // Update input value state
            onChange(text); // Call the parent onChange handler if provided
          }}
          secureTextEntry={secureTextEntry}
          value={inputValue}
          editable={disable}
        />
        {rightIcon && (
          <View className="absolute right-2 z-50">{rightIcon}</View>
        )}
      </View>
    </>
  );
};

export const SearchInput = ({
  autoCapitalize,
  placeholder,
  placeholderTextColor,
  sideicon,
  rightIcon,
  onChange,
  secureTextEntry,
  disable,
  value,
}) => {
  const [showicon, seticon] = useState(true); // Initially, show the icon
  const [inputValue, setInputValue] = useState(value); // Track the input value
  return (
    <View className="w-full relative flex justify-center">
      {/* Show icon only when input is empty and not focused */}
      {showicon && inputValue === "" && (
        <View className="absolute left-2 z-50">{sideicon}</View>
      )}
      <TextInput
        onFocus={() => seticon(false)} // Hide icon when focused
        onBlur={() => inputValue === "" && seticon(true)} // Show icon on blur if input is empty
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize={autoCapitalize || "none"}
        style={[customstyle.textinputstyle]}
        onChangeText={(text) => {
          setInputValue(text); // Update input value state
          onChange(text); // Call the parent onChange handler if provided
        }}
        secureTextEntry={secureTextEntry}
        value={inputValue}
        editable={disable}
      />
      {rightIcon && (
        <View
          className="absolute right-2 z-50"
          style={{
            backgroundColor: "#FFDD00", // Yellow background color
            padding: 10, // Add some padding around the icon
            borderRadius: 10, // Adjust to make the background rounded
          }}
        >
          {rightIcon}
        </View>
      )}
    </View>
  );
};

export const Custom = ({
  autoCapitalize,
  placeholder,
  placeholderTextColor,
  sideicon,
  rightIcon,
  onChange,
  secureTextEntry,
  disable,
  value,
}) => {
  const [showicon, seticon] = useState(true); // Initially, show the icon
  const [inputValue, setInputValue] = useState(value); // Track the input value

  return (
    <View
      style={{ width: "100%", position: "relative", justifyContent: "center" }}
    >
      {/* Show icon only when input is empty and not focused */}
      {showicon && inputValue === "" && (
        <View style={{ position: "absolute", left: 10, zIndex: 50 }}>
          {sideicon}
        </View>
      )}

      <TextInput
        onFocus={() => seticon(false)} // Hide icon when focused
        onBlur={() => inputValue === "" && seticon(true)} // Show icon on blur if input is empty
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize={autoCapitalize || "none"}
        style={{
          paddingLeft: 40, // Add padding for the icon
          height: 50,
          borderRadius: 12,
          backgroundColor: "#F2F2F2", // Light grey background
          color: "#000", // Text color
          fontSize: 16,
        }}
        onChangeText={(text) => {
          setInputValue(text); // Update input value state
          onChange(text); // Call the parent onChange handler if provided
        }}
        secureTextEntry={secureTextEntry}
        value={inputValue}
        editable={disable}
      />

      {rightIcon && (
        <View style={{ position: "absolute", right: 10, zIndex: 50 }}>
          {rightIcon}
        </View>
      )}
    </View>
  );
};

export const CustomUploadInput = ({
  placeholder,
  placeholderTextColor,
  uploadIcon,
  buttonLabel = "Upload",
  onUploadPress,
  onChange,
  value,
  sideIcon, // The left icon (for upload)
}) => {
  const [inputValue, setInputValue] = useState(value || "");

  return (
    <View className="w-full relative flex-row items-center bg-[#EEEEEE] rounded-xl my-2 px-4 py-3">
      {/* Left Icon */}
      {sideIcon && <View className="absolute left-3 z-50">{sideIcon}</View>}

      {/* Text Input */}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={{
          flex: 1,
          marginLeft: sideIcon ? 36 : 0, // Make sure there's space for the icon
        }}
        onChangeText={(text) => {
          setInputValue(text);
          onChange && onChange(text); // Call onChange from parent if provided
        }}
        value={inputValue}
      />

      {/* Right Upload Button */}
      <TouchableOpacity
        style={{ backgroundColor: primarycolor }}
        className="rounded-xl px-4 py-2"
        onPress={onUploadPress}
      >
        <Text className="text-white font-semibold">{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const CustomTextInputTall = ({
  autoCapitalize,
  placeholder,
  placeholderTextColor,
  sideicon,
  rightIcon,
  onChange,
  secureTextEntry,
}) => {
  const [showicon, seticon] = useState(true); // Initially, show the icon
  const [inputValue, setInputValue] = useState(""); // Track the input value

  return (
    <View className="w-72 relative flex justify-start">
      {/* Align content to the start (top) */}
      {/* Show icon only when input is empty and not focused */}
      {showicon && inputValue === "" && (
        <View className="absolute left-2 top-4 z-50">{sideicon}</View>
        // Adjust top to 4 to align with text placeholder
      )}
      <TextInput
        onFocus={() => seticon(false)} // Hide icon when focused
        onBlur={() => inputValue === "" && seticon(true)} // Show icon on blur if input is empty
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize={autoCapitalize || "none"}
        style={[
          customstyle.textinputstyle,
          {
            height: 88, // Set the height of the input
            paddingBottom: 37,
          },
        ]}
        onChangeText={(text) => {
          setInputValue(text); // Update input value state
          onChange(text); // Call the parent onChange handler if provided
        }}
        secureTextEntry={secureTextEntry}
      />
      {rightIcon && (
        <View className="absolute right-2 top-1 z-50">{rightIcon}</View>
        // Adjust top to 4 to align with text placeholder
      )}
    </View>
  );
};

export const CustomTextInputshort = ({
  autoCapitalize,
  placeholder,
  placeholderTextColor,
  sideicon,
  rightIcon,
  onChange,
  secureTextEntry,
}) => {
  const [showicon, seticon] = useState(true); // Initially, show the icon
  const [inputValue, setInputValue] = useState(""); // Track the input value

  return (
    <>
      <View className=" w-72 relative flex justify-center">
        {/* Show icon only when input is empty and not focused */}
        {showicon && inputValue === "" && (
          <View className="absolute left-2 z-50">{sideicon}</View>
        )}
        <TextInput
          onFocus={() => seticon(false)} // Hide icon when focused
          onBlur={() => inputValue === "" && seticon(true)} // Show icon on blur if input is empty
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          autoCapitalize={autoCapitalize || "none"}
          style={[customstyle.textinputstyle]}
          onChangeText={(text) => {
            setInputValue(text); // Update input value state
            onChange(text); // Call the parent onChange handler if provided
          }}
          secureTextEntry={secureTextEntry}
        />
        {rightIcon && (
          <View className="absolute right-2 z-50">{rightIcon}</View>
        )}
      </View>
    </>
  );
};

export const CustomSelect = ({
  leftIcon,
  rightIcon,
  placeHolder,
  placeholderTextColor,
}) => {
  return (
    <>
      <View
        className="w-full relative flex justify-center"
        style={[customstyle.textinputstyle]}
      >
        {leftIcon && <View className="absolute left-2 z-50">{leftIcon}</View>}
        <Text style={{ color: placeholderTextColor }}>{placeHolder}</Text>
        {rightIcon && (
          <View className="absolute right-2 z-50">{rightIcon}</View>
        )}
      </View>
    </>
  );
};

export const CustomSelectRadioBox = ({ options, selected, setSelected }) => {
  const handleSelectedOption = (selectedValue) => {
    setSelected(selectedValue);
  };
  return (
    <View
      className="w-full relative flex justify-center"
      style={[customstyle.selectRadioBox]}
    >
      {options?.map((row, index) => (
        <TouchableOpacity
          key={index}
          className="flex flex-row justify-between py-2"
          onPress={() => handleSelectedOption(row)}
        >
          <Text style={{ color: greycolortwo }}>{row}</Text>
          <View style={radioButtonStyles.radioButton}>
            {selected === row && (
              <View style={radioButtonStyles.radioButtonSelected} />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const MyDivider = ({ Color, width }) => {
  return <View style={{ backgroundColor: Color, height: 1, width: width }} />;
};
export const Box = ({ inputText }) => {
  return (
    <View
      style={[customstyle.boxstyle]}
      className="flex justify-center items-center"
    >
      <Text style={[Textstyles.text_medium]}>{inputText}</Text>
    </View>
  );
};
export const Iconplaceholder = ({ backgroundColor, width, height, Icon }) => {
  return (
    <View
      style={{ backgroundColor: backgroundColor, width: width, height: height }}
      className="flex justify-center items-center rounded-full"
    >
      {Icon}
    </View>
  );
};

export const CustomInputWithHeader = ({
  headerText, // This is the input header text
  normalText, // Text inside the input field
  autoCapitalize,
  onChange,
  secureTextEntry,
  disable,
  value,
}) => {
  const [inputValue, setInputValue] = useState(value); // Track the input value

  return (
    <View className="w-full flex flex-col">
      {/* Input Header */}
      <Text className=" mb-2" style={[Textstyles.text_cmedium]}>
        {headerText}
      </Text>

      {/* Input Field */}
      <View className="relative flex justify-center">
        <TextInput
          style={[
            customstyle.textinputstyle,
            { paddingLeft: 15 }, // Reduce the left padding here
          ]} // Apply custom styling
          value={inputValue || normalText} // Display the normalText if no value
          editable={false}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize || "none"}
          onChangeText={(text) => {
            setInputValue(text); // Update input value state
            onChange(text); // Call the parent onChange handler if provided
          }}
        />
      </View>
    </View>
  );
};
