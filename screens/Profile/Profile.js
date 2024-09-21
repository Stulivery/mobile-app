import { View,TouchableOpacity,Text, } from "react-native"
import { height,width } from "../../constants/mobileDimensions"
import Footer from "../dashboard/footer"
import { Header } from "../mycomponents/verification"
import { Avatar } from "react-native-paper"
import { AntDesign, FontAwesome } from "@expo/vector-icons"
import { greyColorEight, greycolorfive, primarycolor, primarycolortwo, whitecolor } from "../../constants/color"
import { Textstyles } from "../../constants/fontsize"
import { useState } from "react"
import { CustomButton, MyDivider } from "../mycomponents/mycomponent"
 import {Switch} from 'react-native-paper'
import { Addressicon, AlernateEmail, Gendericon, HomeIcons, IDimageicon, Keyicon, Packageicon, Passwordicon, PhonenumberIcon } from "../../utilities/Svgfiles"

const Profile=()=>{
    const navArray=[{name:'Profile',comp:<Profiledetials/>},{name:'Security',comp:<Security/>},{name:'Account',comp:<Account/>},{name:'Notifications',comp:<Notificationscomp/>}]
    const [currentindex,setcurrentindex]=useState(0)
    const handleNav=(value)=>{
        setcurrentindex(value)
    }
    return(
        <>
        <View style={{ height: height, width: width }} className="px-5 pt-[50px] flex">
            <Header
            title={'Profile'}
            />
            <View className="items-center">
                <View style={{width:120,height:120}} className="">
                <TouchableOpacity
                className="absolute right-0 bottom-0 z-50 bg-white w-8 h-8 rounded-full flex justify-center items-center"
                
              >
                <FontAwesome size={20} color={primarycolortwo} name="pencil" />
              </TouchableOpacity>
                <Avatar.Image size={120} source={require('../../assets/images/avatermale.png')}/>

                </View>
                <View className="h-3"/>
                <Text style={[Textstyles.text_xmedium]}>
                    John Daniel
                </Text>
           
                
            </View>
            <View className="h-5"/>
            <View>
                <View className=" flex-row justify-evenly">
                    {navArray.map((item,index)=>(
                        <TouchableOpacity key={index} onPress={()=>handleNav(index)}>
                            <Text style={[Textstyles.text_small,{color:primarycolortwo}]}>
                                {item.name}
                            </Text>
                            {index===currentindex && <View style={{backgroundColor:primarycolor}} className="h-1 rounded-2xl w-auto" />}
                        </TouchableOpacity>
                       
                    ))
                    }


                </View>
                <View className="h-3"/>
                <MyDivider
                width={'100%'}
                Color={greycolorfive}
                />
            </View>
            <View className="h-3"/>
            <View className="h-auto">
                {navArray[currentindex].comp} 
            </View>
            <View className="h-8"/>
            <CustomButton
            Textname={'Logout'}
            backgroundColor={'red'}
            TextColor={whitecolor}

            />
       


        </View>
        <Footer
            active={'Profile'}
            />
        </>
    )

}
export default Profile

