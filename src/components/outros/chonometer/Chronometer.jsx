import { Image, StyleSheet, View } from "react-native";
import React from "react";

export const Chronometer = () => {
  return (
    <View style={styles.imageView}>
      <Image source={require("../../../assets/chronometer.png")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },
  imageView: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
  },
});
