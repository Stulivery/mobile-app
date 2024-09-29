import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
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
import Wallet from "../screens/dashboard/wallet";
import { UserProvider } from "../screens/user-mode";
import Chat from "../screens/chats/chat";

const DashboardStackWrapper = () => {
    const Stack = createStackNavigator();
    return (
        <UserProvider>{/* user context for user mode */}
            <Stack.Navigator
                initialRouteName="dashboard"
                navigationOption=""
                screenOptions={{
                    headerTitle: null, // Remove the title for all screens
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            >
                <Stack.Screen
                    options={{
                        gestureEnabled: false,
                        gestureDirection:
                            Platform.OS === "ios"
                                ? "horizontal"
                                : Platform.OS === "android" && "vertical",
                    }}
                    name="dashboard"
                    component={Dashboard}
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection:
                            Platform.OS === "ios"
                                ? "horizontal"
                                : Platform.OS === "android" && "vertical",
                    }}
                    name="verification"
                    component={VerificationFlowStack}
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection:
                            Platform.OS === "ios"
                                ? "horizontal"
                                : Platform.OS === "android" && "vertical",
                    }}
                    name="Order"
                    component={Order}
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection:
                            Platform.OS === "ios"
                                ? "horizontal"
                                : Platform.OS === "android" && "vertical",
                    }}
                    name="neworder"
                    component={Neworder}
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection:
                            Platform.OS === "ios"
                                ? "horizontal"
                                : Platform.OS === "android" && "vertical",
                    }}
                    name="orderconfirm"
                    component={OrderAmountConfirm}
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection:
                            Platform.OS === "ios"
                                ? "horizontal"
                                : Platform.OS === "android" && "vertical",
                    }}
                    name="orderlocation"
                    component={OrderLocation}
                />

                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection:
                            Platform.OS === "ios"
                                ? "horizontal"
                                : Platform.OS === "android" && "vertical",
                    }}
                    name="Track Order"
                    component={Trackorder}
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection:
                            Platform.OS === "ios"
                                ? "horizontal"
                                : Platform.OS === "android" && "vertical",
                    }}
                    name="profile"
                    component={Profile}
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection:
                            Platform.OS === "ios"
                                ? "horizontal"
                                : Platform.OS === "android" && "vertical",
                    }}
                    name="paymentscreen"
                    component={PaymentScreen}
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection:
                            Platform.OS === "ios"
                                ? "horizontal"
                                : Platform.OS === "android" && "vertical",
                    }}
                    name="Wallet"
                    component={Wallet}
                />
                 <Stack.Screen
                  options={{
                    gestureEnabled: true,
                    gestureDirection:
                        Platform.OS === "ios"
                            ? "horizontal"
                            : Platform.OS === "android" && "vertical",
                }}
                name="Chat"
                component={Chat}
                 />
            </Stack.Navigator>
           

           
        </UserProvider>
    );
};
export default DashboardStackWrapper;