const Profiledetials=()=>{
    const [mode,setmode]=useState(false)
    return(
        <>
        <View>
            <View className="flex-row items-center justify-between mt-5">
                <View className="flex-row">
                <Packageicon/>
            <View className="w-2"/>
            <Text style={[Textstyles.text_small]}>
                Switch to delivery mode
            </Text>

                </View>
                <View>
                    <Switch 
                    color={primarycolor}
                    value={mode}
                    onValueChange={()=>(setmode(!mode))}
                    />
                    
                </View>
          
            </View>
            <View className="h-8" />
            <View className="flex-row items-center justify-between">
                <View className="flex-row">
                <AlernateEmail/>
            <View className="w-2"/>
            <Text style={[Textstyles.text_small]}>
               Email
            </Text>
                </View>
                <View>
                <Text style={[Textstyles.text_small]} >
                    Johndoe@gmail.com
                </Text>
                </View>
          
            </View>
            <View className="h-8" />
            <View className="flex-row items-center justify-between">
                <View className="flex-row">
                <PhonenumberIcon/>
            <View className="w-2"/>
            <Text style={[Textstyles.text_small]}>
                Phone Number
            </Text>

                </View>
                <View>
                    <Text style={[Textstyles.text_small]}>
                    <TouchableOpacity><FontAwesome size={20} color={primarycolortwo} name="pencil" /></TouchableOpacity>
                        08166564618
                        
                        </Text>   
                </View>
          
            </View>
            
            <View className="h-8" />
            <View className="flex-row items-center justify-between">
                <View className="flex-row">
                <Addressicon/>
            <View className="w-2"/>
            <Text style={[Textstyles.text_small]}>
              Address
            </Text>
                </View>
                <View className="items-end w-1/2">
                   <Text  style={[Textstyles.text_xsmall]}>
                   <TouchableOpacity><FontAwesome size={20} color={primarycolortwo} name="pencil" /></TouchableOpacity>
                   No 1 Road 202 Federal Housing Akure
                   </Text>
                </View>
          
            </View>
            <View className="h-8" />
            <View className="flex-row items-center justify-between">
                <View className="flex-row">
                <Gendericon/>
            <View className="w-2"/>
            <Text style={[Textstyles.text_small]}>
              Gender
            </Text>
                </View>
                <View>
                   <Text  style={[Textstyles.text_small]}>
                   <TouchableOpacity><FontAwesome size={20} color={primarycolortwo} name="pencil" /></TouchableOpacity>
                   Female
                   </Text>
                </View>
          
            </View>

       
       
        </View>
       
        </>
        
    )
}
const Security=()=>{
    const [mode,setmode]=useState(false)
    return(
        <>
        <View>
            <TouchableOpacity className="flex-row items-center justify-between mt-5">
                <View className="flex-row">
                <IDimageicon/>
            <View className="w-2"/>
            <Text style={[Textstyles.text_small]}>
               Biometric authentication
            </Text>
                </View>
                <View>  
                <AntDesign name="right" size={20} color={primarycolortwo} />
                </View>
          
            </TouchableOpacity>
            <View className="h-8" />
            <TouchableOpacity className="flex-row items-center justify-between">
                <View className="flex-row">
                <Keyicon/>
            <View className="w-2"/>
            <Text style={[Textstyles.text_small]}>
               Reset Password
            </Text>

                </View>
                <View>  
                <AntDesign name="right" size={20} color={primarycolortwo} />
                </View>
            </TouchableOpacity>
          
            
            
        </View>
        </>
    )
     
}
const Account=()=>{
    const [mode,setmode]=useState(false)
    return(
        <>
        <View>
            <View className="flex-row items-center justify-between mt-5">
               
            <View className="flex-row">
                <IDimageicon/>
            <View className="w-2"/>
            <Text style={[Textstyles.text_small]}>
            Available for delivery
            </Text>
                </View>
                <View>
                    <Switch 
                    color={primarycolor}
                    value={mode}
                    onValueChange={()=>(setmode(!mode))}
                    />     
                </View>
            </View>
            <View className="h-8" />
            <TouchableOpacity className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                <Passwordicon/>
            <View className="w-2"/>
            <Text style={[Textstyles.text_small]}>
              Change transaction pin
            </Text>
                </View>
                <View>
                <AntDesign name="right" size={20} color={primarycolortwo} />
                </View>
          
            </TouchableOpacity>
            
         
            
            
        </View>
        </>

    )
}
const Notificationscomp=()=>{
    const [mode,setmode]=useState(false)
    return(
        <>
        <View>
            <View className="flex-row items-center justify-between mt-5">
            <Text style={[Textstyles.text_small]}>
            Email notification
            </Text>
                
                <View>
                    <Switch 
                    color={primarycolor}
                    value={mode}
                    onValueChange={()=>(setmode(!mode))}
                    />
                    
                </View>
          
          
            </View>
            <View className="h-3" />
            <View className="flex-row items-center justify-between mt-5">
            <Text style={[Textstyles.text_small]}>
             In app notification
            </Text>
                
                <View>
                    <Switch 
                    color={primarycolor}
                    value={mode}
                    onValueChange={()=>(setmode(!mode))}
                    />
                    
                </View>
          
          
            </View>
            <View className="h-3" />
            <View className="flex-row items-center justify-between mt-5">
            <Text style={[Textstyles.text_small]}>
            Push notification
            </Text>
                
                <View>
                    <Switch 
                    color={primarycolor}
                    value={mode}
                    onValueChange={()=>(setmode(!mode))}
                    />
                    
                </View>
          
          
            </View>

       
        </View>
        </>

    )
}