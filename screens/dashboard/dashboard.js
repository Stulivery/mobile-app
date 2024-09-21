import {
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import Truck from "../../assets/images/container-truck.svg";
import DeliveryTrack from "../../assets/images/delivery-tracking-01.svg";
import Walleticon from "../../assets/images/wallet-02.svg";
import CustomerCareicon from "../../assets/images/customer-service-01.svg";
import { height, width } from "../../constants/mobileDimensions";
import { Textstyles } from "../../constants/fontsize";
import {
  bgopacitycolorforicon,
  greencolor,
  greenopacitycolor,
  orangecolor,
  primarycolor,
  primarycolortwo,
  purplecolor,
  purpleopacitycolor,
  redopacitycolor,
  redtwoopacitycolor,
  spotcolor,
  whitecolor,
} from "../../constants/color";
import { useEffect, useState } from "react";
import { CustomButton, Iconplaceholder } from "../mycomponents/mycomponent";
import { FontAwesome5 } from "@expo/vector-icons";
import Footer from "./footer";
import { useNavigation } from "@react-navigation/native";
import RecentOrderRecord from "./Order/recentOrderRecord";

const Dashboard = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [kycverify, setkycverify] = useState(false);

  const handleTrack = () => {
    navigation.navigate("Track Order");
  };

  const handleorder = () => {
    navigation.navigate("Order");
  };

  const fetchData = async () => {
    try {
      console.log("ok");
      setkycverify(true);
    } catch (error) {}
  };
  const checkstatus = () => {
    if (kycverify === false) {
      navigation.navigate("verification");
    }
  };
  useEffect(() => {
    checkstatus();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchData().finally(() => {
      setRefreshing(false);
    });
  };
  const handledeposit = () => {};
  const handlewithdraw = () => {};
  return (
    <>
      <View
        style={{ height: height, width: width }}
        className="px-5 py-[88px] flex"
      >
        <View className="flex-row">
          <Image
            className="h-12 w-12"
            source={require("../../assets/images/logo.png")}
            resizeMode="contain"
          />
          <View className="w-3" />
          <View className="items-start">
            <Text style={[Textstyles.text_x16small]}>Welcome back</Text>
            <Text style={[Textstyles.text_x16small]}>John</Text>
          </View>
        </View>
        <View className="h-5" />
        <View style={{ height: height * 0.7, flex: 1 }}>
          <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor={primarycolortwo}
                colors={[primarycolortwo]}
              />
            }
          >
            <View
              style={{
                backgroundColor: primarycolortwo,
                height: 148,
                borderRadius: 15,
              }}
              className="w-full p-5"
            >
              <Text style={[Textstyles.text_xmedium, { color: whitecolor }]}>
                &#x20A6; 500,000,000
              </Text>
              <Text style={[Textstyles.text_xsma, { color: whitecolor }]}>
                Wallet Balance
              </Text>
              <View className="h-3" />
              <View className="flex-row w-full">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("paymentscreen");
                  }}
                  style={{
                    backgroundColor: primarycolor,
                    height: 40,
                    width: "50%",
                    borderRadius: 15,
                  }}
                  className="flex justify-center items-center"
                >
                  <Text>Deposit</Text>
                </TouchableOpacity>
                <View className="w-3" />
                <TouchableOpacity
                  style={{
                    backgroundColor: whitecolor,
                    height: 40,
                    width: "50%",
                    borderRadius: 15,
                  }}
                  className="flex justify-center items-center"
                >
                  <Text>Withdraw</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="h-8" />
            <View>
              <Text style={[Textstyles.text_small]}>Features</Text>
            </View>
            <View className="flex-row">
              <TouchableOpacity
                onPress={handleorder}
                className="p-3"
                style={{
                  backgroundColor: redopacitycolor,
                  height: 200,
                  width: "48%",
                  borderRadius: 15,
                }}
              >
                <View>
                  <Iconplaceholder
                    backgroundColor={bgopacitycolorforicon}
                    width={50}
                    height={50}
                    Icon={<Truck width={24} height={24} />}
                  />
                  <View className="h-3" />

                  <Text style={[Textstyles.text_small, { color: spotcolor }]}>
                    Order
                  </Text>
                </View>

                <View className="flex-row w-full justify-between items-end">
                  <View className="w-2/3">
                    <Text style={[Textstyles.text_xsma]}>
                      Create a New Delivery Request and get it Moving
                    </Text>
                  </View>
                </View>
                <View className="absolute bottom-5 right-2">
                  <FontAwesome5
                    size={24}
                    color={spotcolor}
                    name="arrow-circle-right"
                  />
                </View>
              </TouchableOpacity>
              <View className="w-3" />
              <TouchableOpacity
                className="p-3"
                style={{
                  backgroundColor: greenopacitycolor,
                  height: 200,
                  width: "48%",
                  borderRadius: 15,
                }}
                onPress={handleTrack}
              >
                <View>
                  <Iconplaceholder
                    backgroundColor={bgopacitycolorforicon}
                    width={50}
                    height={50}
                    Icon={<DeliveryTrack width={24} height={24} />}
                  />
                  <View className="h-3" />

                  <Text style={[Textstyles.text_small, { color: greencolor }]}>
                    Track Order
                  </Text>
                </View>

                <View className="flex-row w-full justify-between items-end">
                  <View className="w-2/3">
                    <Text style={[Textstyles.text_xsma]}>
                      Your Delivery is on the Way! Track Progress
                    </Text>
                  </View>
                </View>
                <View className="absolute bottom-5 right-2">
                  <FontAwesome5
                    size={24}
                    color={greencolor}
                    name="arrow-circle-right"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View className="h-3" />
            <View className="flex-row">
              <TouchableOpacity
                className="p-3"
                style={{
                  backgroundColor: purpleopacitycolor,
                  height: 200,
                  width: "48%",
                  borderRadius: 15,
                }}
              >
                <View>
                  <Iconplaceholder
                    backgroundColor={bgopacitycolorforicon}
                    width={50}
                    height={50}
                    Icon={<Walleticon width={24} height={24} />}
                  />
                  <View className="h-3" />

                  <Text style={[Textstyles.text_small, { color: purplecolor }]}>
                    Wallet
                  </Text>
                </View>

                <View className="flex-row w-full justify-between items-end">
                  <View className="w-2/3">
                    <Text style={[Textstyles.text_xsma]}>
                      Manage Your Earnings with Stulivery Wallet
                    </Text>
                  </View>
                </View>
                <View className="absolute bottom-5 right-2">
                  <FontAwesome5
                    size={24}
                    color={purplecolor}
                    name="arrow-circle-right"
                  />
                </View>
              </TouchableOpacity>
              <View className="w-3" />
              <TouchableOpacity
                className="p-3"
                style={{
                  backgroundColor: redtwoopacitycolor,
                  height: 200,
                  width: "48%",
                  borderRadius: 15,
                }}
              >
                <View>
                  <Iconplaceholder
                    backgroundColor={bgopacitycolorforicon}
                    width={50}
                    height={50}
                    Icon={<CustomerCareicon width={24} height={24} />}
                  />
                  <View className="h-3" />

                  <Text style={[Textstyles.text_small, { color: orangecolor }]}>
                    Help Center
                  </Text>
                </View>

                <View className="flex-row w-full justify-between items-end">
                  <View className="w-2/3">
                    <Text style={[Textstyles.text_xsma]}>
                      Contact customer support for help or complain
                    </Text>
                  </View>
                </View>
                <View className="absolute bottom-5 right-2">
                  <FontAwesome5
                    size={24}
                    color={orangecolor}
                    name="arrow-circle-right"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View className="h-3" />
            <View>
              <Text style={[Textstyles.text_small]}>Recent Order</Text>
            </View>
            <View style={{ height: height * 0.3 }} className="w-full">
              <ScrollView>
                <RecentOrderRecord
                  ordernumber={"MM09132005"}
                  orderstatus={"in transit"}
                  ordertime={"2 hrs"}
                  index={0}
                />
                <RecentOrderRecord
                  ordernumber={"MM09132005"}
                  orderstatus={"Completed"}
                  ordertime={"12 September, 2024"}
                  index={1}
                />
                <RecentOrderRecord
                  ordernumber={"MM09132005"}
                  orderstatus={"Completed"}
                  ordertime={"12 September, 2024"}
                  index={2}
                />
                <RecentOrderRecord
                  ordernumber={"MM09132005"}
                  orderstatus={"Completed"}
                  ordertime={"12 September, 2024"}
                  index={3}
                />
                <RecentOrderRecord
                  ordernumber={"MM09132005"}
                  orderstatus={"Completed"}
                  ordertime={"12 September, 2024"}
                  index={4}
                />
                <RecentOrderRecord
                  ordernumber={"MM09132005"}
                  orderstatus={"Completed"}
                  ordertime={"12 September, 2024"}
                  index={5}
                />
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>

      <Footer 
      active={'Home'}
      />
    </>
  );
};
export default Dashboard;
