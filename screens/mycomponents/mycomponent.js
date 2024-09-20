import { TouchableOpacity, Text, View } from "react-native";
import { customstyle, radioButtonStyles } from "../../constants/customstyle";
import { Textstyles } from "../../constants/fontsize";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { greycolortwo } from "../../constants/color";
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
}) => {
  return (
    <>
      <TouchableOpacity
        style={[
          {
            backgroundColor: backgroundColor,
            borderWidth: borderWidth || 0,
            borderColor: borderColor || null,
            width:width || '100%'
          },
          customstyle.buttonstyle,
        ]}
        onPress={onPress}
        {...props}
      >
        {leftIcon}
        <Text style={[Textstyles.text_button, { color: TextColor }]}>
          {" "}
          {Textname}{" "}
        </Text>
        {rightIcon}
      </TouchableOpacity>
    </>
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
  value
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
            paddingBottom: 37
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
export const Iconplaceholder=({backgroundColor,width,height,Icon})=>{
  return(
    <View style={{backgroundColor:backgroundColor,width:width,height:height}} className="flex justify-center items-center rounded-full">
      {Icon}
    </View>
  )
}






export const CustomInputWithHeader = ({
  headerText, // This is the input header text
  normalText, // Text inside the input field
  autoCapitalize,
  onChange,
  secureTextEntry,
  disable,
  value
}) => {
  const [inputValue, setInputValue] = useState(value); // Track the input value

  return (
    <View className="w-full flex flex-col">
      {/* Input Header */}
      <Text className=" mb-2"style={[Textstyles.text_cmedium]}>{headerText}</Text>
      
      {/* Input Field */}
      <View className="relative flex justify-center">
        <TextInput
           style={[
            customstyle.textinputstyle, 
            { paddingLeft: 15 }  // Reduce the left padding here
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