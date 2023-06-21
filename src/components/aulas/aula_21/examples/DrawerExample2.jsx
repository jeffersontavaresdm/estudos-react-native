import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function DrawerExample2() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={"Feed"}>
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const Feed = () => {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>
        Feed
      </Text>
    </View>
  );
};

const Article = () => {
  return (
    <View>
      <Text style={{ textAlign: "center" }}>
        Article
      </Text>
    </View>
  );
};
