import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { appStyles } from "../../../styles/app.styles";

let url = "https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=360";

export const ProgrammerImage = () => {
  return (
    <View style={appStyles.imgView}>
      <Image source={{ uri: url }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },
});
