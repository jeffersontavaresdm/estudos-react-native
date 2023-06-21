import React from "react";
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const UseMemo = () => {
  const [nome, setNome] = React.useState("");
  const [input, setInput] = React.useState("");
  const quantidade = React.useMemo(() => nome.length, [nome]);

  function handleNome() {
    setNome(input);

    Keyboard.dismiss;
  }

  return (
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        value={input}
        placeholder={"Digite seu nome..."}
        onChangeText={(text) => setInput(text)}
      />
      <View style={styles.principal}>
        <TouchableOpacity style={styles.botao} onPress={handleNome}>
          <Text style={styles.text}>Mudar Nome</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Quantidade de letras no nome:</Text>
        {
          /*
            <Text style={styles.value}>{nome.length}</Text>
            Ao invez de usar assim, usa o useMemo para não ficar renderizando para cada botão que for apertado
          */
        }
        <Text style={styles.value}>{quantidade}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  principal: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  input: {
    borderWidth: 0.5,
    backgroundColor: "#FFF",
    margin: 16,
    padding: 8,
    elevation: 10,
    borderRadius: 4,
  },
  botao: {
    backgroundColor: "lightblue",
    width: 200,
    borderRadius: 50,
    alignItems: "center",
    margin: 24,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    padding: 8,
    fontWeight: "bold",
  },
});

export default UseMemo;
