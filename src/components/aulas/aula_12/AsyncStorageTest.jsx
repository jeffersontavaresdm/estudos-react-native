import React from "react";
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AsyncStorageTest() {
  const [input, setInput] = React.useState("");
  const [nome, setNome] = React.useState("");

  React.useEffect(() => {
    (async () => {
      await AsyncStorage
        .getItem("nome")
        .then((value) => setNome(value))
        .catch((error) => console.log(`[Error]: ${error}`));
    })();
  }, []);

  React.useEffect(() => {
    (async () => await AsyncStorage.setItem("nome", nome))();
  }, [nome]);


  function gravaNome() {
    setNome(input);

    alert("Salvo com sucesso!");

    Keyboard.dismiss();
  }

  return (
    <View style={styles.card}>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(text) => setInput(text)}
          underlineColorAndroid={"transparent"}
        />
        <TouchableOpacity onPress={gravaNome}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.nome}>{nome}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
  },
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 350,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: "#222",
    color: "#FFF",
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
    textAlign: "center",
  },
});
