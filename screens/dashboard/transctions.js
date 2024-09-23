import {
  primarycolortwo,
  whitecolor,
  primarycolor,
} from "../../constants/color";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { height, width } from "../../constants/mobileDimensions";
import { Header } from "../mycomponents/verification";
import { Textstyles } from "../../constants/fontsize";
import {  TransactionItem } from "../mycomponents/mycomponent";
import {  SearchInput } from "../mycomponents/mycomponent";
import { greycolortwo } from "../../constants/color";
import { Feather } from "@expo/vector-icons";


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
    transferType: "Transfer from",
    personName: "Stella Ruth",
    amount: "₦5,000",
    status: "Debit",
    time: "10:45am",
    date: "12th July, 2024",
    iconColor: "#8A0000",
  },
  {
    iconName: "arrow-up",
    transferType: "Transfer from",
    personName: "Stella Ruth",
    amount: "₦5,000",
    status: "Debit",
    time: "10:45am",
    date: "12th July, 2024",
    iconColor: "#8A0000",
  },
];

const Transactions = () => {
  return (
    <>
      <View
        style={{ height: height, width: width }}
        className=" bg-[#FFFEF4] px-3 pt-[40px] flex"
      >
        <Header
          title={
            <Text className="" style={[Textstyles.text_cc]}>
              Transaction history
            </Text>
          }
        />
        <View className=" h-7" />
        <SearchInput
            placeholder={"Search"}
            placeholderTextColor={greycolortwo}
            sideicon={
              <Feather name="magnify" size={20} color={primarycolortwo} />
            }
          />
             <View className=" h-1" />
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
    </>
  );
};
export default Transactions;
