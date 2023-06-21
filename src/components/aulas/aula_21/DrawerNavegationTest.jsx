import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../aula_20/pages/Home";
import Contato from "../aula_20/pages/Contact";
import Sobre from "../aula_20/pages/About";

const Drawer = createDrawerNavigator();

const DrawerNavegationTest = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={Sobre} />
        <Drawer.Screen name="Contact" component={Contato} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavegationTest;
