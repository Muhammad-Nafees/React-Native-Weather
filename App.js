import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./src/Home.js"


const Stack=createNativeStackNavigator()

const App = () =>{

return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="home" screenOptions={{headerShown:false}}>
      <Stack.Screen name="home" component={Home}/>
    </Stack.Navigator>
  </NavigationContainer>
)
}

export default App;
