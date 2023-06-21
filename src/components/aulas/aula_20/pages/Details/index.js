import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Detalhes() {
  return (
    <View style={styles.container}>
      <Text>Pagina Detalhes do usuario</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
