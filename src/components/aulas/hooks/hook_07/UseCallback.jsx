import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const UseCallback = () => {
  const [count, setCount] = React.useState(0);
  const incrementCounter = React.useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCounter} />
      <Display value={count} />
    </View>
  );
};

const Display = ({ value }) => {
  console.log("Display component re-rendered");
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.displayText}>Display: {value}</Text>
    </View>
  );
};

export default UseCallback;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  displayContainer: {
    marginTop: 20,
    backgroundColor: "#EEE",
    padding: 10,
  },
  displayText: {
    fontSize: 16,
  },
});
