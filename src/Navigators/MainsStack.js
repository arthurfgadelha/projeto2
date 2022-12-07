import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import PreLoad from "../Screens/PreLoad"
import SingIn from "../Screens/SingIn";
import SingUp from "../Screens/SingUp";

const Stack = createStackNavigator();

export default function MainStack(){
  return (
      <Stack.Navigator
        initialRouteName="Preload"
      >
        <Stack.Screen name = "Preload" component={PreLoad} options= {{ headerShown: false}}/>
        <Stack.Screen name = "SingIn" component={SingIn} options= {{ headerShown: false}}/>
        <Stack.Screen name = "SingUp" component={SingUp} options= {{ headerShown: false}}/>
      </Stack.Navigator>
  )
}