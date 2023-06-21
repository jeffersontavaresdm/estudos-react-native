import React from "react";
import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";
import conversorService from "./conversor.service";
import styles from "./styles";

const Converter = ({ moedaA, moedaB }) => {
  const [moedaB_valor, setMoedaB_valor] = React.useState(0);
  const [valorConvertido, setValorConvertido] = React.useState(0);

  async function converter() {
    let de_para = moedaA + "_" + moedaB;
    const response = conversorService
      .converter(de_para)
      .then(response => response[de_para])
      .catch((error) => console.error(`[ERRO AQUI!]: ${error}`));
    let resultado = (response * moedaB_valor);

    setValorConvertido(resultado);

    Keyboard.dismiss();
  }

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>
      <TextInput
        placeholder="Valor a ser convertido"
        style={styles.areaInput}
        onChangeText={(moedaB_valor) => setMoedaB_valor(parseFloat(moedaB_valor))}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.botaoArea} onPress={converter}>
        <Text style={styles.botaoTexto}>Converter</Text>
      </TouchableOpacity>
      <Text style={styles.valorConvertido}>
        {
          (valorConvertido === 0) ? "" : valorConvertido
        }
      </Text>
    </View>
  );
};

export default Converter;
