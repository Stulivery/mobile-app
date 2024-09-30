import { Image, Pressable, Text, TouchableOpacity, View,ActivityIndicator, KeyboardAvoidingView, Platform } from "react-native";
import Google from "../../assets/images/google.svg";
import Facebook from "../../assets/images/facebook.svg";
import Apple from "../../assets/images/apple.svg";
import { Textstyles } from "../../constants/fontsize";
import {
    greycolorfive,
    greycolorthree,
    greycolortwo,
    primarycolor,
    primarycolortwo,
    whitecolor,
} from "../../constants/color";
import { useNavigation,useFocusEffect} from "@react-navigation/native";
import {
    Box,
    CustomButton,
    CustomSelect,
    CustomSelectRadioBox,
    CustomTextInput,
    MyDivider,
} from "../mycomponents/mycomponent";
import {
    Feather,
    FontAwesome5,
    FontAwesome6,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import { useState,useEffect,useCallback } from "react";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { height } from "../../constants/mobileDimensions";
import { Drawer } from "../modals/drawer";
import NumericKeyboard from "../modals/CustomKeyboard";
import axios from "axios";
import { sendOtpurl } from "../../endpoints/endpoint";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SendOtpandtoken, VerifyEmail } from "../../utilities/datafetch";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { ScrollView } from "react-native-gesture-handler";

