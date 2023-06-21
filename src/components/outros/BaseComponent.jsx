import { StyleSheet, View } from "react-native";

const BaseComponent = () => {
  return (
    <View style={styles.card}>
      {/* Outros elementos aqui... */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
});

export default BaseComponent;
