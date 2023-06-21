import { StyleSheet, View } from "react-native";
import Converter from "./Converter";

const CurrencyConverter = () => {
  return (
    <View style={styles.card}>
      <Converter moedaA="USD" moedaB="BRL" />
      <Converter moedaA="EUR" moedaB="BRL" />
      <Converter moedaA="BTC" moedaB="BRL" />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CurrencyConverter;
