import React from "react";
import SegundoComponente from "./SegundoComponente";
import { Text, View } from "react-native";
import { AppContextProvider } from "./AppContext";

const PrimeiroComponente = () => {
  return (
    <AppContextProvider>
      <View>
        <Text>Primeiro Componente{"\n"}</Text>
        <SegundoComponente />
      </View>
    </AppContextProvider>
  );
};

export default PrimeiroComponente;
