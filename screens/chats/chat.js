import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAvoidingView, Platform, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { height, width } from "../../constants/mobileDimensions";
import { Avatar } from "react-native-paper";
import { Textstyles } from "../../constants/fontsize";
import { primarycolor, primarycolortwo, whitecolor } from "../../constants/color";
import { CustomTextInput } from "../mycomponents/mycomponent";
import { useRef } from "react";

const Chat = () => {
    const scrollViewRef = useRef();
    const [Message,setMessage]=useState('')

    return (
        <>
            <View
                style={{ height: height, width: width }}
                className=" bg-[#FFFEF4] px-3 pt-[44px] flex"
            >
                <View className="flex-row  w-full">

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className=" left-0 bg-gray-200  w-[50px] h-[50px] rounded-full  flex justify-center items-center"
                    >
                        <MaterialCommunityIcons name="arrow-left" size={20} color="black" />
                    </TouchableOpacity>
                    <View className="w-5" />

                    <View className="flex-row items-center">
                        <Avatar.Image size={50} source={require('../../assets/images/avatermale.png')} />
                        <View className="w-3" />
                        <View>
                            <Text style={[Textstyles.text_small]}>Jones Dayo</Text>
                        </View>
                    </View>

                </View>

                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
                >
                    <ScrollView
                        ref={scrollViewRef}
                        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                        showsVerticalScrollIndicator={false}
                        style={{ flex: 1 }}
                        contentContainerStyle={{ flexGrow: 1,}}
                    >
                        <View>
                            {/* Date Indicator */}
                            <View className="flex items-center w-full">
                                <View style={{ borderRadius: 30, width: 96, height: 30 }} className="items-center mt-4 flex justify-center">
                                    <View style={{ width: '100%', height: '100%', borderRadius: 30, backgroundColor: primarycolor, opacity: 0.2 }} className="absolute z-50" />
                                    <Text>Yesterday</Text>
                                </View>
                            </View>

                            {/* Chat bubbles */}
                            <View className="mt-5">
                                <View className="items-start">
                                    <View className="bg-slate-100 w-5/6 h-auto px-3 py-3 rounded-br-2xl rounded-t-2xl">
                                        <Text style={[Textstyles.text_xsma]}>
                                            Hi Lola, I’m on the way to your home, Please wait a moment. Thanks!
                                        </Text>
                                    </View>
                                    <View className="h-3" />
                                    <View className=" px-3">
                                        <Text style={[Textstyles.text_xsma]}>4:29am</Text>
                                    </View>
                                </View>

                                <View className="mt-5 items-end">
                                    <View style={{ backgroundColor: primarycolortwo }} className=" w-5/6 h-auto px-3 py-3 rounded-br-2xl rounded-t-2xl">
                                        <Text style={[Textstyles.text_xsma, { color: whitecolor }]}>
                                            Hi Lola, I’m on the way to your home, Please wait a moment. Thanks!
                                        </Text>
                                    </View>
                                    <View className=" px-3">
                                        <Text style={[Textstyles.text_xsma]}>4:29am</Text>
                                    </View>
                                </View>

                                <View className="mt-5 items-start">
                                    <View className="bg-slate-100 w-5/6 h-auto px-3 py-3 rounded-br-2xl rounded-t-2xl">
                                        <Text style={[Textstyles.text_xsma]}>
                                            Hi Lola, I’m on the way to your home, Please wait a moment. Thanks!
                                        </Text>
                                    </View>
                                    <View className=" px-3">
                                        <Text style={[Textstyles.text_xsma]}>4:29am</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                   
                    <CustomTextInput 
                    placeholder={'Type your message'}
                    onChange={(text)=>setMessage(text)}
                    rightIcon={<TouchableOpacity><MaterialCommunityIcons color={primarycolortwo} size={30} name="send" /></TouchableOpacity>}
                    />
                    
                  
                   
                </KeyboardAvoidingView>
            </View>
        </>
    );
};

export default Chat;
