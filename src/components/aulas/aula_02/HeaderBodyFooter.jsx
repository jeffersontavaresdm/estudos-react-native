import { StyleSheet, Text, View } from "react-native";
import { ProgrammerImage } from "../../outros/image/ProgrammerImage";

export function HeaderBodyFooter() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.text}>HEADER</Text>
      </View>
      <View style={styles.body}>
        <ProgrammerImage />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>FOOTER</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#111",
  },
  header: {
    height: 65,
    backgroundColor: "#333",
    display: "flex",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  footer: {
    height: 65,
    backgroundColor: "#333",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