export default function Registration() {
    const navigation = useNavigation();
    const [currentStep, setCurrentStep] = useState(0); //0 and 1 and 2 and 3
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [Name,setName]=useState("")
    const [Phonenumber,setPhonenumber]=useState('')
    const [ConfirmPassword,setConfirmPassword]=useState()
    const [Password,setPassword]=useState('')
    const [StudentId,setStudentId]=useState('')
    const [errorMsg, setErrorMsg] = useState(null);
    const [studentSelectOption, setStudentSelectOption] = useState("");
    const [showindicator,setshowindicator]=useState(false)
    const initialTime = 5 * 60;
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [getValue,setValue]=useState('')
    const [otpArray, setotpArray] = useState(["", "", "", ""]); 
    const [Address,setAddress]=useState('')
    useFocusEffect(
        useCallback(() => {
          // Reset all states to their initial values when screen comes into focus
          setName('')
          setEmail('')
          setPassword('')
          setConfirmPassword('')
          setPhonenumber('')
          setStudentId('')
          setRoleSelectOption('')
          setStudentSelectOption('')
          setCurrentStep(0);
          setShowDrawer(false)
          // Optional: Any cleanup can be done when the screen loses focus
          return () => {
            console.log('Screen unfocused or cleanup logic');
          };
        }, []) // The empty array ensures this runs only when the screen is focused/unfocused
      );

    const handleStudentSelectOption = (value) => {
        setStudentSelectOption(value);
    };
    const [roleSelectOption, setRoleSelectOption] = useState("student");
    const handleRoleSelectOption = (value) => {
        setRoleSelectOption(value);
    };
    const [showStudentOption, setShowStudentOption] = useState(false);
    const handleShowStudentOption = () => {
        setShowStudentOption(!showStudentOption);
        if (showStudentOption) {
            setStudentSelectOption("");
            setRoleSelectOption("");
            setShowRoleSelectOption(false);
        }
    }
    const [showGenderOption,setshowGenderOption]=useState(false)
    const [GenderSelectOption,setGenderSelectOption]=useState('')
    const handleShowGenderOption=()=>{
        setshowGenderOption(!showGenderOption)
        if(showGenderOption){
            setGenderSelectOption("");
            setshowGenderOption(false);

        }

    }
    
    const handleGendeSelectrOption = (value) => {
        setGenderSelectOption(value);
    };
    const [showRoleSelectOption, setShowRoleSelectOption] = useState(false);
    const handleShowRoleSelectOption = () => {
        setShowRoleSelectOption(!showRoleSelectOption);
        if (showRoleSelectOption) {
            setRoleSelectOption("");
        }
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    const handleToLogin = () => {
        navigation.navigate("login");
    };
    const [showDrawer, setShowDrawer] = useState(false);
    const handleContinue = async() => {
        console.log(currentStep)  
        if(currentStep===0){
            if (!Name) {
                setErrorMsg("Please Enter your name");
                return;
              }
              if (!email) {
                setErrorMsg("Please Enter your email");
                return;
              }
              if (!Phonenumber) {
                setErrorMsg("Please Enter your phone number");
                return;
              }
              if (!Address) {
                setErrorMsg("Please Enter your address");
                return;
              }
       
          await  VerifyEmail(email,setErrorMsg,setshowindicator,setCurrentStep)
          setTimeLeft(initialTime)
          setotpArray(["", "", "", ""])
       
        }
        if(currentStep===1){
            if(timeLeft<1){
                setErrorMsg('Otp TimeOut')
                return
            }
            const otp=otpArray.join("")
            console.log(otp)
            await SendOtpandtoken(otp,setErrorMsg,setshowindicator,() => {
                setCurrentStep((prevStep) => prevStep + 1); // Ensure step is updated after OTP submission
              });
            

        }
        if(currentStep===2){
            if(Password!==ConfirmPassword){
                setErrorMsg('Password not match')
                return
            }
            if(Password.length<8){
                setErrorMsg('Password too Short not less 8 character')
                return
            }
            
                setCurrentStep((prevStep) => prevStep + 1)

        
          

        }
       

        // if (currentStep < 3) {
        //     setCurrentStep((prevStep) => prevStep + 1);
        // }
        if (currentStep === 3) {
            if(!roleSelectOption){
                setErrorMsg('Select student option')
                return
            }
            const data={Name,Phonenumber,email,Password,Address,GenderSelectOption,StudentId,roleSelectOption}
            console.log(data)
            setShowDrawer(true);
            translateY.value = setShowDrawer ? withSpring(0) : withSpring(300);
        }
    };
    const handleContinueBackwards = () => {
        console.log('ok')
        if (currentStep > 0) {
            setCurrentStep((prevStep) => prevStep - 1);
        }
        if(currentStep===2){
            setTimeLeft(0)
            setotpArray(["", "", "", ""])
    
            }
    
    };
    const translateY = useSharedValue(300);
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));
    const handlePickValue = (value) => {
        if (value === "-") {
            // Handle delete action (remove the last filled digit)
            setotpArray((prevOtp) => {
              const lastFilledIndex = prevOtp.findLastIndex((digit) => digit !== ""); // Find the last filled index
              if (lastFilledIndex > -1) {
                const newOtp = [...prevOtp];
                newOtp[lastFilledIndex] = ""; // Remove the last filled digit
                return newOtp;
              }
              return prevOtp; // Return unchanged if OTP is already empty
            });
          } else if (value === "*") {
            // Handle OTP submission when * is pressed
            if (otpArray.some((digit) => digit === "")) {
                setErrorMsg("Incomplete OTP"); // Show error if OTP is incomplete
            } else {
                setErrorMsg(""); // Clear the error message
              // Handle OTP submission logic here
              console.log("OTP Submitted:", otpArray.join("")); // Example submission action
            }
          } else {
            // Append digit to the first empty slot
            setotpArray((prevOtp) => {
              const nextEmptyIndex = prevOtp.indexOf(""); // Find the first empty index
              if (nextEmptyIndex > -1) {
                const newOtp = [...prevOtp];
                newOtp[nextEmptyIndex] = value; // Fill the empty slot
                return newOtp;
              }
              return prevOtp; // Return unchanged if OTP is already filled
            });
          }
    };
    return (
        <>
            {showDrawer && (
                <>
                    <View
                        style={{ height: height, backgroundColor: greycolorfive }}
                        className="w-full absolute z-50 opacity-70"
                    />
                    <View style={{ zIndex: 12000 }} className="bottom-0 absolute">
                        <Animated.View style={[animatedStyles]}>
                            <Drawer
                                title="Successful"
                                text={
                                    <Text>
                                        Your <Text style={{ color: primarycolor }}>stulivery</Text>{" "}
                                        account has been registered successfully
                                    </Text>
                                }
                                buttonText="Login"
                                navigateTo="login"
                            />
                        </Animated.View>
                    </View>
                </>
            )}
            
            <View style={{ height: height }} className={`w-full px-5 py-[88px]`}>
                <View>
                    <View>
                        <Image
                            className="h-12 w-12"
                            source={require("../../assets/images/logo.png")}
                            resizeMode="contain"
                        />
                        <View className="h-8" />
                        <Text style={[Textstyles.text_medium]}>Create an account</Text>
                        <Text style={[Textstyles.text_xsmall]}>
                            Enter your details to create your{" "}
                            <Text style={{ color: primarycolor }}>Stulvilery</Text> account
                        </Text>
                        <View className="h-4" />
                        {currentStep > 0 && (
                            <TouchableOpacity
                                onPress={handleContinueBackwards}
                                className="flex flex-row items-center relative z-50"
                            >
                                <MaterialIcons
                                    name="keyboard-backspace"
                                    size={24}
                                    color={primarycolortwo}
                                />
                                <Text
                                    style={[Textstyles.text_xsmall, { color: primarycolortwo }]}
                                >
                                    Previous
                                </Text>
                            </TouchableOpacity>
                        )}
                        <View className="h-4" />
                        {currentStep === 0 && (
                            <>
                            <Text className="text-red-500">{errorMsg}</Text>
                           
                                <CustomTextInput
                                    placeholder={"Name"}
                                    placeholderTextColor={greycolortwo}
                                    sideicon={
                                        <Ionicons
                                            name="person-outline"
                                            size={20}
                                            color={primarycolortwo}
                                        />
                                    }
                                    value={Name}
                                    onChange={(text) => setName(text)}
                                />
                                <View className="h-3" />
                                <CustomTextInput
                                    placeholder={"Email"}
                                    placeholderTextColor={greycolortwo}
                                    sideicon={
                                        <Feather name="mail" size={20} color={primarycolortwo} />
                                    }
                                    value={email}
                                    onChange={(text) => setEmail(text)}
                                />
                                <View className="h-3" />
                                <CustomTextInput
                                    placeholder={"Phone number"}
                                    placeholderTextColor={greycolortwo}
                                    sideicon={
                                        <MaterialIcons
                                            name="phone-android"
                                            size={20}
                                            color={primarycolortwo}
                                        />
                                    }
                                    value={Phonenumber}
                                    onChange={(text) => setPhonenumber(text)}
                                />
                                 <View className="h-3" />
                                <CustomTextInput
                                    placeholder={"Address"}
                                    placeholderTextColor={greycolortwo}
                                    sideicon={
                                        <MaterialIcons
                                            name="home"
                                            size={20}
                                            color={primarycolortwo}
                                        />
                                    }
                                    value={Address}
                                    onChange={(text) => setAddress(text)}
                                />

                           
                               
                            </>
                        )}
                        {currentStep === 1 && (
                            <View>
                                   <EmailVerification
                                errorMsg={errorMsg}
                                setErrorMsg={setErrorMsg}
                                setTimeLeft={setTimeLeft}
                                timeLeft={timeLeft}
                                getValue={getValue}
                                setotpArray={setotpArray}
                                otpArray={otpArray}
                                email={email}
                            />
                                </View>
                         
                        )}
                        {currentStep === 2 && (
                            <>
                             <Text className="text-red-500">{errorMsg}</Text>
                                <CustomTextInput
                                    placeholder={"Password"}
                                    placeholderTextColor={greycolortwo}
                                    sideicon={
                                        <FontAwesome5
                                            name="lock"
                                            size={20}
                                            color={primarycolortwo}
                                        />
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
                                    value={Password}
                                    onChange={(text) => setPassword(text)}
                                    secureTextEntry={!showPassword}
                                />
                                <View className="h-3" />
                                <CustomTextInput
                                    placeholder={"Confirm password"}
                                    placeholderTextColor={greycolortwo}
                                    sideicon={
                                        <FontAwesome5
                                            name="lock"
                                            size={20}
                                            color={primarycolortwo}
                                        />
                                       
                                    }
                                    rightIcon={
                                        <TouchableOpacity onPress={handleShowConfirmPassword}>
                                            <MaterialCommunityIcons
                                                name={
                                                    showConfirmPassword
                                                        ? "eye-outline"
                                                        : "eye-off-outline"
                                                }
                                                size={20}
                                                color={primarycolortwo}
                                            />
                                        </TouchableOpacity>
                                    }
                                    value={ConfirmPassword}
                                    onChange={(text) => setConfirmPassword(text)}
                                    secureTextEntry={!showConfirmPassword}
                                />
                            </>
                        )}
                        {currentStep === 3 && (
                            <>
                             <Text className="text-red-500">{errorMsg}</Text>
                                <TouchableOpacity
                                    onPress={handleShowGenderOption}
                                >
                                    <CustomSelect
                                        placeHolder="Select Gender"
                                        placeholderTextColor={greycolortwo}
                                        leftIcon={
                                            <FontAwesome6
                                            name="user" 
                                             size={20}
                                                color={primarycolortwo}
                                            />
                                        }
                                        rightIcon={
                                            <MaterialIcons
                                                name={showStudentOption ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                                                size={20}
                                                color={greycolortwo}
                                            />
                                        }

                                    />
                                </TouchableOpacity>
                                <View className="h-3" />
                                {showGenderOption && (
                                    <CustomSelectRadioBox
                                        selected={GenderSelectOption}
                                        setSelected={handleGendeSelectrOption}
                                        options={["Male", "Female"]}
                                    />
                                )}
                                <View className="h-3" />
                                <TouchableOpacity
                                    onPress={handleShowStudentOption}
                                >
                                    <CustomSelect
                                        placeHolder="Are you a student"
                                        placeholderTextColor={greycolortwo}
                                        leftIcon={
                                            <MaterialCommunityIcons
                                                name="chat-question-outline"
                                                size={20}
                                                color={greycolortwo}
                                            />
                                        }
                                        rightIcon={
                                            <MaterialIcons
                                                name={showStudentOption ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                                                size={20}
                                                color={greycolortwo}
                                            />
                                        }

                                    />
                                </TouchableOpacity>
                                <View className="h-3" />
                                {showStudentOption && (
                                    <CustomSelectRadioBox
                                        selected={studentSelectOption}
                                        setSelected={handleStudentSelectOption}
                                        options={["Yes", "No"]}
                                    />
                                )}
                                <View className="h-8" />
                                {studentSelectOption === "Yes" ? (
                                    <>
                                        <CustomTextInput
                                            placeholder="Student ID/ Matric number"
                                            placeholderTextColor={greycolortwo}
                                            sideicon={
                                                <MaterialIcons
                                                    name="account-box"
                                                    size={20}
                                                    color={greycolortwo}
                                                />
                                            }
                                            onChange={(text) => setStudentId(text)}
                                        />
                                    </>
                                ) : (
                                    studentSelectOption === "No" && (
                                        <>
                                            <TouchableOpacity
                                                onPress={handleShowRoleSelectOption}
                                            >
                                                <CustomSelect
                                                    placeHolder="Choose role"
                                                    placeholderTextColor={greycolortwo}
                                                    leftIcon={
                                                        <MaterialCommunityIcons
                                                            name="chat-question-outline"
                                                            size={20}
                                                            color={greycolortwo}
                                                        />
                                                    }
                                                    rightIcon={
                                                        <MaterialIcons
                                                            name={showRoleSelectOption ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                                                            size={20}
                                                            color={greycolortwo}
                                                        />
                                                    }
                                                />
                                            </TouchableOpacity>
                                            <View className="h-8" />
                                            {showRoleSelectOption && (
                                                <CustomSelectRadioBox
                                                    selected={roleSelectOption}
                                                    setSelected={handleRoleSelectOption}
                                                    options={["University Teaching Staff", "Non-teaching staff", "Resident"]}
                                                />
                                            )}
                                        </>
                                    )
                                )}
                            </>
                        )}
                    </View>
                    <View>
                        <View className="h-8" />
                        <CustomButton
                            backgroundColor={primarycolor}
                            Textname={currentStep === 3 ? "Create Account" : currentStep === 1 ? "Send" : "Continue"}
                            TextColor={whitecolor}
                            onPress={handleContinue}
                            Indicatorstatus={showindicator}
                        />
                    </View>
                </View>

                <View className="h-10" />

                {currentStep === 0 && (
                    <View className="items-center">
                        <View className="flex-row items-center justify-center">
                            <MyDivider width={96} Color={greycolorthree} />
                            <View className="w-3" />
                            <Text style={[Textstyles.text_button]}>Or sign up with</Text>
                            <View className="w-3" />
                            <MyDivider width={96} Color={greycolorthree} />
                        </View>
                        <View className="h-3" />
                        <View className="flex-row">
                            <TouchableOpacity
                                style={{ height: 30, width: 30 }}
                                className="rounded-full border flex justify-center items-center"
                            >
                                <Google width={24} height={24} />
                            </TouchableOpacity>
                            <View className="w-3" />
                            <TouchableOpacity
                                style={{ height: 30, width: 30 }}
                                className="rounded-full border flex justify-center items-center"
                            >
                                <Facebook width={24} height={24} />
                            </TouchableOpacity>
                            <View className="w-3" />
                            <TouchableOpacity
                                style={{ height: 30, width: 30 }}
                                className="rounded-full border flex justify-center items-center"
                            >
                                <Apple width={24} height={24} />
                            </TouchableOpacity>
                        </View>
                        <View className="h-8" />
                        <View>
                            <View className="flex-row items-center justify-center">
                                <Text style={[Textstyles.text_small, { color: primarycolortwo }]}>
                                    Have an account?{" "}
                                </Text>
                                <TouchableOpacity onPress={handleToLogin}>
                                    <Text style={[Textstyles.text_small, { color: primarycolor }]}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            </View>
            {currentStep===1 &&<View className="absolute bg-black  h-full ">
                <View className="w-full absolute bottom-0" >
                    <NumericKeyboard onPress={(value) => handlePickValue(value)} />
                </View>
            </View>}
        </>
    );
}

const EmailVerification = ({
    errorMsg,
    setErrorMsg,
    setTimeLeft,
    timeLeft,
    getValue,
    otpArray, 
    setotpArray,
    email
   

}) => {
    const [showindicator,setshowindicator]=useState(false)
    const [currentStep,setCurrentStep]=useState(1)
    // Function to update OTP values
    useEffect(() => {
        // If timeLeft is 0, stop the timer
        if (timeLeft === 0) return;
    
        // Set up an interval to decrease the time left every second
        const intervalId = setInterval(() => {
          setTimeLeft(prevTime => prevTime - 1);
        }, 1000);
    
        // Clear the interval when the component unmounts or timeLeft changes
        return () => clearInterval(intervalId);
      }, [timeLeft]);
    
      // Convert seconds to minutes and seconds for display
      const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
      };
      const handlePress=async()=>{
        const initialTime = 5 * 60;
       setTimeLeft(initialTime)
       await  VerifyEmail(email,setErrorMsg,setshowindicator,setCurrentStep)
      }

    return (
        <>
           
            <View>
                <View className="flex-row items-center justify-between">
                <Text style={[Textstyles.text_xsmall]}>
                   Check your email for otp
                </Text>
                <View className="relative z-50">
                    {timeLeft===0?
                    <TouchableOpacity onPress={handlePress}>
                        <Text>Resend</Text>
                    </TouchableOpacity>:
                     <Text style={[Textstyles.text_xsmall]} className="text-red-500">OTP Expires In:{formatTime(timeLeft)}</Text>
                    }
               

                </View>
                   
                    </View>
               <Text style={[Textstyles.text_xsmall]} className="text-red-500">
                    {errorMsg}
                </Text>
                
            <Pressable

                    className="flex-row justify-center items-center"
                >
                    {otpArray.map((digit, index) => (
                        <View
                            key={index}
                            style={{ flexDirection: "row", alignItems: "center" }}
                        >
                            <Box inputText={digit} />
                            {index < otpArray.length - 1 && <View className="w-2" />}
                        </View>
                    ))}
                </Pressable>
            </View>
        </>
    );
}
