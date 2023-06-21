import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "./routes";

createNativeStackNavigator();
export default function StackNavegationTest() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
