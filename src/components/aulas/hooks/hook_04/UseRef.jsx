import React from "react";
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const UseRef = () => {
  const [nome, setNome] = React.useState("");
  const [input, setInput] = React.useState("");
  const textInputRef = React.useRef(null);

  function handleNome() {
    setNome(input);

    Keyboard.dismiss;
  }

  function handleNovoNome() {
    textInputRef.current.focus();
  }

  return (
    <View style={styles.card}>
      <TextInput
        style={styles.input}
        value={input}
        placeholder={"Digite seu nome..."}
        onChangeText={(text) => setInput(text)}
        ref={textInputRef}
      />
      <View style={styles.principal}>
        <TouchableOpacity style={styles.botao} onPress={handleNome}>
          <Text style={styles.text}>Mudar Nome</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Quantidade de letras no nome:</Text>
        <Text style={styles.value}>{nome.length}</Text>
        <TouchableOpacity style={styles.botao} onPress={handleNovoNome}>
          <Text style={styles.text}>Novo Nome</Text>
        </TouchableOpacity>
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

export default UseRef;
