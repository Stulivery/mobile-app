import { Header } from "../../mycomponents/verification"
import {View,Text,TouchableOpacity,ScrollView} from 'react-native'
import { height,width } from "../../../constants/mobileDimensions"
import { Textstyles } from "../../../constants/fontsize"
import { primarycolortwo, whitecolor } from "../../../constants/color"
import { useState } from "react"
import RecentOrderRecord from "./recentOrderRecord"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import Footer from "../footer"


const Order=()=>{
    const navigation=useNavigation()
    const listarray=['All','In transit','Delivered','Return']
    const [currentindex,setcurrentindex]=useState(0)
    const handletype=(value)=>{
        setcurrentindex(value)


    }
    const handlenavigatenext=()=>{
        navigation.navigate('neworder')
        
    }
    return(
        <>
        <TouchableOpacity onPress={handlenavigatenext} style={{backgroundColor:primarycolortwo,width:80,height:80}} className="rounded-full absolute bottom-24 right-3 flex justify-center items-center z-50">
           <Text className="text-5xl text-white" >+</Text>
        </TouchableOpacity>
         <View style={{ height: height, width: width }} className="bg-white px-5 pt-[40px]">
            <Header 
            title={'My Order'}
            />
            <View className="h-3"/>
            <View className="">
                <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                >
                    <View style={{width:width}} className="flex-row justify-evenly">
                    {listarray.map((item,index)=>(
                        <TouchableOpacity onPress={()=>handletype(index)} className="px-4 py-1 rounded-2xl" style={{backgroundColor:currentindex===index?primarycolortwo:whitecolor}}>
                            <Text style={[Textstyles.text_small,{color:currentindex===index?whitecolor:primarycolortwo}]}>{item}</Text>
                        </TouchableOpacity>


                    ))}

                    </View>
                    


                </ScrollView>

            </View>
            <View className="h-5"/>
            <RecentOrderRecord
            index={0}
            ordernumber={'STM0892389'}
            orderstatus={'In transit'}
            ordertime={'12 October,2024'}
            />
               <RecentOrderRecord
            index={1}
            ordernumber={'STM0892389'}
            orderstatus={'In transit'}
            ordertime={'12 October,2024'}
            />
          <RecentOrderRecord
            index={2}
            ordernumber={'STM0892389'}
            orderstatus={'Complete'}
            ordertime={'12 October,2024'}
            />
              <RecentOrderRecord
            index={3}
            ordernumber={'STM0892389'}
            orderstatus={'Complete'}
            ordertime={'12 October,2024'}
            />

         </View>
         <Footer
         active={'Order'}
         />
        </>
    )

}
export default Order