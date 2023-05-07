import React from "react"
import { View,Text,ImageBackground } from "react-native"
import { Deviceheight, Devicewidth} from "./Dimensions"
import Icon from "react-native-vector-icons/Ionicons"

const Home=()=>{
return(
    <View>
        <ImageBackground source={require("../assests/weather.jpg")} style={{
            height:Deviceheight,
            width:Devicewidth,
            }}
            imageStyle={{opacity:0.6,backgroundColor:"black"}}
        />
        <View style={{position:"absolute"}}>
        <View>
             <Icon name="menu" size={46} color="white"/>
        </View>
        </View>
    </View>
)

}
export default Home
