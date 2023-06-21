import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import useCustomHook from "./useCustomHook";

const UseCustomHook = () => {
  const { state, dispatch } = useCustomHook(0);

  function handleButtonPressed() {
    dispatch({ type: "count" });
    dispatch({ type: "activate" });
  }

  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        Value: {state.valor}
      </Text>
      <Button title="Increment" onPress={handleButtonPressed} />
      <Text style={[styles.text, { marginTop: 16 }]}>
        Estado: {state.estado}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
});

export default UseCustomHook;
