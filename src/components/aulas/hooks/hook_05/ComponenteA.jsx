import React from "react";
import AppContext from "./AppContext";
import { Text, View } from "react-native";

const ComponenteA = () => {
  const context = React.useContext(AppContext);

  return (
    <View>
      <Text>Componente A</Text>
      <Text>Valor do contexto: {context}</Text>
    </View>
  );
};

export default ComponenteA;
