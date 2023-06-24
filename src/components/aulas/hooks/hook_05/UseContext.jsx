import React from "react";
import PrimeiroComponente from "./PrimeiroComponente";
import { Text, View } from "react-native";

const UseContext = () => {
  return (
    <View>
      <Text>Exemplo do useContext{"\n"}</Text>
      <PrimeiroComponente />
    </View>
  );
};

export default UseContext;
