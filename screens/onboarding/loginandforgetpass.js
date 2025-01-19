import { Image, View, Text, Pressable, Keyboard } from "react-native";
import Google from "../../assets/images/google.svg";
import Facebook from "../../assets/images/facebook.svg";
import Apple from "../../assets/images/apple.svg";
import {
  Box,
  CustomButton,
  CustomTextInput,
  MyDivider,
} from "../mycomponents/mycomponent";
import {
  greycolorfive,
  greycolorthree,
  greycolortwo,
  primarycolor,
  primarycolortwo,
  whitecolor,
} from "../../constants/color";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState, Fragment,useCallback,useEffect } from "react";
import { Textstyles } from "../../constants/fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation,useFocusEffect } from "@react-navigation/native";
import EmailDisplay from "../../utilities/emailMask";
import NumericKeyboard from "../modals/CustomKeyboard";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { height } from "../../constants/mobileDimensions";
import { Drawer } from "../modals/drawer";
import { LoginUser, SendOtpandtoken, UpdatePassword, VerifyEmail, VerifyEmailuser } from "../../utilities/datafetch";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showindicator,setshowindicator]= useState('')
  const [errorMsg,setErrorMsg]=useState('')
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlesubmit = () => {
    setErrorMsg('');  // Clear any previous error messages before login
    LoginUser(email, Password, setshowindicator, setErrorMsg, handleToDashboard);
};

  const handleToDashboard = () => {
    // IF first time login
    // THEN redirect to id verification
    // ELSE navigate to dashboard
    navigation.navigate("dashboard-router");
  };
  const handleToSignup = () => {
    navigation.navigate("signup");
  };
  return (
    <>
      <View className="h-screen w-full px-5 py-[88px]">
        <View>
          <View>
            <Image
              className="h-12 w-12"
              source={require("../../assets/images/logo.png")}
              resizeMode="contain"
            />
            <View className="h-8" />
            <Text style={[Textstyles.text_medium]}>Login to your account</Text>

            <Text style={[Textstyles.text_xsmall]}>
              Enter your login details to have access to your account
            </Text>
            <View className="h-8" />
            <Text className="text-red-500">{errorMsg}</Text>
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
              value={Password}
              onChange={(text) => setPassword(text)}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => navigation.navigate("forgotpass")}>
              <Text
                style={[Textstyles.text_small, { color: primarycolor }]}
                className="text-right"
              >
                forgot password?
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View className="h-8" />
            <CustomButton
              backgroundColor={primarycolor}
              Textname={"Login"}
              TextColor={whitecolor}
              onPress={handlesubmit}
              Indicatorstatus={showindicator}
            />
          </View>
        </View>

        <View className="h-10" />

        <View className="items-center">
          <View className="flex-row items-center justify-center">
            <MyDivider width={96} Color={greycolorthree} />
            <View className="w-3" />
            <Text style={[Textstyles.text_button]}>Or sign in with</Text>
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
                I don't have an account?{" "}
              </Text>
              <TouchableOpacity onPress={handleToSignup}>
                <Text style={[Textstyles.text_small, { color: primarycolor }]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
export const Forgotpass = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [errorMsg,setErrorMsg]=useState("")
  const [showindicator,setshowindicator]=useState(false)
  const handlesubmit = () => {
    setErrorMsg('')
    VerifyEmailuser(email, setErrorMsg, setshowindicator,handlenavigate)
  };
 const handlenavigate=()=>{
    navigation.navigate("otpverify");
  }
  return (
    <>
      <View className="h-full w-full px-5 py-[88px]">
        <View className="h-2/3 flex">
          <Image
            className="h-12 w-12"
            source={require("../../assets/images/logo.png")}
            resizeMode="contain"
          />
          <View className="h-8" />
          <Text style={[Textstyles.text_medium]}>Forgot password</Text>

          <Text style={[Textstyles.text_xsmall]}>
            Enter your email address and we’ll send you confirmation code to
            reset your password
          </Text>
          <View className="h-8" />
          <Text style={[Textstyles.text_xsmall]} className="text-red-500">
            {errorMsg}
          </Text>
          <CustomTextInput
            placeholder={"Email"}
            placeholderTextColor={greycolortwo}
            sideicon={<Feather name="mail" size={20} color={primarycolortwo} />}
            value={email}
            onChange={(text) => setEmail(text)}
          />

          <View className="h-8" />
          <CustomButton
            backgroundColor={primarycolor}
            Textname={"Send"}
            TextColor={whitecolor}
            onPress={handlesubmit}
            Indicatorstatus={showindicator}
          />
        </View>
      </View>
    </>
  );
};
export const Otpverify = () => {
 
 
 const [email,setEmail]=useState("")
  const [showkeyboard, setshowkeyboard] = useState(true);
  const [otpArray, setotpArray] = useState(["", "", "", ""]); // OTP array for 4 digits
  const [errorMsg, setErrorMsg] = useState("");
  const initialTime = 5 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [showindicator,setshowindicator]=useState(false)
  const [currentStep,setCurrentStep]=useState('')
  const navigation = useNavigation();
  const getemail = async () => {
    try {
      const emailawait = await AsyncStorage.getItem('email');
      if (emailawait) setEmail(emailawait);
    } catch (error) {
      setErrorMsg("Error fetching email.");
    }
  };

  useEffect(() => {
    getemail();
  }, []);
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
  const handleshowkeys = () => {
    setshowkeyboard((prevState) => !prevState)
    translateY.value = showkeyboard ? withSpring(0) : withSpring(300);
    console.log('ok')
  };

  const translateY = useSharedValue(300);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  // Function to update OTP values
  const handlepickvalue = (value) => {
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
  const handlenavigate=()=>{
    navigation.navigate("confirmpass");
  }
  const handlesubmit = async() => {
    if (timeLeft < 1) {
      setErrorMsg('Otp TimeOut')
      return
  }
  const otp = otpArray.join("")
  console.log(otp)
  if(!otp){
    return
  }
  await SendOtpandtoken(otp, setErrorMsg, setshowindicator, handlenavigate);
  };
  const handlePress = async () => {
    const initialTime = 5 * 60;
    setTimeLeft(initialTime)
    await VerifyEmail(email, setErrorMsg, setshowindicator, setCurrentStep,()=>{null})
}


  return (
    <>
      <View className="absolute bottom-0 z-50 items-center">
        <Animated.View className="w-full" style={[animatedStyles]}>
          <NumericKeyboard onPress={(value) => handlepickvalue(value)} />
        </Animated.View>
      </View>
      <View className="relative  h-screen w-full px-5 py-[88px]">
        <View className="h-2/3 flex">
          <Image
            className="h-12 w-12"
            source={require("../../assets/images/logo.png")}
            resizeMode="contain"
          />
          <View className="h-8" />
          <Text style={[Textstyles.text_medium]}>Forgot password</Text>
          <Text style={[Textstyles.text_xsmall]}>
            Enter the 4-digit confirmation code sent to your email{" "}
            <EmailDisplay email={email} />
          </Text>
          <View className="h-8" />
          <View className="flex-row items-center justify-between">
          <Text style={[Textstyles.text_xsmall]} className="text-red-500">
            {errorMsg}
          </Text>
                    <View className="relative z-50">
                        {timeLeft === 0 ?
                            <TouchableOpacity onPress={handlePress}>
                                <Text>Resend</Text>
                            </TouchableOpacity> :
                            <Text style={[Textstyles.text_xsmall]} className="text-red-500">OTP Expires In:{formatTime(timeLeft)}</Text>
                        }


                    </View>

                </View>
          
          <Pressable
            onPress={handleshowkeys}
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
          <View className="h-3" />
          <Text style={[Textstyles.text_xsmall]} className="text-center">
            Didn’t receive code?{" "}
            <TouchableOpacity onPress={handlePress}>
              <Text style={[{ color: primarycolor }]}>Resend</Text>
            </TouchableOpacity>
          </Text>
          <View className="h-8" />
          <CustomButton
            backgroundColor={primarycolor}
            Textname={"Send"}
            TextColor={whitecolor}
            onPress={() => {
              if (otpArray.some((digit) => digit === "")) {
                setErrorMsg("Incomplete OTP");
              } else {
                handlesubmit();
                // Handle OTP submit logic here
              }
            }}
          />
        </View>
      </View>
    </>
  );
};
export const ConfirmPassword = () => {
  const [Password, setPassword] = useState("");
  const [email,setEmail]=useState('')
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showindicator,setshowindicator]=useState(false)
  const [errorMsg,setErrorMsg]=useState('')
  const getemail = async () => {
    try {
      const emailawait = await AsyncStorage.getItem('email');
      if (emailawait) setEmail(emailawait);
    } catch (error) {
      setErrorMsg("Error fetching email.");
    }
  };

  useEffect(() => {
    getemail();
  }, []);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const [showDrawer, setShowDrawer] = useState(false);
  const handleToSignup = () => {
    navigation.navigate("signup");
  };
  const handlesubmit = async() => {
    Keyboard.dismiss()
    console.log(Password, confirmPassword);
    if(Password!==confirmPassword){
      setErrorMsg('Password not match')
      return
    }
    if(!Password){
      setErrorMsg('Empty Password')
      return
    }
    await UpdatePassword(email,Password,setErrorMsg, setshowindicator,setShowDrawer)
    translateY.value = setShowDrawer ? withSpring(0) : withSpring(300);
  };
  const translateY = useSharedValue(300);
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
            <Animated.View style={[animatedStyles]}>
              <Drawer
                title="Password Changed"
                text="Password changed successfully, you can login again with a new password"
                buttonText="Login"
                navigateTo="login"
              />
            </Animated.View>
          </View>
        </>
      )}
      <View className="h-screen w-full px-5 py-[88px]">
        <View>
          <View>
            <Image
              className="h-12 w-12"
              source={require("../../assets/images/logo.png")}
              resizeMode="contain"
            />
            <View className="h-8" />
            <Text style={[Textstyles.text_medium]}>Reset password</Text>
            <Text style={[Textstyles.text_xsmall]}>
              Enter your new password. Note: your new password must be different
              from the old password
            </Text>
            <View className="h-8" />
            <Text style={[Textstyles.text_xsmall]} className="text-red-500">
            {errorMsg}
          </Text>
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
              value={Password}
              onChange={(text) => setPassword(text)}
              secureTextEntry={!showPassword}
            />
            <View className="h-3" />
            <CustomTextInput
              placeholder={"Confirm password"}
              placeholderTextColor={greycolortwo}
              sideicon={
                <FontAwesome5 name="lock" size={20} color={primarycolortwo} />
              }
              rightIcon={
                <TouchableOpacity onPress={handleShowConfirmPassword}>
                  <MaterialCommunityIcons
                    name={
                      showConfirmPassword ? "eye-outline" : "eye-off-outline"
                    }
                    size={20}
                    color={primarycolortwo}
                  />
                </TouchableOpacity>
              }
              onChange={(text) => setConfirmPassword(text)}
              secureTextEntry={!showConfirmPassword}
            />
          </View>
          <View>
            <View className="h-8" />
            <CustomButton
              backgroundColor={primarycolor}
              Textname={"Send"}
              TextColor={whitecolor}
              onPress={handlesubmit}
              Indicatorstatus={showindicator}
            />
          </View>
        </View>

        <View className="h-10" />

        <View className="items-center">
          <View className="flex-row items-center justify-center">
            <MyDivider width={96} Color={greycolorthree} />
            <View className="w-3" />
            <Text style={[Textstyles.text_button]}>Or sign in with</Text>
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
                I don't have an account?{" "}
              </Text>
              <TouchableOpacity onPress={handleToSignup}>
                <Text style={[Textstyles.text_small, { color: primarycolor }]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
