import { height, width, } from "../../constants/mobileDimensions"
import {View,Text} from "react-native"
import { Svg, Path } from "react-native-svg"; 

import Wallet from '../../assets/images/wallet-02.svg'
import UserCircle from '../../assets/images/user-circle.svg'
import { Textstyles } from "../../constants/fontsize"
import { greycolor, greycolorfive, primarycolor, primarycolortwo, whitecolor } from "../../constants/color"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { DeliveryBoxIcon, HomeIcons, Profileicon, TransactionIcon, Walleticon } from "../../utilities/Svgfiles.js";

const Footer=({active})=>{
    const navigation=useNavigation()
    const handlenavigate=(route)=>{
        navigation.navigate(route)
        
    }
    return(
        <>
        <View style={{width:width,height:92,backgroundColor:whitecolor}} className="flex-row justify-evenly items-center absolute bottom-0">
            <TouchableOpacity
            onPress={()=>handlenavigate('dashboardhome')}
             className="items-center">
              <HomeIcons
              width={20}
              height={20}
              fill={active === 'Home' ? primarycolor : primarycolortwo}
              stroke={active === 'Home' ? primarycolor : primarycolortwo}
              />
            <Text style={[Textstyles.text_xsma,{color:primarycolor}]}>{active==='Home' && 'Home'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>handlenavigate('Order')}
            className="items-center">
            <TransactionIcon
            height={20}
            width={20}
            stroke={active === 'Order' ? primarycolor : primarycolortwo}
            />
            <Text style={[Textstyles.text_xsma,{color:active === 'Order' &&primarycolor}]}>{active==='Order'&& 'Order'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>handlenavigate('Track Order')}
            className="items-center">
            <DeliveryBoxIcon
            height={20}
            width={20}
            stroke={active === 'Track Order' ? primarycolor : primarycolortwo}
            />
            <Text style={[Textstyles.text_xsma,{color:active === 'Track Order' &&primarycolor}]}>{active==='Track Order'&& 'Track Order'}</Text>
            </TouchableOpacity>
          
            <TouchableOpacity 
            onPress={()=>handlenavigate('wallet')}
            className="items-center">
            <Walleticon 
            height={20}
            width={20}
            stroke={active === 'Wallet' ? primarycolor : primarycolortwo}
            />
            <Text style={[Textstyles.text_xsma,{color:active === 'Wallet'&&primarycolor}]}>{active==='Wallet' && 'Wallet'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>handlenavigate('profile')}
             className="items-center">
            <Profileicon 
            height={20}
            width={20}
            stroke={active === 'Profile' ? primarycolor : primarycolortwo}
            />
            <Text style={[Textstyles.text_xsma,{color:active === 'Profile'&&primarycolor}]}>{active==='Profile' && 'Profile'}</Text>
            </TouchableOpacity>

            


        </View>
        </>
    )
}
export default Footer