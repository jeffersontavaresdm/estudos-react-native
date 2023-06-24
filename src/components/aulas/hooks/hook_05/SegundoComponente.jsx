import React from "react";
import { Text, View } from "react-native";
import { AppContext } from "./AppContext";

const SegundoComponente = () => {
  const { valor1, valor2 } = React.useContext(AppContext);

  return (
    <View>
      <Text>Segundo Componente</Text>
      <Text>Valor do contexto: {valor1} e {valor2}</Text>
    </View>
  );
};

export default SegundoComponente;
