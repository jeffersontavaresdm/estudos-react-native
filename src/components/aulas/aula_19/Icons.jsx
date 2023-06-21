import React from "react";
import { StyleSheet, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Card from "../../outros/card/Card";

const Icons = () => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.cardArea}>
          <FontAwesome
            style={styles.icon}
            name={"user"}
            size={50}
            color={"darkgreen"}
          />
          <Feather
            style={styles.icon}
            name={"activity"}
            size={50}
            color={"darkblue"}
          />
          <MaterialIcons
            style={styles.icon}
            name={"360"}
            size={50}
            color={"darkred"}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginBottom: 8,
  },
  cardArea: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Icons;
