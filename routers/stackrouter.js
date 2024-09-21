import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ScreenDisplay from "../screens/onboarding/splashScreen";
import Slider from "../screens/onboarding/slidersScreen";
import {
  ConfirmPassword,
  Forgotpass,
  Login,
  Otpverify,
} from "../screens/onboarding/loginandforgetpass";
import Registration from "../screens/onboarding/registration";
import { Platform } from "react-native";
import Dashboard from "../screens/dashboard/dashboard";
import OrderLocation from "../screens/dashboard/Order/orderlocation";
import Profile from "../screens/Profile/Profile";
import VerificationFlowStack from "../screens/verification/verification-stack";
import PaymentScreen from "../screens/TransactionPage/depositScreen";
import Neworder from "../screens/dashboard/Order/neworder";
import Trackorder from "../screens/dashboard/Order/trackorder";
import Order from "../screens/dashboard/Order/order";
import OrderAmountConfirm from "../screens/dashboard/Order/OrderAmountConfirm";

const StackWrapper = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="start"
      navigationOption=""
      screenOptions={{
        headerTitle: null, // Remove the title for all screens
        headerShown: false,
        // gestureEnabled: true,
        // gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      {/* <Stack.Screen  name="start" component={Home} /> */}
      <Stack.Screen
        options={{
          gestureEnabled: false,
          gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
        }}
        name="start"
        component={ScreenDisplay}
      />
      <Stack.Screen
        options={{
          gestureEnabled: false,
          gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
        }}
        name="slider"
        component={Slider}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
        }}
        name="login"
        component={Login}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
        }}
        name="forgotpass"
        component={Forgotpass}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
        }}
        name="otpverify"
        component={Otpverify}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
        }}
        name="confirmpass"
        component={ConfirmPassword}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
        }}
        name="signup"
        component={Registration}
      />
             <Stack.Screen
             options={{
              gestureEnabled: false,
              gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
            }}
            name="dashboardhome"
            component={Dashboard}
           
          
            />
             <Stack.Screen
             options={{
              gestureEnabled: true,
              gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
            }}
            name="verification"
            component={VerificationFlowStack}
           
          
            />
            <Stack.Screen
               options={{
                gestureEnabled: true,
                gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
              }}
                name="Order"
                component={Order}
              />
               <Stack.Screen
               options={{
                gestureEnabled: true,
                gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
              }}
                name="neworder"
                component={Neworder}
              />
                 <Stack.Screen
               options={{
                gestureEnabled: true,
                gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
              }}
                name="orderconfirm"
                component={OrderAmountConfirm}
              />
            <Stack.Screen
               options={{
                gestureEnabled: true,
                gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
              }}
                name="orderlocation"
                component={OrderLocation}
              />
               
                  <Stack.Screen
               options={{
                gestureEnabled: true,
                gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
              }}
                name="Track Order"
                component={Trackorder}
              />
              <Stack.Screen
               options={{
                gestureEnabled: true,
                gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
              }}
                name="profile"
                component={Profile}
              />
              <Stack.Screen
               options={{
                gestureEnabled: true,
                gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
              }}
                name="paymentscreen"
                component={PaymentScreen}
              />
              
    </Stack.Navigator>
  );
};
export default StackWrapper;
