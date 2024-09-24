import { Image, Text, View } from "react-native";
import { height, width } from "../../constants/mobileDimensions";
import { useNavigation } from "@react-navigation/native";
import { Header, VerificationStep1Button, VerificationStepChecker } from "../mycomponents/verification";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { Textstyles } from "../../constants/fontsize";
import { greyColorNine, greyColorSeven, greycolortwo, primarycolor, primarycolortwo, whitecolor } from "../../constants/color";
import { CustomButton, CustomTextInput } from "../mycomponents/mycomponent";
import { useState, useEffect } from 'react';
import { CameraPage } from "../mycomponents/camera";

export const Step1 = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={{ height: height, width: width }} className="py-[40px] px-5">
                <Header title="ID Verification" />
                <View className="h-8" />
                <VerificationStepChecker step1 />
                <View className="h-6" />
                <View className="w-[90%] mx-auto">
                    <Text style={[Textstyles.text_xsma]}>We need to verify your information, please select your means of identification.</Text>
                </View>
                <View className="h-6" />
                <View className="w-[90%] mx-auto">
                    <VerificationStep1Button
                        icon={
                            <Octicons name="id-badge" size={20} color="white" />
                        }
                        title="BVN"
                        description="Supported by over 1 million people"

                    />
                    <View className="h-6" />
                    <VerificationStep1Button
                        icon={
                            <MaterialCommunityIcons name="card-account-details-outline" size={20} color="white" />
                        }
                        title="NIN"
                        description="Supported by over 1 million people"

                    />
                    <View className="h-6" />
                    <View className="w-[90%] flex-row items-center mx-auto">
                        <View className="w-[49%]">
                            <CustomButton
                                backgroundColor={whitecolor}
                                Textname="Skip"
                                TextColor={primarycolortwo}
                                borderColor={primarycolortwo}
                                borderWidth={1}
                                onPress={() => navigation.navigate("dashboard")}
                                className
                            />
                        </View>
                        <View className="w-3" />
                        <View className="w-[49%]">
                            <CustomButton
                                backgroundColor={primarycolor}
                                Textname="Continue"
                                TextColor={whitecolor}
                                onPress={() => navigation.navigate("step-2")}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View className="w-screen absolute bottom-0">
                <View className="w-[134px] h-[5px] rounded-[100px] bg-[#101010] mx-auto" />
            </View>
        </>
    )
}

export const Step2 = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={{ height: height, width: width }} className="py-[40px] px-5">
                <Header title="ID Verification" />
                <View className="h-8" />
                <View className="w-[90%] items-center mx-auto">
                    <Text style={[Textstyles.text_small]}>Front of Document</Text>
                    <View className="h-6" />
                    <View className="items-center w-full">
                        <MaterialCommunityIcons name="card-account-details-outline" size={40} color={greyColorNine} />
                        <Text style={[Textstyles.text_xsma]} className="text-center w-[70%]">Take a photo of the front of your National identity card.</Text>
                    </View>
                    <View className="h-24" />
                    <CustomButton
                        backgroundColor={primarycolor}
                        Textname="Use my camera"
                        TextColor={whitecolor}
                        leftIcon={
                            <MaterialCommunityIcons name="camera-wireless-outline" size={24} color={whitecolor} />
                        }
                        onPress={() => navigation.navigate("step-3")}
                    // should first take picture before going to step 3
                    />
                </View>
            </View>
            <View className="w-screen absolute bottom-0">
                <View className="w-[134px] h-[5px] rounded-[100px] bg-[#101010] mx-auto" />
            </View>
        </>
    )
}

