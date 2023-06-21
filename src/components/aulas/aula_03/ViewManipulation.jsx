import { StyleSheet, View } from "react-native";

const ViewManipulation = () => {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles["1"]} />
        <View style={styles["2"]} />
      </View>
      <View>
        <View style={styles["3"]} />
        <View style={styles["4"]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  1: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  2: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
  },
  3: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
  },
  4: {
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
});

export default ViewManipulation;
