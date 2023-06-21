// ComponentePai.js
import React from "react";
import AppContext from "./AppContext";
import ComponenteA from "./ComponenteA";
import { Text, View } from "react-native";

const ComponentePai = () => {
  const appDataValue = "Valor do contexto fornecido pelo Componente Pai";

  return (
    <AppContext.Provider value={appDataValue}>
      <View>
        <Text>Componente Pai</Text>
        <ComponenteA />
      </View>
    </AppContext.Provider>
  );
};

export default ComponentePai;
