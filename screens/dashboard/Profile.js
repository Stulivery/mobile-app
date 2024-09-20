import { View } from "react-native";
import { height, width } from "../../constants/mobileDimensions";
import Footer from "./footer";

const Profile = () => {
  return (
    <>
      <View
        style={{ height: height, width: width }}
        className="px-5 pt-[88px] flex"
      >
        <Footer active={"Profile"} />
      </View>
    </>
  );
};
export default Profile;