export const Step3 = () => {
    const navigation = useNavigation();
    const [showCamera, setShowCamera] = useState(true);
    const [capturedImage, setCapturedImage] = useState(null);
    useEffect(() => {
        if (capturedImage) {
            setCapturedImage(capturedImage);
            setShowCamera(false);
        }
    }, [capturedImage])
    if (showCamera) {
        return (
            <CameraPage
                cameraBackArrowAction={() => navigation.navigate("step-2")}
                setCapturedImage={setCapturedImage}
                setShowCamera={setShowCamera}
            />
        )
    }
    return (
        <>
            <View style={{ height: height, width: width }} className="py-[40px] px-5">
                <Header title="ID Verification" />
                <View className="h-8" />
                <VerificationStepChecker step1 step2 />
                <View className="h-6" />
                <Text style={[Textstyles.text_small]} className="mx-auto">Front of Document</Text>
                <View className="h-4" />
                <View className="w-[90%] items-center mx-auto">
                    <Text style={[Textstyles.text_xsma]} className="text-center w-[70%]">Take a photo of the front of your National identity card.</Text>
                    <View className="h-6" />
                    <View style={{ backgroundColor: greyColorSeven }} className="aspect-video w-full h-auto items-center justify-center rounded-lg">
                        {capturedImage && (
                            <Image
                                source={{ uri: capturedImage.uri }}
                                className="w-[90%] h-[90%]"
                                resizeMode="contain"
                            />
                        )}
                    </View>
                </View>
                <View className="h-6" />
                <View className="w-[90%] flex-row items-center mx-auto">
                    <View className="w-[49%]">
                        <CustomButton
                            backgroundColor={whitecolor}
                            Textname="Retake Photo"
                            TextColor={primarycolortwo}
                            borderColor={primarycolortwo}
                            borderWidth={1}
                            onPress={() => setShowCamera(true)}
                            className
                        />
                    </View>
                    <View className="w-3" />
                    <View className="w-[49%]">
                        <CustomButton
                            backgroundColor={primarycolor}
                            Textname="Submit Photo"
                            TextColor={whitecolor}
                            onPress={() => navigation.navigate("step-4")}
                        />
                    </View>
                </View>
            </View>
            <View className="w-screen absolute bottom-0">
                <View className="w-[134px] h-[5px] rounded-[100px] bg-[#101010] mx-auto" />
            </View>
        </>
    )
}

export const Step4 = () => {
    const navigation = useNavigation();
    const [BNV, setBVN] = useState();
    return (
        <>
            <View style={{ height: height, width: width }} className="py-[40px] px-5">
                <Header title="ID Verification" />
                <View className="h-8" />
                <VerificationStepChecker step1 step2 step3 />
                <View className="h-6" />
                <Text style={[Textstyles.text_small]} className="mx-auto">Bank Verification Number</Text>
                <View className="h-4" />
                <View className="w-[90%] mx-auto">
                    <CustomTextInput
                        placeholder="Input your BVN"
                        placeholderTextColor={greycolortwo}
                        sideicon={
                            <MaterialCommunityIcons name="bank" size={24} color={greycolortwo} />
                        }
                        onChange={(text) => setBVN(text)}
                    />
                    <View className="h-16" />
                    <CustomButton
                        backgroundColor={primarycolor}
                        Textname="Submit"
                        TextColor={whitecolor}
                        onPress={() => navigation.navigate("step-5")}
                    />
                </View>
            </View>
            <View className="w-screen absolute bottom-0">
                <View className="w-[134px] h-[5px] rounded-[100px] bg-[#101010] mx-auto" />
            </View>
        </>
    )
}

export const Step5 = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={{ height: height, width: width }} className="py-[40px] px-5">
                <View className="flex-1">
                    <Header />
                    <View className="h-20" />
                    <Image
                        source={require("../../assets/images/success-svg.png")}
                        resizeMode="contain"
                        className="w-[200px] h-[200px] mx-auto"
                    />
                    <View className="h-16" />
                    <View className="w-[90%] mx-auto items-center">
                        <Text style={[Textstyles.text_medium]}>
                            Congratulations
                        </Text>
                        <Text style={[Textstyles.text_xsma]} className="text-center">Your information has been successfully submitted, check your mail for your account details!</Text>
                    </View>
                </View>
                <View className="w-[90%] mx-auto">
                    <CustomButton
                        backgroundColor={primarycolor}
                        Textname="Done"
                        TextColor={whitecolor}
                        onPress={() => navigation.navigate("dashboardscreen")}
                    />
                </View>
            </View>
            <View className="w-screen absolute bottom-0">
                <View className="w-[134px] h-[5px] rounded-[100px] bg-[#101010] mx-auto" />
            </View>
        </>
    )
}