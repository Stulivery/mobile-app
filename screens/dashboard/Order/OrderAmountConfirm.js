import { greycolor, primarycolor, primarycolortwo, whitecolor } from "../../../constants/color"
import { height, width } from "../../../constants/mobileDimensions"
import {View,Text,TouchableOpacity} from 'react-native'
import { Header } from "../../mycomponents/verification"
import { Textstyles } from "../../../constants/fontsize"
import { CustomButton, MyDivider } from "../../mycomponents/mycomponent"
import { Entypo } from "@expo/vector-icons"
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import { useState } from "react"
import { Drawer } from "../../modals/drawer"


const OrderAmountConfirm=()=>{
    const [showDrawer, setShowDrawer] = useState(false);

    const handlePayment = () => {
        setShowDrawer(true);
        translateY.value = withSpring(0);
    };
    const handleCloseDrawer = () => {
      setShowDrawer(false);
      translateY.value = withSpring(300); // Move drawer out of view
    };
    const translateY = useSharedValue(300);
    const animatedStyles = useAnimatedStyle(() => ({
      transform: [{ translateY: translateY.value }],
    }));
    return(
        <>
        {showDrawer && (
        <View style={{ zIndex: 12000 }} className="bottom-0 h-full absolute">
          <Animated.View
            style={[animatedStyles]} // Adjust height as needed
          >
            <Drawer
             text={"Congratulation! your package with order number: MM09132005 will be picked up by the courier, please wait a moment."}
              title="Order Successful"
              buttonText="Go to Track Order"
              navigateTo="Track Order"
              onClose={handleCloseDrawer} // Pass handleCloseDrawer as a prop
            />
          </Animated.View>
        </View>
      )}
        <View className="absolute w-full z-50 top-10 left-5">
        <Header title={"Confirm Order"}/>
        </View>
        <View style={{width:width,height:height}} className="bg-slate-100 px-10 flex items-center justify-center">
          <View className="items-start w-full -mb-4 ml-4 relative z-50">
          <Entypo name="scissors" size={30} color={primarycolor} />
          </View>
            <View style={{elevation:4,backgroundColor:primarycolortwo}} className="h-auto py-5 shadow-sm shadow-slate-600 border-white border-dashed border rounded-2xl w-[90%] px-3">
            <View className="mt-5 items-center">
            <Text style={[Textstyles.text_medium]} className="text-white">Order Details</Text>
            </View>
            <View className="mt-3">
                <Text style={[Textstyles.text_x16small,{color:primarycolor}]}>Pick up Details</Text>
            </View>
            <View className="">
                <Text style={[Textstyles.text_xsmall]} className="text-white">
                    Adeoye Dare
                </Text>
                <Text style={[Textstyles.text_xsmall]} className="text-white">
                    No 2 FHE Benin City
                </Text>
                <Text style={[Textstyles.text_xsmall]} className="text-white">
                   08062219245
                </Text>
                <Text style={[Textstyles.text_xsmall]} className="text-white">
                    Additional info: A figile Product handle with Care
                </Text>


            </View>
            <View className="h-3"/>

            <MyDivider
            Color={greycolor}
            width={'100%'}
            />
            <View className="mt-3">
                <Text style={[Textstyles.text_x16small,{color:primarycolor}]}>Delivery Point Details</Text>
            </View>
            <View className="">
                <Text style={[Textstyles.text_xsmall]} className="text-white">
                    Adeoye Dare
                </Text>
                <Text style={[Textstyles.text_xsmall]} className="text-white">
                    No 2 FHE Benin City
                </Text>
                <Text style={[Textstyles.text_xsmall]} className="text-white">
                   08062219245
                </Text>
            </View>
            <View className="h-3"/>
            <MyDivider
            Color={greycolor}
            width={'100%'}
            />
            <View className="mt-3">
                <Text style={[Textstyles.text_x16small,{color:primarycolor}]}>Delivery Rate/Amount</Text>
            </View>
            <View>
            <Text style={[Textstyles.text_xsmall]} className="text-white">
            &#x20A6;1000 per 500metre  
            </Text>
            <Text style={[Textstyles.text_xsmall]} className="text-white">
             Total distance: 2km
            </Text>
            <View>
             <Text  style={[Textstyles.text_xsmall,{color:whitecolor}]}>Total Amount to pay:</Text><Text style={[Textstyles.text_medium,{color:whitecolor}]}> &#x20A6;1500</Text>
            </View>
            <Text style={[Textstyles.text_xsmall]} className="text-white">
             Estimated Duration after Pick up:1hr
            </Text>
            


            </View>
            <View className="h-5"/>
            <CustomButton
            width={'100%'}
            backgroundColor={primarycolor}
            TextColor={whitecolor}
            Textname={'Make Payment'}
            onPress={handlePayment}
            />


            </View>

        </View>
        </>
    )
}
export default OrderAmountConfirm