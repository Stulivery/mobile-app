import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  borderColor,
  greycolor,
  greyColorEight,
  greycolorfive,
  greycolorfour,
  iconplaceholder,
  primarycolortwo,
} from "../../../constants/color";
import { Svg } from "react-native-svg";
import { DeliveryBoxIcon } from "../../../utilities/Svgfiles";
import { Textstyles } from "../../../constants/fontsize";

const RecentOrderRecord = ({ ordernumber, orderstatus, ordertime, index }) => {
  return (
    <View key={index}>
      {index > 0 && <View className="h-2" />}
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: greycolorfive,
          borderRadius: 10,
          height: "70",
        }}
        className="flex-row items-center justify-between px-3"
      >
        <View className="flex-row items-center">
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
              backgroundColor: iconplaceholder,
            }}
            className="justify-center items-center flex"
          >
            <DeliveryBoxIcon />
          </View>
          <View className="w-2" />
          <View>
            <Text
              style={[Textstyles.text_x16small, { color: primarycolortwo }]}
            >
              {ordernumber}
            </Text>
            <Text style={[Textstyles.text_xsmall, { color: greyColorEight }]}>
              {orderstatus}
            </Text>
          </View>
        </View>

        <View>
          <Text style={[Textstyles.text_xsma, { color: greyColorEight }]}>
            {ordertime}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default RecentOrderRecord;