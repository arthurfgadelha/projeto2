import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainStack from "./src/Navigators/MainsStack";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="MainStack" component={MainStack} options= {{ headerShown: false}}/>
          </Stack.Navigator>
  </NavigationContainer>
  );
}