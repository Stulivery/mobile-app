import {
  primarycolortwo,
  whitecolor,
  primarycolor,
} from "../../constants/color";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { height, width } from "../../constants/mobileDimensions";
import Footer from "./footer";
import { FontAwesome } from "@expo/vector-icons";
import { Header } from "../mycomponents/verification";
import { Textstyles } from "../../constants/fontsize";
import { TransactionItem } from "../mycomponents/mycomponent";
import Arrowup from "../../assets/images/arrow_up.png";
import Arrowdown from "../../assets/images/arrow_down.png";

const transactions = [
  {
    iconName: "arrow-down",
    transferType: "Transfer to",
    personName: "John Collins",
    amount: "₦60,000",
    status: "Successful",
    time: "10:45am",
    date: "30 minutes ago",
    iconColor: "#049504",
  },
  {
    iconName: "arrow-up",
    transferType: "Transfer to",
    personName: "John Collins",
    amount: "₦60,000",
    status: "Successful",
    time: "10:45am",
    date: "30 minutes ago",
    iconColor: "#049504",
  },
  {
    iconName: "arrow-up",
    transferType: "Transfer from",
    personName: "Stella Ruth",
    amount: "₦5,000",
    status: "Successful",
    time: "10:45am",
    date: "12th July, 2024",
    iconColor: "#8A0000",
  },
  {
    iconName: "arrow-up",
    transferType: "Transfer from",
    personName: "Stella Ruth",
    amount: "₦5,000",
    status: "Successful",
    time: "10:45am",
    date: "12th July, 2024",
    iconColor: "#8A0000",
  },
  {
    iconName: "arrow-down",
    transferType: "Transfer to",
    personName: "John Collins",
    amount: "₦60,000",
    status: "Successful",
    time: "10:45am",
    date: "30 minutes ago",
    iconColor: "#049504",
  },
  {
    iconName: "arrow-up",
    transferType: "Transfer to",
    personName: "John Collins",
    amount: "₦60,000",
    status: "Successful",
    time: "10:45am",
    date: "30 minutes ago",
    iconColor: "#049504",
  },
  {
    iconName: "arrow-down",
    transferType: "Transfer to",
    personName: "John Collins",
    amount: "₦60,000",
    status: "Debit",
    time: "10:45am",
    date: "30 minutes ago",
    iconColor: "#049504",
  },
  {
    iconName: "arrow-up",
    transferType: "Transfer to",
    personName: "John Collins",
    amount: "₦60,000",
    status: "Debit",
    time: "10:45am",
    date: "30 minutes ago",
    iconColor: "#049504",
  },
];

const Wallet = () => {
  return (
    <>
      <View
        style={{ height: height, width: width }}
        className=" bg-[#FFFEF4] px-3 pt-[40px] pb-[80px] flex"
      >
        <Header
          title={
            <Text className="" style={[Textstyles.text_cmedium]}>
              Wallet
            </Text>
          }
        />
        <View className=" h-5" />
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

        <View className=" w-full flex-row justify-between items-center h-10 px-1 mt-2 -mb-3">
          <View>
            <Text style={[Textstyles.text_xxmedium]}>Transctions</Text>
          </View>
          <TouchableOpacity className=" flex items-center justify-center">
            <Text style={[Textstyles.text_xsmall]}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {transactions.map((transaction, index) => (
            <TransactionItem
              key={index}
              iconName={transaction.iconName}
              transferType={transaction.transferType}
              personName={transaction.personName}
              amount={transaction.amount}
              status={transaction.status}
              time={transaction.time}
              date={transaction.date}
              iconColor={transaction.iconColor}
            />
          ))}
        </ScrollView>
      </View>
      <Footer
      active={'Wallet'}
      />
    </>
  );
};
export default Wallet;
